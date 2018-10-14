
import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';

class OrderStore {

    @observable betModalShowed = false

    @observable printOrderFlag = false

    @observable orderData = []

    @action
    toggleBetModal = (bool) => {
        this.betModalShowed = bool;
    }

    @action
    setPrintOrderFlag = (bool) => {
        this.printOrderFlag = bool;
    }

    @computed get orderTotalMoney() {
        return 0;
    }

    @computed get orderTotalCount() {
        return 0;
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

export default new OrderStore();