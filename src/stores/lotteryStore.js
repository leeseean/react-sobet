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
import plateConfig from '../pages/lottery/plate/plateConfig';
import {
    queryTrendData,
    updateIssue,
    getLotteryTabConfig
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
            this.getTabConfig();
        }
    })

    playWayToCn = playWayToCn

    lotteryTypeConfig = lotteryTypeConfig

    lotteryCodeToCn = lotteryCodeToCn

    trendConfig = trendConfig

    @computed get lotteryType() {
        return this.lotteryTypeConfig[this.lotteryCode];
    }

    @computed get showRaceTabFlag() {
        return this.lotteryType === 'pk10';
    }

    @observable showRaceFlag = Boolean(localStorage.getItem('showRaceFlag')) || true

    @computed get raceTabText() {
        if (this.showRaceFlag) {
            return '隐藏动画';
        } else {
            return '打开动画';
        }
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

    @observable tabConfig = []

    @action getTabConfig = async () => {
        const res = await getLotteryTabConfig({ lottery: this.lotteryCode });
        this.tabConfig = res.data;
        this.setActiveTab(JSON.parse(localStorage.getItem(`${this.lotteryCode}-activeTab`)) || this.currentTabConfig[0]);
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

    @action switchRaceTab = () => {
        this.showRaceFlag = !this.showRaceFlag;
        if (this.showRaceFlag) {
            localStorage.setItem(`${this.lotteryCode}-showRaceFlag`, 1);
        } else {
            localStorage.removeItem(`${this.lotteryCode}-showRaceFlag`);
        }
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

    @observable method = this.activeTab && this.activeTab['subTabConfig'][0]['playWay'][0]['en'] //玩法wx_zx_fs

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

export default new LotteryStore();