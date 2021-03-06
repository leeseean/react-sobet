import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import $http from '../utils/axios';
import {
    updateIssue,
    queryTrendData,
    submitOrder
} from '../utils/ajax';
import {
    calcSxFilterConfig
} from '../utils/algorithm';
import timeSleep from '../utils/timeSleep';
import config from '../views/common/lhc/lhcConfig';
import methodToCnObj from '../views/common/lhc/methodToCnObj';
import numToCnObj from '../views/common/lhc/numToCnObj';

class lhcStore {

    config = config

    methodToCnObj = methodToCnObj

    numToCnObj = numToCnObj

    @observable lotteryType = 'lhc'

    @observable lotteryCode = 'XGLHC'

    @action setLottery = value => {
        this.lotteryCode = value.toLocaleUpperCase();
    }

    @computed get lotteryCn() {
        return {
            'XGLHC': '香港六合彩',
            'JSLHC': '极速六合彩'
        }[this.lotteryCode];
    }

    @computed get plateType() {//选好盘类型，输入框型或者点击型
        switch (this.method) {
            case 'tm_tm_zx':
            case 'tm_tm_sx':
            case 'tm_tm_sb':
            case 'tm_tm_dxds':
            case 'tm_tm_ws':
            case 'zt1m_zt1m_zt1m':
            case 'zt1x_zt1x_zt1x':
            case 'ztws_ztws_ztws':
                return 'input';
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
            case 'hzdxds_hzdxds_hzdxds':
                return 'click';
            default:
                return 'input';
        }
    }

    pattern = /^[1-9]+(\.(\d|\d{2})?)?$/ //输入框校验

    @observable oddsObj = {}

    @observable method = 'tm_tm_zx'

    @computed get cnMethod() {
        return this.methodToCnObj[this.method];
    }

    @observable tab = '0'
    //默认展示tab
    @observable tabRefMethod = {
        '0': 'tm_tm_zx',
        '1': 'zt1m_zt1m_zt1m',
        '2': 'zt1x_zt1x_zt1x',
        '3': 'ztws_ztws_ztws',
        '4': 'lx_lx_2lx',
        '5': 'lm_lm_2z2',
        '6': 'hzdxds_hzdxds_hzdxds'
    }
    //默认赔率A面B面
    @observable tabRefAorB = {
        '0': 'A',
        '1': 'A',
        '2': 'A',
        '3': 'A',
        '4': 'A',
        '5': 'A',
        '6': 'A'
    }

    @observable AorB = 'A'

    @observable cnBmnsx = '狗'

    @computed get bmnsx() {
        return {
            '猪': 'zhu',
            '狗': 'gou',
            '鸡': 'ji',
            '猴': 'hou',
            '羊': 'yang',
            '马': 'ma',
            '蛇': 'she',
            '龙': 'long',
            '兔': 'tu',
            '虎': 'hu',
            '牛': 'niu',
            '鼠': 'shu'
        }[this.cnBmnsx];
    }

    @observable inputValuesObj = {}

    @observable filterArr = []

    @observable filterInputValue = ''

    @observable clickPerInputValue = ''

    @action fillClickPerInputValue = (event) => {
        const value = event.target.value;
        if (value !== '' && !this.pattern.test(value)) return;
        this.clickPerInputValue = event.target.value;
    }

    @observable clickToSelectedObj = {}

    @action clickToSelectNum = (en) => {
        this.clickToSelectedObj[en] = !this.clickToSelectedObj[en];
        this.clickToSelectedObj = {
            ...this.clickToSelectedObj
        };
    }

    @computed get sxFilterConfig() {
        return calcSxFilterConfig(this.bmnsx);
    }

