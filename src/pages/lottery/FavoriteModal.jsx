import React from 'react';
import { Modal } from 'antd';
import './favoriteModal.styl';

class FavoriteModal extends React.Component {
    lotteryListData = [
        {
            title: '时时彩',
            list: [
                {
                    en: 'RDFFC',
                    cn: '瑞典1分彩',
                },
                {
                    en: 'RDLFC',
                    cn: '瑞典2分彩',
                }, {
                    en: 'RBSSM',
                    cn: '日本30秒',
                }, {
                    en: 'WBGMMC',
                    cn: 'WBG秒秒彩',
                }, {
                    en: 'WBGFFC',
                    cn: 'WBG分分彩',
                }, {
                    en: 'WBG5FC',
                    cn: 'WBG5分彩',
                }, {
                    en: 'CQSSC',
                    cn: '重庆时时彩',
                }, {
                    en: 'TJSSC',
                    cn: '天津时时彩',
                }, {
                    en: 'XJSSC',
                    cn: '新疆时时彩',
                }, {
                    en: 'XN5FC',
                    cn: '悉尼5分彩',
                }, {
                    en: 'HN5FC',
                    cn: '河内5分彩',
                }, {
                    en: 'QQSSM',
                    cn: 'QQ30秒彩',
                }, {
                    en: 'TXFFC',
                    cn: '腾讯分分彩',
                }, {
                    en: 'RD1FC',
                    cn: '腾讯1分彩',
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
                },
                {
                    en: 'GD11Y',
                    cn: '广东11选5',
                }, {
                    en: 'SD11Y',
                    cn: '山东11选5',
                    path: '/lottery/sd11y',
                }, {
                    en: 'JX11Y',
                    cn: '江西11选5',
                }, {
                    en: 'SH11Y',
                    cn: '上海11选5',
                }, {
                    en: 'AH11Y',
                    cn: '安徽11选5',
                }, {
                    en: 'HLJ11Y',
                    cn: '黑龙江11选5',
                }, {
                    en: 'YN11Y',
                    cn: '云南11选5',
                }, {
                    en: 'HUB11Y',
                    cn: '湖北11选5',
                },
            ]
        },
        {
            title: 'PK10',
            list: [
                {
                    en: 'MCPK10',
                    cn: '摩臣PK10',
                },
                {
                    en: 'BJPK10',
                    cn: '北京PK10',
                },
                {
                    en: 'XGPK10',
                    cn: '香港PK10',
                }
            ]
        },
        {
            title: '快3',
            list: [
                {
                    en: 'MCK3',
                    cn: '摩臣快3',
                },
                {
                    en: '',
                    cn: '摩臣骰宝',
                },
                {
                    en: 'JSK3',
                    cn: '江苏快3',
                },
                {
                    en: 'HNK3',
                    cn: '河南快3',
                }, {
                    en: 'HBK3',
                    cn: '湖北快3',
                }, {
                    en: 'AHK3',
                    cn: '安徽快3',
                }
            ]
        },
        {
            title: '3D/低频',
            list: [
                {
                    en: 'MC3D',
                    cn: '摩臣3D',
                },
                {
                    en: 'SHSSL',
                    cn: '上海时时乐',
                },
                {
                    en: '3DFC',
                    cn: '福彩3D',
                },
                {
                    en: 'TCP3',
                    cn: '排列3',
                }, {
                    en: 'TCP5',
                    cn: '排列5',
                }
            ]
        },
        {
            title: '其他彩票',
            list: [
                {
                    en: 'SCKL12',
                    cn: '四川快乐12',
                },
                {
                    en: 'HNKY481',
                    cn: '河南快赢481',
                },
                {
                    en: 'XGLHC',
                    cn: '香港六合彩',
                },
                {
                    en: 'JSLHC',
                    cn: '极速六合彩',
                }
            ]
        }
    ]
    render() {
        const { data, codeToCn, wrapClassName, centered, visible, footer, closable, toggleModalVisible, switchFavorite } = this.props;
        const LeftItem = ({ item }) => {
            const { lottery_code } = item;
            return (
                <dd>
                    <div><em>{codeToCn[lottery_code]}</em></div>
                </dd>
            );
        };
        const RightItem = ({ item }) => {
            const { title, list } = item;
            return (
                <div>
                    <div className="fl title">{title}</div>
                    <div className="fl content">
                        {
                            list.map(v => {
                                const { en, cn } = v;
                                const liked = data.some(_v => _v.lottery_code === en);
                                return (
                                    <div key={en} className="lotteryList">
                                        <div className={`div1 ${liked ? 'open1' : 'close1'}`} onClick={() => switchFavorite(en)}>
                                            <div className={`div2 ${liked ? 'open2' : 'close2'}`}></div>
                                        </div>
                                        {cn}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        };
        return (
            <Modal width="900px" {...{ wrapClassName, centered, visible, footer, closable }}>
                <div className="clearfix">
                <dl className="fl favorite-set-menu">
                    <dt><span className="icon-title"></span>常玩彩种</dt>
                    {
                        data.map(item => <LeftItem id={item.id} item={item} />)
                    }
                </dl>
                <div id="lotterySet" className="fl">
                    <p>请选择您最常玩的彩种(最多可选10个彩种)</p>
                    {
                        this.lotteryListData.map(item => <RightItem key={item.title} item={item} />)
                    }
                    <div className="saveLottery" onClick={() => toggleModalVisible(false)}>确定</div>
                </div>
                </div>
                <div className="close-btn" onClick={() => toggleModalVisible(false)}></div>
            </Modal>
        );
    }
}

export default FavoriteModal;