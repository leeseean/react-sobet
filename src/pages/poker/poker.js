import React from 'react';
import GameList from './gameList';
import './poker.css';

class Poker extends React.Component {
    state = {
        gameType: 'all'//all,idn,kgame
    }
    switchTab(value) {
        this.setState({
            gameType: value
        });
    }
    render() {
        return (
            <div className="poker-wrapper">
                <div className="qipai-top">
                    <div className="qipai-top-wrap">
                        <div className="idn-top">
                            <div className="idn-top-wrap">
                                <div className="idn-balance-title">IDN钱包余额</div>
                                <div className="idn-balance-count">
                                    <i className="idn-count-ico">￥</i>
                                    <i className="idn-count">----</i>
                                </div>
                            </div>
                            <span id="idn-btn">余额转账</span>
                        </div>
                        <div className="kgame-top">
                            <div className="kgame-top-wrap">
                                <div className="kgame-balance-title">KGAME钱包余额</div>
                                <div className="kgame-balance-count">
                                    <i className="kgame-count-ico">￥</i>
                                    <i className="kg-count">----</i>
                                </div>
                            </div>
                            <span id="kgame-btn">余额转账</span>
                        </div>
                    </div>
                </div>
                <div className="qipai-main">
                    <div className="qipai-caution-wrap">
                        <div className="qipai-caution"></div>
                        <span>
                            <img alt="" src={require("../../images/poker/caution.png")} width="30" height="30"/>
                            请选择您喜欢的游戏
                        </span>
                    </div>
                    <div className="qipai-tabs clearfix">
                        <div className={`qipai-tab qipai-all ${this.state.gameType === 'all'&&'active'}`} type="qipai-all" onClick={() => this.switchTab('all')}>
                            <span className="qipai-all-icon"></span>
                            <span className="qipai-all-text">
                                全部游戏
                            </span>
                        </div>
                        <div className={`qipai-tab qipai-idn ${this.state.gameType === 'idn'&&'active'}`} type="qipai-idn" onClick={() => this.switchTab('idn')}>
                            <span className="qipai-idn-img"></span>
                        </div>
                        <div className={`qipai-tab qipai-kgame ${this.state.gameType === 'kgame'&&'active'}`} type="qipai-kgame" onClick={() => this.switchTab('kgame')}>
                            <span className="qipai-kgame-img"></span>
                        </div>
                    </div>
                    <div className="qipai-lists">
                        <ul className="qipai-ul clearfix">
                            <GameList gameType={this.state.gameType}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Poker;