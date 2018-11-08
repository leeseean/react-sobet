import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Modal, message } from 'antd';
import { getRecordDetail, cancelOrder } from '../../../../utils/ajax';
import formatTime from '../../../../utils/formatTime';
import OrderDetail from './OrderDetail.jsx';
import './lotteryRecord.styl';

@inject(stores => ({
    lotteryStore: stores.lotteryStore,
}))
@observer
class LotteryRecord extends React.Component {
    state = {
        recordShowFlag: true,
        dataSource: [],
        columns: [],
        recordDetail: {},
        betModalFlag: false,
    }
    toggleRecord = () => {
        this.setState(prevState => ({
            recordShowFlag: !prevState.recordShowFlag,
        }));
    }
    getDataSource() {
        const { recordData, playWayToCn } = this.props.lotteryStore;

        const dataSource = recordData.map(item => {
            const { orderId, orderTime, issue, method, code, amount, status } = item;
            return {
                orderTime: formatTime(new Date(orderTime), 'MM-DD hh:mm:ss'),
                issue,
                code,
                amount,
                status,
                method: playWayToCn[method.split('_').slice(0, 3).join('_')],
                code: <div className="ellipsis record-item-code" title={code}>{code}</div>,
                key: orderId,
                mani: status === '未开奖' ? [<span key="1" className="order-again" value="再次投注">再次投注</span>, <span key="2" className="order-cancel" value="撤单">撤单</span>] : <span className="order-again" value="再次投注">再次投注</span>
            };
        });
        return dataSource;
    }
    genColums() {
        const { lotteryCode } = this.props.lotteryStore;
        let columns = [{
            title: '参与时间',
            dataIndex: 'orderTime',
        }, {
            title: '奖期',
            dataIndex: 'issue'
        }, {
            title: '玩法',
            dataIndex: 'method'
        }, {
            title: '投注内容',
            dataIndex: 'code',
            width: 120,
        }, {
            title: '投注金额',
            dataIndex: 'amount',
        }, {
            title: '中奖情况',
            dataIndex: 'status',
        }, {
            title: '操作',
            dataIndex: 'mani',
            width: 160,
        }];
        if (lotteryCode === 'WBGMMC') {
            columns.pop();
        }
        return columns;
    }
    componentDidMount() {
        this.getDataSource();
    }
    viewOrderDetail = async (orderId) => {
        const res = await getRecordDetail({ orderId });
        if (res.data.code === 1) {
            this.setState({
                recordDetail: res.data.result,
                betModalFlag: true,
            });
        }
    }
    maniRowCallback = (record) => {
        return {
            onClick: (e) => {
                const { orderId, issue } = record;
                if (e.target.getAttribute('value') === '再次投注') {
                    this.betAgain(orderId, issue);
                    return;
                }
                if (e.target.getAttribute('value') === '撤单') {
                    this.cancelOrder(orderId, issue);
                    return;
                }
                this.viewOrderDetail({ orderId });
            }, // 点击行
        };
    }
    cancelOrder = (orderId, issue) => {
        Modal.confirm({
            title: `您确定要撤销${issue}期的这一注单吗？`,
            onOk: async () => {
                const res = await cancelOrder({ orderId });
                if (res.data.code === 0) {
                    message.success('撤单成功！');
                }
            }
        });
    }
    betAgain = (orderId) => {
        console.log(222)
    }
    render() {
        const { playWayToCn, lotteryCodeToCn } = this.props.lotteryStore;

        const TableTitle = () => {
            return (
                <div className="record-title-wrapper">
                    <span className="record-title">
                        <i className="record-title-icon"></i>
                        投注记录
                    </span>
                    <div className="hide-record" onClick={this.toggleRecord}>{this.state.recordShowFlag ? '隐藏列表' : '显示列表'}</div>
                </div>
            );
        };
        const columns = this.genColums();
        const dataSource = this.getDataSource();
        return (
            <div className="record-wrapper">
                <div className={`record-table-wrapper ${this.state.recordShowFlag ? '' : 'hide'}`}>
                    <Table columns={columns} dataSource={dataSource} title={TableTitle} pagination={false} rowClassName="record-item" locale={{ emptyText: '' }} onRow={this.maniRowCallback} scroll={{y:360}} />
                </div>
                <OrderDetail {...{ playWayToCn, lotteryCodeToCn }} recordDetail={this.state.recordDetail} betModalFlag={this.state.betModalFlag} />
            </div>
        );
    }
}

export default LotteryRecord;