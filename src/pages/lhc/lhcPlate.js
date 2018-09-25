import React from 'react';
import { Tabs, Icon, Radio, Button } from 'antd';
import config from './lhcConfig';
import tipConfig from './lhcTip';
import { calcSxArr } from '../../utils/algorithm';
import { inject, observer } from 'mobx-react';
import BetModal from './betModal';

const TabPane = Tabs.TabPane;

@inject('xglhcStore')
@observer
class SwitchOddDetail extends React.Component {
    render() {
        const { xglhcStore } = this.props;
        const { method } = xglhcStore;
        switch (method) {
            case 'tm_tm_sx':
            case 'zt1x_zt1x_zt1x':
            case 'tm_tm_sb':
            case 'tm_tm_dxds':
            case 'tm_tm_ws':
            case 'ztws_ztws_ztws':
                return (
                    <span className="switch-odd-detail">（A面：高奖金，低返点；B面：正常奖金，高返点）</span>
                );
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z3':
                return (
                    <span className="switch-odd-detail">（A面：高奖金，投注返点{xglhcStore.oddsObj[method] && (xglhcStore.oddsObj[method]['rateA'] * 100).toFixed(2)}%；B面：正常奖金，投注返点{xglhcStore.oddsObj[method] && (xglhcStore.oddsObj[method]['rateB'] * 100).toFixed(2)}%）</span>
                );
            case 'lm_lm_3z2':
                return (
                    <span className="switch-odd-detail">（{xglhcStore.AorB}面：中2个号码奖金赔率{xglhcStore.oddsObj[method + '_z2'][`bonus${xglhcStore.AorB}`]}~{(xglhcStore.oddsObj[method + '_z2'][`rate${xglhcStore.AorB}`] * 100).toFixed(2)}%；中3个号码奖金赔率{xglhcStore.oddsObj[method] && xglhcStore.oddsObj[method][`bonus${xglhcStore.AorB}`]}~{(xglhcStore.oddsObj[method] && xglhcStore.oddsObj[method][`rate${xglhcStore.AorB}`] * 100).toFixed(2)}%）</span>
                );
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
                return (
                    <span className="switch-odd-detail">（{xglhcStore.AorB}面：注单包含{xglhcStore.cnBmnsx}，奖金赔率{xglhcStore.oddsObj[method + '_bnsx'][`bonus${xglhcStore.AorB}`]}~{(xglhcStore.oddsObj[method + '_bnsx'][`rate${xglhcStore.AorB}`] * 100).toFixed(2)}%；注单不包含{xglhcStore.cnBmnsx}，奖金赔率{xglhcStore.oddsObj[method] && xglhcStore.oddsObj[method][`bonus${xglhcStore.AorB}`]}~{(xglhcStore.oddsObj[method] && xglhcStore.oddsObj[method][`rate${xglhcStore.AorB}`] * 100).toFixed(2)}%）</span>
                );
            case 'hzdxds_hzdxds_hzdxds':
                const genText = (arr, AOrB) => {
                    return arr.map((obj) => {
                        const { cn, m_method } = obj;
                        return `${cn}${xglhcStore.oddsObj[m_method][`bonus${AOrB}`]}~${(xglhcStore.oddsObj[m_method][`rate${AOrB}`] * 100).toFixed(2)}%`;
                    }).join('，');
                }
                const _config = [
                    {
                        cn: '大',
                        m_method: 'hzdxds_hzdxds_hzdxds_da'
                    }, {
                        cn: '小',
                        m_method: 'hzdxds_hzdxds_hzdxds_xiao'
                    }, {
                        cn: '单',
                        m_method: 'hzdxds_hzdxds_hzdxds_dan'
                    }, {
                        cn: '双',
                        m_method: 'hzdxds_hzdxds_hzdxds_shuang'
                    }
                ];
                return (
                    <span className="switch-odd-detail">（A面：{genText(_config, 'A')}；B面：{genText(_config, 'B')}）</span>
                );
            default:
                return null;
        }
    }
}

