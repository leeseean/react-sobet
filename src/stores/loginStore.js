import {observable, action} from 'mobx';

class LoginStore {

    @observable logined = sessionStorage.getItem('logined');

    @action login() {
        sessionStorage.setItem('logined', true);
        this.logined = true;
    }

    @action logout() {
        sessionStorage.removeItem('logined');
        this.logined = false;
    }
}

export default new LoginStore();