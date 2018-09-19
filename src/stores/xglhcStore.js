import {
    observable,
    action,
    runInAction
} from 'mobx';
import $http from '../utils/ajax';
import {toggleClass} from '../utils/cssClass';

class XglhcStore {

    @observable oddsObj = {}

    @observable method = 'tm_tm_zx'

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

    @observable filterArr = []

    @observable filterConfig = {
        '红大': ['29','30','34','35','40','45','46'],
        '红小': ['01','02','07','08','12','13','18','19','23','24'],
        '红单': ['01','07','13','19','23','29','35','45'],
        '红双': ['02','08','12','18','24','30','34','40','46'],
        '蓝大': ['25','26','31','36','37','41','42','47','48'],
        '蓝小': ['03','04','09','10','14','15','20'],
        '蓝单': ['03','09','15','25','31','37','41','47'],
        '蓝双': ['04','10','14','20','26','36','42','48'],
        '绿大': ['27','28','32','33','38','39','43','44','49'],
        '绿小': ['05','06','11','16','17','21','22'],
        '绿单': ['05','11','17','21','27','33','39','43','49'],
        '绿双': ['06','16','22','28','32','38','44']
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
    }

    @action changeMethod = (key) => {
        this.method = key;
        this.setTabRefMethod(this.tab, key);
        this.filterArr = [];
    }

    @action setTabRefMethod(tab, method) {
        this.tabRefMethod[tab] = method;
    }

    //快速筛号
    @action filterNum = (filterType, event) => {
        console.log(event);
        const _index = this.filterArr.indexOf(filterType);
        if (_index === -1) {
            this.filterArr.push(filterType);
        } else {
            this.filterArr.splice(_index, 1);
        }
        toggleClass(event.target, 'on');
    }
}

export default new XglhcStore();