import React from 'react';
import './index.styl';
import BannerSwiper from './BannerSwiper';
import WinListSlider from './WinListSlider';
import SubSwiper from './SubSwiper';

const Index = () => {
    return (
        <div className="index-wrapper">
            <BannerSwiper />
            <WinListSlider />
            <div className="index-main">
                <div className="index-activity">
                    <div className="index-top clearfix">
                        <div className="activity fl">
                            <div className="index-main-announcement clearfix"><span className="main-announcement-title"></span>
                                <span className="main-announcement-wrap">
                                    <span className="main-announcement-item" data-index="0" id="638">摩臣娱乐平台正常运营公告</span>

                                    <span className="main-announcement-item" data-index="1" id="636">关于腾讯分分彩开奖公告</span>

                                    <span className="main-announcement-item" data-index="2" id="582">关于腾讯分分彩开奖与玩法</span>

                                    <span className="main-announcement-item" data-index="3" id="579">谨防诈骗，认准“摩臣”品牌</span>
                                </span> <span className="main-announcement-more fr">更多 <i className="icon-more">&gt;</i></span></div>
                            <div className="index-main-slide-wrap">
                                <SubSwiper />
                            </div>
                        </div>
                        <div className="qr-code fr"></div>
                    </div>
                </div>
                <div className="index-lottery clearfix">
                    <div className="lottery-hot fl">
                        <div className="hot clearfix">
                            <div className="title fl"><span className="icon-hot"></span> <span className="txt-hot"></span></div>
                            <div className="bonus fr">
                                <div className="bonus-content"><span className="marquee-html-wrap marqueeLeft"></span></div>
                            </div>
                        </div>
                        <ul className="lottery clearfix">
                            <li className="game-item fl"><a href="/lottery#ssc-CQSSC"><i className="lottery-logo logo-cqssc"></i>
                                <span className="lottery-txt">重庆时时彩</span></a></li>
                            <li className="game-item fl"><a href="/lottery#3d-3DFC"><i className="lottery-logo logo-3dfc"></i>
                                <span className="lottery-txt">福彩3D</span></a></li>
                            <li className="game-item fl"><a href="/lottery#3d-SHSSL"><i className="lottery-logo logo-shssl"></i>
                                <span className="lottery-txt">上海时时乐</span></a></li>
                            <li className="game-item fl"><a href="/lottery#ssc-WBGMMC"><i className="lottery-logo logo-wbgmmc"></i>
                                <span className="lottery-txt">WBG秒秒彩</span></a></li>
                            <li className="game-item fl"><a href="/lottery#kl12-SCKL12"><i className="lottery-logo logo-sckl12"></i>
                                <span className="lottery-txt">四川快乐12</span></a></li>
                            <li className="game-item fl"><a href="/lottery#pk10-BJPK10"><i className="lottery-logo logo-bjpk10"></i>
                                <span className="lottery-txt">北京PK10</span></a></li>
                            <li className="game-item fl"><a href="/lottery#k3-MCK3"><i className="lottery-logo logo-mck3"></i>
                                <span className="lottery-txt">摩臣快3</span></a></li>
                            <li className="game-item fl"><a href="/lottery#11y-MC11Y"><i className="lottery-logo logo-mc11y"></i>
                                <span className="lottery-txt">摩臣11选5</span></a></li>
                            <li className="game-item fl"><a href="/lottery#ssc-TXFFC"><i className="lottery-logo logo-txffc"></i>
                                <span className="lottery-txt">腾讯分分彩</span></a></li>
                            <li className="game-item fl"><a href="/static/xglhc/xglhc.html"><i className="lottery-logo logo-xglhc"></i>
                                <span className="lottery-txt">香港六合彩</span></a></li>
                            <li className="game-item fl"><a href="/lottery#ssc-RBSSM"><i className="lottery-logo logo-rbssm"></i>
                                <span className="lottery-txt">日本30秒</span></a></li>
                            <li className="game-item fl"><a href="/lottery#ssc-RDFFC"><i className="lottery-logo logo-rdffc"></i>
                                <span className="lottery-txt">瑞典1分彩</span></a></li>
                            <li className="game-item fl"><a href="/lottery#ssc-RDLFC"><i className="lottery-logo logo-rdlfc"></i>
                                <span className="lottery-txt">瑞典2分彩</span></a></li>
                            <li className="game-item fl"><a href="/lottery#pk10-MCPK10"><i className="lottery-logo logo-mcpk10"></i>
                                <span className="lottery-txt">摩臣PK10</span></a></li>
                            <li className="game-item fl"><a href="/lottery#ssc-HNKY481"><i className="lottery-logo logo-hnky481"></i>
                                <span className="lottery-txt">河南快赢481</span></a></li>
                        </ul>
                    </div>
                    <ul className="download fr">
                        <li className="guaji"><a href="https://download.volocn.com/static/client/mcbet/mochenbet.zip">
                            <div className="down-logo fl"></div>
                            <div className="txt fl">
                                <div className="text-icon"></div><i className="down-icon">点击下载</i>
                            </div>
                        </a></li>
                        <li className="weixin"><a href="https://download.volocn.com/static/client/Wproject/mcwebet.zip">
                            <div className="down-logo fl"></div>
                            <div className="txt fl">
                                <div className="text-icon"></div><i className="down-icon">点击下载</i>
                            </div>
                        </a></li>
                        <li className="ksdlq"><a href="https://download.volocn.com/static/client/linepublisher/摩臣登录器.exe">
                            <div className="down-logo fl"></div>
                            <div className="txt fl">
                                <div className="text-icon"></div><i className="down-icon">点击下载</i>
                            </div>
                        </a></li>
                    </ul>
                </div>
                <ul className="index-game">
                    <li className="game-by"><a href="/sport/by"><img src={require("../../images/index/byw_icon.png")} width="206" height="185"
                        alt="" /></a></li>
                    <li className="game-zryl"><a href="/sport/ag/agIndex"><img src={require("../../images/index/zryl_icon.png")} width="188"
                        height="216" alt="" /></a></li>
                    <li className="game-ty"><a href="/sport/sb-sport"><img src={require("../../images/index/ty_icon.png")} width="226"
                        height="194" alt="" /></a></li>
                    <li className="game-lhj"><a href="/sobet/pt/ptIndex"><img src={require("../../images/index/lhj_icon.png")} width="183"
                        height="176" alt="" /></a></li>
                    <li className="game-lhc"><a href="/static/xglhc/xglhc.html"><img src={require("../../images/index/lhc_icon.png")}
                        width="209" height="158" alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Index;