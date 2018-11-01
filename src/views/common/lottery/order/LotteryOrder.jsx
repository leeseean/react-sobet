import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Icon, Button, Checkbox, Select } from 'antd';
import Countdown from '../../../../components/Countdown';
import './lotteryOrder.styl';
import InputNumber from '../InputNumberUpDown';
import '../inputNumberUpDown.styl';
import BetModal from '../BetModal';

@inject('lotteryStore')
@observer
class LotteryOrder extends React.Component {
    render() {
        const { countdown, orderData, orderTotalMoney, orderTotalCount, toggleBetModal, deleteAllItem, deleteOrderItem, changeOrderItemPiece, changeOrderItemMode, toggleTracePanl, showTraceFlag } = this.props.lotteryStore;
        const orderColumns = [
            {
                key: 'detail',
                title: <div style={{ width: '160px' }}>玩法及投注内容</div>,
                dataIndex: 'detail',
                width: 160,
                render: text => {
                    const { name, rxPos, betContent, playWay } = text;
                    const content = `${name} ${rxPos} ${betContent}`;
                    return <div style={{ width: '160px' }} className="ellipsis" title={content}>{content}</div>;
                }
            }, {
                key: 'piece',
                title: '倍数',
                dataIndex: 'piece',
                width: 120,
                render: (text, record) => <InputNumber min="1" defaultValue={text} size="small" onChange={(value) => changeOrderItemPiece(record, value)} />
            }, {
                key: 'price',
                title: '模式',
                dataIndex: 'price',
                width: 80,
                render: (text, record) => {
                    return (
                        <Select size="small" defaultValue={text} onChange={(value) => changeOrderItemMode(record, value)}>
                            <Select.Option value={2}>2元</Select.Option>
                            <Select.Option value={1}>1元</Select.Option>
                            <Select.Option value={0.2}>2角</Select.Option>
                            <Select.Option value={0.1}>1角</Select.Option>
                            <Select.Option value={0.02}>2分</Select.Option>
                            <Select.Option value={0.002}>2厘</Select.Option>
                        </Select>
                    );
                }
            }, {
                key: 'amount',
                title: '投注金额',
                dataIndex: 'amount',
                width: 80,
                render: (text, record) => <div className="ellipsis" title={record.price * record.piece * text.betCount}>{record.price * record.piece * text.betCount}</div>
            }, {
                key: 'win',
                title: '盈利金额',
                dataIndex: 'win',
                width: 80,
                render: text => <div className="ellipsis" title={text}>{text}</div>
            }, {
                key: 'delete',
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
                                y: 180
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
                                <Countdown count={countdown} />
                            </span>
                        </div>
                        <div className="order-bet">
                            <Button
                                disabled={orderTotalMoney <= 0 || showTraceFlag}
                                block
                                size="large"
                                onClick={() => toggleBetModal(true)}
                                type="primary"
                            >立即投注</Button>
                            <BetModal />
                        </div>
                        <div className="order-trace">
                            <Checkbox disabled={orderData.length <= 0} checked={showTraceFlag} onChange={(e) => toggleTracePanl(e.target.checked)} name="switch-trace-button" />
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