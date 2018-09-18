import React from 'react';
import FishContent from './fishContent';
import {getAGHURUrl, getPlayerBalance} from '../../utils/ajax';
import './fish.css';

class Fish extends React.Component {
    state = {
        fishMoney: 0
    }
    getFishMoney = () => {
        getPlayerBalance({
            cbId: 'ag_01'
        }, res => {
            if (res.data.cash) {
                this.setState({fishMoney: res.data.cash});
            }
        });
    }
    componentDidMount() {
        this.getFishMoney();
    }
    playFish = () => {
        getAGHURUrl(res => {
            if (res.data.agForwardGameUrl.agForwardGameUrl) {
                window.open(res.data.agForwardGameUrl.agForwardGameUrl);
            }
        });
    }
    render() {
        return (
            <div className="fish-wrapper">
                <div className="top-shadow"></div>
                <div className="top-wrapper">
                    <div className="clearfix show-case">
                        <div className="fl top-box-left">
                            <div>AG钱包余额</div>
                        </div>
                        <div className="fl top-box-center">
                            <div className="symbol-case">￥<em className="money-case">{this.state.fishMoney}</em>
                            </div>
                        </div>
                        <div className="fl top-box-right">
                            <div className="transfer-btn">余额转账</div>
                        </div>
                        <div className="fl playgame-btn" onClick={this.playFish}></div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content-bg"></div>
                    <div className="content-fish-bg"></div>
                    <div className="content-main">
                        <FishContent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fish;