/**
 * Created by Orange on 2018-10-23 15:30:10.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Radio, Select, Modal, message, Checkbox } from 'antd';
import InputNumber from '../InputNumberUpDown';
import '../inputNumberUpDown.styl';
import './betOption.styl';

@withRouter
@inject(stores => ({
    refreshBalance: stores.globalStore.refreshBalance,
    lotteryStore: stores.lotteryStore
}))
@observer
class BetOption extends React.Component {
    quickSubmitOrder = async () => {
        const { quickSubmitOrder, getRecord } = this.props.lotteryStore;
        const { refreshBalance, history } = this.props;
        const res = await quickSubmitOrder();
        if (res.data.code === 1) {//1 表是成功
            message.success('订单提交成功！');
            //更新投注记录，更新余额
            refreshBalance(res.data.result.money.avail);
            getRecord();
        } else if (res.data.code === 4001) {//余额不足
            Modal.confirm({
                centered: true,
                content: `余额不足，是否充值`,
                okText: '立即充值',
                onOk: () => history.push('/voucher/charge')
            });
        } else {
            message.error(res.data.msg);
        }
    }
    render() {
        const { chaidanConfig, lotteryCode, method, betCount, betPiece, betMoney, changePiece, changeMode, defaultBetPiece, defaultBetMode, addOrder, mmcWinStopFlag, toggleMmcWinStop, setContinuousCount, continuousCount, oddsData } = this.props.lotteryStore;
        return (
            <div className="clearfix bet-option-wrapper">
                <div className="fl clearfix left-wrapper">
                    <div className="clearfix left-top-wrapper">
                        <div className="fl mode-select">
                            <Radio.Group defaultValue={defaultBetMode} size="small" buttonStyle="solid" onChange={(e) => changeMode(e.target.value)}>
                                <Radio.Button value={2}>2元</Radio.Button>
                                <Radio.Button value={1}>1元</Radio.Button>
                                <Radio.Button value={0.2}>2角</Radio.Button>
                                <Radio.Button value={0.1}>1角</Radio.Button>
                                <Radio.Button value={0.02}>2分</Radio.Button>
                                <Radio.Button value={0.002}>2厘</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="fl piece-input">
                            <span className="text">倍数</span>
                            <InputNumber min="1" defaultValue={defaultBetPiece} size="small" onChange={changePiece} />
                        </div>
                        <div className="fl odd-select">
                            <span className="text">奖金</span>
                            {
                                chaidanConfig.isChaidan ? 0 : (
                                    <Select size="small" defaultValue={`${oddsData[method]['bonusA']}~${oddsData[method]['rateA']}`} onChange={() => { }}>
                                        <Select.Option value={`${oddsData[method]['bonusA']}~${oddsData[method]['rateA']}`}>{oddsData[method]['bonusA']} ~ ${oddsData[method]['rateA']}%</Select.Option>
                                        <Select.Option value={`${oddsData[method]['bonusB']}~${oddsData[method]['rateB']}`}>{oddsData[method]['bonusB']} ~ ${oddsData[method]['rateB']}%</Select.Option>
                                    </Select>
                                )
                            }
                        </div>
                    </div>
                    <div className="clearfix left-bottom-wrapper">
                        您选择了<span className="count">{betCount}</span>注，共<span className="piece">{betPiece}</span>倍，共计<span className="money">{betMoney}</span>元
                        {
                            lotteryCode === 'wbgmmc' ? (
                                <span className="mmc-option">
                                    连续开奖
                                    <Select style={{ margin: '0 4px' }} size="small" value={continuousCount} onChange={(value) => setContinuousCount(value)}>
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="5">5</Select.Option>
                                        <Select.Option value="10">10</Select.Option>
                                        <Select.Option value="50">50</Select.Option>
                                        <Select.Option value="100">100</Select.Option>
                                        <Select.Option value="200">200</Select.Option>
                                        <Select.Option value="500">500</Select.Option>
                                        <Select.Option value="1000">1000</Select.Option>
                                    </Select>
                                    次，
                                    <Checkbox style={{ margin: '0 4px' }} checked={mmcWinStopFlag} onChange={(e) => toggleMmcWinStop(e.target.checked)} />
                                    中奖即停
                                </span>
                            ) : null
                        }
                    </div>
                </div>
                <div className="fr right-wrapper">
                    <div className={`quick-bet ${betCount > 0 ? '' : 'disabled'}`} onClick={this.quickSubmitOrder}>快速投注</div>
                    <div className={`add-order ${betCount > 0 ? '' : 'disabled'}`} onClick={addOrder}>添加订单</div>
                </div>
            </div>
        );
    }
}

export default BetOption;