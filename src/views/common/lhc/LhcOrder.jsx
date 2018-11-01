import React from 'react';
import { Table, Icon, Button } from 'antd';
import Countdown from '../../../components/Countdown';
import BetModal from './BetModal';
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
                <BetModal
                    title="请确认投注香港六合彩"
                    centered={true}
                    visible={betModalShowed}
                    okText="确定"
                    cancelText="取消"
                    onOk={bet}
                    onCancel={closeBetModal}
                    orderData={orderData}
                    orderTotalMoney={orderTotalMoney}
                    printOrderFlag={printOrderFlag}
                    setPrintOrderFlag={setPrintOrderFlag}        
                />
            </div>
        );
    }
}

export default LhcOrder;