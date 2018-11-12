/**
 * Created by Orange on 2018-10-29 10:55:32.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Modal, Checkbox } from 'antd';
import './betModal.styl';


@withRouter
@inject(stores => ({
    lotteryStore: stores.lotteryStore
}))
@observer
class BetModal extends React.Component {
    render() {
        const modeConfig = {
            '2': '2元',
            '1': '1元',
            '0.2': '2角',
            '0.1': '1角',
            '0.02': '2分',
            '0.002': '2厘'
        };
        const { submitOrder } = this.props;
        const { lotteryCn, currentIssue, orderData, toggleBetModal, betModalShowed, printOrderFlag, setPrintOrderFlag, orderTotalMoney } = this.props.lotteryStore;
        return (
            <Modal onCancel={() => toggleBetModal(false)} onOk={submitOrder} wrapClassName="bet-modal-wrapper" visible={betModalShowed} okText="确定" cancelText="取消" centered={true} title={`请确认投注${lotteryCn}`}>
                <div className="list">
                    {
                        orderData.map((order, index, arr) => {
                            return (
                                <div key={order.key} className="item">
                                    {
                                        (index === 0 || (order.price !== arr[index - 1].price)) ? (
                                            <div className="clearfix item-top">
                                                <div className="fl">期号{currentIssue}</div>
                                                <div className="fr">模式：{modeConfig[String(order.price)]}</div>
                                            </div>
                                        ) : null
                                    }

                                    <div className="item-content">
                                        <div className="play-way">{order.detail.name}</div>
                                        <div className="bet-code ellipsis">{order.detail.betContent}</div>
                                        <div className="win-wrapper">盈利金额：<em className="win">{(order.win * order.price * order.piece).toFixed(2)}</em></div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="clearfix bottom">
                    <div className="fl bet-total">投注总金额：<em className="total">{orderTotalMoney}元</em></div>
                    <div className="fr print"><Checkbox checked={printOrderFlag} onChange={(e) => setPrintOrderFlag(e.target.checked)}>打印注单</Checkbox></div>
                </div>
            </Modal>
        );
    }
}

export default BetModal;