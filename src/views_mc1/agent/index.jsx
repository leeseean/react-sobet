import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {NavLink,withRouter} from 'react-router-dom'
import '../../views_common/agent/index.styl'
import AgentRouter from '../../routers/agent'

const {  Content, Sider } = Layout;
@withRouter
class Agent extends React.Component{
    listUrl = [
        {
            path: '/teamReport',
            title: '团队报表',
            exact:true
        },
        {
            path: '/dayReport',
            title: '日度报表'
        },
        {
            path: '/gameRecord',
            title: '游戏记录'
        },
        {
            path: '/bouns',
            title: '彩票分红',
            exact:true
        },
        {
            path: '/private',
            title: '私返'
        }
    ];
    render(){
        const match = this.props.match;
        return(
            <div className="voucher-wapper">
                <div className="content">
                    <Layout>
                        <Sider>
                            <Menu theme="dark" mode="inline">
                            {
                                this.listUrl.map((item,index)=>{
                                    return <Menu.Item key={index}>
                                                <NavLink to={`${match.url+item.path}`}  activeClassName="router-active-color">
                                                    <Icon type="user"/>
                                                    <span className="nav-text">{item.title}</span>
                                                </NavLink>
                                            </Menu.Item>
                                })
                            }
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{ margin: '10px' }}>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                    <AgentRouter />
                                    {/* <Route path={`${match.path}/:type`} component={Main}/> */}
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </div>
        )
    }
}
export default Agent