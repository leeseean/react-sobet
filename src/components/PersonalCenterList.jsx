/**
 * Created by Orange on 2018-09-29 21:19:08.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import Logout from './Logout';
import './personalCenterList.styl';

@inject('globalStore')
@observer
class PersonalCenterList extends React.Component {
    listData = [
        {
            title: '游戏记录',
            list: [
                {
                    cn: '彩票投注',
                    path: '/personal/lottery'
                }, {
                    cn: '彩票追号',
                    path: '/personal/trace'
                }, {
                    cn: 'AG游戏',
                    path: '/personal/live'
                }, {
                    cn: 'AG捕鱼王',
                    path: '/personal/fish'
                }, {
                    cn: '沙巴体育',
                    path: '/personal/sport'
                }, {
                    cn: '香港六合彩',
                    path: '/personal/xglhc'
                }, {
                    cn: '盈亏统计',
                    path: '/personal/statistics'
                },
            ]
        },
        {
            title: '交易记录',
            list: [
                {
                    cn: '交易流水',
                    path: '/personal/flow'
                },
                {
                    cn: '充值记录',
                    path: '/personal/charge'
                }, {
                    cn: '提现记录',
                    path: '/personal/withdraw'
                }, {
                    cn: '钱包互转记录',
                    path: '/personal/transfer'
                }
            ]
        },
        {
            title: '消息管理',
            list: [
                {
                    cn: '站内信',
                    path: '/personal/letter'
                }
            ]
        },
        {
            title: '账号管理',
            list: [
                {
                    cn: '个人资料',
                    path: '/personal/info'
                }, {
                    cn: '登陆密码',
                    path: '/personal/password'
                }, {
                    cn: '电子邮箱',
                    path: '/personal/email'
                }, {
                    cn: '密保问题',
                    path: '/personal/insurance'
                }, {
                    cn: '银行卡管理',
                    path: '/personal/bankcard'
                },
            ]
        }
    ]
    render() {
        const { loginTime } = this.props.globalStore;
        const Item = ({ itemObj }) => {
            const { cn, path } = itemObj;
            return <a className="fl" href={path}>{cn}</a>
        };
        const Items = ({ listArr }) => {
            return listArr.map(itemObj => {
                const { cn } = itemObj;
                return <Item key={cn} itemObj={itemObj} />
            });
        };
        const List = ({ listObj }) => {
            const { title, list } = listObj;
            return (
                <div className="clearfix personal-center__list">
                    <div className="fl personal-center__list-title">{title}</div>
                    <div className="fr clearfix personal-center__list-items">
                        <Items listArr={list} />
                    </div>
                </div>
            );
        };
        const Lists = ({ listData }) => {
            return listData.map((listDataItem, index) => {
                return <List key={index} listObj={listDataItem} />
            });
        };
        return (
            <div className="personal-center__list-wrapper">
                <Lists listData={this.listData} />
                <div className="personal-center__list-bottom">
                    上次登录时间：{loginTime}<Logout className="personal-logout" text='安全退出' />
                </div>
            </div>
        );
    }
}

export default PersonalCenterList;