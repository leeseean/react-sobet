/**
 * Created by Orange on 2018-10-16 14:55:52.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Checkbox } from 'antd';
import tipConfig from '../tipConfig';

@inject('lotteryStore')
@observer
class TipAndHot extends React.Component {
    render() {
        const { method, plateConfig, lotteryType, lotteryCode, posSelectChange, hotShowFlag, missShowFlag, switchMiss, switchHot, hitFrequency } = this.props.lotteryStore;
        if (!plateConfig[lotteryCode][method]) {
            return null;
        }
        const { name, posSelect } = plateConfig[lotteryCode][method];

        return (
            <React.Fragment>
                {
                    (hitFrequency && hitFrequency.length > 0) ? (
                        <div className="clearfix tip-hot-wrapper">
                            <div className="fl tip">
                                <span className="tip-title">
                                    {name}
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
                    ) : null
                }

                {
                    posSelect ? (<div className="clearfix pos-select-wrapper">
                        <div className="fl pos-select-title">选择位置</div>
                        <div className="fl pos-select-list">
                            <Checkbox.Group options={posSelect} defaultValue={posSelect} onChange={posSelectChange} />
                        </div>
                        <div className="fl pos-select-tip">注意：此处默认选择所有位置，请您自行调整。</div>
                    </div>) : null
                }
            </React.Fragment>
        );
    }
}

export default TipAndHot;