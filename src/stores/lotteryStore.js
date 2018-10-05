import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import lotteryCodeToCn from '../pages/lottery/lotteryCodeToCn';
import trendConfig from '../pages/lottery/trendConfig';
import {
    queryTrendData,
    updateIssue
} from '../utils/ajax';

class LotteryStore {

    lotteryCodeToCn = lotteryCodeToCn

    trendConfig = trendConfig

    @observable lotteryType = localStorage.getItem('lotteryType') || 'ssc' //彩种类型 ssc

    @observable lotteryCode = localStorage.getItem('lotteryCode') || 'CQSSC' //彩种codeCQSSC

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

    @observable countdown = 0 //倒计时秒数

    @observable updateCountdownflag = false

    @action updateIssue = async () => {
        this.updateCountdownflag = false;
        const res = await updateIssue({
            lottery: this.lotteryCode
        });
        runInAction(() => {
            if (res.data.code === 1) {
                const {
                    second,
                    issue
                } = res.data.result;
                this.countdown = second;
                this.updateCountdownflag = true;
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