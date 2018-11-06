/**
 * Created by Orange on 2018-10-18 18:10:30.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore')
@observer
class K3Plate extends React.Component {
    render() {
        const { chaidanConfig, plateConfig, lotteryCode, lotteryType, method, selectedNums, selectNum, filterNum, selectedChaidanNums, selectChaidanNum, filterChaidanNum } = this.props.lotteryStore;
        if (!plateConfig[lotteryCode][method]) {
            return null;
        }
        if (chaidanConfig.chaidan) {
            const { pos = [], plate } = chaidanConfig;
            const num = plate;
            const { isChip, filter } = plateConfig[lotteryCode][method]['plate'];
            const ItemNum = ({ num, posVal, posIndex }) => {
                const ItemNumPick = ({ _num }) => {
                    return _num.map(({ en, cn }) => {
                        let chipTpl = cn;
                        if (isChip) {//选号盘用图片
                            const chipArr = cn.split('|');//'111|222' => [111,222]
                            const SubChip = ({ chip }) => {
                                const _arr = chip.split('');//'111' => ['1','1','1']
                                return _arr.map((a, i) => <div key={i} className="fl k3-chip" value={a}></div>);
                            };
                            chipTpl = chipArr.map(chip => <div key={chip} className="fl clearfix k3-chips" value={chip}><SubChip chip={chip} /></div>);
                            return <div key={cn} className={`fl clearfix k3-plate-item-num ${selectedChaidanNums.includes(JSON.stringify({ en, cn })) ? 'active' : ''}`} m_method={en} value={cn} onClick={() => selectChaidanNum({ en, cn })}>{chipTpl}</div>;
                        }
                        return <div key={cn} className={`fl clearfix plate-item-num ${selectedChaidanNums.includes(JSON.stringify({ en, cn })) ? 'active' : ''}`} m_method={en} value={cn} onClick={() => selectChaidanNum({ en, cn })}>{chipTpl}</div>;
                    });
                };
                if (typeof num.slice === 'function') {
                    return <ItemNumPick _num={num} />;
                }
                if (typeof num === 'object' && !typeof num.slice === 'function') {
                    return <ItemNumPick _num={num[posVal]} />;
                }
            };
            return pos.map((val, idx) => {
                return (
                    <div key={val} className="clearfix plate-item" lottery-type={lotteryType} lottery-code={lotteryCode}>
                        <div className="fl plate-item-pos">{val}</div>
                        <div className="fl clearfix plate-item-nums" method={method}>
                            <ItemNum num={num} posVal={val} posIndex={idx} />
                        </div>
                        <div className="fr clearfix plate-item-filters">
                            {filter.map(v => <div key={v} className="fr plate-item-filter" onClick={() => filterChaidanNum(v, num)}>{v}</div>)}
                        </div>
                    </div>
                );
            });
        } else {
            const { isChip, pos, num, filter = [] } = plateConfig[lotteryCode][method]['plate'];
            const ItemNum = ({ num, posVal, posIndex }) => {
                const ItemNumPick = ({ _num }) => {
                    return _num.map(v => {
                        let chipTpl = v;
                        if (isChip) {//选号盘用图片
                            const chipArr = v.split('|');//'111|222' => [111,222]
                            const SubChip = ({ chip }) => {
                                const _arr = chip.split('');//'111' => ['1','1','1']
                                return _arr.map((a, i) => <div key={i} className="fl k3-chip" value={a}></div>);
                            };
                            chipTpl = chipArr.map((chip, index) => <div key={index} className="fl clearfix k3-chips" value={chip}><SubChip chip={chip} /></div>);
                            return <div key={v} className={`fl clearfix k3-plate-item-num ${selectedNums[posIndex] && selectedNums[posIndex].includes(v) ? 'active' : ''}`} value={v} onClick={() => selectNum(posVal, posIndex, v, pos)}>{chipTpl}</div>;
                        }
                        return <div key={v} className={`fl clearfix plate-item-num ${selectedNums[posIndex] && selectedNums[posIndex].includes(v) ? 'active' : ''}`} value={v} onClick={() => selectNum(posVal, posIndex, v, pos)}>{chipTpl}</div>;
                    });
                };
                if (Array.isArray(num)) {
                    return <ItemNumPick _num={num} />;
                }
                if (typeof num === 'object' && !Array.isArray(num)) {
                    return <ItemNumPick _num={num[posVal]} />;
                }
            };
            return pos.map((val, idx) => {
                return (
                    <div key={val} className="clearfix plate-item" lottery-type={lotteryType} lottery-code={lotteryCode}>
                        <div className="fl plate-item-pos">{val}</div>
                        <div className="fl clearfix plate-item-nums" method={method}>
                            <ItemNum num={num} posVal={val} posIndex={idx} />
                        </div>
                        <div className="fr clearfix plate-item-filters">
                            {filter.map(v => <div key={v} className="fr plate-item-filter" onClick={() => filterNum(val, idx, v, num)}>{v}</div>)}
                        </div>
                    </div>
                );
            });
        }
    }
}

export default K3Plate;