import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore')
@observer
class ChaidanPlate extends React.Component {
    render() {
        const { chaidanConfig, plateConfig, lotteryCode, lotteryType, method } = this.props.lotteryStore;
        const { pos, plate } = chaidanConfig;
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
                                return <div className={`fl ${className}`} m-method={en} value={cn}>{content}</div>;
                            } else {
                                content = cn;
                                className = 'plate-item-num';
                            }
                            return <div className={`fl ${className}`} m-method={en}>{content}</div>;
                        })}
                    </div>
                    <div className={`fr clearfix plate-item-filters ${extraClass}`}>
                        {filter.map(v => <div className="fr plate-item-filter">{v}</div>)}
                    </div>
                </div>
            );
        });
    }
}

export default ChaidanPlate;