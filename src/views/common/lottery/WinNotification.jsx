/**
 * Created by Orange on 2018-11-06 10:45:49.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { notification } from 'antd';
import { getRecordDetail } from '../../../utils/ajax';
import io from 'socket.io-client';
import OrderDetail from './record/OrderDetail.jsx';
import './winNotification.styl';

@inject(stores => ({
    username: stores.globalStore.username,
    playWayToCn: stores.lotteryStore.playWayToCn,
    lotteryCodeToCn: stores.lotteryStore.lotteryCodeToCn,
}))
@observer
class WinNotification extends React.Component {
    state = {
        recordDetail: {},
        betModalFlag: false
    }
    socker = null
    notificationRef = null
    viewOrderDetail = async orderId => {
        const res = await getRecordDetail({ orderId });
        if (res.data.code === 1) {
            this.setState({
                recordDetail: res.data.result,
                betModalFlag: true,
            });
        }
    }
    closeBetModal = () => {
        this.setState({
            betModalFlag: false
        });
    }
    initSocket = () => {
        const locationOrigin = window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
        const { username } = this.props;
        this.socket = io(`${locationOrigin}/lottery?userName=${username}&appId=1`, { path: '/onlineio', forceNew: true });
        this.socket.on('connect', () => { });
        // {"bonus":"6.259","issue":"20181106-1339","istrace":0,"lottery":"日本30秒","method":"五星3单2双_五星2单3双","orderId":"201811060T28SoAHMiX0003","type":1}
        this.socket.on('lottery_award_message', (data) => {
            data = JSON.parse(data);
            const {
                bonus,
                issue,
                lottery,
                method,
                orderId
            } = data;
            
            notification.open({
                message: <div className="msg-item-title">中奖提示</div>,
                description: (
                    <div className="msg-item">
                        <div className="msg-item-content">
                            恭喜您，您投注的第{issue}期{lottery}{method}中奖<span className="msg-item-content-money">{bonus}元</span>
                        </div>
                        <div className="msg-item-detail" onClick={() => this.viewOrderDetail(orderId)}>
                            点击查看详情
                        </div>
                    </div>
                ),
                placement: 'bottomRight',
                style: {
                    width: '300px'
                }
            });
        });
        this.socket.on('disconnect', () => { });
    }
    componentDidMount() {
        notification.config({
            duration: 2000,
            getContainer: () => this.notificationRef
        });
        this.initSocket();
    }
    componentWillUnmount() {
        this.socket.disconnect();
    }
    render() {
        const { playWayToCn, lotteryCodeToCn } = this.props;
        return (
            <React.Fragment>
                <OrderDetail {...{ playWayToCn, lotteryCodeToCn }} recordDetail={this.state.recordDetail} betModalFlag={this.state.betModalFlag} closeBetModal={this.closeBetModal} />
                <div className="win-notification-wrapper" ref={ref => this.notificationRef = ref}></div>
            </React.Fragment>
        );
    }
}

export default WinNotification;