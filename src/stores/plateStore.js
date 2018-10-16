
import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import tabConfig from '../pages/lottery/plate/plateBackConfig';
import plateConfig from '../pages/lottery/plate/plateConfig';

class PlateStore {

    @computed get lotteryCode() {
        return localStorage.getItem('lotteryCode') || 'cqssc'; //彩种codeCQSSC
    }

    @computed get tabConfig() {
        return tabConfig[this.lotteryCode];
    }

    plateConfig = plateConfig

    @observable activeTab = JSON.parse(localStorage.getItem(`${this.lotteryCode}-activeTab`)) || this.tabConfig[0];

    @computed get isChaidan() {
        const subItem = this.activeTab['subTabConfig'].find(item => {
            return item.playWay.some(({ en }) => en === this.method)
        });
        return subItem.isChaidan;
    }
    @action
    setActiveTab = (obj) => {
        this.activeTab = obj;
        this.setMethod(obj['subTabConfig'][0]['playWay'][0]['en']);
        localStorage.setItem(`${this.lotteryCode}-activeTab`, JSON.stringify(obj));
    }

    @observable method = this.activeTab['subTabConfig'][0]['playWay'][0]['en'] //玩法wx_zx_fs

    @action setMethod = (value) => {
        this.method = value;
    }

    @observable missShowFlag = localStorage.getItem('missShowFlag')

    @observable hotShowFlag = localStorage.getItem('hotShowFlag')

    @action switchMiss = (bool) => {
        this.missShowFlag = bool;
        if (bool) {
            localStorage.setItem('missShowFlag', 1);
        } else {
            localStorage.removeItem('missShowFlag');
        }
    }

    @action switchHot = (bool) => {
        this.hotShowFlag = bool;
        if (bool) {
            localStorage.setItem('hotShowFlag', 1);
        } else {
            localStorage.removeItem('hotShowFlag');
        }
    }
}

export default new PlateStore();