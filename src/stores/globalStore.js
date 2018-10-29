import {
    observable,
    action,
    runInAction
} from 'mobx';
import {
    ssoLogout
} from '../utils/jsonp';
import Cookie from 'js-cookie';

class GlobalStore {

    appId = 5

    sig = encodeURI(Cookie.get('SIG'))

    @observable theme = localStorage.getItem('theme') || 'red'; //切换页面主题背景字段

    @action setTheme = (theme) => {
        this.theme = theme;
        document.querySelector('#theme').setAttribute('href', `/theme.${theme}.css`);
        localStorage.setItem('theme', theme);
    }

    @observable logined = localStorage.getItem('logined');

    @observable platformId = localStorage.getItem('platformId') || '1' //摩臣1

    @observable loginTime = localStorage.getItem('loginTime') || '0000 00'

    @observable letterCount = 0

    @observable username = localStorage.getItem('username') || '----'

    @action setPlatformId = (id) => {
        this.platformId = id;
        localStorage.setItem('platformId', id);
    }

    @action setUserName = (name) => {
        this.username = name;
        localStorage.setItem('username', name);
    }

    @action setLoginTime = (time) => {
        this.loginTime = time;
        localStorage.setItem('loginTime', time);
    }

    @observable userType = localStorage.getItem('userType')

    @observable roleType = localStorage.getItem('roleType')

    @action setUserType = (type) => {
        this.userType = type;
        localStorage.setItem('userType', type);
    }

    @action setRoleType = (type) => {
        this.roleType = type;
        localStorage.setItem('roleType', type);
    }

    @observable balance = localStorage.getItem('balance')

    @action refreshBalance = (value) => {
        this.balance = 'loading';
        setTimeout(() => {
            runInAction(() => {
                this.balance = value;
                localStorage.setItem('balance', value);
            });
        }, 2000);
    }

    @action getUserInfo = () => {

    }

    @action login = () => {
        localStorage.setItem('logined', true);
        this.logined = true;
    }

    @action logout = () => {
        return ssoLogout(this.username).then(res => {
            localStorage.removeItem('logined');
            this.logined = false;
            return Promise.resolve(res);
        });
    }

    @observable agentMenu = ['private']
}

export default new GlobalStore();