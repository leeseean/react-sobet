import React from 'react';
import {Menu, Icon } from 'antd';
import {Switch,Route,NavLink,withRouter} from 'react-router-dom';
import RouteWithSubRoutes from '../../../../routers/RouteWithSubRoutes';

class DailyReport extends React.Component{
    listUrl = [
        {
            path: '/lottery',
            title: '彩票',
            exact: true
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
        return(
            <div className="daily-report-view">
                <Menu mode="horizontal" className="tab-nav">
                    {this.listUrl.map((item,index)=>{
                        return  (<Menu.Item key={index}>
                                    <NavLink to={`${match.url+item.path}`}  activeClassName="router-active-color" exact={item.exact}>
                                        <span className="nav-text">{item.title}</span>
                                    </NavLink>
                                </Menu.Item>)
                    })}
                </Menu>
                <div className="team-report-ctx">
                    <RouteWithSubRoutes routes={this.props.routes} />
                </div>
            </div>
        )
    }
}

export default DailyReport