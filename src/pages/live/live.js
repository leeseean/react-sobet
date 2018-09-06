import React from 'react';
import { Popover } from 'antd';
import MiddleMarquee from './middleMarquee';
import './live.css';

const Live = () => {
    return (
        <div className="live-wrapper">
            <div className="live-top-wrapper">
                <div className="live-top">
                    <div className="clearfix live-cards">
                        <div className="fr live-et">
                            <div className="live-et-wrapper">
                                <img src={require("../../images/live/entwinetech_logo.png")}/>
                                <p>即将上线 敬请期待</p>
                            </div>
                        </div>
                        <div className="fr live-mg">
                            <div className="live-mg-wrapper">
                                <img src={require("../../images/live/microgaming_logo.png")}/>
                                <p>即将上线 敬请期待</p>
                            </div>
                        </div>
                        <div className="fr live-ag">
                            <div className="live-ag-top">
                                <span className="live-play-ag">立即进入AG平台</span>
                            </div>
                            <div className="live-ag-bottom">
                                <div className="live-ag-money">AG钱包余额</div>
                                <div className="clearfix ag-balance">
                                    <span className="fl ag-money-symbol">¥<i className="ag-money-count">0.0000</i></span>
                                    <span className="fr ag-zhuanzhang">余额转账</span>
                                </div>
                                <div className="clearfix ag-bottom">
                                    <i className="ag-pc-divider"></i>
                                    <i className="fl ag-pc-download">PC客户端下载</i> 
                                    <i className="fr ag-app-download">
                                        <Popover placement="bottom" content={<div><img src={require("../../images/live/qrcode_a.png")} width="130"/><div style={{width: '100%', textAlign: 'center'}}>AG手机端</div></div>} trigger="hover">
                                            手机APP下载
                                        </Popover>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="live-bottom-wrapper">
                <MiddleMarquee/>
                <div className="clearfix" style={{width: '1200px', margin: '0 auto'}}>
                    <div className="fl live-baccarat-wrapper">
                        <div>
                            <p><span className="live-baccarat-title">百家乐</span><span>Live Baccarat</span></p>
                            <p style={{width: '295px', lineHeight: '1.5'}}>
                            百家乐源于意大利，十五世纪时期传入法国，及至十九世纪时盛传于英法等地。时至今日，百家乐是世界各地赌场中受欢迎的赌戏之一。
                            </p>
                        </div>
                    </div>
                    <div className="fl live-roulette-wrapper">
                        <div>
                            <p><span className="live-roulette-title">轮盘</span><span>Live Roulette</span></p>
                            <p style={{width: '250px', lineHeight: '1.5'}}>
                            轮盘一般会有37或38个数字，由庄荷负责在转动的轮盘边打珠，然后珠子落在该格的数字就是得奖号码。
                            </p>
                        </div>
                    </div>
                    <div className="fr live-sicbo-wrapper">
                        <div>
                            <p><span className="live-sicbo-title">骰宝</span><span>Sic bo</span></p>
                            <p style={{width: '175px', lineHeight: '1.5'}}>
                            庄家先把三颗骰子放在有盖的器皿内摇晃。当各闲家下注完毕，庄家便打开器皿并派彩。
                            </p>
                        </div>
                    </div>
                    <div className="fl live-blackjack-wrapper">
                        <div>
                            <p><span className="live-blackjack-title">21点</span><span>Live Blackjack</span></p>
                            <p style={{width: '250px', lineHeight: '1.5'}}>
                            21点起源于法国，有着悠久的历史。世界各地的赌场中21点都广受欢迎。
                            </p>
                        </div>
                    </div>
                    <div className="fr live-texas-wrapper">
                        <p><span className="live-texas-title">德州扑克</span><span>Texas hold'em Poker</span></p>
                        <p style={{width: '175px', lineHeight: '1.5'}}>
                        是世界上最流行的公牌扑克衍生游戏，也是国际扑克比赛的正式竞赛项目之一。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Live;