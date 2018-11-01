import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {NavLink, withRouter} from 'react-router-dom'
import GlobalFootLogo from '../../../components/GlobalFootLogo'
import './index.styl'
import AgentRouter from '../../../routers/agent'


/**
 * @author brian
 * @desc   代理中心首页
 */
@withRouter
class Agent extends React.Component {
    agentSiderNavConfig = [
        {
            name: '团队报表',
            path: '/agent/teamReport',
            url: '/agent/teamReport/lottery'
        },
        {
            name: '日度报表',
            path: '/agent/dailyReport',
            url: '/agent/dailyReport/lottery'
        },
        {
            name: '下级游戏记录',
            path: '/agent/lowerGameRecords',
            url: '/agent/lowerGameRecords'
        },
        {
            name: '下级管理',
            path: '/agent/lowerManager',
            url: '/agent/lowerManager'
        }
    ];
    constructor(props) {
        super(props);
        this.state = {
            curPath: this.matchPath(this.props.location.pathname)
        }
        console.log('Agent constructor ', this.props, 'matchPath=', this.matchPath(this.props.location.pathname))
    }
    handleMenu = (data) => {
        this.props.history.push(this.getUrlByPath(data.key));
    }
    matchPath(path = '') {
        let reg;
        for (let i = 0; i < this.agentSiderNavConfig.length; i++) {
            reg = new RegExp(this.agentSiderNavConfig[i].path)
            if (path.match(reg)) {
                return this.agentSiderNavConfig[i].path;
            }
        }
        return '';
    }
    getUrlByPath(path = '') {
        for (let i = 0; i < this.agentSiderNavConfig.length; i++) {
            if (path == this.agentSiderNavConfig[i].path) {
                return this.agentSiderNavConfig[i].url;
            }
        }
        return '';
    }
    render(){
        const match = this.props.match;
        return (
            <div className="agent-view">
                <div className="content-wp">
                    <nav className="agent-sider-nav">
                        <div className="title">代理中心</div>
                        <Menu 
                            onClick={this.handleMenu}
                            style={{width:140}}
                            theme="dark"
                            defaultSelectedKeys={[this.state.curPath]}
                        >   
                            {this.agentSiderNavConfig.map((item, i) => {
                                return (
                                    <Menu.Item key={item.path}>
                                        <Icon type="pie-chart" />
                                        <span>{item.name}</span>
                                    </Menu.Item>
                                )
                            })}
                        </Menu>
                    </nav>
                    <section className="main-panel">
                        <AgentRouter />
                    </section>
                </div>
                <GlobalFootLogo />
            </div>
            )
    }
}
export default Agent