import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Switch,Route,NavLink} from 'react-router-dom';
import GlobalFootLogo from '../../../components/GlobalFootLogo';
import VoucherRouter from '../../../routers/voucher';
import './index.styl'

const {  Content, Sider } = Layout;
class VoucherCenter extends React.Component{
    state={
        current:this.props.location.pathname
    }
    handleClick=(e)=>{
        this.props.history.push(e.key);
    }
    render(){
        const listMenu=[
                    {
                        path:'/voucher/charge',
                        name:'充值'
                    },
                    {
                        path:'/voucher/transfer',
                        name:'转账'
                    },
                    {
                        path:'/voucher/withdraw',
                        name:'提现'
                    }
                ]
        return(
            <div className="voucher-wapper">
                <div className="voucher-content">
                    <aside className="voucher-aside">
                        <div className="title">资金交易</div>
                        <Menu theme="dark" mode="inline" onClick={this.handleClick} defaultSelectedKeys={[this.state.current]}>
                            {
                                listMenu.map((m,i)=>{
                                    return (
                                        <Menu.Item key={m.path}>
                                            <Icon type="user"/>
                                            <span className="nav-text">{m.name}</span>
                                        </Menu.Item>
                                    )
                                })            
                            }
                        </Menu>
                    </aside>
                    <section className="voucher-section">
                        <Content>
                            <div style={{  background: '#fff' }}>
                                <VoucherRouter/>
                            </div>
                        </Content>
                    </section>
                </div>
                <GlobalFootLogo/>
            </div>
        )
    }
}
export default VoucherCenter