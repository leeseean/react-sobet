import React from 'react';
import { Table, Icon, Button } from 'antd';
import Countdown from '../../components/Countdown';
import { inject, observer } from 'mobx-react';

@inject('orderStore')
@observer
class LotteryOrder extends React.Component {
    render() {
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
                        <Table columns={orderColumns}
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
                    <div className="fr order-bet">
                        <div className="order-total">
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
                        <div className="order-countdown">
                            离投注截止还有<span
                                style={{
                                    color: '#c52031',
                                    padding: '0 8px'
                                }}><Countdown count="100000" /></span>
                        </div>
                        <div className="order-bet">
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
                </div>
            </div>
        );
    }
}

export default LotteryOrder;