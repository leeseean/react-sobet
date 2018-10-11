import React from 'react';
import { Table, Modal, message, Pagination, Checkbox } from 'antd';
import { getRecord, getRecordDetail, getTraceDetail, cancelTrace, cancelOrder } from '../../utils/ajax';
import formatTime from '../../utils/formatTime';
import './lotteryRecord.styl';

class LotteryRecord extends React.Component {
    state = {
        recordShowFlag: true,
        dataSource: [],
        columns: [],
        betModalFlag: false,
        recordDetail: {},
        traceModalFlag: false,
        traceDetail: {},
        tracePageData: [],
        checkList: [],
    }
    traceModeConfig = {
        1: '利润率追号',
        2: '同倍追号',
        3: '翻倍追号'
    }
    toggleRecord = () => {
        this.setState(prevState => ({
            recordShowFlag: !prevState.recordShowFlag,
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
                    method: playWayToCn[method.split('_').slice(0, 3).join('_')],
                    code: <div className="ellipsis record-item-code" title={code}>{code}</div>,
                    key: orderId,
                    mani: status === '未开奖' ? [<span className="order-again" value="再次投注">再次投注</span>, <span className="order-cancel" value="撤单">撤单</span>] : <span className="order-again" value="再次投注">再次投注</span>
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
    viewOrderDetail = async (orderId) => {
        const res = await getRecordDetail({ orderId });
        if (res.data.code === 1) {
            this.setState({
                recordDetail: res.data.result,
                betModalFlag: true,
                traceModalFlag: false
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
    closeBetModal = () => {
        this.setState({
            betModalFlag: false
        });
    }
    betAgain = (orderId) => {
        console.log(222)
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
    cancelTrace = async () => {
        const res = await cancelTrace({ traceId: this.state.traceDetail.traceId, issues: this.state.checkList });
        if (res.data.code === 1) {
            this.setState({
                checkList: []
            });
            this.viewTraceDetail();
        }
    }
    viewTraceDetail = async () => {
        const res = await getTraceDetail({ orderId: this.state.recordDetail.orderId });
        if (res.data.code === 1) {
            this.setState({
                traceModalFlag: true,
                traceDetail: res.data.result,
                tracePageData: res.data.result.issues.slice(0, 10)
            });
        }
    }
    closeTraceModal = () => {
        this.setState({
            traceModalFlag: false
        });
    }
    backToBetModal = () => {
        this.setState({
            traceModalFlag: false,
            betModalFlag: true
        });
    }
    turnPage = (e) => {
        console.log(e);
        this.setState({
            tracePageData: this.state.traceDetail.issues.slice(e - 10, e),
            checkList: []
        });
    }
    checkAll = (e) => {
        if (e.target.checked) {
            this.setState({
                checkList: this.state.tracePageData.filter(v => v.status !== 1).map(v => v.issue)
            });
        } else {
            this.setState({
                checkList: []
            });
        }
    }
    checkChange = (e) => {
        const value = e.target.issue;
        const _list = this.state.checkList;
        if (_list.includes(value)) {
            const _index = _list.indexOf(value);
            _list.splice(_index, 1);
            this.setState({
                checkList: _list
            });
        } else {
            this.setState((prevState) => ({
                checkList: [...prevState.checkList, value]
            }));
        }
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
            <div className="record-wrapper">
                <div className={`record-table-wrapper ${this.state.recordShowFlag ? '' : 'hide'}`}>
                    <Table columns={columns} dataSource={this.state.dataSource} title={TableTitle} pagination={false} rowClassName="record-item" locale={{ emptyText: '' }} onRow={this.maniRowCallback} />
                </div>
                <Modal width="650px" title="投注详情" wrapClassName="record-detail-wrapper" rowClassName="record-row" centered footer={null} visible={this.state.betModalFlag} onCancel={this.closeBetModal}>
                    <table>
                        <tbody>
                            <tr>
                                <th>注单编号：</th>
                                <td>
                                    <em>{this.state.recordDetail.orderId}</em>
                                    {
                                        this.state.recordDetail.isCurrentIssue === 1 ? <span className="order-cancel" onClick={() => this.cancelOrder(this.state.recordDetail.orderId)}>撤单</span> : null
                                    }
                                </td>
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
                                <td>
                                    <div>
                                        {this.state.recordDetail.issue}
                                        {
                                            this.state.recordDetail.istrace === 1 ? <span className="trace-view" onClick={this.viewTraceDetail}>(查看追号信息)</span> : null
                                        }
                                    </div>
                                </td>
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
                <Modal width="1060px" title={[<span key="A">追号详情</span>, <span key="B" className="back-bet-modal" onClick={this.backToBetModal}>(返回)</span>]} wrapClassName="trace-detail-wrapper" rowClassName="trace-row" centered footer={null} visible={this.state.traceModalFlag} onCancel={this.closeTraceModal}>
                    <table className="traceTable traceHTable">
                        <tbody>
                            <tr>
                                <th>追号编号：</th>
                                <td>{this.state.traceDetail.traceId}</td>
                                <td rowSpan="18" className="fixtrace">
                                    <ul className="traceInner">
                                        <li className="traceHead">
                                            <span>
                                                <i className="checkbox-wrapper"><Checkbox className="chkall hand" onChange={this.checkAll} /></i>
                                                奖期
                                            </span>
                                            <em>追号倍数</em>
                                            <em>追号状态</em>
                                            <em>注单详情</em>
                                        </li>
                                        {
                                            this.state.tracePageData.map(item => {
                                                const { orderId, issue, count, status } = item;
                                                return (
                                                    <li key={issue}>
                                                        <span>
                                                            <i className="checkbox-wrapper"><Checkbox issue={issue} className="hand" onChange={this.checkChange} disabled={status === 1 ? true : false} checked={this.state.checkList.includes(issue)} /></i>
                                                            {issue}
                                                        </span>
                                                        <em>{count}</em>
                                                        <em>
                                                            <label>{status === 1 ? '已完成' : '进行中'}</label>
                                                        </em>
                                                        <em>
                                                            <a className="hand traceDetails" onClick={() => this.viewOrderDetail(orderId)}>{status === 1 ? '详情' : ''}</a>
                                                        </em>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <div className="tracePager popdetails-page">
                                        <Pagination size="small" pageSize={10} onChange={this.turnPage} total={this.state.traceDetail.issueCount} />
                                    </div>
                                    <div className="cancelTrace"><a className={`hand ${this.state.checkList.length > 0 ? '' : 'disabled'}`} onClick={this.cancelTrace}>追号终止</a></div>
                                </td>
                            </tr>
                            <tr>
                                <th>游戏用户：</th>
                                <td>{this.state.traceDetail.userName}</td>
                            </tr>
                            <tr>
                                <th>追号时间：</th>
                                <td>{formatTime(new Date(this.state.traceDetail.createTime), 'YY-MM-DD hh:mm:ss')}</td>
                            </tr>
                            <tr>
                                <th>彩种：</th>
                                <td>{codeToCn[this.state.traceDetail.lottery]}</td>
                            </tr>
                            <tr>
                                <th>追号内容：</th>
                                <td><div className="ellipsis w500">{this.state.traceDetail.code}</div></td>
                            </tr>
                            <tr>
                                <th>玩法：</th>
                                <td>{playWayToCn[this.state.traceDetail.method && this.state.traceDetail.method.split('_').slice(0, 3).join('_')]}</td>
                            </tr>
                            <tr>
                                <th>追号模式：</th>
                                <td>{this.traceModeConfig[this.state.traceDetail.traceType]}</td>
                            </tr>
                            <tr>
                                <th>开始期号：</th>
                                <td>{this.state.traceDetail.start}</td>
                            </tr>
                            <tr>
                                <th>奖金模式：</th>
                                <td>{this.state.traceDetail.odds}</td>
                            </tr>
                            <tr>
                                <th>模式：</th>
                                <td>{this.state.traceDetail.perAmount}元</td>
                            </tr>
                            <tr>
                                <th>追号期数：</th>
                                <td>{this.state.traceDetail.issueCount}</td>
                            </tr>
                            <tr>
                                <th>追号总金额：</th>
                                <td>¥{this.state.traceDetail.totalMoney}</td>
                            </tr>
                            <tr>
                                <th>完成期数：</th>
                                <td>{this.state.traceDetail.finishCount}</td>
                            </tr>
                            <tr>
                                <th>完成金额：</th>
                                <td>¥{this.state.traceDetail.finishMoney}</td>
                            </tr>
                            <tr>
                                <th>取消期数：</th>
                                <td>{this.state.traceDetail.cancelCount}</td>
                            </tr>
                            <tr>
                                <th>取消金额：</th>
                                <td>¥{this.state.traceDetail.cancelMoney}</td>
                            </tr>
                            <tr>
                                <th>追号状态：</th>
                                <td>{this.state.traceDetail.status}</td>
                            </tr>
                            <tr>
                                <th>&nbsp;&nbsp;中奖后终止：</th>
                                <td>追中即停</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default LotteryRecord;