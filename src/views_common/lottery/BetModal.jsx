/**
 * Created by Orange on 2018-10-29 10:55:32.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Modal, Checkbox } from 'antd';

@inject('lotteryStore')
@observer
class BetModal extends React.Component {
    render() {
        const modeConfig = {
            '2': '2元',
            '1': '1元',
            '0.2': '2角',
            '0.1': '1角',
            '0.002': '2分',
            ''
        };
        const { lotteryCn, currentIssue, orderData, betModalShowed, printOrderFlag, setPrintOrderFlag, orderTotalMoney }
        return (
            <Modal onCancel onOk wrapClassName="bet-modal-wrapper" visible={betModalShowed} okText="确定" cancelText="取消" centered={true} closable={true} title="请确认投注重庆时时彩">
                <div className="list">
                    {
                        this.orderData.map(order => {
                            return (
                                <div className="item">
                                    <div className="clearfix item-top">
                                        <div className="fl">期号{currentIssue}</div>
                                        <div className="fr">模式：{order.price}</div>
                                    </div>
                                    <div className="item-content">
                                        <div className="play-way">牛牛</div>
                                        <div className="bet-code">123,345,333</div>
                                        <div className="win-wrapper">盈利金额：<em className="win">33</em></div>
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