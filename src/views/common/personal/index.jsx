import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Switch,Route,NavLink,withRouter} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import GlobalFootLogo from '../../../components/GlobalFootLogo';
import GlobalLoading from '../../../components/GlobalLoading';
import PersonalRouter from '../../../routers/personal';
import './index.styl'

const {  Content, Sider } = Layout;
@withRouter
@inject(stores=>({
    globalStore:stores.globalStore,
    personalStore:stores.personalStore
}))
@observer
class Personal extends React.Component{
    state={
        current:this.getCurrentPath(this.props.location.pathname),
        tablelist:[],
    }
    handleClick=(e)=>{
        // if(e.key === 'divider')return false;
        this.props.history.push(e.key);
    }
    componentDidMount(){
        
    }
    getCurrentPath(path=''){ //左侧选中状态
        if(path.indexOf('game')!==-1){
            return '/personal/game/lottery'
        }
        if(path.indexOf('trade')!==-1){
            return '/personal/trade/flow'
        }
        if(path.indexOf('letter')!==-1){
            return '/personal/letter'
        }
        if(path.indexOf('account')!==-1){
            return '/personal/account/info'
        }
        if(path.indexOf('voucher')!==-1){
            return '/personal/voucher/charge'
        }
        if(path.indexOf('setbank')!==-1){
            return '/personal/setbank'
        }
        if(path.indexOf('profit')!==-1){
            return '/personal/profit'
        }
    }
    render(){
       // const { personalNav }  = this.props.personalStore;
        return(
            <div className="voucher-wapper">
                <div className="voucher-content">
                    <aside className="voucher-aside">
                        <div className="title">会员中心</div>
                        <Menu theme="dark" mode="inline" onClick={this.handleClick} defaultSelectedKeys={[this.state.current]}>
                            {
                                this.props.personalStore.personalNav.map((m,i)=>{
                                    if(m.type==="divider"){
                                        return (
                                            <Menu.Item key="divider"  className="menu_divider" disabled>
                                                <p></p>
                                            </Menu.Item>
                                        )
                                    }else{
                                        return (
                                            <Menu.Item key={m.path}>
                                                <Icon type="user"/>
                                                <span className="nav-text">{m.title}</span>
                                            </Menu.Item>
                                        )
                                    }
                                })            
                            }
                        </Menu>
                    </aside>
                    <section className="voucher-section">
                        <Content>
                            <div >
                                <PersonalRouter />
                            </div>
                        </Content>
                    </section>
                </div>
                <GlobalFootLogo/>
            </div>
        )
    }
}
export default Personal