/**
 * Created by Orange on 2018-10-16 14:55:52.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Checkbox } from 'antd';
import tipConfig from '../tipConfig';

@inject(stores => ({
    method: stores.plateStore.method,
    plateConfig: stores.plateStore.plateConfig,
    missShowFlag: stores.plateStore.missShowFlag,
    hotShowFlag: stores.plateStore.hotShowFlag,
    switchMiss: stores.plateStore.switchMiss,
    switchHot: stores.plateStore.switchHot,
    lotteryCode: stores.lotteryStore.lotteryCode,
    lotteryType: stores.lotteryStore.lotteryType,
}))
@observer
class TipAndHot extends React.Component {
    render() {
        const { method, plateConfig, lotteryType, lotteryCode, hotShowFlag, missShowFlag, switchMiss, switchHot } = this.props;
        return (
            <div className="clearfix tip-hot-wrapper">
                <div className="fl tip">
                    <span className="tip-title">
                        {plateConfig[lotteryCode][method]['name']}
                    </span>
                    <i className="tip-icon" title={tipConfig[lotteryType][method]['title']}></i>
                </div>
                <div className="fl miss-hot">
                    <span className="miss">
                        <Checkbox checked={missShowFlag} onChange={(e) => switchMiss(e.target.checked)} />
                        <em className="miss-text">遗漏</em>
                    </span>
                    <span className="hot">
                        <Checkbox checked={hotShowFlag} onChange={(e) => switchHot(e.target.checked)} />
                        <em className="hot-text">冷热</em>
                    </span>
                    <i className="miss-icon" title='遗漏：表示该号码从上次开出至今，有多少期未出现；冷热：表示在最近100期开奖中，该号码在对应的位置上出现的次数'></i>
                </div>
            </div>
        );
    }
}

export default TipAndHot;