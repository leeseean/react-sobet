import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('xglhcStore')
@observer
class SwitchOddDetail extends React.Component {
    render() {
        const { method, oddsObj, AorB, cnBmnsx, } = this.props.xglhcStore;
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
                    <span className="switch-odd-detail">（A面：高奖金，投注返点{oddsObj[method] && (oddsObj[method]['rateA'] * 100).toFixed(2)}%；B面：正常奖金，投注返点{oddsObj[method] && (oddsObj[method]['rateB'] * 100).toFixed(2)}%）</span>
                );
            case 'lm_lm_3z2':
                return (
                    <span className="switch-odd-detail">（{AorB}面：中2个号码奖金赔率{oddsObj[method + '_z2'][`bonus${AorB}`]}~{(oddsObj[method + '_z2'][`rate${AorB}`] * 100).toFixed(2)}%；中3个号码奖金赔率{oddsObj[method] && oddsObj[method][`bonus${AorB}`]}~{(oddsObj[method] && oddsObj[method][`rate${AorB}`] * 100).toFixed(2)}%）</span>
                );
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
                return (
                    <span className="switch-odd-detail">（{AorB}面：注单包含{cnBmnsx}，奖金赔率{oddsObj[method + '_bnsx'][`bonus${AorB}`]}~{(oddsObj[method + '_bnsx'][`rate${AorB}`] * 100).toFixed(2)}%；注单不包含{cnBmnsx}，奖金赔率{oddsObj[method] && oddsObj[method][`bonus${AorB}`]}~{(oddsObj[method] && oddsObj[method][`rate${AorB}`] * 100).toFixed(2)}%）</span>
                );
            case 'hzdxds_hzdxds_hzdxds':
                const genText = (arr, AOrB) => {
                    return arr.map((obj) => {
                        const { cn, m_method } = obj;
                        return `${cn}${oddsObj[m_method][`bonus${AOrB}`]}~${(oddsObj[m_method][`rate${AOrB}`] * 100).toFixed(2)}%`;
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

export default SwitchOddDetail;