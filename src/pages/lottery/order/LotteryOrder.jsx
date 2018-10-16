import React from 'react';
import { Table, Icon, Button, Checkbox   } from 'antd';
import Countdown from '../../../components/Countdown';
import { inject, observer } from 'mobx-react';
import './lotteryOrder.styl';

@inject('orderStore')
@observer
class LotteryOrder extends React.Component {
    render() {
        const { orderData, orderTotalMoney, orderTotalCount, toggleBetModal, deleteAllItem, deleteOrderItem } = this.props.orderStore;
        const orderColumns = [
            {
                title: '玩法及投注内容',
                dataIndex: 'detail',
                width: 200
            }, {
                title: '倍数',
                dataIndex: 'piece',
                width: 100
            }, {
                title: '模式',
                dataIndex: 'price',
                width: 80
            }, {
                title: '投注金额',
                dataIndex: 'amount',
                width: 80
            }, {
                title: '盈利金额',
                dataIndex: 'win',
                width: 80
            }, {
                title: <Icon
                    type="close-circle"
                    theme="filled"
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={deleteAllItem} />,
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
            <div className="lottery-order-wrapper">
                <div className="clearfix order-wrapper">
                    <div className="fl order-list">
                        <Table
                            className="order-table"
                            columns={orderColumns}
                            dataSource={orderData.slice()}
                            pagination={false}
                            size="small"
                            locale={{
                                emptyText: ''
                            }}
                            scroll={{
                                y: 212
                            }} />
                    </div>
                    <div className="fr order-bet-wrapper">
                        <div className="order-total">
                            <div className="total-count-title">总投注数</div>
                            <div className="total-count">{orderTotalCount}</div>
                            <div className="total-money-title">投注总金额</div>
                            <div className="total-money">{orderTotalMoney}</div>
                        </div>
                        <div className="order-countdown">
                            离投注截止还有
                            <span className="order-countdown-inner">
                                <Countdown count="100000" />
                            </span>
                        </div>
                        <div className="order-bet">
                            <Button
                                disabled={orderTotalMoney <= 0}
                                block
                                size="large"
                                onClick={() => toggleBetModal(true)}
                                style={{
                                    fontWeight: 'bold',
                                    color: '#999'
                                }}>立即投注</Button>
                        </div>
                        <div className="order-trace">
                            <Checkbox onChange={() => {}} name="switch-trace-button" />
                            <span className="order-trace-info">我要追号</span>
                            <span className="order-trace-icon">可提高中奖率</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteryOrder;