/**
 * Created by Orange on 2018-09-29 16:04:07.
 */

import React from 'react';
import {Link} from 'react-router-dom'
import './agentCenterList.styl';

class AgentCenterList extends React.Component {
    listData = [
        {
            path: '/agent/teamReport/lottery',
            title: '团队报表'
        },
        {
            path: '/agent/dayReport',
            title: '日度报表'
        },
        {
            path: '/agent/gameRecord',
            title: '游戏记录'
        }
    ]
    render() {
        const List = ({ listData }) => {
            return listData.map(item => {
                const { path, title } = item;
                return (
                    <Link key={title} to={path}>
                        <li className="head__agent-item">{title}</li>
                    </Link>
                );
            });
        };
        return (
            <ul className="head__agent-list">
                <List listData={this.listData} />
            </ul>
        );
    }
}

export default AgentCenterList;