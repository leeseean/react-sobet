import React from 'react';
import { inject, observer } from 'mobx-react';
import './lottery.styl';
import LotteryFavourite from './favorite/LotteryFavorite';
import MainContent from './MainContent';
import WinListMarquee from './WinListMarquee';
import io from 'socket.io-client';

@inject('lotteryStore')
@observer
class Lottery extends React.Component {
    state = {
        _mounted: false
    }
    socket = null
    mainRef = null
    initSocket = () => {
        const { lotteryCode, lotteryType, queryTrendData, getRecord } = this.props.lotteryStore;
        const locationOrigin = window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
        this.socket = io('http://www.mc188.com');
        // this.socket = io(locationOrigin);
        this.socket.on('connect', () => {});
        this.socket.on('message', (data) => {
            data = JSON.parse(data);
            if (data.lottery === lotteryCode.toLocaleUpperCase()) {
                queryTrendData();
                getRecord();
            }
            if (lotteryType === 'pk10') {
                if (data.lottery.toLocaleLowerCase() === lotteryCode) {
                    document.getElementById('raceFrame').contentWindow.postMessage({
                        data,
                        lottery: lotteryCode,
                        type: 'socket'
                    }, '*');
                }
            }
        });
        this.socket.on('disconnect', () => { });
    }
    componentDidMount() {
        this.setState({
            _mounted: true
        });
        this.initSocket();

    }
    componentWillUnmount() {
        const { disposer } = this.props.lotteryStore;
        this.setState({
            _mounted: false
        });
        disposer();
        this.socket.disconnect();
    }
    render() {
        return (
            <div className="lottery-wrapper">
                <div className="lottery-inner-wrapper" ref={ref => this.mainRef = ref}>
                    {
                        this.state._mounted ? <LotteryFavourite mainRef={this.mainRef} /> : null
                    }
                    <MainContent />
                </div>
                <WinListMarquee />
            </div>
        );
    }
}

export default Lottery;