@inject('xglhcStore')
@observer
class SwitchOdd extends React.Component {
    render() {
        const { switchOddType, method, lotteryType } = this.props.xglhcStore;
        return (
            <div className="switch-odd-wrapper">
                <Icon
                    type="question-circle"
                    title={tipConfig[lotteryType][method]['title']}
                    theme="filled"
                    style={{
                        color: 'orange',
                        cursor: 'pointer'
                    }} />
                <span className="switch-odd-title">玩法说明</span>
                <Radio.Group
                    className="switch-odd-tabs"
                    defaultValue="A"
                    buttonStyle="solid"
                    onChange={switchOddType}>
                    <Radio.Button value="A">A面</Radio.Button>
                    <Radio.Button value="B">B面</Radio.Button>
                </Radio.Group>
                <SwitchOddDetail />
            </div>
        );
    }
}

@inject('xglhcStore')
@observer
class PlateHtml extends React.Component {
    render() {
        const { oddsObj, method, AorB, filteredNums, fillPlateInput, inputValuesObj, cnBmnsx, calcOdd, clickToSelectNum, clickToSelectedObj } = this.props.xglhcStore;
        const NumHtml = ({ numArr }) => {
            if (!numArr) return null;
            return numArr.map((num, index) => {
                return (
                    <div className={`fl plate-rel-num plate-item-num-${num}`} key={index}>{num}</div>
                );
            });
        };
        const HintHtml = ({ hint }) => {
            if (!hint) return null;
            return (
                <div className="fl plate-item-hint">{hint}</div>
            );
        };

        const Itemhtml = ({ item }) => {
            return (
                <div className={`clearfix plate-item  ${filteredNums.includes(item.en) ? 'on' : ''}`}>
                    <div className="fl plate-item-num" en={item.en} cn={item.cn}>{item.cn}</div>
                    <div className="fl plate-item-odd" en={item.en} cn={item.cn}>x&nbsp;<em>{calcOdd(oddsObj, method, item.en, AorB)}</em></div>
                    <HintHtml hint={item.hint} />
                    <NumHtml numArr={item.code} />
                    <input className="fr plate-item-input" value={inputValuesObj[item.en]} onChange={(event) => fillPlateInput(item.en, event)} />
                </div>
            );
        };
        const Listhtml = ({ arr }) => arr.map(item => {
            return <Itemhtml item={item} key={item.en} />;
        });
        const TitleHtml = () => {
            return (
                <div className="clearfix plate-item-title">
                    <div className="fl plate-item-title-left">选号</div>
                    <div className="fr plate-item-title-right">投注金额</div>
                </div>
            );
        };
        const TotalHtml = ({ configArr }) => configArr.map((arr, index) => {
            return (
                <div className="fl plate-item-wrapper" method={method} key={index}>
                    <TitleHtml />
                    <Listhtml arr={arr} />
                </div>
            );
        });
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
                let zxArr = Array(49)
                    .fill(0)
                    .map((value, index) => {
                        return {
                            'cn': `0${index + 1}`.slice(-2),
                            'en': `0${index + 1}`.slice(-2)
                        };
                    });
                zxArr = [
                    zxArr.slice(0, 10),
                    zxArr.slice(10, 20),
                    zxArr.slice(20, 30),
                    zxArr.slice(30, 40),
                    zxArr.slice(40, 49)
                ];
                return <TotalHtml configArr={zxArr} />;
            case 'tm_tm_sx':
            case 'zt1x_zt1x_zt1x':
                const sxArr = [calcSxArr(cnBmnsx).slice(0, 6), calcSxArr(cnBmnsx).slice(6, 12)];
                return <TotalHtml configArr={sxArr} />;
            case 'tm_tm_sb':
                const sbArr = [
                    [{
                        'cn': '红',
                        'en': 'hong',
                        'type': '色波选号'
                    }],
                    [{
                        'cn': '蓝',
                        'en': 'lan',
                        'type': '色波选号'
                    }],
                    [{
                        'cn': '绿',
                        'en': 'lv',
                        'type': '色波选号'
                    }]
                ];
                const bsbArr = [
                    [{
                        'cn': '红大',
                        'en': 'hongda',
                        'code': ['29', '30', '34', '35', '40', '45', '46'],
                        'type': '半波选号'
                    },
                    {
                        'cn': '红小',
                        'en': 'hongxiao',
                        'code': ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24']
                    },
                    {
                        'cn': '红单',
                        'en': 'hongdan',
                        'code': ['01', '07', '13', '19', '23', '29', '35', '45']
                    },
                    {
                        'cn': '红双',
                        'en': 'hongshuang',
                        'code': ['02', '08', '12', '18', '24', '30', '34', '40', '46']
                    },
                    {
                        'cn': '蓝大',
                        'en': 'landa',
                        'code': ['25', '26', '31', '36', '37', '41', '42', '47', '48']
                    },
                    {
                        'cn': '蓝小',
                        'en': 'lanxiao',
                        'code': ['03', '04', '09', '10', '14', '15', '20']
                    }
                    ],
                    [{
                        'cn': '蓝单',
                        'en': 'landan',
                        'code': ['03', '09', '15', '25', '31', '37', '41', '47']
                    },
                    {
                        'cn': '蓝双',
                        'en': 'lanshuang',
                        'code': ['04', '10', '14', '20', '26', '36', '42', '48']
                    },
                    {
                        'cn': '绿大',
                        'en': 'lvda',
                        'code': ['27', '28', '32', '33', '38', '39', '43', '44', '49']
                    },
                    {
                        'cn': '绿小',
                        'en': 'lvxiao',
                        'code': ['05', '06', '11', '16', '17', '21', '22']
                    },
                    {
                        'cn': '绿单',
                        'en': 'lvdan',
                        'code': ['05', '11', '17', '21', '27', '33', '39', '43', '49']
                    },
                    {
                        'cn': '绿双',
                        'en': 'lvshuang',
                        'code': ['06', '16', '22', '28', '32', '38', '44']
                    }
                    ]
                ];
                return (
                    <React.Fragment>
                        <TotalHtml configArr={sbArr} />
                        <TotalHtml configArr={bsbArr} />
                    </React.Fragment>
                );
            case 'tm_tm_dxds':
                const dxdsArr = [
                    [{
                        'cn': '大',
                        'en': 'da',
                        'hint': '(25-49为大)'
                    }, {
                        'cn': '小',
                        'en': 'xiao',
                        'hint': '(01-24为小)'
                    }],
                    [{
                        'cn': '单',
                        'en': 'dan'
                    }, {
                        'cn': '双',
                        'en': 'shuang'
                    }]
                ];
                return <TotalHtml configArr={dxdsArr} />;
            case 'tm_tm_ws':
            case 'ztws_ztws_ztws':
                const wsArr = [
                    [{
                        'cn': '0尾',
                        'en': '0w',
                        'code': ['10', '20', '30', '40']
                    },
                    {
                        'cn': '1尾',
                        'en': '1w',
                        'code': ['01', '11', '21', '31', '41']
                    },
                    {
                        'cn': '2尾',
                        'en': '2w',
                        'code': ['02', '12', '22', '32', '42']
                    },
                    {
                        'cn': '3尾',
                        'en': '3w',
                        'code': ['03', '13', '23', '33', '43']
                    },
                    {
                        'cn': '4尾',
                        'en': '4w',
                        'code': ['04', '14', '24', '34', '44']
                    }
                    ],
                    [{
                        'cn': '5尾',
                        'en': '5w',
                        'code': ['05', '15', '25', '35', '45']
                    },
                    {
                        'cn': '6尾',
                        'en': '6w',
                        'code': ['06', '16', '26', '36', '46']
                    },
                    {
                        'cn': '7尾',
                        'en': '7w',
                        'code': ['07', '17', '27', '37', '47']
                    },
                    {
                        'cn': '8尾',
                        'en': '8w',
                        'code': ['08', '18', '28', '38', '48']
                    },
                    {
                        'cn': '9尾',
                        'en': '9w',
                        'code': ['09', '19', '29', '39', '49']
                    }
                    ]
                ];
                return <TotalHtml configArr={wsArr} />;
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
                const lxArr = calcSxArr(cnBmnsx);
                return lxArr.map((item, index) => {
                    const {
                        en,
                        cn,
                        code
                    } = item;

                    return (
                        <div key={index} onClick={() => clickToSelectNum(en)} className={`fl click-num-item ${clickToSelectedObj[en] ? 'on' : ''}`} method={method} m_method={`${method}_${en}`} en={en} cn={cn} bnsx={cn === cnBmnsx ? 'yes' : ''}>
                            <span className={`click-num-item-text plate-item-num-${en}`}>{cn}</span>
                            {code.map((num, index) => {
                                return (
                                    <div className={`plate-rel-num plate-item-num-${num}`} key={index}>{num}</div>
                                );
                            })}
                        </div>
                    );
                });
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                let lmArr = Array(49).fill(0).map((value, index) => {
                    return {
                        'cn': `0${index + 1}`.slice(-2),
                        'en': `0${index + 1}`.slice(-2)
                    };
                });
                lmArr = [
                    lmArr.slice(0, 10),
                    lmArr.slice(10, 20),
                    lmArr.slice(20, 30),
                    lmArr.slice(30, 40),
                    lmArr.slice(40, 49)
                ];
                const LmItemHtml = ({ numArr }) => numArr.map(numObj => {
                    const {
                        en,
                        cn,
                    } = numObj;
                    return (
                        <div onClick={() => clickToSelectNum(en)} className={`click-num-item ${clickToSelectedObj[en] ? 'on' : ''}`} method={method} en={en} cn={cn}>
                            <span className={`click-num-item-text plate-item-num-${en}`}>{cn}</span>
                        </div>
                    );
                });
                return lmArr.map(numArr => {
                    return (
                        <div className="fl plate-item-wrapper" method={method}>
                            <LmItemHtml numArr={numArr} />
                        </div>
                    );
                });
            case 'hzdxds_hzdxds_hzdxds':
                const hzdxdsArr = [{
                    'cn': '大',
                    'en': 'da',
                }, {
                    'cn': '小',
                    'en': 'xiao',
                },
                {
                    'cn': '单',
                    'en': 'dan'
                }, {
                    'cn': '双',
                    'en': 'shuang'
                }
                ];
                return hzdxdsArr.map((item, index) => {
                    const {
                        en,
                        cn,
                    } = item;

                    return (
                        <div key={index} onClick={() => clickToSelectNum(en)} className={`fl click-num-item ${clickToSelectedObj[en] ? 'on' : ''}`} method={method} m_method={`${method}_${en}`} en={en} cn={cn}>
                            <span className={`click-num-item-text plate-item-num-${en}`}>{cn}</span>
                        </div>
                    );
                });
            default:
                return null;
        }
    }
}

