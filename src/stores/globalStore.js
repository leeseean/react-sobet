import {
    observable,
    action,
    runInAction
} from 'mobx';
import {
    ssoLogout
} from '../utils/jsonp';

class GlobalStore {

    @observable logined = sessionStorage.getItem('logined');

    @observable platformId = sessionStorage.getItem('setPlatformId') || '1' //摩臣1

    @observable loginTime = sessionStorage.getItem('loginTime') || '0000 00'

    @observable letterCount = 0

    @observable username = sessionStorage.getItem('username') || '----'

    @action setPlatformId = (id) => {
        this.platformId = id;
        sessionStorage.setItem('setPlatformId', id);
    }

    @action setUserName = (name) => {
        this.username = name;
        sessionStorage.setItem('username', name);
    }

    @action setLoginTime = (time) => {
        this.loginTime = time;
        sessionStorage.setItem('loginTime', time);
    }

    @observable userType = sessionStorage.getItem('userType')

    @observable roleType = sessionStorage.getItem('roleType')

    @action setUserType = (type) => {
        this.userType = type;
        sessionStorage.setItem('userType', type);
    }

    @action setRoleType = (type) => {
        this.roleType = type;
        sessionStorage.setItem('roleType', type);
    }

    @observable balance = sessionStorage.getItem('balance')

    @action refreshBalance = () => {
        this.balance = 'loading';
        setTimeout(() => {
            runInAction(() => {
                this.balance = '2000';
                sessionStorage.setItem('balance', '2000');
            });
        }, 2000);
    }

    @action getUserInfo = () => {

    }

    @action login = () => {
        sessionStorage.setItem('logined', true);
        this.logined = true;
    }

    @action logout = () => {
        return ssoLogout(this.username).then(res => {
            sessionStorage.removeItem('logined');
            this.logined = false;
            return Promise.resolve(res);
        });
    }
}

export default new GlobalStore();