    @computed get filterConfig() {
        return {
            ...this.sxFilterConfig,
            '红大': ['29', '30', '34', '35', '40', '45', '46'],
            '红小': ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24'],
            '红单': ['01', '07', '13', '19', '23', '29', '35', '45'],
            '红双': ['02', '08', '12', '18', '24', '30', '34', '40', '46'],
            '蓝大': ['25', '26', '31', '36', '37', '41', '42', '47', '48'],
            '蓝小': ['03', '04', '09', '10', '14', '15', '20'],
            '蓝单': ['03', '09', '15', '25', '31', '37', '41', '47'],
            '蓝双': ['04', '10', '14', '20', '26', '36', '42', '48'],
            '绿大': ['27', '28', '32', '33', '38', '39', '43', '44', '49'],
            '绿小': ['05', '06', '11', '16', '17', '21', '22'],
            '绿单': ['05', '11', '17', '21', '27', '33', '39', '43', '49'],
            '绿双': ['06', '16', '22', '28', '32', '38', '44'],
            '家禽家畜': ['niu', 'ma', 'yang', 'ji', 'gou', 'zhu'],
            '野外兽类': ['shu', 'hu', 'tu', 'long', 'she', 'hou']
        };
    }

    @computed get filteredNums() {
        const result = [];
        this.filterArr.forEach(item => {
            result.push(...this.filterConfig[item]);
        });
        return [...new Set(result)];
    }

    @observable nextApp = []

    @observable countdown = Date.now()

    @observable currentIssue = ''

    @observable trendData = []

    @computed get openIssue() {
        return this.trendData[0] && this.trendData[0]['issueNo'];
    }

    @computed get opencodeArr() {
        if (this.trendData[0]) {
            return this.trendData[0]['code'].split(',');
        }
        return [];
    }

    @action updateIssue = async () => {
        await timeSleep(1000);
        const res = await updateIssue({
            lottery: this.lotteryCode.toLocaleUpperCase()
        });
        runInAction(() => {
            if (res.data.code === 1) {
                const {
                    second,
                    issue,
                    nextApp
                } = res.data.result;
                if (second < 0) {
                    this.countdown = '等待开售';
                } else {
                    this.countdown = Date.now() + second * 1000;
                }
                this.currentIssue = issue;
                this.nextApp = nextApp;
            }
        });
    }

    @action queryTrendData = async () => {
        const res = await queryTrendData({
            size: 30,
            lottery: this.lotteryCode.toLocaleUpperCase(),
            method: this.method
        });

        if (res.data.code === 1) {
            this.emptyOpencode = false;//显示开奖号码
            this.trendData = res.data.result.issue;
            return res;
        }
    }

    @action
    getOddsObj = async () => {
        const res = await $http({
            url: `/lottery/api/anon/v1/lottery/odds_lhc?lottery=${this.lotteryCode.toLocaleUpperCase()}`,
            method: 'GET'
        });
        runInAction("获取赔率数据", () => {
            if (res.data.code === 1) {
                this.oddsObj = res.data.result[this.lotteryCode.toLocaleUpperCase()];
            }
        });
    }

    @action switchOddType = (e) => {
        this.AorB = e.target.value;
        this.setTabRefAorB(this.tab, e.target.value);
    }

    @action setTabRefAorB(tab, AorB) {
        this.tabRefAorB[tab] = AorB;
    }

    @action tabChange = (key) => {
        this.tab = key;
        this.method = this.tabRefMethod[key];
        this.AorB = this.tabRefAorB[key];
        this.filterArr = [];
        this.filterInputValue = '';
        this.inputValuesObj = {};
        this.clickToSelectedObj = {};
        this.clickPerInputValue = '';
    }

    @action changeMethod = (key) => {
        this.method = key;
        this.setTabRefMethod(this.tab, key);
        this.filterArr = [];
        this.filterInputValue = '';
        this.inputValuesObj = {};
        this.clickToSelectedObj = {};
        this.clickPerInputValue = '';
    }

    @action setTabRefMethod(tab, method) {
        this.tabRefMethod[tab] = method;
    }