@inject('xglhcStore')
@observer
class SxFilterHtml extends React.Component {
    render() {
        const { method, filterNum, filterArr, cnBmnsx } = this.props.xglhcStore;
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                const filterSxArr = calcSxArr(cnBmnsx);
                return (
                    <div className="filter-num-zodiac clearfix">
                        {
                            filterSxArr.map((item, index) => {
                                return <div key={index} className={`fl filter-num-zodiac-${item['en']} ${filterArr.includes(item['cn']) ? 'on' : ''}`} onClick={(event) => filterNum(item['cn'], event)} filter={item['code']}>{item['cn']}</div>
                            })
                        }
                    </div>
                );
            default:
                return null;
        }
    }
}

@inject('xglhcStore')
@observer
class FilterHtml extends React.Component {
    render() {
        const { method, filterNum, filterArr, filterInputValue, fillFilteredInput, resetPlate, resetButtonClicked } = this.props.xglhcStore;
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
                return (
                    <div className={`filter-num-wrap-${method} fr`}>
                        <div className={`filter-num-title-${method}`}>快速筛号</div>
                        <div className="filter-num-red clearfix">
                            <div className={`filter-num-red-da fl ${filterArr.includes('红大') ? 'on' : ''}`} onClick={(event) => filterNum('红大', event)}>红大</div>
                            <div className={`filter-num-red-xiao fl ${filterArr.includes('红小') ? 'on' : ''}`} onClick={(event) => filterNum('红小', event)}>红小</div>
                            <div className={`filter-num-red-dan fl ${filterArr.includes('红单') ? 'on' : ''}`} onClick={(event) => filterNum('红单', event)}>红单</div>
                            <div className={`filter-num-red-shuang fl ${filterArr.includes('红双') ? 'on' : ''}`} onClick={(event) => filterNum('红双', event)}>红双</div>
                        </div>
                        <div className="filter-num-blue clearfix">
                            <div className={`filter-num-blue-da fl ${filterArr.includes('蓝大') ? 'on' : ''}`} onClick={(event) => filterNum('蓝大', event)}>蓝大</div>
                            <div className={`filter-num-blue-xiao fl ${filterArr.includes('蓝小') ? 'on' : ''}`} onClick={(event) => filterNum('蓝小', event)}>蓝小</div>
                            <div className={`filter-num-blue-dan fl ${filterArr.includes('蓝单') ? 'on' : ''}`} onClick={(event) => filterNum('蓝单', event)}>蓝单</div>
                            <div className={`filter-num-blue-shuang fl ${filterArr.includes('蓝双') ? 'on' : ''}`} onClick={(event) => filterNum('蓝双', event)}>蓝双</div>
                        </div>
                        <div className="filter-num-green clearfix">
                            <div className={`filter-num-green-da fl ${filterArr.includes('绿大') ? 'on' : ''}`} onClick={(event) => filterNum('绿大', event)}>绿大</div>
                            <div className={`filter-num-green-xiao fl ${filterArr.includes('绿小') ? 'on' : ''}`} onClick={(event) => filterNum('绿小', event)}>绿小</div>
                            <div className={`filter-num-green-dan fl ${filterArr.includes('绿单') ? 'on' : ''}`} onClick={(event) => filterNum('绿单', event)}>绿单</div>
                            <div className={`filter-num-green-shuang fl ${filterArr.includes('绿双') ? 'on' : ''}`} onClick={(event) => filterNum('绿双', event)}>绿双</div>
                        </div>
                        <SxFilterHtml />
                        {['lm_lm_2z2', 'lm_lm_3z2', 'lm_lm_3z3'].includes(method) ? '' : <div className="filter-num-input-wrap">
                            <div className="filter-num-input-title">单注金额：</div>
                            <input className="filter-num-input" value={filterInputValue} onChange={event => fillFilteredInput(event.target.value)} />
                        </div>}
                        <div className="filter-num-reset" onClick={resetPlate}>
                            <i className={`filter-num-reset-icon ${resetButtonClicked ? 'rotate360' : ''}`}></i>重置
                        </div>
                    </div>
                );
            case 'tm_tm_sx':
            case 'zt1x_zt1x_zt1x':
                return (
                    <div className="filter-num-wrap fl clearfix" method={method}>
                        <div className={`fl filter-zodiac-tab filter-poultry-zodiac ${filterArr.includes('家禽家畜') ? 'on' : ''}`} onClick={(event) => filterNum('家禽家畜', event)}>家禽家畜</div>
                        <div className={`fl filter-zodiac-tab filter-wild-zodiac ${filterArr.includes('野外兽类') ? 'on' : ''}`} onClick={(event) => filterNum('野外兽类', event)}>野外兽类</div>
                        <div className="fl filter-num-input-title">单注金额：</div>
                        <input className="fl filter-num-input" value={filterInputValue} onChange={event => fillFilteredInput(event.target.value)} />
                    </div>
                );
            default:
                return null;
        }
    }
}

