/**
 * Created by Orange on 2018-11-06 13:42:40.
 **/

import React from 'react';
import { Modal } from 'antd';
import { getTraceDetail } from '../../../../utils/ajax';
import formatTime from '../../../../utils/formatTime';
import './orderDetail.styl';
import TraceDetail from './TraceDetail.jsx';

class OrderDetail extends React.Component {
    state = {
        recordDetail: this.props.recordDetail,
        betModalFlag: this.props.betModalFlag,
        traceModalFlag: false,
        traceDetail: {},
        tracePageData: []
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.betModalFlag !== prevState.betModalFlag) {
            return {
                recordDetail: nextProps.recordDetail,
                betModalFlag: nextProps.betModalFlag
            };
        }
        return null;
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
    getStateFromTraceModal = state => {
        this.setState(state);
    }
    render() {
        const { lotteryCodeToCn, playWayToCn, closeBetModal, cancelOrder } = this.props;
        return (
            <React.Fragment>
                <Modal width="650px" title="投注详情" wrapClassName="record-detail-wrapper" rowClassName="record-row" centered footer={null} visible={this.state.betModalFlag} onCancel={closeBetModal}>
                    <table>
                        <tbody>
                            <tr>
                                <th>注单编号：</th>
                                <td>
                                    <em>{this.state.recordDetail.orderId}</em>
                                    {
                                        this.state.recordDetail.isCurrentIssue === 1 ? <span className="order-cancel" onClick={() => cancelOrder(this.state.recordDetail.orderId, this.state.recordDetail.issue)}>撤单</span> : null
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
                                <td>{lotteryCodeToCn[this.state.recordDetail.lottery && this.state.recordDetail.lottery.toLocaleLowerCase()]}</td>
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
                <TraceDetail {...{ lotteryCodeToCn, playWayToCn }} getStateFromTraceModal={this.getStateFromTraceModal} traceModalFlag={this.state.traceModalFlag} traceDetail={this.state.traceDetail} tracePageData={this.state.tracePageData} viewTraceDetail={this.viewTraceDetail} />
            </React.Fragment>
        );
    }
}

export default OrderDetail;