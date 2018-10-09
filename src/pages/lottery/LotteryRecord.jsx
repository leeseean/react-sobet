import React from 'react';
import { Table } from 'antd';
import { getRecord } from '../../utils/ajax';
import formatTime from '../../utils/formatTime';
import './lotteryRecord.styl';

class LotteryRecord extends React.Component {
    state = {
        recordShowFlag: true,
        dataSource: [],
        columns: []
    }
    toggleRecord = () => {
        this.setState(prevState => ({
            recordShowFlag: !prevState.recordShowFlag
        }));
    }
    async getDataSource() {
        const { lotteryCode, playWayToCn } = this.props;
        const res = await getRecord({
            lottery: lotteryCode
        });
        if (res.data.code === 1) {
            const dataSource = res.data.result.map(item => {
                const { orderId, orderTime, issue, method, code, amount, status } = item;
                return {
                    orderTime: formatTime(new Date(orderTime), 'MM-DD hh:mm:ss'),
                    issue,
                    code,
                    amount,
                    status,
                    method: playWayToCn[method],
                    code: <div className="ellipsis record-item-code" title={code}>{code}</div>,
                    key: orderId,
                    mani: status === '未开奖' ? [<span className="order-again">再次投注</span>, <span className="order-cancel">撤单</span>] : <span className="order-again">再次投注</span>
                };
            });
            this.setState({
                dataSource
            });
        }
    }
    genColums() {
        const { lotteryCode } = this.props;
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
    render() {
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
        return (
            <div className="record-table-wrapper">
                <Table columns={columns} dataSource={this.state.dataSource} title={TableTitle} pagination={false} rowClassName="record-item" locale={{ emptyText: '尚无投注记录' }} />
            </div>
        );
    }
}

export default LotteryRecord;