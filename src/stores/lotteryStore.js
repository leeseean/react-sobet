import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import lotteryCodeToCn from '../pages/lottery/lotteryCodeToCn';
import trendCodeColorConfig from '../pages/lottery/trendCodeColorConfig';
import {
    queryTrendData
} from '../utils/ajax';

class LotteryStore {

    lotteryCodeToCn = lotteryCodeToCn

    trendCodeColorConfig = trendCodeColorConfig

    @observable lotteryCode = '' //彩种codeCQSSC

    @computed get lotteryCn() {//彩种  重庆时时彩
        return this.lotteryCodeToCn[this.lotteryCode];
    }

    @observable method = '' //玩法wx_zx_fs

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