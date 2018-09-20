import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import $http from '../utils/ajax';
import {
    calcSxFilterConfig
} from '../utils/algorithm';

class XglhcStore {

    @observable oddsObj = {}

    @observable method = 'tm_tm_zx'

    methodToCnObj = {
        tm_tm_zx: '特码直选',
        tm_tm_sx: '特码生肖',
        tm_tm_sb: '特码色波',
        tm_tm_dxds: '大小单双',
        tm_tm_ws: '特码尾数',
        zt1m_zt1m_zt1m: '正特一码',
        zt1x_zt1x_zt1x: '正特一肖',
        ztws_ztws_ztws: '正特尾数',
        lx_lx_2lx: '二连肖',
        lx_lx_3lx: '三连肖',
        lx_lx_4lx: '四连肖',
        lm_lm_2z2: '二中二',
        lm_lm_3z2: '三中二',
        lm_lm_3z3: '三中三',
        hzdxds_hzdxds_hzdxds: '总和大小单双'
    }

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

    @observable bmnsx = '狗'

    @observable inputValuesObj = {}

    @observable filterArr = []

    @observable filterInputValue = ''

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
            '家禽家畜': ['niu','ma','yang','ji','gou','zhu'],
            '野外兽类': ['shu','hu','tu','long','she','hou']
        };
    }

    @computed get filteredNums() {
        const result = [];
        this.filterArr.forEach(item => {
            result.push(...this.filterConfig[item]);
        });
        return [...new Set(result)];
    }

    @action
    getOddsObj = async () => {
        const res = await $http({
            url: '/xglhc-odd.json',
            method: 'GET'
        });
        runInAction("获取赔率数据", () => {
            if (res.data.code === 1) {
                this.oddsObj = res.data.result['XGLHC'];
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
    }

    @action changeMethod = (key) => {
        this.method = key;
        this.setTabRefMethod(this.tab, key);
        this.filterArr = [];
        this.filterInputValue = '';
    }

    @action setTabRefMethod(tab, method) {
        this.tabRefMethod[tab] = method;
    }

    //快速筛号
    @action filterNum = (filterType, event) => {
        const _index = this.filterArr.indexOf(filterType);
        if (_index === -1) {
            this.filterArr.push(filterType);
        } else {
            this.filterArr.splice(_index, 1);
        }

        const reflectObj = {};
        if (this.filterInputValue && this.filterArr.length > 0) {
            this.filteredNums.forEach(num => {
                reflectObj[num] = this.filterInputValue;
            });
            this.inputValuesObj = reflectObj;
        }
    }

    //快速筛号输入框
    @action fillFilteredInput = value => {
        this.filterInputValue = value;
        const reflectObj = {};
        if (this.filterInputValue && this.filterArr.length > 0) {
            this.filteredNums.forEach(num => {
                reflectObj[num] = this.filterInputValue;
            });
            this.inputValuesObj = reflectObj; //这样做的目的是更新引用才会引起视图更新
        }
    }

    @observable resetButtonClicked = false;

    //重置
    @action resetPlate = () => {
        this.resetButtonClicked = !this.resetButtonClicked;
        this.filterArr = [];
        this.filterInputValue = '';
        this.inputValuesObj = {};
    }

    @computed get totalBetCount() {
        let count = 0;
        for (let key in this.inputValuesObj) {
            if (this.inputValuesObj[key]) {
                count++;
            }
        }
        return count;
    }

    @computed get totalBetMoney() {
        let money = 0;
        for (let key in this.inputValuesObj) {
            if (this.inputValuesObj[key]) {
                money += Number(this.inputValuesObj[key]);
            }
        }
        return money;
    }

    @action addOrder = () => {
        const arr = [];
        for (let key in this.inputValuesObj) {
            const value = this.inputValuesObj[key];
            arr.push({
                cnMethod: this.cnMethod,
                num: key,
                detail: `${this.cnMethod}  ${key}`,
                odd: this.oddsObj[this.method][`bonus${this.AorB}`],
                money: value
            });
        }
        this.orderData = [...this.orderData, ...arr];
        this.orderData = this.orderData.map((v, i) => {
            v.key = i;
            return v;
        });
        this.resetPlate();
    }

    @action deleteOrderItem = (key) => {
        this.orderData = this.orderData.filter(v => v.key !== key);
    }

    @observable orderData = []

    @computed get orderTotalCount() {
        return this.orderData.length;
    }

    @computed get orderTotalMoney() {
        return this.orderData.reduce((a, b) => a + Number(b.money), 0);
    }

    @action showBetModal = () => {
        if (!this.betModalShowed) {
            this.betModalShowed = true;
        }
    }

    @action closeBetModal = () => {
        this.betModalShowed = false;
    }

    @action bet = () => {

    }

    @observable betModalShowed = false

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

export default new XglhcStore();