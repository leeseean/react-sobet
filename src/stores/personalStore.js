import {observable,action} from 'mobx';

class PersonalStore {
    
    @observable personalNav= JSON.parse(localStorage.getItem('Pnal')) ||[] ;
    
    @action setPersonalNav = (res)=>{
         this.personalNav=res
         localStorage.setItem('Pnal',JSON.stringify(res)) 
    }
}

export default new PersonalStore()