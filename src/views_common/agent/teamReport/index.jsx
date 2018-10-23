import React from 'react'
import {Menu, Icon } from 'antd';
import Loadable from 'react-loadable';
import {Switch,Route,NavLink,withRouter} from 'react-router-dom'
import '../index.styl'

@withRouter
class TeamReport extends React.Component{
    listUrl = [
        {
            path: '/lotteryReport',
            title: '彩票',
            exact:true
        },
        {
            path: '/agGame',
            title: 'AG游戏'
        },
        {
            path: '/PTGame',
            title: 'PT游戏'
        }
    ];
    render(){
        const match = this.props.match;
        console.log(this.props.routes)
        const RouteWithSubRoutes = ()=>{
            return this.props.routes.map((route,index)=>{
                return (
                    <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                )
            })  
        }
        return(
            <div>
                <Menu mode="horizontal">
                    {
                        this.listUrl.map((item,index)=>{
                            return  <Menu.Item key={index}>
                                        <NavLink to={`${match.url+item.path}`}  activeClassName="router-active-color" exact={item.exact}>
                                            <Icon type="user"/>
                                            <span className="nav-text">{item.title}</span>
                                        </NavLink>
                                    </Menu.Item>
                        })
                    }
                </Menu>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Switch>

                            <RouteWithSubRoutes />
                        </Switch>
                    </div>
            </div>
        )
    }
}

export default TeamReport