@inject('xglhcStore')
@observer
class PlateBottom extends React.Component {
    render() {
        const { plateType, clickPerInputValue, fillClickPerInputValue, totalBetCount, totalBetMoney, addOrder, showQuickBetModal, closeQuickBetModal, quickBet, quickBetModalShowed, quickOrderData, printOrderFlag, setPrintOrderFlag } = this.props.xglhcStore;
        return (
            <div className="clearfix plate-bottom-wrapper">
                <div className="fl plate-bottom-text">
                    {
                        plateType === 'click' ? (<span>单注金额：<input className="clickType-per-input" value={clickPerInputValue} onChange={fillClickPerInputValue} /></span>) : null
                    }
                    您选择了<em className="total-bet-count">{totalBetCount}</em>注，
                    共计<em className="total-bet-money">{totalBetMoney}</em>元
                </div>
                <div className="fl quick-submit-button">
                    <Button disabled={totalBetMoney <= 0} size="large" onClick={showQuickBetModal}>快速投注</Button>
                </div>
                <div className="fl add-num-button">
                    <Button disabled={totalBetMoney <= 0} size="large" onClick={addOrder}>添加选号</Button>
                </div>
                <BetModal
                    title="请确认投注香港六合彩"
                    centered={true}
                    visible={quickBetModalShowed}
                    okText="确定"
                    cancelText="取消"
                    onOk={quickBet}
                    onCancel={closeQuickBetModal}
                    orderData={quickOrderData}
                    orderTotalMoney={totalBetMoney}
                    printOrderFlag={printOrderFlag}
                    setPrintOrderFlag={setPrintOrderFlag}        
                />
            </div>
        );
    }
}

