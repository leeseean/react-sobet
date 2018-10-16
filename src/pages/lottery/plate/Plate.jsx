/**
 * Created by Orange on 2018-10-16 14:46:33.
 */

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
class Plate extends React.Component {
    render() {
        const { plateConfig, method, lotteryCode, lotteryType } = this.props;
        const { type, pos, num, filter = [] } = plateConfig[lotteryCode][method]['plate'];
        filter.reverse();
        const ClickPlate = ({ pos, num, filter }) => {
            return pos.map(val => {
                return (
                    <div key={val} className="clearfix plate-item">
                        <div className="fl plate-item-pos">{val}</div>
                        <div className="fl clearfix plate-item-nums">
                            {num.map(v => <div className="fl plate-item-num">{v}</div>)}
                        </div>
                        <div className="fr clearfix plate-item-filters">
                            {filter.map(v => <div className="fr plate-item-filter">{v}</div>)}
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

export default Plate;