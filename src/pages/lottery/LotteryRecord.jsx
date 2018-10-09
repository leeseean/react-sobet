import React from 'react';
import { Table, Modal } from 'antd';
import { getRecord, getRecordDetail } from '../../utils/ajax';
import formatTime from '../../utils/formatTime';
import './lotteryRecord.styl';

class LotteryRecord extends React.Component {
    state = {
        recordShowFlag: true,
        dataSource: [],
        columns: [],
        detailModalFlag: false,
        recordDetail: {}
    }
    toggleRecord = () => {
        this.setState(prevState => ({
            recordShowFlag: !prevState.recordShowFlag,
            dataSource: prevState.recordShowFlag ? [] : prevState.dataSource
        }));
    }
    async getDataSource() {
        const { lotteryCode, playWayToCn, codeToCn } = this.props;
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
    maniRowCallback = (record) => {
        return {
            onClick: async () => {
                const { orderId } = record;
                const res = await getRecordDetail({ orderId });
                if (res.data.code === 1) {
                    this.setState({
                        recordDetail: res.data.result,
                        detailModalFlag: true
                    });
                }
            }, // 点击行
        };
    }
    closeDetailModal = () => {
        this.setState({
            detailModalFlag: false
        });
    }
    render() {
        const { playWayToCn, codeToCn } = this.props;

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
                <Table columns={columns} dataSource={this.state.dataSource} title={TableTitle} pagination={false} rowClassName="record-item" locale={{ emptyText: '' }} onRow={this.maniRowCallback} />
                <Modal width="650px" title="投注详细" wrapClassName="record-detail-wrapper" rowClassName="record-row" centered footer={null} visible={this.state.detailModalFlag} onCancel={this.closeDetailModal}>
                    <table>
                        <tbody>
                            <tr>
                                <th>注单编号：</th>
                                <td><em>{this.state.recordDetail.orderId}</em></td>
                            </tr>
                            <tr>
                                <th>游戏用户：</th>
                                <td>{this.state.recordDetail.username}</td>
                            </tr>
                            <tr>
                                <th>投单时间：</th>
                                <td>{formatTime(new Date(this.state.recordDetail.orderTime), 'YY-MM-DD hh:mm:ss')}</td>
                            </tr>
                            <tr>
                                <th>彩种：</th>
                                <td>{codeToCn[this.state.recordDetail.lottery]}</td>
                            </tr>
                            <tr>
                                <th>玩法：</th>
                                <td>{playWayToCn[this.state.recordDetail.method && this.state.recordDetail.method.split('_').slice(0, 3).join('_')]}</td>
                            </tr>
                            <tr>
                                <th>期号：</th>
                                <td><div>{this.state.recordDetail.issue}</div></td>
                            </tr>
                            <tr>
                                <th>投注内容：</th>
                                <td><div className="ellipsis w500">{this.state.recordDetail.code}</div></td>
                            </tr>
                            <tr>
                                <th>投注注数：</th>
                                <td>{Number(this.state.recordDetail.count)}</td>
                            </tr>
                            <tr>
                                <th>是否单挑：</th>
                                <td>{this.state.recordDetail.singleStatus === 0 ? '否' : '是'}</td>
                            </tr>
                            <tr>
                                <th>奖金模式：</th>
                                <td>{this.state.recordDetail.odds}</td>
                            </tr>
                            <tr>
                                <th>倍数：</th>
                                <td>{this.state.recordDetail.nums}</td>
                            </tr>
                            <tr>
                                <th>模式：</th>
                                <td>{this.state.recordDetail.perAmount}元</td>
                            </tr>
                            <tr>
                                <th>投注总金额：</th>
                                <td>{this.state.recordDetail.amount}</td>
                            </tr>
                            <tr>
                                <th>奖金：</th>
                                <td>{this.state.recordDetail.awardMoney}</td>
                            </tr>
                            <tr>
                                <th>开奖号码：</th>
                                <td>{this.state.recordDetail.lotteryNumber}</td>
                            </tr>
                            <tr>
                                <th>状态：</th>
                                <td>{this.state.recordDetail.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default LotteryRecord;