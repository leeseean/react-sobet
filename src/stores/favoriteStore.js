
import {
    observable,
    action,
    runInAction,
    computed
} from 'mobx';
import { getLotteryFavorite, getCountdowns } from '../utils/ajax';

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
}

export default new FavoriteStore();