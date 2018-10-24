import {
    observe,
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import lotteryTypeConfig from '../views_common/lottery/lotteryTypeConfig';
import lotteryCodeToCn from '../views_common/lottery/lotteryCodeToCn';
import trendConfig from '../views_common/lottery/trend/trendConfig';
import playWayToCn from '../views_common/lottery/playWayToCn';
import plateConfig from '../views_common/lottery/plate/plateConfig';
import {
    queryTrendData,
    updateIssue,
    getLotteryTabConfig
} from '../utils/ajax';
import timeSleep from '../utils/timeSleep';
import { toggleClass } from '../utils/cssClass';

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
        this.selectedNums = {};
        this.filteredNums = {};
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

    @observable selectedNums = {}

    @action selectNum = (pos, index, num) => {
        this.selectedNums[index] = this.selectedNums[index] || [];
        const INDEX = this.selectedNums[index].findIndex(v => v === num);
        if (INDEX === -1) {
            this.selectedNums[index].push(num);
        } else {
            this.selectedNums[index].splice(INDEX, 1);
        }
        this.selectedNums = { ...this.selectedNums };
    }

    @action filterNum = (pos, index, value, numArr) => {
        const DaxiaoFlag = (Number(numArr[0]) + Number(numArr[numArr.length - 1])) / 2;
        switch (value) {
            case '全':
                this.selectedNums[index] = numArr;
                break;
            case '大':
                this.selectedNums[index] = numArr.filter(v => Number(v) > DaxiaoFlag);
                break;
            case '小':
                this.selectedNums[index] = numArr.filter(v => Number(v) <= DaxiaoFlag);
                break;
            case '奇':
                this.selectedNums[index] = numArr.filter(v => Number(v) % 2 !== 0);
                break;
            case '偶':
                this.selectedNums[index] = numArr.filter(v => Number(v) % 2 === 0);
                break;
            case '清':
                this.selectedNums[index] = [];
                break;
        }
        this.selectedNums = { ...this.selectedNums };
    }

    @computed get plateType() {
        return this.plateConfig[this.lotteryCode][this.method] && this.plateConfig[this.lotteryCode][this.method]['plate']['type'];
    }

    @computed get mathConfig() {
        return this.plateConfig[this.lotteryCode][this.method] && this.plateConfig[this.lotteryCode][this.method]['mathConfig'];
    }

    @computed get betCount() {
        if (this.plateType === 'click') {
            switch (this.mathConfig['type']) {//计算注数的方式，有阶乘、组合、累加等
                case 'jiecheng':
                    const posCount = this.mathConfig['posCount'];
                    const keys = Object.keys(this.selectedNums);
                    let values = Object.values(this.selectedNums);
                    values = values.map(a => a.slice());//mobx数组转js数组
                    if (keys.length < posCount) {//位置没选满，为0
                        return 0;
                    } else {
                        return values.reduce((a, b) => a * b.length, 1);
                    }
                default:
                    return 0;
            }
        }
        if (this.plateType === 'input') {
            if (this.mathConfig['needMultiplyPos']) {//任选玩法单式需要成语位置

            }
            return this.inputedNums.length;
        }
    }

    defaultBetPiece = 1

    @observable betPiece = 1

    @action changePiece = (value) => {
        this.betPiece = Number(value);
    }

    defaultBetMode = '2'

    @observable betMode = 2

    @action changeMode = (value) => {
        this.betMode = Number(value);
    }

    @computed get betMoney() {
        return (this.betCount * this.betMode * this.betPiece).toFixed(2);
    }

    @observable inputedNums = []

    @action uploadFile = (numOfEach, event) => {
        const reg = /['\r\n','\n','\r','\t','\v','\D','\f','\s+','　','；','，',';',',']/;
        const file = event.nativeEvent.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const result = fileReader.result.split(reg).filter(v => v !== '');
            if (result.some(v => v.length !== numOfEach)) {
                return;
            }

            this.inputedNums = result;
        };
        fileReader.readAsText(file);
    }

    @action deleteInputItem = (index) => {
        this.inputedNums.splice(index, 1);
        this.inputedNums = [...this.inputedNums];
    }

    @action clearInputNums = () => {
        this.inputedNums = [];
    }

    @action inputNum = (numOfEach, event) => {
        const value = event.target.value;
        if (value.length !== numOfEach) {
            return;
        }
        this.inputedNums.push(value);
        this.inputedNums = [...this.inputedNums];
        event.target.value = '';
    }

}

export default new LotteryStore();