import {
    observable,
    action
} from 'mobx';

class ForgetStore {
    
    @observable modalvisible=false;
    
    @observable setModalVisible = (mv)=>{
         this.modalvisible=mv
    }
}

export default new ForgetStore()