import React from 'react';
import { Popover, Carousel } from 'antd';
import CountUp from 'react-countup';
import HotGames from './HotGames';
import './index.styl';
import AllGame from './AllGame';
import { getSlotReward } from '../../utils/ajax';

class Slot extends React.Component {
    state = {
        rewardData: []
    }
    componentDidMount() {
        getSlotReward().then(res => {
            if (res.data.code === 0) {
                this.setState({
                    rewardData: res.data.data
                });
            }
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

        return (
            <div className="slot-wrapper" >
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
                                    <div className="slot-pool-top" style={{ height: '260px' }}>
                                        <Carousel vertical={true} slidesToScroll={1} dots={false} infinite={true} slidesToShow={10} autoplay={true} speed={2000} autoplaySpeed={2000} cssEase="linear">
                                            {
                                                this.state.rewardData.map((item, index) => {
                                                    const { imgUrl, gameName, playerCode, rewardAmount } = item;
                                                    return (
                                                        <div className="clearfix" key={index}>
                                                            <div className="fl">
                                                                <img style={{ margin: '10px 0 0 10px' }} src={imgUrl} width="55" alt="" />
                                                            </div>
                                                            <div style={{ width: '90px', marginLeft: '20px' }} className="fl">
                                                                <p style={{ color: '#f0bd02' }}>{playerCode.replace(playerCode.slice(1, 3), '***')}</p>
                                                                <p style={{ color: '#fff' }}>{gameName}</p>
                                                            </div>
                                                            <div style={{ marginLeft: '20px' }} className="fl">
                                                                <p style={{ color: '#c4540a' }}>￥{rewardAmount}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </Carousel>
                                    </div>
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
                        <HotGames />
                        <AllGame />
                    </div>
                </div>
            </div>
        );
    }
}

export default Slot;