/**
 * Created by Orange on 2018-09-29 10:17:35.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './allGameList.styl';

@withRouter
class AllGameList extends React.Component {
    state = {
        isShow: true
    }
    timer = null
    show = bool => {
        this.setState({
            isShow: bool
        });
        if (!bool) {
            this.timer = setTimeout(() => {
                this.setState({
                    isShow: !bool
                });
            }, 100);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    lotteryListData = [
        {
            title: '时时彩',
            list: [
                {
                    en: 'rdffc',
                    cn: '瑞典1分彩',
                    path: '/lottery/rdffc',
                    isNew: false,
                    isHot: true
                },
                {
                    en: 'rdlfc',
                    cn: '瑞典2分彩',
                    path: '/lottery/rdlfc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'rbssm',
                    cn: '日本30秒',
                    path: '/lottery/rbssm',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'wbgmmc',
                    cn: 'WBG秒秒彩',
                    path: '/lottery/wbgmmc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'wbgffc',
                    cn: 'WBG分分彩',
                    path: '/lottery/wbgffc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'wbg5fc',
                    cn: 'WBG5分彩',
                    path: '/lottery/wbg5fc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'cqssc',
                    cn: '重庆时时彩',
                    path: '/lottery/cqssc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'tjssc',
                    cn: '天津时时彩',
                    path: '/lottery/tjssc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'xjssc',
                    cn: '新疆时时彩',
                    path: '/lottery/xjssc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'xn5fc',
                    cn: '悉尼5分彩',
                    path: '/lottery/xn5fc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hn5fc',
                    cn: '河内5分彩',
                    path: '/lottery/hn5fc',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'qqssm',
                    cn: 'QQ30秒彩',
                    path: '/lottery/qqssm',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'txffc',
                    cn: '腾讯分分彩',
                    path: '/lottery/txffc',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'tx1fc',
                    cn: '腾讯1分彩',
                    path: '/lottery/tx1fc',
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
                    path: '/lottery/mc11y',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'gd11y',
                    cn: '广东11选5',
                    path: '/lottery/gd11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'sd11y',
                    cn: '山东11选5',
                    path: '/lottery/sd11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'jx11y',
                    cn: '江西11选5',
                    path: '/lottery/jx11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'sh11y',
                    cn: '上海11选5',
                    path: '/lottery/sh11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'ah11y',
                    cn: '安徽11选5',
                    path: '/lottery/ah11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hlj11y',
                    cn: '黑龙江11选5',
                    path: '/lottery/hlj11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'yn11y',
                    cn: '云南11选5',
                    path: '/lottery/yn11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hub11y',
                    cn: '湖北11选5',
                    path: '/lottery/hub11y',
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
                    path: '/lottery/mcpk10',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'bjpk10',
                    cn: '北京PK10',
                    path: '/lottery/bjpk10',
                    isNew: false,
                    isHot: true
                },
                {
                    en: 'xgpk10',
                    cn: '香港PK10',
                    path: '/lottery/xgpk10',
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
                    path: '/lottery/mck3',
                    isNew: true,
                    isHot: false
                },
                {
                    en: '',
                    cn: '摩臣骰宝',
                    otherPage: true,
                    path: '/diceGame',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'jsk3',
                    cn: '江苏快3',
                    path: '/lottery/jsk3',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'hnk3',
                    cn: '河南快3',
                    path: '/lottery/hnk3',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'hbk3',
                    cn: '湖北快3',
                    path: '/lottery/hbk3',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'ahk3',
                    cn: '安徽快3',
                    path: '/lottery/ahk3',
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
                    path: '/lottery/mc3d',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'shssl',
                    cn: '上海时时乐',
                    path: '/lottery/shssl',
                    isNew: true,
                    isHot: false
                },
                {
                    en: '3dfc',
                    cn: '福彩3D',
                    path: '/lottery/3dfc',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'tcp3',
                    cn: '排列3',
                    path: '/lottery/tcp3',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'tcp5',
                    cn: '排列5',
                    path: '/lottery/tcp5',
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
                    path: '/lottery/sckl12',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'hnky481',
                    cn: '河南快赢481',
                    path: '/lottery/hnky481',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'xglhc',
                    cn: '香港六合彩',
                    otherPage: true,
                    path: '/lhc',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'jslhc',
                    cn: '极速六合彩',
                    otherPage: true,
                    path: '/jslhc',
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
        const { history } = this.props;
        const LotteryItem = ({ itemObj }) => {
            const { en, cn, path, otherPage, isNew, isHot } = itemObj;
            return (
                <Link className="fl" to={path}>
                    <span onClick={() => this.show(false)}>{cn}</span>
                    {isNew ? <i className="all-game__new-icon"></i> : null}
                    {isHot ? <i className="all-game__hot-icon"></i> : null}
                </Link>
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
            this.state.isShow ? (
                <div className="all-game-wrapper">
                    <div className="all-game__lottery">
                        <LotteryLists listsArr={this.lotteryListData} />
                    </div>
                    <div className="all-game__divider"></div>
                    <div className="all-game__other">
                        <OtherList listObj={this.otherListData} />
                    </div>
                </div>
            ) : null
        );
    }
}

export default AllGameList;