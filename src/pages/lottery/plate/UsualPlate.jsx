
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Input } from 'antd';

const { TextArea } = Input;

@inject(stores => ({
    plateConfig: stores.plateStore.plateConfig,
    method: stores.plateStore.method,
    lotteryCode: stores.lotteryStore.lotteryCode,
    lotteryType: stores.lotteryStore.lotteryType,
}))
@observer
class UsualPlate extends React.Component {
    render() {
        const { plateConfig, method, lotteryCode, lotteryType } = this.props;
        const { type, pos, num, isQw, isLonghu, area, filter = [] } = plateConfig[lotteryCode][method]['plate'];
        const ClickPlate = ({ pos, num, filter }) => {
            return pos.map(val => {
                return (
                    <div key={val} className="clearfix plate-item" lottery-type={lotteryType} lottery-code={lotteryCode}>
                        <div className="fl plate-item-pos">{val}</div>
                        <div className="fl clearfix plate-item-nums" method={method}>
                            {num.map(v => {
                                let content = null;
                                let className = '';
                                if (isQw) {
                                    content = ([<div key="1" className="qw-text" value={v}></div>, <div key="2" className="qw-odd">1中3.67</div>]);
                                    className = 'plate-item-num-qw';
                                } else if (isLonghu) {
                                    content = ([<div key="0" className="longhu-circle" value={v}></div>, <div key="1" className="longhu-text" value={v}></div>, <div key="2" className="longhu-odd">1中3.67</div>]);
                                    className = 'plate-item-num-longhu';
                                } else {
                                    content = v;
                                    className = 'plate-item-num';
                                }
                                return <div key={v} className={`fl ${className}`}>{content}</div>;
                            })}
                        </div>
                        <div className="fr clearfix plate-item-filters">
                            {filter.map(v => <div key={v} className="fr plate-item-filter">{v}</div>)}
                        </div>
                    </div>
                );
            });
        };
        const InputPlate = () => {
            return (
                <div className="input-plate-wrapper">
                    <ul className="clearfix input-value-list">
                        <li className="input-value-item">
                            <span className="text">2,3,4</span>
                            <i className="close">x</i>
                        </li>
                    </ul>
                    <TextArea onPressEnter={() => { }} placeholder="请输入投注号码，按空格或回车键确认选号" autosize={{ minRows: 3, maxRows: 6 }} />
                </div>
            );
        };
        const reflectConfig = {
            click: <ClickPlate {...{ pos, num, filter }} />,
            input: <InputPlate />
        };
        return (
            <div className="plate-wrapper">
                <div className="plate-wrapper-inner">
                    {reflectConfig[type]}
                </div>
            </div>
        );
    }
}

export default UsualPlate;