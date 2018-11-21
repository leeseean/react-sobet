/**
 * Created by Orange on 2018-11-21 11:03:28.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore')
@observer
class DwdAllPos extends React.Component {//定位胆所有位置
    render() {
        const { method, selectedAllPosNums, selectAllPosNum, filterAllPosNum } = this.props.lotteryStore;
        const { num, pos, filter } = this.props;
        return (
            <div className="clearfix plate-item">
                <div className="fl plate-item-pos">所有位置</div>
                <div className="fl clearfix plate-item-nums" method={method}>
                    {num.map(v => {
                        return <div key={v} className={`fl plate-item-num ${(selectedAllPosNums && selectedAllPosNums.includes(v)) ? 'active' : ''}`} onClick={() => selectAllPosNum(v, pos)}>{v}</div>;
                    })}
                </div>
                <div className={`fr clearfix plate-item-filters`}>
                    {filter.map(v => <div key={v} className={`fr plate-item-filter`} onClick={() => filterAllPosNum(pos, v, num)}>{v}</div>)}
                </div>
            </div>
        );
    }
}

export default DwdAllPos;