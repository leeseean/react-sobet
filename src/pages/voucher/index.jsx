import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Switch,Route,NavLink} from 'react-router-dom'
import './index.styl'
import Charge from './charge'
import Withdraw from './withdraw'
import Transfer from './transfer'

const {  Content, Sider } = Layout;
class VoucherCenter extends React.Component{
    render(){
        const match = this.props.match;
        const Main = ({match})=>{
            switch(match.params.type){
                case 'transfer':
                    return <Transfer/>
                case 'withdraw':
                    return <Withdraw/>
                default :
                    return <Charge/>
            }
        }
        const styl={color:'#1890ff'}
        return(
            <div className="voucher-wapper">
                <div className="content">
                    <Layout>
                        <Sider>
                            <Menu theme="dark" mode="inline">
                                <Menu.Item>
                                    <NavLink to={`${match.url}/charge`} exact activeStyle={styl}>
                                        <Icon type="user"/>
                                        <span className="nav-text">充值</span>
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item>
                                    <NavLink to={`${match.url}/transfer`} activeStyle={styl}>
                                        <Icon type="upload" />
                                        <span className="nav-text">转账</span>
                                    </NavLink>   
                                </Menu.Item>
                                <Menu.Item>
                                    <NavLink to={`${match.url}/withdraw`} activeStyle={styl}>
                                        <Icon type="video-camera" />
                                        <span className="nav-text">提现</span>
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{ margin: '10px' }}>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                    <Switch>
                                        <Route exact path='/voucher' component={Charge}/>
                                        <Route path={`${match.path}/:type`} component={Main}/>
                                    </Switch>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </div>
        )
    }
}
export default VoucherCenter