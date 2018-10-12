/**
 * Created by Orange on 2018-09-29 10:17:35.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './allGameList.styl';

@withRouter
@inject(stores => ({
    linkToLottery: stores.lotteryStore.linkToLottery
}))
@observer
class AllGameList extends React.Component {
    lotteryListData = [
        {
            title: '时时彩',
            list: [
                {
                    en: 'rdffc',
                    cn: '瑞典1分彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                },
                {
                    en: 'rdlfc',
                    cn: '瑞典2分彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'rbssm',
                    cn: '日本30秒',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'wbgmmc',
                    cn: 'WBG秒秒彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'wbgffc',
                    cn: 'WBG分分彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'wbg5fc',
                    cn: 'WBG5分彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'cqssc',
                    cn: '重庆时时彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'tjssc',
                    cn: '天津时时彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'xjssc',
                    cn: '新疆时时彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'xn5fc',
                    cn: '悉尼5分彩',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hn5fc',
                    cn: '河内5分彩',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'qqssm',
                    cn: 'QQ30秒彩',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'txffc',
                    cn: '腾讯分分彩',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'tx1fc',
                    cn: '腾讯1分彩',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                }
            ]
        },
        {
            title: '11选5',
            list: [
                {
                    en: 'mc11y',
                    cn: '摩臣11选5',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'gd11y',
                    cn: '广东11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'sd11y',
                    cn: '山东11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'jx11y',
                    cn: '江西11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'sh11y',
                    cn: '上海11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'ah11y',
                    cn: '安徽11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hlj11y',
                    cn: '黑龙江11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'yn11y',
                    cn: '云南11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hub11y',
                    cn: '湖北11选5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                },
            ]
        },
        {
            title: 'PK10',
            list: [
                {
                    en: 'mcpk10',
                    cn: '摩臣PK10',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'bjpk10',
                    cn: '北京PK10',
                    path: '/lottery',
                    isNew: false,
                    isHot: true
                },
                {
                    en: 'xgpk10',
                    cn: '香港PK10',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }
            ]
        },
        {
            title: '快3',
            list: [
                {
                    en: 'mck3',
                    cn: '摩臣快3',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                },
                {
                    en: '',
                    cn: '摩臣骰宝',
                    otherPage: true,
                    path: 'https://www.',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'jsk3',
                    cn: '江苏快3',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'hnk3',
                    cn: '河南快3',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hbk3',
                    cn: '湖北快3',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'ahk3',
                    cn: '安徽快3',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }
            ]
        },
        {
            title: '3D/低频',
            list: [
                {
                    en: 'mc3d',
                    cn: '摩臣3D',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'shssl',
                    cn: '上海时时乐',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                },
                {
                    en: '3dfc',
                    cn: '福彩3D',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'tcp3',
                    cn: '排列3',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'tcp5',
                    cn: '排列5',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                }
            ]
        },
        {
            title: '其他彩票',
            list: [
                {
                    en: 'sckl12',
                    cn: '四川快乐12',
                    path: '/lottery',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'hnky481',
                    cn: '河南快赢481',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'xglhc',
                    cn: '香港六合彩',
                    otherPage: true,
                    path: 'http://',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'jslhc',
                    cn: '极速六合彩',
                    path: '/lottery',
                    isNew: true,
                    isHot: false
                }
            ]
        }
    ]
    otherListData = {
        title: '其他游戏',
        list: [
            {
                cn: '真人娱乐',
                path: '/live',
                icon: 'all-game__other-live-icon'
            },
            {
                cn: '捕鱼王',
                path: '/fish',
                icon: 'all-game__other-fish-icon'
            },
            {
                cn: '老虎机',
                path: '/slot',
                icon: 'all-game__other-slot-icon'
            },
            {
                cn: '体育',
                path: '/sport',
                icon: 'all-game__other-sport-icon'
            },
            {
                cn: '棋牌',
                path: '/poker',
                icon: 'all-game__other-poker-icon'
            }
        ]
    }
    render() {
        const { history, linkToLottery } = this.props;
        const LotteryItem = ({ itemObj }) => {
            const { en, cn, path, otherPage, isNew, isHot } = itemObj;
            if (otherPage) {
                return (
                    <Link className="fl" to={path}>
                        <span>{cn}</span>
                        {isNew ? <i className="all-game__new-icon"></i> : null}
                        {isHot ? <i className="all-game__hot-icon"></i> : null}
                    </Link>);
            }
            return (
                <a href="javascript: void(0);" className="fl" onClick={() => linkToLottery(en, history, '/lottery')}>
                    <span>{cn}</span>
                    {isNew ? <i className="all-game__new-icon"></i> : null}
                    {isHot ? <i className="all-game__hot-icon"></i> : null}
                </a>
            );
        };
        const LotteryItems = ({ listArr }) => {
            return listArr.map(item => {
                const { en } = item;
                return <LotteryItem key={en} itemObj={item} />
            });
        };
        const LotteryList = ({ listObj }) => {
            const { title, list } = listObj;
            return (
                <div className="clearfix all-game__lottery-list">
                    <div className="fl all-game__lottery-list-title">{title}</div>
                    <div className="fr clearfix all-game__lottery-list-items">
                        <LotteryItems listArr={list} />
                    </div>
                </div>
            );
        };
        const LotteryLists = ({ listsArr }) => {
            return listsArr.map((listObj, index) => {
                return <LotteryList key={index} listObj={listObj} />
            });
        };
        const OtherItem = ({ itemObj }) => {
            const { cn, path, icon } = itemObj;
            return (
                <Link className="fl" to={path}>
                    <i className={icon}></i>
                    <span>{cn}</span>
                </Link>
            );
        };
        const OtherItems = ({ listArr }) => {
            return listArr.map(item => {
                const { cn } = item;
                return <OtherItem key={cn} itemObj={item} />
            });
        };
        const OtherList = ({ listObj }) => {
            const { title, list } = listObj;
            return (
                <div className="all-game__other-list">
                    <div className="fl all-game__other-list-title">{title}</div>
                    <div className="fr clearfix all-game__other-list-items">
                        <OtherItems listArr={list} />
                    </div>
                </div>
            );
        };
        return (
            <div className="all-game-wrapper">
                <div className="all-game__lottery">
                    <LotteryLists listsArr={this.lotteryListData} />
                </div>
                <div className="all-game__divider"></div>
                <div className="all-game__other">
                    <OtherList listObj={this.otherListData} />
                </div>
            </div>
        );
    }
}

export default AllGameList;