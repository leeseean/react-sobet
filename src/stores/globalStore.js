import {
    observable,
    action,
    runInAction
} from 'mobx';

class globalStore {

    @observable loginTime = '2018-09-29 17:56:24';

    @observable letterCount = 7;

    @observable username = '张三的歌';

    @action setUserName = (name) => {
        this.username = name;
    }

    @observable userType = '张三的歌';

    @action setUserType = (type) => {
        this.userType = type;
    }

    @observable balance = '10000';

    @action refreshBalance = () => {
        this.balance = 'loading' ;
        setTimeout(() => {
            runInAction(() => {
                this.balance = '2000';
            });
        }, 2000);
    }

    @action getUserInfo = () => {

    }
}

export default new globalStore();