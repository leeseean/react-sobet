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
import { combination, intersection, difference, calcHzCount, calcZuxHzCount, calcKuaduCount, noRepeatMul } from '../utils/calcBetCount';
import { choose } from '../utils/algorithm';

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
            this.orderData = [];
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
        this.setActiveTab(JSON.parse(localStorage.getItem(`${this.lotteryCode}-${this.tabType}-activeTab`)) || this.currentTabConfig[0]);
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
            this.setActiveTab(JSON.parse(localStorage.getItem(`${this.lotteryCode}-unlimited-activeTab`)) || this.unlimitedTabConfig[0]);
        } else {
            this.tabType = 'normal';
            this.setActiveTab(JSON.parse(localStorage.getItem(`${this.lotteryCode}-normal-activeTab`)) || this.normalTabConfig[0]);
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

    @observable activeTab = JSON.parse(localStorage.getItem(`${this.lotteryCode}-${this.tabType}-activeTab`)) || this.currentTabConfig[0];

    @action
    setActiveTab = (obj) => {
        this.activeTab = obj;
        this.setMethod(localStorage.getItem(`${this.lotteryCode}-${this.activeTab.tab}-method`) || this.activeTab['subTabConfig'][0]['playWay'][0]['en']);
        localStorage.setItem(`${this.lotteryCode}-${this.tabType}-activeTab`, JSON.stringify(obj));
    }

    @observable method = localStorage.getItem(`${this.lotteryCode}-${this.activeTab && this.activeTab.tab}-method`) || (this.activeTab && this.activeTab['subTabConfig'][0]['playWay'][0]['en']) //玩法wx_zx_fs

    @action setMethod = (value) => {
        this.method = value;
        localStorage.setItem(`${this.lotteryCode}-${this.activeTab.tab}-method`, value);
        this.resetPlate();
    }

    @action resetPlate = () => {
        this.selectedNums = {};
        this.selectedChaidanNums = [];
        this.inputedNums = [];
        this.rxPosValues = this.plateConfig[this.lotteryCode][this.method]['posSelect'];
    }

    @computed get chaidanConfig() {
        const activeSubItem = this.activeTab['subTabConfig'].find(subObj => subObj.playWay.some(({ en }) => en === this.method));
        const result = activeSubItem.playWay.find(({ en }) => en === this.method);
        return result;
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

    @observable rxPosValues = [];

    @action posSelectChange = (posValues) => {
        this.rxPosValues = posValues;
    }

    @observable selectedNums = {}

    @action selectNum = (pos, index, num, posArr) => {
        if (pos === '所有位置') {//定位胆的所有位置
            this.selectedNums[index] = this.selectedNums[index] || [];
            const INDEX = this.selectedNums[index].findIndex(v => v === num);
            if (INDEX === -1) {
                this.selectedNums[index].push(num);
                posArr.forEach((p, idx) => {
                    this.selectedNums[idx] = this.selectedNums[idx] || [];
                    !this.selectedNums[idx].includes(num) && this.selectedNums[idx].push(num);
                });
            } else {
                this.selectedNums[index].splice(INDEX, 1);
                posArr.forEach((p, idx) => {
                    this.selectedNums[idx] = this.selectedNums[idx] || [];
                    const IDX = this.selectedNums[idx].findIndex(v => v === num);
                    if (IDX !== -1) {
                        this.selectedNums[idx].splice(IDX, 1);
                    }
                });
            }
            this.selectedNums = { ...this.selectedNums };
            return;
        }
        if (this.mathConfig['type'] === '11x5rxdt') {//11选5的胆拖玩法，点击规则不一样
            const { z } = this.mathConfig;//z为胆码不能超过的个数
            this.selectedNums[0] = this.selectedNums[0] || [];
            this.selectedNums[1] = this.selectedNums[1] || [];
            if (pos === '胆码') {
                const INDEX = this.selectedNums[0].findIndex(v => v === num);

                if (INDEX === -1) {
                    this.selectedNums[0].push(num);
                    if (this.selectedNums[0].length >= z) {
                        this.selectedNums[0].shift();
                    }
                } else {
                    this.selectedNums[0].splice(INDEX, 1);
                }

                const dumpIndex = this.selectedNums[1].findIndex(v => v === num);
                if (dumpIndex !== -1) {
                    this.selectedNums[1].splice(dumpIndex, 1);
                }
            }
            if (pos === '拖码') {
                const INDEX = this.selectedNums[1].findIndex(v => v === num);

                if (INDEX === -1) {
                    this.selectedNums[1].push(num);
                } else {
                    this.selectedNums[1].splice(INDEX, 1);
                }

                const dumpIndex = this.selectedNums[0].findIndex(v => v === num);
                if (dumpIndex !== -1) {
                    this.selectedNums[0].splice(dumpIndex, 1);
                }
            }
            this.selectedNums = { ...this.selectedNums };
            return;
        }
        if (this.mathConfig['type'] === 'baodan') {//奇葩的包胆玩法，点击规则不一样
            this.selectedNums[index] = this.selectedNums[index] || [];
            const INDEX = this.selectedNums[index].findIndex(v => v === num);
            if (INDEX === -1) {
                this.selectedNums[index] = [];
                this.selectedNums[index].push(num);
            } else {
                this.selectedNums[index].splice(INDEX, 1);
            }
            this.selectedNums = { ...this.selectedNums };
            return;
        }
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

    @observable selectedChaidanNums = [];

    @action selectChaidanNum = ({ en, cn }) => {
        const value = JSON.stringify({ en, cn });
        const INDEX = this.selectedChaidanNums.findIndex(v => v === value);
        if (INDEX === -1) {
            this.selectedChaidanNums.push(value);
        } else {
            this.selectedChaidanNums.splice(INDEX, 1);
        }
    }

    @action filterChaidanNum = (value, numArr) => {
        switch (value) {
            case '全':
                this.selectedChaidanNums = numArr.map(o => JSON.stringify(o));
                break;
            case '清':
                this.selectedChaidanNums = [];
                break;
        }
    }

    @computed get plateType() {
        return this.plateConfig[this.lotteryCode][this.method] && this.plateConfig[this.lotteryCode][this.method]['plate']['type'];
    }

    @computed get mathConfig() {
        return this.plateConfig[this.lotteryCode][this.method] && this.plateConfig[this.lotteryCode][this.method]['mathConfig'];
    }

    @computed get betCount() {
        if (this.chaidanConfig['isChaidan']) {
            if (this.mathConfig['type'] === 'leijia') {
                return this.selectedChaidanNums.length;
            }
            return 0;
        }
        if (this.plateType === 'click') {
            if (this.mathConfig['type'] === 'leijia') {
                const { r, needMultiplyPos } = this.mathConfig;
                let values = Object.values(this.selectedNums);
                values = values.map(a => a.slice());//mobx数组转js数组
                if (needMultiplyPos) {
                    return combination(this.rxPosValues.length, r) * values.reduce((a, b) => a + b.length, 0);
                }
                return values.reduce((a, b) => a + b.length, 0);
            }
            if (this.mathConfig['type'] === 'jiecheng') {
                const { posCount } = this.mathConfig;
                const keys = Object.keys(this.selectedNums);
                let values = Object.values(this.selectedNums);
                values = values.map(a => a.slice());//mobx数组转js数组
                if (keys.length < posCount) {//位置没选满，为0
                    return 0;
                } else {
                    return values.reduce((a, b) => a * b.length, 1);
                }
            }
            if (this.mathConfig['type'] === 'zuhe') {
                const { per, n, r, needMultiplyPos } = this.mathConfig;
                const m = (this.selectedNums[0] || []).length;
                if (needMultiplyPos) {
                    return combination(this.rxPosValues.length, r) * combination(m, n) * per;
                }
                return combination(m, n) * per;
            }
            if (this.mathConfig['type'] === 'zucheng') {
                const { up, down, r, needMultiplyPos } = this.mathConfig;
                const upNums = this.selectedNums[0] || [];
                const downNums = this.selectedNums[1] || [];
                const calcZucheng = (a, b, c) => {
                    const n1 = combination(b.length, c);
                    const n2 = difference(a, b).length;
                    const n3 = intersection(a, b).length;
                    const n4 = combination(b.length - 1, c) * n3;
                    return n1 * n2 + n4;
                };
                let result;
                if (up === 1) {
                    result = calcZucheng(upNums, downNums, down);
                }
                if (down === 1) {
                    result = calcZucheng(downNums, upNums, up);
                }
                if (needMultiplyPos) {
                    return combination(this.rxPosValues.length, r) * result;
                }
                return result;
            }
            if (this.mathConfig['type'] === 'hezhi') {
                const { size, nums, needMultiplyPos } = this.mathConfig;
                const result = (this.selectedNums[0] || []).reduce((p, q) => p + calcHzCount(Number(q), size, nums), 0);
                if (needMultiplyPos) {
                    return combination(this.rxPosValues.length, size) * result;
                }
                return result;
            }
            if (this.mathConfig['type'] === 'zuxhezhi') {
                const { size, nums, needMultiplyPos } = this.mathConfig;
                const result = (this.selectedNums[0] || []).reduce((p, q) => p + calcZuxHzCount(Number(q), size, nums), 0);
                if (needMultiplyPos) {
                    return combination(this.rxPosValues.length, size) * result;
                }
                return result;
            }
            if (this.mathConfig['type'] === 'kuadu') {
                const { size, nums } = this.mathConfig;
                return (this.selectedNums[0] || []).reduce((p, q) => p + calcKuaduCount(Number(q), size, nums), 0);
            }
            if (this.mathConfig['type'] === 'baodan') {
                const { n } = this.mathConfig;
                if (this.selectedNums[0] && this.selectedNums[0].length > 0) {
                    return n;
                }
                return 0;
            }
            if (this.mathConfig['type'] === 'rzxfs') {
                const { r } = this.mathConfig;
                const wan = this.selectedNums[0] ? this.selectedNums[0].length : 0;
                const qian = this.selectedNums[1] ? this.selectedNums[1].length : 0;
                const bai = this.selectedNums[2] ? this.selectedNums[2].length : 0;
                const shi = this.selectedNums[3] ? this.selectedNums[3].length : 0;
                const ge = this.selectedNums[4] ? this.selectedNums[4].length : 0;
                if (r === 2) {//任选2
                    return wan * (qian + bai + shi + ge) + qian * (bai + shi + ge) + bai * (shi + ge) + shi * ge;
                }

                if (r === 3) {//任选3
                    return (wan * qian + wan * bai + qian * bai) * (shi + ge) + wan * qian * bai + (wan + qian + bai) * shi * ge;
                }

                if (r === 4) {
                    return wan * qian * bai * shi + wan * qian * bai * ge + wan * qian * shi * ge + wan * bai * shi * ge + qian * bai * shi * ge;
                }
            }
            if (this.mathConfig['type'] === '11x5zxfs') {
                const { posCount } = this.mathConfig;
                const keys = Object.keys(this.selectedNums);
                let values = Object.values(this.selectedNums);
                values = values.map(a => a.slice());//mobx数组转js数组
                if (keys.length < posCount) {//位置没选满，为0
                    return 0;
                } else {
                    return noRepeatMul(values).length;
                }
            }
            if (this.mathConfig['type'] === '11x5rxdt') {
                const { z } = this.mathConfig;//8中5的8
                const keys = Object.keys(this.selectedNums);
                if (keys.length < 2) {
                    return 0;
                }
                const values = Object.values(this.selectedNums);
                //计算注数
                if (values[1].length > 1 && values[0].length > 0 && (values[0].length + values[1].length) > z) {
                    return choose(values[1], z - values[0].length).length;
                } else {
                    return 0; //拖码至少要选2位，胆码至少1位，且拖码和胆码的位数和大于玩法要求个数才能计算注数
                }
            }
            return 0;
        }
        if (this.plateType === 'input') {
            const { r, needMultiplyPos } = this.mathConfig;
            if (needMultiplyPos) {//任选玩法单式需要成语位置
                return combination(this.rxPosValues.length, r) * this.inputedNums.length;
            }
            return this.inputedNums.length;
        }
    }

    defaultBetPiece = 1

    @observable betPiece = 1

    @action changePiece = (value) => {
        this.betPiece = Number(value);
    }

    defaultBetMode = 2

    @observable betMode = 2

    @action changeMode = (value) => {
        this.betMode = Number(value);
    }

    @computed get betMoney() {
        return Number((this.betCount * this.betMode * this.betPiece).toFixed(2));
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
        if (!/^\d+$/.test(value) || value.length !== numOfEach) {
            return;
        }
        this.inputedNums.push(value);
        this.inputedNums = [...this.inputedNums];
        event.target.value = '';
    }

    @action addOrder = () => {//添加订单
        const { name } = this.plateConfig[this.lotteryCode][this.method];
        let result = [];
        if (this.plateType === 'input') {
            result = [{
                key: '1',
                detail: {
                    name,
                    rxPos: this.rxPosValues ? this.rxPosValues.toString() : '',
                    betContent: this.inputedNums.toString(),
                    playWay: this.method
                },
                piece: this.betPiece,
                price: this.betMode,
                amount: { betMoney: this.betMoney, betCount: this.betCount },
                win: '1',
            }];
            this.inputedNums = [];
            return;
        }
        if (this.chaidanConfig.isChaidan) {
            const len = this.selectedChaidanNums.length;
            result = this.selectedChaidanNums.map((item, index) => {
                const { en, cn } = JSON.parse(item);
                return {
                    key: index,
                    detail: {
                        name,
                        rxPos: this.rxPosValues ? this.rxPosValues.toString() : '',
                        betContent: cn,
                        playWay: en
                    },
                    piece: this.betPiece,
                    price: this.betMode,
                    amount: { betMoney: this.betMoney / len, betCount: 1 },
                    win: '1',
                }
            });
            this.selectedChaidanNums = [];
            return;
        }
        const { pos } = this.plateConfig[this.lotteryCode][this.method]['plate'];
        const arr = [];
        //转成想要的格式，如123,,1,1,
        for (let i = 0; i < pos.length; i++) {
            if (this.selectedNums[i]) {
                arr.push(this.selectedNums[i].join(''));
            } else {
                arr.push('');
            }
        }
        result = [{
            key: '1',
            detail: {
                name,
                rxPos: this.rxPosValues ? this.rxPosValues.toString() : '',
                betContent: arr.toString(),
                playWay: this.method
            },
            piece: this.betPiece,
            price: this.betMode,
            amount: { betMoney: this.betMoney, betCount: this.betCount },
            win: '1',
        }];
        this.orderData = [...this.orderData, ...result];
        this.selectedNums = {};
    }

    @action changeOrderItemPiece = (orderItemObj, piece) => {
        orderItemObj.piece = piece;
        this.orderData = [...this.orderData];
    }

    @action changeOrderItemMode = (orderItemObj, mode) => {
        orderItemObj.price = mode;
        this.orderData = [...this.orderData];
    }

    @action quickBet = () => {//快速投注

    }
    //order订单栏部分
    @observable betModalShowed = false

    @observable printOrderFlag = Boolean(localStorage.getItem('printOrderFlag')) || false

    @observable orderData = []

    @action
    toggleBetModal = (bool) => {
        this.betModalShowed = bool;
    }

    @action
    setPrintOrderFlag = (bool) => {
        this.printOrderFlag = bool;
        if (bool) {
            localStorage.setItem('printOrderFlag', 1);
        } else {
            localStorage.removeItem('printOrderFlag');
        }
    }

    @computed get orderTotalMoney() {
        return this.orderData.reduce((a, b) => a + b.amount.betCount * b.piece * b.price, 0);
    }

    @computed get orderTotalCount() {
        return this.orderData.reduce((a, b) => a + b.amount.betCount, 0);;
    }

    @action
    deleteAllItem = () => {
        this.orderData = [];
    }

    @action
    deleteOrderItem = (key) => {
        const _index = this.orderData.findIndex(v => v.key === key);
        this.orderData.splice(_index, 1);
        this.orderData = [...this.orderData];
    }
}

export default new LotteryStore();