import React from 'react';
import { Table } from 'antd';
import { getRecord } from '../../utils/ajax';
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
        const { lotteryCode } = this.props;
        const res = getRecord({
            lottery: lotteryCode
        });
        if (res.data.code === 1) {
            const dataSource = res.data.result.map(item => {
                const { orderId, orderTime, issue, code, amount, status } = item;
                return {
                    key: orderId,
                    orderTime,
                    issue,
                    code,
                    amount,
                    status
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
            dataIndex: 'orderTime'
        }, {
            title: '奖期',
            dataIndex: 'issue'
        }, {
            title: '玩法',
            dataIndex: 'method'
        }, {
            title: '投注内容',
            dataIndex: 'code'
        }, {
            title: '投注金额',
            dataIndex: 'amount'
        }, {
            title: '中奖情况',
            dataIndex: 'status'
        }, {
            title: '操作',
            dataIndex: 'mani'
        }];
        if (lotteryCode === 'WBGMMC') {
            columns = columns.pop();
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