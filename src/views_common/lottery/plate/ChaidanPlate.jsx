import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore')
@observer
class ChaidanPlate extends React.Component {
    render() {
        const { chaidanConfig, plateConfig, lotteryCode, lotteryType, method, selectedChaidanNums, selectChaidanNum, filterChaidanNum } = this.props.lotteryStore;
        const { pos, plate } = chaidanConfig;
        console.log(selectedChaidanNums.includes('{"cn":"牛大","en":"nn_nn_nn_nda"}'))
        const num = plate;
        if (!plateConfig[lotteryCode][method]) {
            return null;
        }
        const { filter, isQw, isLonghu, area } = plateConfig[lotteryCode][method]['plate'];
        let extraClass = '';
        if (isQw) {
            extraClass = 'qw';
        } else if (isLonghu) {
            extraClass = 'longhu';
        }
        return pos.map(val => {
            return (
                <div key={val} className="clearfix plate-item" lottery-type={lotteryType} lottery-code={lotteryCode}>
                    <div className={`fl plate-item-pos ${extraClass}`}>{val}</div>
                    <div className="fl clearfix plate-item-nums" method={method}>
                        {num.map(({ en, cn }) => {
                            let content = null;
                            let className = '';
                            if (isQw) {
                                content = ([<div key="1" className="qw-text" value={cn}></div>, <div key="2" className="qw-odd">1中3.67</div>]);
                                className = 'plate-item-num-qw';
                            } else if (isLonghu) {
                                const LonghuDots = ({ area }) => {
                                    return [...Array(5)].map((a, b) => {
                                        if (area.includes(b)) {
                                            return <b className="longhu-pos active"></b>;
                                        }
                                        return <b className="longhu-pos"></b>;
                                    });
                                };
                                content = (<div className="num-longhu-inner"><div className="longhu-pos-wrapper"><LonghuDots area={area} /></div><div className="longhu-text" value={cn}></div><div className="longhu-odd">1中3.67</div></div>);
                                className = 'plate-item-num-longhu';
                                return <div key={en} className={`fl ${className} ${selectedChaidanNums.some(o => o.cn === cn) ? 'active' : ''}`} m-method={en} value={cn} onClick={() => selectChaidanNum({ en, cn })}>{content}</div>;
                            } else {
                                content = cn;
                                className = 'plate-item-num';
                            }
                            return <div key={en} className={`fl ${className} ${selectedChaidanNums.some(o => o.cn === cn) ? 'active' : ''}`} m-method={en} onClick={() => selectChaidanNum({ en, cn })}>{content}</div>;
                        })}
                    </div>
                    <div className={`fr clearfix plate-item-filters ${extraClass}`}>
                        {filter.map(v => <div key={v} className="fr plate-item-filter" onClick={() => filterChaidanNum(v, num)}>{v}</div>)}
                    </div>
                </div>
            );
        });
    }
}

export default ChaidanPlate;