    //快速筛号
    @action filterNum = (filterType, event) => {
        const _index = this.filterArr.indexOf(filterType);
        let deletedArr = [];
        if (_index === -1) {
            this.filterArr.push(filterType);
        } else {
            deletedArr = this.filterArr.splice(_index, 1);
            this.filterConfig[deletedArr[0]].forEach(num => {
                this.inputValuesObj[num] = '';
                this.clickToSelectedObj[num] = false;
            });
        }
        if (this.plateType === 'input') {
            if (this.filterInputValue && this.filterArr.length > 0) {
                this.filteredNums.forEach(num => {
                    this.inputValuesObj[num] = this.filterInputValue;
                });
            }
        }
        if (this.plateType === 'click') {
            if (this.filterArr.length > 0) {
                this.filteredNums.forEach(num => {
                    this.clickToSelectedObj[num] = true;
                });
            }
        }
        this.inputValuesObj = {
            ...this.inputValuesObj
        };
        this.clickToSelectedObj = {
            ...this.clickToSelectedObj
        };
    }

    @action fillPlateInput = (en, event) => {
        let value = event.target.value;
        if (value !== '' && !this.pattern.test(value)) {
            const valueArr = value.split('.');
            value = valueArr[0] + '.' + valueArr[1].slice(0, 2);
            event.nativeEvent.target.value = value;
        };
        this.inputValuesObj[en] = value;
        /* this.inputValuesObj = {//这样更新界面会卡顿，只好用event.nativeEvent.target.value = value;
            ...this.inputValuesObj
        }; */
    }

    //快速筛号输入框
    @action fillFilteredInput = value => {
        if (value !== '' && !this.pattern.test(value)) return;
        this.filterInputValue = value;
        if (this.filterInputValue && this.filterArr.length > 0) {
            this.filteredNums.forEach(num => {
                this.inputValuesObj[num] = this.filterInputValue;
            });
            this.inputValuesObj = {
                ...this.inputValuesObj
            }; //这样做的目的是更新引用才会引起视图更新
        }
    }

    @observable resetButtonClicked = false;

    //重置
    @action resetPlate = () => {
        this.resetButtonClicked = !this.resetButtonClicked;
        this.filterArr = [];
        this.filterInputValue = '';
        this.inputValuesObj = {};
        this.clickPerInputValue = '';
        this.clickToSelectedObj = {};
    }

    @computed get totalBetCount() {
        let count = 0;
        if (this.plateType === 'input') {
            for (let key in this.inputValuesObj) {
                if (this.inputValuesObj[key]) {
                    count++;
                }
            }
        } else if (this.plateType === 'click') {
            for (let key in this.clickToSelectedObj) {
                if (this.clickToSelectedObj[key]) {
                    count++;
                }
            }
        }
        return count;
    }

    @computed get totalBetMoney() {
        let money = 0;
        if (this.plateType === 'input') {
            for (let key in this.inputValuesObj) {
                if (this.inputValuesObj[key]) {
                    money += Number(this.inputValuesObj[key]);
                }
            }
        } else if (this.plateType === 'click') {
            money += this.totalBetCount * Number(this.clickPerInputValue);
        }

        if (!Number.isInteger(money)) {
            return money.toFixed(2);
        }
        return money;
    }

