
import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import { getLotteryFavorite, getCountdowns, delLotteryFavorite, addLotteryFavorite } from '../utils/ajax';

class FavoriteStore {

    @observable data = []

    @observable countdownsObj = {}

    @action
    getFavorites = async () => {
        const res = await getLotteryFavorite();
        runInAction(() => {
            if (res.data.code === 1) {
                this.data = res.data.result;
            }
        });
    }

    @action
    getCountdowns = async () => {
        const res = await getCountdowns();
        runInAction(() => {
            if (res.data.code === 1) {
                this.countdownsObj = res.data.result.time;
            }
        });
    }

    @observable modalVisible = false

    @action toggleModalVisible = (bool) => {
        this.modalVisible = bool;
    }

    @action switchFavorite = (ltCode) => {
        const _index = this.data.findIndex(v => v.lottery_code === ltCode);
        if (_index === -1) {
            addLotteryFavorite(ltCode);
        } else {
            delLotteryFavorite(ltCode);
        }
        this.getFavorites();
    }
}

export default new FavoriteStore();