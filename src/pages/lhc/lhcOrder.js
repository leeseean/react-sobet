import React from 'react';
import { Table, Icon, Button, Modal, Checkbox } from 'antd';
import Countdown from '../../components/countdown';
import { inject, observer } from 'mobx-react';

@inject('xglhcStore')
@observer
class LhcOrder extends React.Component {
    render() {
        const {
            orderData,
            deleteOrderItem,
            showBetModal,
            betModalShowed,
            orderTotalCount,
            orderTotalMoney,
            bet,
            closeBetModal,
            setPrintOrderFlag,
            printOrderFlag
        } = this.props.xglhcStore;
        const orderColumns = [
            {
                title: '玩法及投注内容',
                dataIndex: 'detail',
                width: 360
            }, {
                title: '赔率',
                dataIndex: 'odd',
                width: 200
            }, {
                title: '投注金额',
                dataIndex: 'money',
                width: 180
            }, {
                title: '    ',
                dataIndex: 'delete',
                render: (text, record) => {
                    return <Icon
                        type="close-circle"
                        theme="filled"
                        style={{
                            cursor: 'pointer'
                        }}
                        onClick={() => deleteOrderItem(record.key)} />
                }
            }
        ];
        return (
            <div className="clearfix lhc-order-wrapper">
                <div className="fl lhc-order-table">
                    <Table
                        columns={orderColumns}
                        dataSource={orderData}
                        pagination={false}
                        size="small"
                        locale={{
                            emptyText: ''
                        }}
                        scroll={{
                            y: 212
                        }} />
                </div>
                <div className="fr lhc-order-right">
                    <div className="lhc-order-total">
                        <div>总投注数</div>
                        <div
                            style={{
                                color: '#d24454'
                            }}>{orderTotalCount}</div>
                        <div
                            style={{
                                marginTop: '14px'
                            }}>投注总金额</div>
                        <div
                            style={{
                                color: '#d24454'
                            }}>{orderTotalMoney}</div>
                    </div>
                    <div className="lhc-order-countdown">
                        离投注截止还有<span
                            style={{
                                color: '#c52031',
                                padding: '0 8px'
                            }}><Countdown count="100000" /></span>
                    </div>
                    <div className="lhc-order-bet">
                        <Button
                            disabled={orderTotalMoney <= 0}
                            block
                            size="large"
                            onClick={showBetModal}
                            style={{
                                fontWeight: 'bold',
                                color: '#999'
                            }}>立即投注</Button>
                    </div>
                </div>
                <Modal
                    title="请确认投注香港六合彩"
                    centered
                    visible={betModalShowed}
                    okText="确定"
                    cancelText="取消"
                    onOk={bet}
                    onCancel={closeBetModal}>
                    <dl className="order-modal-list">
                        <dt className="order-modal-issue">
                            <em>期号2018107</em>
                        </dt>
                        {orderData.map((item, index) => {
                            return (
                                <dd className="order-modal-item" key={index}>
                                    <div className="order-modal-item-method">{item.cnMethod}</div>
                                    <div className="order-modal-item-num">{item.num}</div>
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
                                }}>180</em>元</div>
                        <div className="fr">
                            <Checkbox checked={printOrderFlag} onChange={setPrintOrderFlag}>打印注单</Checkbox>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default LhcOrder;