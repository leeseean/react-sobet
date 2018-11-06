/**
 * Created by Orange on 2018-11-06 10:45:49.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, notification } from 'antd';
import { getRecordDetail, getTraceDetail } from '../../../utils/ajax';
import io from 'socket.io-client';

@inject(stores => ({
    username: stores.globalStore.username,
}))
@observer
class WinNotification extends React.Component {
    socker = null
    notificationRef = null
    viewOrderDetail = (orderId, istrace) => {

    }
    initSocket = () => {
        const locationOrigin = window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
        const { username } = this.props;
        this.socket = io(`${locationOrigin}/lottery?userName=${username}&appId=1`, { path: '/onlineio', forceNew: true });
        this.socket.on('connect', () => { });
        // {"bonus":"6.259","issue":"20181106-1339","istrace":0,"lottery":"日本30秒","method":"五星3单2双_五星2单3双","orderId":"201811060T28SoAHMiX0003","type":1}
        this.socket.on('lottery_award_message', (data) => {
            data = JSON.parse(data.message);
            const {
                bonus,
                issue,
                istrace,
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
                        <div className="msg-item-detail" onClick={() => this.viewOrderDetail(orderId, istrace)}>
                            点击查看详情
                        </div>
                    </div>
                ),
                placement: 'bottomRight',
                style: {
                    width: 230
                }
            });
        });
        this.socket.on('disconnect', () => { });
    }
    componentDidMount() {
        notification.config({
            getContainer: () => this.notificationRef
        });
        this.initSocket();
    }
    componentWillUnmount() {
        this.socket.disconnect();
    }
    render() {
        return (
            <div className="win-notification-wrapper" ref={this.notificationRef = ref}></div>
        );
    }
}

export default WinNotification;