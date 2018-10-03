import React from 'react';
import { Popover } from 'antd';
import CountUp from 'react-countup';
import { getHotSlotGamesData } from '../../utils/ajax';
import './slot.styl';

class Slot extends React.Component {
    state = {
        hotGamesData: []
    }
    getHotGamesData(param) {
        getHotSlotGamesData(param).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    hotGamesData: res.data.data.list
                });
            }
        });
    }
    componentDidMount() {
        this.getHotGamesData({
            currPage: 1,
            pageSize: 6
        });
    }
    render() {
        const QrcodePover = () => {
            return (
                <div className="clearfix">
                    <p style={{ color: 'red' }}>*仅支持Android系统</p>
                    <div className="fl">
                        <img alt="扫描下载" src={require("../../images/slot/ptzr.png")} width="130" />
                        <div style={{ width: '100%', textAlign: 'center' }}>PT真人手机端</div>
                    </div>
                    <div className="fr">
                        <img alt="扫描下载" src={require("../../images/slot/ptlh.png")} width="130" />
                        <div style={{ width: '100%', textAlign: 'center' }}>PT老虎手机端</div>
                    </div>
                </div>
            );
        };
        const GameItem = ({ item }) => {
            const { imgUrl, isProgressive, chsName, gameUrl, gameTestUrl } = item;
            return (
                <div className="game-item">
                    <div className="game-item-img">
                        <img className={isProgressive ? 'game-item-img--short' : null} src={imgUrl} alt="" />
                        {
                            isProgressive ? (<span className="count-up-wrapper">￥<CountUp start={300000 * (0.2 + Math.random())} end={400000} duration={12 * 60 * 60} separator="," decimal="." decimals={2} /></span>) : null
                        }
                    </div>
                    <div className="game-item-bg">                              </div>e="game-item-bg"></div>e = "game-item-bg" ></div >
                        <div className="game-item-hover">
                            <div style={{ color: '#fff', marginTop: '10px                                ' }}>{chsName}</div>
                            <a href={gameUrl} target="_blank"><div className="play-game">立即游戏</div></a>
                            <a href={gameTestUrl} target="_blank"><div style={{ color: '#fff' }}>免费试玩</div></a>
                        </div>
                </div >
            );
    };
    const GameList = ({ listData, ...restObj }) => {
        return (
            <div {...restObj}>
                {
                    listData.map(item => {
                        return <GameItem item={item} key={item.id} />;
                    })
                }
            </div>
        );
    };
    return(
            <div className = "slot-wrapper" >
            <div className="slot-top-wrapper">
                <div className="slot-top">
                    <img className="slot-top-side-img" style={{ right: '-40px' }} width="218" height="367" src={require("../../images/slot/aotu_man.png")} alt="" />
                    <img className="slot-top-side-img" style={{ left: '-180px' }} width="365" height="465" src={require("../../images/slot/super_man.png")} alt="" />
                    <div className="clearfix slot-cards">
                        <div className="fr slot-mg">
                            <div className="slot-mg-wrapper">
                                <img alt="" src={require("../../images/slot/mg_show.jpg")} />
                            </div>
                        </div>
                        <div className="fr slot-pt">
                            <div className="slot-pt-top">
                                <span className="slot-play-pt"></span>
                            </div>
                            <div className="slot-pt-bottom">
                                <div className="slot-pt-money">pt余额</div>
                                <div className="clearfix pt-balance">
                                    <span className="fl pt-money-symbol">¥<i className="pt-money-count">0.0000</i></span>
                                    <span className="fr pt-zhuanzhang">余额转账</span>
                                </div>
                                <div className="clearfix pt-bottom">
                                    <i className="pt-pc-divider"></i>
                                    <i className="fl pt-pc-download">
                                        <a href="http://cdn.vbet.club/happyslots/d/setupglx.exe" download>PC客户端下载</a>
                                    </i>
                                    <i className="fr pt-app-download">
                                        <Popover placement="bottom" content={<QrcodePover />} trigger="hover">
                                            手机APP下载
                                            </Popover>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="fr slot-pool">
                            <div className="slot-pool-wrapper">
                                <div className="slot-pool-bottom">
                                    <CountUp className="slot-pool-num" start={30000000} end={40000000} duration={12 * 60 * 60} separator="," decimal="." decimals={4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slot-bottom-wrapper">
                <img className="slot-bottom-wrapper-img" style={{ left: 0 }} alt="" src={require("../../images/slot/bg_l.jpg")} width="360" height="628" />
                <img className="slot-bottom-wrapper-img" style={{ right: 0 }} alt="" src={require("../../images/slot/bg_r.jpg")} width="360" height="628" />
                <div className="slot-bottom">
                    <div className="clearfix slot-hot-games">
                        <div className="fl clearfix slot-hot-games-left">
                            <img className="fl" width="105" height="105" src={require("../../images/slot/hot-game-icon.png")} alt="" />
                            <div className="fl slot-hot-games-left-text">
                                <p>Hot Slots Game</p>
                                <p style={{ letterSpacing: '12px' }}>热门游戏</p>
                            </div>
                        </div>
                        <div className="fl clearfix slot-hot-games-center">
                            <GameList listData={this.state.hotGamesData} className="clearfix hot-games-list" />
                        </div>
                        <div className="fl slot-hot-games-right"></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Slot;