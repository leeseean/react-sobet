/**
 * Created by Orange on 2018-09-29 10:17:35.
 */

import React from 'react';

class AllGameList extends React.Component {
    LotteryListData = [
        {
            title: '时时彩',
            list: [
                {
                    en: 'RDFFC',
                    cn: '瑞典1分彩',
                    path: '/lottery/rdffc',
                    isNew: false,
                    isHot: true
                },
                {
                    en: 'RDLFC',
                    cn: '瑞典2分彩',
                    path: '/lottery/rdlfc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'RBSSM',
                    cn: '日本30秒',
                    path: '/lottery/rbssm',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'WBGMMC',
                    cn: 'WBG秒秒彩',
                    path: '/lottery/wbgmmc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'WBGFFC',
                    cn: 'WBG分分彩',
                    path: '/lottery/wbgffc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'WBG5FC',
                    cn: 'WBG5分彩',
                    path: '/lottery/wbg5fc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'CQSSC',
                    cn: '重庆时时彩',
                    path: '/lottery/cqssc',
                    isNew: false,
                    isHot: true
                }, {
                    en: 'TJSSC',
                    cn: '天津时时彩',
                    path: '/lottery/tjssc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'XJSSC',
                    cn: '新疆时时彩',
                    path: '/lottery/xjssc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'XN5FC',
                    cn: '悉尼5分彩',
                    path: '/lottery/xn5fc',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'HN5FC',
                    cn: '河内5分彩',
                    path: '/lottery/hn5fc',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'QQSSM',
                    cn: 'QQ30秒彩',
                    path: '/lottery/qqssm',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'TXFFC',
                    cn: '腾讯分分彩',
                    path: '/lottery/txffc',
                    isNew: true,
                    isHot: false
                }, {
                    en: 'RD1FC',
                    cn: '腾讯1分彩',
                    path: '/lottery/rd1fc',
                    isNew: true,
                    isHot: false
                }
            ]
        },
        {
            title: '11选5',
            list: [
                {
                    en: 'MC11Y',
                    cn: '摩臣11选5',
                    path: '/lottery/mc11y',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'GD11Y',
                    cn: '广东11选5',
                    path: '/lottery/gd11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'SD11Y',
                    cn: '山东11选5',
                    path: '/lottery/sd11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'JX11Y',
                    cn: '江西11选5',
                    path: '/lottery/jx11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'SH11Y',
                    cn: '上海11选5',
                    path: '/lottery/sh11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'AH11Y',
                    cn: '安徽11选5',
                    path: '/lottery/ah11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'HLJ11Y',
                    cn: '黑龙江11选5',
                    path: '/lottery/hlj11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'YN11Y',
                    cn: '云南11选5',
                    path: '/lottery/yn11y',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'HUB11Y',
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
                    en: 'MCPK10',
                    cn: '摩臣PK10',
                    path: '/lottery/mcpk10',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'BJPK10',
                    cn: '北京PK10',
                    path: '/lottery/bjpk10',
                    isNew: false,
                    isHot: true
                },
                {
                    en: 'XGPK10',
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
                    en: 'MCK3',
                    cn: '摩臣快3',
                    path: '/lottery/mck3',
                    isNew: true,
                    isHot: false
                },
                {
                    en: '',
                    cn: '摩臣骰宝',
                    path: 'https://www.',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'JSK3',
                    cn: '江苏快3',
                    path: '/lottery/jsk3',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'HNK3',
                    cn: '河南快3',
                    path: '/lottery/hnk3',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'HBK3',
                    cn: '湖北快3',
                    path: '/lottery/hbk3',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'AHK3',
                    cn: '安徽快3',
                    path: '/lottery/ahk3',
                    isNew: false,
                    isHot: false
                }
            ]
        },
        {
            type: '3d',
            title: '3D/低频',
            list: [
                {
                    en: 'MC3D',
                    cn: '摩臣3D',
                    path: '/lottery/mc3d',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'SHSSL',
                    cn: '上海时时乐',
                    path: '/lottery/shssl',
                    isNew: true,
                    isHot: false
                },
                {
                    en: '3DFC',
                    cn: '福彩3D',
                    path: '/lottery/3dfc',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'TCP3',
                    cn: '排列3',
                    path: '/lottery/tcp3',
                    isNew: false,
                    isHot: false
                }, {
                    en: 'TCP5',
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
                    en: 'SCKL12',
                    cn: '四川快乐12',
                    path: '/lottery/sckl12',
                    isNew: false,
                    isHot: false
                },
                {
                    en: 'HNKY481',
                    cn: '河南快赢481',
                    path: '/lottery/hnky481',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'XGLHC',
                    cn: '香港六合彩',
                    path: 'http://',
                    isNew: true,
                    isHot: false
                },
                {
                    en: 'JSLHC',
                    cn: '极速六合彩',
                    path: '/lottery/jslhc',
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
        const LotteryItem = ({ itemObj }) => {
            const { cn, path, isNew, isHot } = itemObj;
            return (
                <a className="fl" href={path}>
                    <span>{cn}</span>
                    {isNew ? <i></i> : null}
                    {isHot ? <i></i> : null}
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
                <div className="all-game__lottery-list">
                    <div className="fl">{title}</div>
                    <div className="fl clearfix">
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
                <a className="fl" href={path}>
                    <i className={icon}></i>
                    <span>{cn}</span>
                </a>
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
                    <div className="fl">{title}</div>
                    <div className="fl clearfix">
                        <OtherItems listArr={list} />
                    </div>
                </div>
            );
        };
        return (
            <div className="all-game-wrapper">
                <div className="all-game__lottery">
                    <LotteryLists listsArr={this.LotteryListData} />
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