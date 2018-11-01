
import {observable, action} from 'mobx';

class RouterStore {

    @observable history = null

    @observable
    setHistory(history) {
        this.history = history;
    }
}

export default  new RouterStore();