/**
 * Created by Orange on 2018-11-06 13:45:23.
 **/

import React from 'react';
import { Modal, Pagination, Checkbox } from 'antd';
import { getRecordDetail, cancelTrace } from '../../../../utils/ajax';
import formatTime from '../../../../utils/formatTime';
import './traceDetail.styl';

class TraceDetail extends React.Component {
    state = {
        traceDetail: this.props.traceDetail,
        traceModalFlag: this.props.traceModalFlag,
        tracePageData: this.props.tracePageData,
        checkList: [],
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.traceModalFlag !== prevState.traceModalFlag) {
            return {
                traceDetail: nextProps.traceDetail,
                traceModalFlag: nextProps.traceModalFlag,
                tracePageData: nextProps.tracePageData
            };
        }
        return null;
    }
    traceModeConfig = {
        1: '利润率追号',
        2: '同倍追号',
        3: '翻倍追号'
    }
    backToBetModal = () => {
        const { getStateFromTraceModal } = this.props;
        getStateFromTraceModal({
            traceModalFlag: false,
            betModalFlag: true,
        });
    }
    closeTraceModal = () => {
        const { getStateFromTraceModal } = this.props;
        getStateFromTraceModal({
            traceModalFlag: false,
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
    viewOrderDetail = async (orderId) => {
        const res = await getRecordDetail({ orderId });
        const { getStateFromTraceModal } = this.props;
        if (res.data.code === 1) {
            getStateFromTraceModal({
                traceModalFlag: false,
                recordDetail: res.data.result,
                betModalFlag: true,
            });
        }
    }
    cancelTrace = async () => {
        const { viewTraceDetail } = this.props;
        const res = await cancelTrace({ traceId: this.state.traceDetail.traceId, issues: this.state.checkList });
        if (res.data.code === 1) {
            this.setState({
                checkList: []
            });
            viewTraceDetail();
        }
    }
    turnPage = (e) => {
        this.setState({
            tracePageData: this.state.traceDetail.issues.slice(e - 10, e),
            checkList: []
        });
    }

    render() {
        const { lotteryCodeToCn, playWayToCn } = this.props;
        return (
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
                                                        {
                                                            status === 1 ? <a className="hand traceDetails" onClick={() => this.viewOrderDetail(orderId)}>详情</a> :  <a className="hand traceDetails"></a>
                                                        }
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
                            <td>{lotteryCodeToCn[this.state.traceDetail.lottery && this.state.traceDetail.lottery.toLocaleLowerCase()]}</td>
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
        );
    }
}

export default TraceDetail;