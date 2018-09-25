import React from 'react';
import { Modal, Checkbox } from 'antd';

class BetModal extends React.Component {
    render() {
        const {
            title,
            centered,
            visible,
            okText,
            cancelText,
            onOk,
            onCancel,
            orderData,
            orderTotalMoney,
            printOrderFlag,
            setPrintOrderFlag
        } = this.props;
        return (
            <Modal
                title={title}
                centered={centered}
                visible={visible}
                okText={okText}
                cancelText={cancelText}
                onOk={onOk}
                onCancel={onCancel}>
                <dl className="order-modal-list">
                    <dt className="order-modal-issue">
                        <em>期号2018107</em>
                    </dt>
                    {orderData.map((item, index) => {
                        return (
                            <dd className="order-modal-item" key={index}>
                                <div className="order-modal-item-method">{item.cnMethod}</div>
                                <div className="order-modal-item-num">{item.cnNum}</div>
                                <span
                                    style={{
                                        color: '#666'
                                    }}>投注金额:<i
                                        style={{
                                            color: '#c7484a'
                                        }}>{item.money}</i>
                                </span>
                            </dd>
                        );
                    })
                    }
                </dl>
                <div className="clearfix order-modal-list-bottom">
                    <div
                        className="fl"
                        style={{
                            fontSize: '14px',
                            color: '#666'
                        }}>投注总金额：<em
                            style={{
                                color: '#c7484a',
                                fontWeight: 700
                            }}>{orderTotalMoney}</em>元</div>
                    <div className="fr">
                        <Checkbox checked={printOrderFlag} onChange={setPrintOrderFlag}>打印注单</Checkbox>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default BetModal;