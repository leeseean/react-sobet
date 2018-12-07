/**
 * Created by Orange on 2018-11-08 14:33:37.
 **/

import React from 'react';
import { List, Divider, Table } from 'antd';
import ReactToPrint from "react-to-print";
import { inject, observer } from 'mobx-react';

@inject(stores => ({
    lotteryStore: stores.lotteryStore,
}))
@observer
class Content extends React.Component {
    render() {
        const { plateConfig, lotteryTypeConfig, lotteryCn, traceConfig, printData, recordData } = this.props.lotteryStore;
        if (!printData) {
            return null;
        }
        const orderData = JSON.parse(printData.order);
        const orderTotalMoney = orderData.reduce((a, b) => Number(b.amount) + a, 0);
        let title;
        let Content;
        if (printData.istrace) {
            title = '彩票追号投注单';
            const traceOrder = JSON.parse(printData.trace);
            const topListData = [{
                description: `下单时间：${new Date(recordData[0]['orderTime']).toLocaleDateString()}`,
            }, {
                description: `投注彩种：${lotteryCn}`
            }, {
                description: `开始期号：${recordData[0]['issue']}`
            }, {
                description: `追号期数：${traceOrder['totalCount']}`
            }, {
                description: `追号模式：${traceConfig[traceOrder['mode']]}`
            }];
            Content = () => {
                return (
                    <div className="print-content-wrapper" style={{ padding: '20px 130px' }}>
                        <h2>{title}</h2>
                        <List itemLayout="horizontal"
                            dataSource={topListData}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        description={item.description}
                                    />
                                </List.Item>
                            )} />
                        <Divider />
                        {
                            orderData.map((o, i) => {
                                const listData = [{
                                    description: `追号编号：${recordData[i]['traceId']}`
                                }, {
                                    description: `追号玩法：${plateConfig[lotteryTypeConfig[recordData[i]['lottery'].toLocaleLowerCase()]][recordData[i]['method'].split('_').slice(0, 3).join('_')]['name']}`
                                }, {
                                    description: `追号内容：${recordData[i]['code']}`
                                }, {
                                    description: `追号金额：${recordData[i]['amount']}元`
                                }, {
                                    description: <Table
                                        size="small"
                                        pagination={false}
                                        columns={[{
                                            title: '奖期',
                                            dataIndex: 'issue',
                                            key: 'issue'
                                        }, {
                                            title: '金额（元）',
                                            dataIndex: 'amount',
                                            key: 'amount'
                                        }]}
                                        dataSource={
                                            Object.keys(traceOrder.counts).map(o => ({
                                                issue: o,
                                                amount: traceOrder.counts[o]
                                            }))
                                        } />
                                }];
                                return (
                                    <React.Fragment key={recordData[i]['traceId']}>
                                        <List itemLayout="horizontal"
                                            dataSource={listData}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        description={item.description}
                                                    />
                                                </List.Item>
                                            )} />
                                        <Divider />
                                    </React.Fragment>
                                );
                            })
                        }

                        <p>总金额：{orderTotalMoney}元</p>
                    </div>
                );
            };
        } else {
            title = '彩票投注单';
            const topListData = [{
                description: `下单时间：${new Date(recordData[0]['orderTime']).toLocaleDateString()}`,
            }, {
                description: `投注彩种：${lotteryCn}`
            }, {
                description: `投注期号：${recordData[0]['issue']}`
            }];
            Content = () => {
                return (
                    <div className="print-content-wrapper" style={{ padding: '20px 30px' }}>
                        <h2>{title}</h2>
                        <List itemLayout="horizontal"
                            dataSource={topListData}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        description={item.description}
                                    />
                                </List.Item>
                            )} />
                        <Divider />
                        {
                            orderData.map((o, i) => {
                                const listData = [{
                                    description: `注单编号：${recordData[i]['orderId']}`
                                }, {
                                    description: `投注玩法：${plateConfig[lotteryTypeConfig[recordData[i]['lottery'].toLocaleLowerCase()]][recordData[i]['method'].split('_').slice(0, 3).join('_')]['name']}`
                                }, {
                                    description: `投注内容：${recordData[i]['code']}`
                                }, {
                                    description: `投注注数：${recordData[i]['nums']}`
                                }, {
                                    description: `投注金额：${recordData[i]['amount']}元`
                                }];
                                return (
                                    <React.Fragment key={recordData[i]['orderId']}>
                                        <List itemLayout="horizontal"
                                            dataSource={listData}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        description={item.description}
                                                    />
                                                </List.Item>
                                            )} />
                                        <Divider />
                                    </React.Fragment>
                                );
                            })
                        }

                        <p>总金额：{orderTotalMoney}元</p>
                    </div>
                );
            };
        }
        return <Content />;
    }
}

@inject(stores => ({
    setPrintRef: stores.lotteryStore.setPrintRef,
}))
@observer
class ComponentToPrint extends React.Component {
    contentRef = null
    render() {
        const { setPrintRef } = this.props
        return (
            <React.Fragment>
                <Content ref={ref => this.contentRef = ref} />
                <ReactToPrint
                    ref={ref => setPrintRef(ref)}
                    trigger={() => <span></span>}
                    content={() => this.contentRef}
                />
            </React.Fragment>
        );
    }
}

export default ComponentToPrint;