@inject('xglhcStore')
@observer
class PlateContent extends React.Component {
    render() {
        const { method } = this.props.xglhcStore;
        return (
            <div className="clearfix plate-list-wrapper" method={method}>
                <PlateHtml />
                <FilterHtml />
            </div>
        );
    }
}

@inject('xglhcStore')
@observer
class SubTabs extends React.Component {
    render() {
        const { xglhcStore } = this.props;
        const subConfig = this.props.subConfig;
        return (
            <div className="sub-tabs">
                {subConfig.map((subItem, index) => {
                    const list = subItem.list;
                    const ExtraContent = <div className="sub-tab-title">{subItem['title']}</div>;
                    return (
                        <div className="sub-tab-wrapper" key={index}>
                            <Tabs
                                defaultActiveKey={list[0]['method']}
                                animated={false}
                                onChange={xglhcStore.changeMethod}
                                tabBarExtraContent={ExtraContent}>
                                {list.map(item => {
                                    return (
                                        <TabPane tab={item['cnMethod']} key={item['method']}>
                                            <SwitchOdd />
                                            <PlateContent />
                                            <PlateBottom />
                                        </TabPane>
                                    );
                                })}
                            </Tabs>
                        </div>
                    );
                })}
            </div>
        );
    }
}

@inject('xglhcStore')
@observer
class PlateTabs extends React.Component {
    render() {
        const { xglhcStore } = this.props;
        return (
            <Tabs defaultActiveKey="0" animated={false} onChange={xglhcStore.tabChange}>
                {config.map((item, index) => {
                    return (
                        <TabPane tab={item.tab} key={index}>
                            <SubTabs subConfig={item.sub} />
                        </TabPane>
                    );
                })}
            </Tabs>
        );
    }
}

@inject('xglhcStore')
@observer
class LhcPlate extends React.Component {
    componentDidMount() {
        this
            .props
            .xglhcStore
            .getOddsObj();
    }
    render() {
        return (
            <div className="lhc-plate-wrapper">
                <div className="lhc-plate-tabs">
                    <PlateTabs />
                </div>
            </div>
        );
    }
}

export default LhcPlate;