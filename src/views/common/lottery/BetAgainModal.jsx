/**
 * Created by Orange on 2018-11-09 10:06:45.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Radio, Modal, message } from 'antd';
import InputNumber from './InputNumberUpDown.jsx';
import { submitOrder } from '../../../utils/ajax';

@withRouter
@inject(stores => ({
    refreshBalance: stores.globalStore.refreshBalance,
    lotteryStore: stores.lotteryStore
}))
@observer
class BetAgainModal extends React.Component {
    submitOrder = () => {
        const { oddsData, currentIssue, lotteryCode, betAgainPiece, betAgainMode, toggleBetAgainModal } = this.props.lotteryStore;
        const order = this.props.recordDetail;
        toggleBetAgainModal(false);
        const _orderObj = {
            method: order.method,
            code: String(order.code),
            nums: String(order.nums),
            amount: Number(order.nums) * Number(betAgainPiece) * Number(betAgainMode),
            piece: String(betAgainPiece),
            price: String(betAgainMode),
            odds: String(order.odds),
            point: '0',
        };
        if (order.position) {
            _orderObj.position = order.position;
        }
        const orderObj = {
            lottery: lotteryCode.toLocaleUpperCase(),
            issue: currentIssue,
            order: JSON.stringify([_orderObj]),
            betType: 1,
            sourceType: 0
        };
        if (order.singleStatus) {
            const singlePickMaxBonus = oddsData[order.method]['m'];
            Modal.confirm({
                content: `您的注单是单挑,将有当期单挑最高奖金${singlePickMaxBonus}元的限制，您确定要继续吗？`,
                onOk: () => this.handleSubmit(orderObj),
                okText: '确认',
                cancelText: '取消',
            });
            return;
        }
        this.handleSubmit(orderObj);
    }
    handleSubmit = async (orderObj) => {
        const { handlePrint, getRecord } = this.props.lotteryStore;
        const { refreshBalance, history } = this.props;
        const res = await submitOrder(orderObj);
        if (res.data.code === 1) {//1 表是成功
            message.success('订单提交成功！');
            //更新投注记录，更新余额
            refreshBalance(res.data.result.money.avail);
            getRecord().then(() => handlePrint(orderObj));
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
    state = {
        recordDetail: this.props.recordDetail
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.recordDetail !== prevState.recordDetail) {
            return {
                recordDetail: nextProps.recordDetail,
            };
        }
        return null;
    }
    render() {
        const order = this.state.recordDetail;
        if (!order['lottery']) {
            return null;
        }
        const { plateConfig, lotteryType, lotteryCode, toggleBetAgainModal, betAgainModalShowed, changeBetAgainMode, changeBetAgainPiece, currentIssue, betAgainPiece, betAgainMode } = this.props.lotteryStore;
        return (
            <Modal onCancel={() => toggleBetAgainModal(false)} onOk={this.submitOrder} wrapClassName="bet-modal-wrapper" visible={betAgainModalShowed} okText="确定" cancelText="取消" centered={true} title="再次投注">
                <div className="list">
                    <div key={order.orderId} className="item">
                        <div className="clearfix item-top">
                            <div className="fl">期号{currentIssue}</div>
                        </div>
                        <div className="item-content">
                            <div className="play-way">{plateConfig[lotteryType][order.method.split('_').slice(0, 3).join('_')]['name']}</div>
                            <div className="bet-code ellipsis">{order.code}</div>
                        </div>
                    </div>
                </div>
                <div className="mode-select" style={{padding: '10px 0'}}>
                    <span className="text">模式&nbsp;&nbsp;</span>
                    <Radio.Group defaultValue={2} size="small" buttonStyle="solid" onChange={(e) => changeBetAgainMode(e.target.value)}>
                        <Radio.Button value={2}>2元</Radio.Button>
                        <Radio.Button value={1}>1元</Radio.Button>
                        <Radio.Button value={0.2}>2角</Radio.Button>
                        <Radio.Button value={0.1}>1角</Radio.Button>
                        <Radio.Button value={0.02}>2分</Radio.Button>
                        <Radio.Button value={0.002}>2厘</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="piece-input" style={{padding: '0 0 10px 0'}}>
                    <span className="text">倍数&nbsp;&nbsp;</span>
                    <InputNumber min="1" defaultValue={'1'} size="small" onChange={changeBetAgainPiece} />
                </div>
                <div className="clearfix bottom">
                    <div className="fl bet-total">投注总金额：<em className="total">{Number(order.nums) * Number(betAgainPiece) * Number(betAgainMode)}元</em></div>
                </div>
            </Modal>
        );
    }
}

export default BetAgainModal;