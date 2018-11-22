import React from 'react';
import { inject, observer } from 'mobx-react';
import { calcSxArr } from '../../../utils/algorithm';

@inject('lhcStore')
@observer
class PlateHtml extends React.Component {
    render() {
        const { oddsObj, method, AorB, filteredNums, fillPlateInput, inputValuesObj, cnBmnsx, calcOdd, clickToSelectNum, clickToSelectedObj } = this.props.lhcStore;
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
                        <div key={en} onClick={() => clickToSelectNum(en)} className={`click-num-item ${clickToSelectedObj[en] ? 'on' : ''}`} method={method} en={en} cn={cn}>
                            <span className={`click-num-item-text plate-item-num-${en}`}>{cn}</span>
                        </div>
                    );
                });
                return lmArr.map((numArr, index) => {
                    return (
                        <div key={index} className="fl plate-item-wrapper" method={method}>
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

export default PlateHtml;