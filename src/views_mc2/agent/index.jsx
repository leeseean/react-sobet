import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Switch,Route,NavLink} from 'react-router-dom'
import '../../views_common/agent/index.styl'
import TeamReport from '../../views_common/agent/teamReport'
import DayReport from '../../views_common/agent/dayReport'
import Private from './private'

const {  Content, Sider } = Layout;
class Agent extends React.Component{
    render(){
        const match = this.props.match;
        const Main = ({match})=>{
            switch(match.params.type){
                case 'teamReport':
                    return <TeamReport/>
                case 'dayReport':
                    return <DayReport/>
                case 'private':
                    return <Private/>
                default:
                    return 
            }
        }
        return(
            <div className="voucher-wapper">
                <div className="content">
                    <Layout>
                        <Sider>
                            <Menu theme="dark" mode="inline">
                                <Menu.Item>
                                    <NavLink to={`${match.url}/teamReport`} activeClassName="router-active-color">
                                        <Icon type="user"/>
                                        <span className="nav-text">团队报表</span>
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item>
                                    <NavLink to={`${match.url}/dayReport`} activeClassName="router-active-color">
                                        <Icon type="upload" />
                                        <span className="nav-text">日度报表</span>
                                    </NavLink>   
                                </Menu.Item>
                                <Menu.Item>
                                    <NavLink to={`${match.url}/gameRecord`} activeClassName="router-active-color">
                                        <Icon type="video-camera" />
                                        <span className="nav-text">游戏记录</span>
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item>
                                    <NavLink to={`${match.url}/private`} activeClassName="router-active-color">
                                        <Icon type="video-camera" />
                                        <span className="nav-text">私返协议</span>
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{ margin: '10px' }}>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                    <Route path={`${match.path}/:type`} component={Main}/>
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