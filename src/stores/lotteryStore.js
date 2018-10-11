import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import lotteryTypeConfig from '../pages/lottery/lotteryTypeConfig';
import lotteryCodeToCn from '../pages/lottery/lotteryCodeToCn';
import trendConfig from '../pages/lottery/trendConfig';
import playWayToCn from '../pages/lottery/playWayToCn';
import {
    queryTrendData,
    updateIssue
} from '../utils/ajax';

class LotteryStore {

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
        const res = await updateIssue({
            lottery: this.lotteryCode
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

    @observable method = localStorage.getItem('method') || 'wx_zx_fs' //玩法wx_zx_fs

    @observable trendData = []

    @action queryTrendData = () => {
        queryTrendData({
            size: 30,
            lottery: this.lotteryCode,
            method: this.method
        }).then(res => {
            if (res.data.code === 1) {
                this.trendData = res.data.result.issue
            }
        });
    }

}

export default new LotteryStore();