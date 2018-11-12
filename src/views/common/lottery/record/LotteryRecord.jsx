import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Modal, message } from 'antd';
import { getRecordDetail, cancelOrder } from '../../../../utils/ajax';
import formatTime from '../../../../utils/formatTime';
import OrderDetail from './OrderDetail.jsx';
import './lotteryRecord.styl';
import BetAgainModal from '../BetAgainModal.jsx';

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
    closeBetModal = () => {
        this.setState({
            betModalFlag: false
        });
    }
    toggleRecord = () => {
        const { setTrendListHeight } = this.props.lotteryStore;
        this.setState(prevState => ({
            recordShowFlag: !prevState.recordShowFlag,
        }));
        setTrendListHeight();
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
            title: <div style={{width: '100px'}}>参与时间</div>,
            dataIndex: 'orderTime',
            render: text => <div style={{width: '100px'}}>{text}</div>,
            width: 100
        }, {
            title: <div style={{width: '100px'}}>奖期</div>,
            dataIndex: 'issue',
            render: text => <div style={{width: '100px'}}>{text}</div>,
            width: 100
        }, {
            title: <div style={{width: '100px'}}>玩法</div>,
            dataIndex: 'method',
            render: text => <div style={{width: '100px'}}>{text}</div>,
            width: 100
        }, {
            title: <div style={{width: '80px'}}>投注内容</div>,
            dataIndex: 'code',
        }, {
            title: '投注金额',
            dataIndex: 'amount',
            width: 80,
        }, {
            title: '中奖情况',
            dataIndex: 'status',
            render: text => {
                if (Number.isNaN(Number(text))) {
                    return text;
                }
                return <em style={{ color: '#ff5243' }}>{text}</em>;
            }
        }, {
            title: '操作',
            dataIndex: 'mani',
            width: 160,
        }];
        if (lotteryCode === 'wbgmmc') {
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
                const { key, issue } = record;
                if (e.target.getAttribute('value') === '再次投注') {
                    this.betAgain(key, issue);
                    return;
                }
                if (e.target.getAttribute('value') === '撤单') {
                    this.cancelOrder(key, issue);
                    return;
                }
                this.viewOrderDetail(key);
            }, // 点击行
        };
    }
    cancelOrder = (orderId, issue) => {
        const { getRecord } = this.props.lotteryStore;
        Modal.confirm({
            title: `您确定要撤销${issue}期的这一注单吗？`,
            onOk: async () => {
                const res = await cancelOrder({ orderId });
                if (res.data.code === 0) {
                    message.success('撤单成功！');
                } else {
                    message.error(res.data.msg);
                }
                getRecord();
            }
        });
    }
    betAgain = async (orderId) => {
        const res = await getRecordDetail({ orderId });
        const { toggleBetAgainModal } = this.props.lotteryStore;
        if (res.data.code === 1) {
            this.setState({
                recordDetail: res.data.result,
            });
            toggleBetAgainModal(true);
        }
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
                    <Table size="small" columns={columns} dataSource={dataSource} title={TableTitle} pagination={false} rowClassName="record-item" locale={{ emptyText: '' }} onRow={this.maniRowCallback} scroll={{ y: 360 }} />
                </div>
                <OrderDetail {...{ playWayToCn, lotteryCodeToCn }} recordDetail={this.state.recordDetail} betModalFlag={this.state.betModalFlag} closeBetModal={this.closeBetModal} cancelOrder={this.cancelOrder} />
                <BetAgainModal recordDetail={this.state.recordDetail} />
            </div>
        );
    }
}

export default LotteryRecord;