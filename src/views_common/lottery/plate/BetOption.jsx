/**
 * Created by Orange on 2018-10-23 15:30:10.
 **/

import React from 'react';
import { Radio, Select } from 'antd';
import InputNumber from '../InputNumberUpDown';
import '../inputNumberUpDown.styl';
import './betOption.styl';

class BetOption extends React.Component {
    render() {
        return (
            <div className="clearfix bet-option-wrapper">
                <div className="fl clearfix left-wrapper">
                    <div className="clearfix left-top-wrapper">
                        <div className="fl mode-select">
                            <Radio.Group defaultValue="2" size="small" buttonStyle="solid" onChange={() => {}}>
                                <Radio.Button value="2">2元</Radio.Button>
                                <Radio.Button value="1">1元</Radio.Button>
                                <Radio.Button value="0.2">2角</Radio.Button>
                                <Radio.Button value="0.1">1角</Radio.Button>
                                <Radio.Button value="0.02">2分</Radio.Button>
                                <Radio.Button value="0.002">2厘</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="fl piece-input">
                            <span className="text">倍数</span>
                            <InputNumber min="1" defaultValue="1" size="small" onChange={() => {}} />
                        </div>
                        <div className="fl odd-select">
                            <span className="text">奖金</span>
                            <Select size="small" defaultValue="9000 ~ 6.4%" onChange={() => {}}>
                                <Select.Option value="9640 ~ 0%">9640 ~ 0%</Select.Option>
                                <Select.Option value="9000 ~ 6.4%">9000 ~ 6.4%</Select.Option>
                            </Select>
                        </div>
                    </div>
                    <div className="clearfix left-bottom-wrapper">
                        您选择了<span className="count">0</span>注，共<span className="piece">0</span>倍，共计<span className="money">0.0</span>元
                    </div>
                </div>
                <div className="fr right-wrapper">
                    <div className="quick-bet disabled">快速投注</div>
                    <div className="add-order disabled">添加订单</div>
                </div>
            </div>
        );
    }
}

export default BetOption;