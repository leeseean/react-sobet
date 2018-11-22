import React from 'react';
import { inject, observer } from 'mobx-react';
import SxFilterHtml from './SxFilterHtml.jsx';

@inject('lhcStore')
@observer
class FilterHtml extends React.Component {
    render() {
        const { method, filterNum, filterArr, filterInputValue, fillFilteredInput, resetPlate, resetButtonClicked } = this.props.lhcStore;
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

export default FilterHtml;