import {
    observable,
    action,
    runInAction
} from 'mobx';
import {
    ssoLogout
} from '../utils/jsonp';
import { getPlayerBalance, getUserInfo } from '../utils/ajax';
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

    @observable nickname = null

    @action setNickName = (name) => {
        this.nickname = name;
        localStorage.setItem('nickname', name);
    }

    @action setLoginTime = (time) => {
        this.loginTime = new Date(time).toLocaleString();
        localStorage.setItem('loginTime', time);
    }

    @action setLettersCount = value => {
        this.letterCount = value;
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

    @observable balance = 'loading'

    @action getPlayerBalance = async () => {
        this.balance = 'loading';
        const res = await getPlayerBalance({ cbId: 'sobet_01' });
        this.refreshBalance(res.data.cash);
    }

    @action refreshBalance = value => {
        this.balance = value;
    }

    @action getUserInfo = async () => {
        const res = await getUserInfo();
        const { nikeName, cn, registerWay, userType, roleType, platformId, lastLoginTime, lettersCount } = res.data.userInfo;
        this.setNickName(nikeName);
        this.setUserName(cn);
        this.setUserType(userType);
        this.setRoleType(roleType);
        this.setLoginTime(lastLoginTime);
        this.setPlatformId(platformId);
        this.setLettersCount(lettersCount);
    }

    @action login = (r) => {
        this.setUserName(r.cn);
        this.setUserType(r.userType);
        this.setRoleType(r.roleType);
        this.setPlatformId(r.platformId);
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

    @observable agentMenu = []
}

export default new GlobalStore();