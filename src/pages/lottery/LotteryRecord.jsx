import React from 'react';
import { Table } from 'antd';
import './lotteryRecord.styl';

class LotteryRecord extends React.Component {
    state = {
        recordShowFlag: true
    }
    toggleRecord = () => {
        this.setState(prevState => ({
            recordShowFlag: !prevState.recordShowFlag
        }));
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
                <Table />
            </div>
        );
    }
}

export default LotteryRecord;