    realMethod(en) {
        const method = this.method;
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                return method;
            case 'tm_tm_sx':
                if (en === this.bmnsx) {
                    return method + '_bnsx';
                }
                return method + '_fbnsx';
            case 'zt1x_zt1x_zt1x':
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
                if (en === this.bmnsx) {
                    return method + '_bnsx';
                }
                return method;
            case 'tm_tm_sb':
            case 'tm_tm_dxds':
            case 'hzdxds_hzdxds_hzdxds':
                return method + `_${en}`;
            case 'tm_tm_ws':
            case 'ztws_ztws_ztws':
                if (en === '0w') {
                    return method + '_0w';
                }
                return method + '_f0w';
            default:
                return method;
        }
    }

    @action calcPoint = (oddsObj, method, en, AorB) => {
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                return oddsObj[method] && oddsObj[method][`rate${AorB}`];
            case 'tm_tm_sx':
                if (en === this.bmnsx) {
                    return oddsObj[method + '_bnsx'] && oddsObj[method + '_bnsx'][`rate${AorB}`];
                }
                return oddsObj[method + '_fbnsx'] && oddsObj[method + '_fbnsx'][`rate${AorB}`];
            case 'zt1x_zt1x_zt1x':
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
                if (en === this.bmnsx) {
                    return oddsObj[method + '_bnsx'] && oddsObj[method + '_bnsx'][`rate${AorB}`];
                }
                return oddsObj[method] && oddsObj[method][`rate${AorB}`];
            case 'tm_tm_sb':
            case 'tm_tm_dxds':
            case 'hzdxds_hzdxds_hzdxds':
                return oddsObj[method + `_${en}`] && oddsObj[method + `_${en}`][`rate${AorB}`];
            case 'tm_tm_ws':
            case 'ztws_ztws_ztws':
                if (en === '0w') {
                    return oddsObj[method + '_0w'] && oddsObj[method + '_0w'][`rate${AorB}`];
                }
                return oddsObj[method + '_f0w'] && oddsObj[method + '_f0w'][`rate${AorB}`];
            default:
                return oddsObj[method] && oddsObj[method][`rate${AorB}`];
        }
    }

    @action calcOdd = (oddsObj, method, en, AorB) => {
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                return oddsObj[method] && oddsObj[method][`bonus${AorB}`];
            case 'tm_tm_sx':
                if (en === this.bmnsx) {
                    return oddsObj[method + '_bnsx'] && oddsObj[method + '_bnsx'][`bonus${AorB}`];
                }
                return oddsObj[method + '_fbnsx'] && oddsObj[method + '_fbnsx'][`bonus${AorB}`];
            case 'zt1x_zt1x_zt1x':
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
                if (en === this.bmnsx) {
                    return oddsObj[method + '_bnsx'] && oddsObj[method + '_bnsx'][`bonus${AorB}`];
                }
                return oddsObj[method] && oddsObj[method][`bonus${AorB}`];
            case 'tm_tm_sb':
            case 'tm_tm_dxds':
            case 'hzdxds_hzdxds_hzdxds':
                return oddsObj[method + `_${en}`] && oddsObj[method + `_${en}`][`bonus${AorB}`];
            case 'tm_tm_ws':
            case 'ztws_ztws_ztws':
                if (en === '0w') {
                    return oddsObj[method + '_0w'] && oddsObj[method + '_0w'][`bonus${AorB}`];
                }
                return oddsObj[method + '_f0w'] && oddsObj[method + '_f0w'][`bonus${AorB}`];
            default:
                return oddsObj[method] && oddsObj[method][`bonus${AorB}`];
        }
    }

    @action addOrder = () => {
        const arr = [];
        if (this.plateType === 'input') {
            for (let key in this.inputValuesObj) {
                const value = this.inputValuesObj[key];
                if (!value) continue;
                const cnNum = this.numToCnObj[key];
                arr.push({
                    realMethod: this.realMethod(key),
                    cnMethod: this.cnMethod,
                    num: key,
                    cnNum,
                    detail: `${this.cnMethod}    ${cnNum}`,
                    odd: this.calcOdd(this.oddsObj, this.method, key, this.AorB),
                    point: this.calcPoint(this.oddsObj, this.method, key, this.AorB),
                    money: value
                });
            }
        } else if (this.plateType === 'click') {
            for (let key in this.clickToSelectedObj) {
                const value = this.clickPerInputValue;
                if (!this.clickToSelectedObj[key]) continue;
                const cnNum = this.numToCnObj[key];
                arr.push({
                    realMethod: this.realMethod(key),
                    cnMethod: this.cnMethod,
                    num: key,
                    cnNum,
                    detail: `${this.cnMethod}    ${cnNum}`,
                    odd: this.calcOdd(this.oddsObj, this.method, key, this.AorB),
                    point: this.calcPoint(this.oddsObj, this.method, key, this.AorB),
                    money: value
                });
            }
        }
        this.orderData = [...this.orderData, ...arr];
        this.orderData = this.orderData.map((v, i) => {
            v.key = i;
            return v;
        });
        this.resetPlate();
    }

    @observable quickBetting = false

    @observable betting = false
    
    @action bet = async () => {
        this.betting = true;
        const orderObj = {
            lottery: this.lotteryCode,
            issue: this.currentIssue,
            betType: 2,
            sourceType: 0,
            order: JSON.stringify(this.orderData.map(item => {
                return {
                    method: item.realMethod,
                    code: item.cnNum,
                    nums: 1,
                    piece: 1,
                    price: item.money,
                    odds: item.odd,
                    point: item.point,
                    amount: item.money
                };
            }))
        };
        this.closeBetModal();
        const res = await submitOrder(orderObj);
        this.betting = false;
        if (res.data.code === 1) {
            this.orderData = [];
        }
        return res;
    }

    @action quickBet = async () => {
        this.quickBetting = true;
        const orderObj = {
            lottery: this.lotteryCode,
            issue: this.currentIssue,
            betType: 2,
            sourceType: 0,
            order: JSON.stringify(this.quickOrderData.map(item => {
                return {
                    method: item.realMethod,
                    code: item.cnNum,
                    nums: 1,
                    piece: 1,
                    price: item.money,
                    odds: item.odd,
                    point: item.point,
                    amount: item.money
                };
            }))
        };
        this.closeQuickBetModal();
        const res = await submitOrder(orderObj);
        this.quickBetting = false;
        if (res.data.code === 1) {
            this.resetPlate();
        }
        return res;
    }

    @action deleteOrderItem = (key) => {
        this.orderData = this.orderData.filter(v => v.key !== key);
    }

    @observable orderData = []

    @computed get quickOrderData() {
        let arr = [];
        if (this.plateType === 'input') {
            for (let key in this.inputValuesObj) {
                const value = this.inputValuesObj[key];
                if (!value) continue;
                const cnNum = this.numToCnObj[key];
                arr.push({
                    realMethod: this.realMethod(key),
                    cnMethod: this.cnMethod,
                    num: key,
                    cnNum,
                    detail: `${this.cnMethod}    ${cnNum}`,
                    odd: this.calcOdd(this.oddsObj, this.method, key, this.AorB),
                    point: this.calcPoint(this.oddsObj, this.method, key, this.AorB),
                    money: value
                });
            }
        } else if (this.plateType === 'click') {
            for (let key in this.clickToSelectedObj) {
                const value = this.clickPerInputValue;
                if (!this.clickToSelectedObj[key]) continue;
                const cnNum = this.numToCnObj[key];
                arr.push({
                    cnMethod: this.cnMethod,
                    num: key,
                    cnNum,
                    detail: `${this.cnMethod}    ${cnNum}`,
                    odd: this.calcOdd(this.oddsObj, this.method, key, this.AorB),
                    point: this.calcPoint(this.oddsObj, this.method, key, this.AorB),
                    money: value
                });
            }
        }
        arr = arr.map((v, i) => {
            v.key = i;
            return v;
        });
        return arr;
    }

    @computed get orderTotalCount() {
        return this.orderData.length;
    }

    @computed get orderTotalMoney() {
        const result = this.orderData.reduce((a, b) => a + Number(b.money), 0);
        if (!Number.isInteger(result)) {
            return result.toFixed(2);
        }
        return result;
    }

    @action showBetModal = () => {
        if (!this.betModalShowed) {
            this.betModalShowed = true;
        }
    }

    @action closeBetModal = () => {
        this.betModalShowed = false;
    }

    @action showQuickBetModal = () => {
        if (!this.quickBetModalShowed) {
            this.quickBetModalShowed = true;
        }
    }

    @action closeQuickBetModal = () => {
        this.quickBetModalShowed = false;
    }

    @observable betModalShowed = false

    @observable quickBetModalShowed = false

    @observable printOrderFlag = Boolean(localStorage.getItem('printOrderFlag'))

    @action setPrintOrderFlag = (event) => {
        this.printOrderFlag = event.target.checked;
        if (this.printOrderFlag) {
            localStorage.setItem('printOrderFlag', '1');
        } else {
            localStorage.removeItem('printOrderFlag');
        }
    }
}

export default new lhcStore();