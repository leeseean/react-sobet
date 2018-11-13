/**
 * Created by Orange on 2018-09-29 21:19:08.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import Logout from './Logout';
import './personalCenterList.styl';
import { addClass, removeClass } from '../utils/cssClass.js';

@withRouter
@inject(stores => ({
    globalStore: stores.globalStore,
    personalStore: stores.personalStore
}))
@observer
class PersonalCenterList extends React.Component {
    state = {
        listData: []
    }
    componentDidMount() { //ajax 请求 个人中心导航信息 目前没有接口，暂时setTimeout 模拟
        setTimeout(() => {
            let listData = [
                {
                    type: 'game',
                    title: '游戏记录',
                    path: '/personal/game/lottery',
                    list: [
                        {
                            cn: '彩票投注',
                            path: '/personal/game/lottery'
                        }, {
                            cn: '彩票追号',
                            path: '/personal/game/trace'
                        }, {
                            cn: 'AG游戏',
                            path: '/personal/game/agyx'
                        }, {
                            cn: 'AG捕鱼王',
                            path: '/personal/game/fish'
                        },
                        {
                            cn: 'PT游戏',
                            path: '/personal/game/ptyx'
                        },
                        {
                            cn: 'BBIN',
                            path: '/personal/game/BBIN'
                        },
                        {
                            cn: '沙巴体育',
                            path: '/personal/game/sport'
                        },
                        {
                            cn: 'IDN棋牌',
                            path: '/personal/game/IDN'
                        },
                        {
                            cn: 'Kgame棋牌',
                            path: '/personal/game/kgame'
                        }, {
                            cn: '香港六合彩',
                            path: '/personal/game/xglhc'
                        }, {
                            cn: '盈亏统计',
                            path: '/personal/game/statistics'
                        },
                    ]
                },
                {
                    type: 'trade',
                    title: '交易记录',
                    path: '/personal/trade/flow',
                    list: [
                        {
                            cn: '交易流水',
                            path: '/personal/trade/flow'
                        },
                        {
                            cn: '充值记录',
                            path: '/personal/trade/charge'
                        }, {
                            cn: '提现记录',
                            path: '/personal/trade/withdraw'
                        }, {
                            cn: '钱包互转记录',
                            path: '/personal/trade/transfer'
                        }
                    ]
                },
                {
                    type: 'letter',
                    title: '消息管理',
                    path: '/personal/letter',
                    list: [
                        {
                            cn: '站内信',
                            path: '/personal/letter'
                        }
                    ]
                },
                {
                    type: 'account',
                    title: '账号管理',
                    path: '/personal/account/info',
                    list: [
                        {
                            cn: '个人资料',
                            path: '/personal/account/info'
                        }, {
                            cn: '登陆密码',
                            path: '/personal/account/password'
                        }, {
                            cn: '电子邮箱',
                            path: '/personal/account/email'
                        }, {
                            cn: '密保问题',
                            path: '/personal/account/insurance'
                        },
                        {
                            cn: '资金密码',
                            path: '/personal/account/funds'
                        }, {
                            cn: '银行卡管理',
                            path: '/personal/account/bankcard'
                        },
                    ]
                }
            ]
            this.setState({ listData: listData })
            this.props.personalStore.setPersonalNav(listData)
        }, 500)
    }
    handleClick(e) {
        addClass(this.warp, 'personal-center-show');
        setTimeout(() => {
            removeClass(this.warp, 'personal-center-show');
        }, 200);
        this.props.history.push(e)
    }
    render() {
        const { loginTime, letterCount } = this.props.globalStore;
        const Item = ({ itemObj }) => {
            const { cn, path } = itemObj;
            if (cn === '站内信' && letterCount !== 0) {//要加上右上角站内信数量提示
                return (
                    <a className="fl" style={{ position: 'relative' }} onClick={this.handleClick.bind(this, path)}>
                        <i className="personal-center__letter-count">{letterCount}</i>
                        {cn}
                    </a>
                );
            }
            return <a className="fl" onClick={this.handleClick.bind(this, path)}>{cn}</a>
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
            <div className="personal-center__list-wrapper" ref={(warp) => this.warp = warp}>
                <Lists listData={this.state.listData} />
                <div className="personal-center__list-bottom">
                    上次登录时间：{loginTime}<Logout className="personal-logout" text='安全退出' />
                </div>
            </div>
        );
    }
}

export default PersonalCenterList;