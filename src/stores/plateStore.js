
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

    @computed get normalTabConfig() {
        return this.tabConfig.filter(({ type }) => type === 'normal');
    }

    @computed get unlimitedTabConfig() {
        return this.tabConfig.filter(({ type }) => type === 'unlimited');
    }

    @computed get unlimitedFlag() {
        return this.unlimitedTabConfig.length > 0;
    }

    @observable tabType = localStorage.getItem(`${this.lotteryCode}-tabType`) || 'normal'

    @computed get currentTabConfig() {
        if (this.unlimitedFlag) {
            if (this.tabType === 'normal') {
                return this.normalTabConfig;
            }
            if (this.tabType === 'unlimited') {
                return this.unlimitedTabConfig;
            }
        }
        return this.normalTabConfig;
    }

    @action switchMoreTab = () => {
        if (this.tabType === 'normal') {
            this.tabType = 'unlimited';
            this.setActiveTab(this.unlimitedTabConfig[0]);
        } else {
            this.tabType = 'normal';
            this.setActiveTab(this.normalTabConfig[0]);
        }
        localStorage.setItem(`${this.lotteryCode}-tabType`, this.tabType);
    }

    plateConfig = plateConfig

    @observable activeTab = JSON.parse(localStorage.getItem(`${this.lotteryCode}-activeTab`)) || this.currentTabConfig[0];

    @action
    setActiveTab = (obj) => {
        this.activeTab = obj;
        const { en, cn, ...rest } = obj['subTabConfig'][0]['playWay'][0];
        this.setMethod(en, rest);
        localStorage.setItem(`${this.lotteryCode}-activeTab`, JSON.stringify(obj));
    }

    @observable method = this.activeTab['subTabConfig'][0]['playWay'][0]['en'] //玩法wx_zx_fs

    @observable chaidanConfig = JSON.parse(localStorage.getItem(`${this.lotteryCode}-chaidanConfig`)) || {}

    @action setMethod = (value, rest = {}) => {
        this.method = value;
        this.chaidanConfig = rest;
        localStorage.setItem(`${this.lotteryCode}-chaidanConfig`, JSON.stringify(rest));
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

    @action posSelectChange = (posValues) => {
        console.log(posValues);
    }
}

export default new PlateStore();