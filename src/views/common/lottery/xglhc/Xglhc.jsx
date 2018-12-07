/**
 * Created by Orange on 2018-11-22 16:07:05.
 **/

import React from 'react';
import Lhc from '../../lhc';
import { inject, observer } from 'mobx-react';
import io from 'socket.io-client';

@inject('lhcStore')
@observer
class Xglhc extends React.Component {
    constructor(props) {
        super(props);
        this.props.lhcStore.setLottery('xglhc');
        this.socket = null;
    }
    componentDidMount() {
        const { lotteryCode, updateIssue, queryTrendData } = this.props.lhcStore;
        updateIssue();
        queryTrendData();
        const locationOrigin = window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
        this.socket = io('http://www.mochen111.net');
        // this.socket = io(locationOrigin);
        this.socket.on('connect', () => { });
        this.socket.on('message', (data) => {
            data = JSON.parse(data);
            if (data.lottery === lotteryCode.toLocaleUpperCase()) {
                queryTrendData();
            }
        });
        this.socket.on('disconnect', () => { });
    }
    componentWillUnmount() {
        this.socket.disconnect();
    }
    render() {
        return (
            <Lhc />
        );
    }
}

export default Xglhc;