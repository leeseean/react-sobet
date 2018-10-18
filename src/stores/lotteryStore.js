import {
    observe,
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import lotteryTypeConfig from '../pages/lottery/lotteryTypeConfig';
import lotteryCodeToCn from '../pages/lottery/lotteryCodeToCn';
import trendConfig from '../pages/lottery/trend/trendConfig';
import playWayToCn from '../pages/lottery/playWayToCn';
import {
    queryTrendData,
    updateIssue
} from '../utils/ajax';
import timeSleep from '../utils/timeSleep';

class LotteryStore {

    disposer = observe(this, 'lotteryCode', (change) => {
        const {
            newValue,
            oldValue
        } = change;
        if (newValue !== oldValue) {
            this.updateIssue();
            this.queryTrendData();
        }
    })

    playWayToCn = playWayToCn

    lotteryTypeConfig = lotteryTypeConfig

    lotteryCodeToCn = lotteryCodeToCn

    trendConfig = trendConfig

    @computed get lotteryType() {
        return this.lotteryTypeConfig[this.lotteryCode];
    }

    @observable lotteryCode = localStorage.getItem('lotteryCode') || 'cqssc' //彩种codeCQSSC

    @action setLotteryCode = (value) => {
        this.lotteryCode = value;
        localStorage.setItem('lotteryCode', value);
    }

    @action linkToLottery = (lotteryCode, history, path) => {
        this.setLotteryCode(lotteryCode);
        if (history.location.pathname.startsWith(path)) {
            return;
        }
        history.push(path);
    }

    @observable currentIssue = ''

    @computed get openIssue() {
        return this.trendData[0] && this.trendData[0]['issueNo'];
    }

    @computed get opencodeArr() {
        if (this.trendData[0]) {
            return this.trendData[0]['code'].split(',');
        }
        return [];
    }

    @observable countdown = Date.now() //倒计时秒数

    @action updateIssue = async () => {
        await timeSleep(3000);
        const res = await updateIssue({
            lottery: this.lotteryCode.toLocaleUpperCase()
        });
        runInAction(() => {
            if (res.data.code === 1) {
                const {
                    second,
                    issue
                } = res.data.result;
                if (second < 0) {
                    this.countdown = '等待开售';
                } else {
                    this.countdown = Date.now() + second * 1000;
                }
                this.currentIssue = issue;
            }
        });
    }

    @computed get lotteryCn() { //彩种  重庆时时彩
        return this.lotteryCodeToCn[this.lotteryCode];
    }


    @observable trendData = []

    @observable hitFrequency = []

    @observable skipFrequency = []

    @action queryTrendData = async () => {
        const res = await queryTrendData({
            size: 30,
            lottery: this.lotteryCode.toLocaleUpperCase(),
            method: this.method
        });

        if (res.data.code === 1) {
            this.trendData = res.data.result.issue;
            this.hitFrequency = res.data.result.hitFrequency;
            this.skipFrequency = res.data.result.skipFrequency;
        }
    }

}

export default new LotteryStore();