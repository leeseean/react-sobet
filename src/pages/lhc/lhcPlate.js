import React from 'react';
import {Tabs, Icon, Radio} from 'antd';
import config from './lhcConfig';
import calcSxArr from '../../utils/calcSxArr';
import {inject, observer} from 'mobx-react';

const TabPane = Tabs.TabPane;

@inject('xglhcStore')
@observer
class SwitchOddDetail extends React.Component {
    render() {
        const {xglhcStore} = this.props;
        const {method} = xglhcStore;
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
                    <span className="switch-odd-detail">（{xglhcStore.AorB}面：注单包含{xglhcStore.bmnsx}，奖金赔率{xglhcStore.oddsObj[method + '_bnsx'][`bonus${xglhcStore.AorB}`]}~{(xglhcStore.oddsObj[method + '_bnsx'][`rate${xglhcStore.AorB}`] * 100).toFixed(2)}%；注单不包含{xglhcStore.bmnsx}，奖金赔率{xglhcStore.oddsObj[method] && xglhcStore.oddsObj[method][`bonus${xglhcStore.AorB}`]}~{(xglhcStore.oddsObj[method] && xglhcStore.oddsObj[method][`rate${xglhcStore.AorB}`] * 100).toFixed(2)}%）</span>
                );
            case 'hzdxds_hzdxds_hzdxds':
                const genText = (arr, AOrB) => {
                    return arr.map((obj) => {
                        const {cn, m_method} = obj;
                        return `${cn}${xglhcStore.oddsObj[m_method][`bonus${AOrB}`]}~${ (xglhcStore.oddsObj[m_method][`rate${AOrB}`] * 100).toFixed(2)}%`;
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
        const {xglhcStore} = this.props;
        return (
            <div className="switch-odd-wrapper">
                <Icon
                    type="question-circle"
                    theme="filled"
                    style={{
                    color: 'orange'
                }}/>
                <span className="switch-odd-title">玩法说明</span>
                <Radio.Group
                    className="switch-odd-tabs"
                    defaultValue="A"
                    buttonStyle="solid"
                    onChange={xglhcStore.switchOddType}>
                    <Radio.Button value="A">A面</Radio.Button>
                    <Radio.Button value="B">B面</Radio.Button>
                </Radio.Group>
                <SwitchOddDetail/>
            </div>
        );
    }
}

@inject('xglhcStore')
@observer
class PlateHtml extends React.Component {
    render() {
        const {oddsObj, method, AorB} = this.props.xglhcStore;
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
                return zxArr.map((arr, index) => {
                    const Itemhtml = () => arr.map(item => {
                        return (
                            <div className="clearfix plate-item" key={item.en}>
                                <div className="fl plate-item-num" en={item.en} cn={item.cn}>{item.cn}</div>
                                <div className="fl plate-item-odd" en={item.en} cn={item.cn}>x&nbsp;<em>{oddsObj[method] && oddsObj[method][`bonus${AorB}`]}</em></div>
                                <input className="fr plate-item-input" type="number" min="1" max="999999"/>
                            </div>
                        );
                    });
                    return (
                        <div className="fl plate-item-wrapper" method={method} key={index}>
                            <div className="clearfix plate-item-title">
                                <div className="plate-item-title-left fl">选号</div>
                                <div className="plate-item-title-right fr">投注金额</div>
                            </div>
                            <Itemhtml/>
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
        const {method, filterNum, bmnsx} = this.props.xglhcStore;
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
                const filterSxArr = calcSxArr(bmnsx);
                return (
                    <div className="filter-num-zodiac clearfix">
                        {
                            filterSxArr.map((item, index) => {
                                return  <div key={index} className={`fl filter-num-zodiac-${item['en']}`} onClick={() => filterNum(item['cn'], event)} filter={item['code']}>{item['cn']}</div>
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
        const {method, filterNum} = this.props.xglhcStore;
        switch (method) {
            case 'tm_tm_zx':
            case 'zt1m_zt1m_zt1m':
                return (
                    <div className={`filter-num-wrap-${method} fr`}>
                        <div className={`filter-num-title-${method}`}>快速筛号</div>
                        <div className="filter-num-red clearfix">
                            <div className="filter-num-red-da fl" onClick={() => filterNum('红大', event)}>红大</div>
                            <div className="filter-num-red-xiao fl" onClick={() => filterNum('红小', event)}>红小</div>
                            <div className="filter-num-red-dan fl" onClick={() => filterNum('红单', event)}>红单</div>
                            <div className="filter-num-red-shuang fl" onClick={() => filterNum('红双', event)}>红双</div>
                        </div>
                        <div className="filter-num-blue clearfix">
                            <div className="filter-num-blue-da fl" onClick={() => filterNum('蓝大', event)}>蓝大</div>
                            <div className="filter-num-blue-xiao fl" onClick={() => filterNum('蓝小', event)}>蓝小</div>
                            <div className="filter-num-blue-dan fl" onClick={() => filterNum('蓝单', event)}>蓝单</div>
                            <div className="filter-num-blue-shuang fl" onClick={() => filterNum('蓝双', event)}>蓝双</div>    
                        </div>
                        <div className="filter-num-green clearfix">
                            <div className="filter-num-green-da fl" onClick={() => filterNum('绿大', event)}>绿大</div>
                            <div className="filter-num-green-xiao fl" onClick={() => filterNum('绿小', event)}>绿小</div>
                            <div className="filter-num-green-dan fl" onClick={() => filterNum('绿单', event)}>绿单</div>
                            <div className="filter-num-green-shuang fl" onClick={() => filterNum('绿双', event)}>绿双</div>    
                        </div>
                        <SxFilterHtml/>
                        <div className="filter-num-input-wrap">
                            <div className="filter-num-input-title">单注金额：</div>
                            <input className="filter-num-input" type="number" min="1" max="999999"/>   
                        </div>
                        <div className="filter-num-reset">
                            <i className="filter-num-reset-icon"></i>重置
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }
}

@inject('xglhcStore')
@observer
class PlateContent extends React.Component {
    render() {
        return (
            <div className="clearfix plate-list-wrapper">
                <PlateHtml/>
                <FilterHtml/>
            </div>
        );
    }
}

@inject('xglhcStore')
@observer
class SubTabs extends React.Component {
    render() {
        const {xglhcStore} = this.props;
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
                                            <SwitchOdd method={item['method']}/>
                                            <PlateContent method={item['method']}/>
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
        const {xglhcStore} = this.props;
        return (
            <Tabs defaultActiveKey="0" animated={false} onChange={xglhcStore.tabChange}>
                {config.map((item, index) => {
                    return (
                        <TabPane tab={item.tab} key={index}>
                            <SubTabs subConfig={item.sub}/>
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
                    <PlateTabs/>
                </div>
            </div>
        );
    }
}

export default LhcPlate;