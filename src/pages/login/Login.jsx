import React from 'react';
import { Carousel } from 'antd';
import { queryCurrentActivity } from '../../utils/ajax';
import WrappedNormalLoginForm from './LoginForm';
import './login.styl';

class Login extends React.Component {
    state = {
        sliderData: [{
            "id": 109,
            "activityTitle": "流水送金",
            "activityTitleSecond": "三重豪礼，最高奖金388元",
            "startTime": "2018-04-24 00:00:00",
            "endTime": "2019-05-01 18:16:05",
            "imagePath": "/static/image/preadmin/upload/405/1524478929631.jpg",
            "activityType": 2,
            "diffTime": "18172946015",
            "frontImagePath": "/static/image/preadmin/upload/405/1524478922595.jpg",
            "isjoined": null,
            "limitRebate": 0,
            "gamename": "全部",
            "availableApply": 1,
            "activityConfigs": null,
            "applyBonusMaxTimes": 0,
            "applyBonusInterVal": 0,
            "isdel": null,
            "toThumbnail": 0,
            "thumbnailPath": ""
        }, {
            "id": 106,
            "activityTitle": "投注送性吧VIP",
            "activityTitleSecond": "流水兑换性吧VIP资格，名额有限先到先得",
            "startTime": "2017-09-05 23:46:28",
            "endTime": "2018-12-31 23:59:59",
            "imagePath": "/static/image/preadmin/upload/362/1518728247548.jpg",
            "activityType": 2,
            "diffTime": "7739180015",
            "frontImagePath": "/static/image/preadmin/upload/362/1518728361979.jpg",
            "isjoined": null,
            "limitRebate": 0,
            "gamename": "彩票",
            "availableApply": 1,
            "activityConfigs": null,
            "applyBonusMaxTimes": 0,
            "applyBonusInterVal": 0,
            "isdel": null,
            "toThumbnail": 1,
            "thumbnailPath": "/static/image/preadmin/upload/362/1504626329433.jpg"
        }]
    }
    componentDidMount() {
        queryCurrentActivity().then(res => {
            if (res.data.code === 0) {
                this.setState({
                    sliderData: res.data.result.entities
                });
            }
        });
    }
    render() {
        return (
            <div className="login-wrap">
                <header>
                    <div className="wrap clearfix">
                        <div className="logo fl">
                            <i className="icon-logo"></i>
                            <i className="icon-logo2018"></i>
                        </div>
                        <ul className="fr">
                            <li className="line fl">
                                <a href="/static/sobet/speed.html" target="_self">选择线路</a>
                            </li>
                            <li className="contact fl">
                                <a href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1"
                                    target="_blank">联系客服</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div id="main">
                    <div className="content">
                        <div className="banner fl">
                            <div className="gallery">
                                <Carousel className="swiper-container" dots={false} autoplay={true}>
                                    {
                                        this.state.sliderData.map(item => {
                                            const { id, frontImagePath, activityTitle, gamename, activityTitleSecond } = item;
                                            return (
                                                <div key={id} className="slide-li swiper-slide">
                                                    <div style={{ background: `url(${require('../../images/login/slide.jpg')}) no-repeat center` }} className="swiper-lazy"></div>
                                                    <div className="slide-title-type">
                                                        <span className="slide-title">{activityTitle}</span>
                                                        <span className="slide-type">{gamename}</span>
                                                    </div>
                                                    <span className="slide-sub-title">{activityTitleSecond}</span>
                                                    <div className="slide-li-mask"></div>
                                                </div>
                                            );
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                        <div className="login fr">
                            <div className="login-content">
                                <h3>登录LOGIN</h3>
                                <WrappedNormalLoginForm />
                            </div>
                        </div>
                    </div>
                    <ul className="download clearfix">
                        <li className="fl">
                            <img src={require("../../images/login/app-qrcode.jpg")} alt="" />
                            <span>
                                摩臣APP
                                <a href="javascript:;">扫码下载</a>
                            </span>
                        </li>
                        <li className="fl">
                            <img src={require("../../images/login/client-guaji.png")} alt="" />
                            <span>
                                挂机软件
                                <a className="download-icon" href="https://download.volocn.com/static/client/mcbet/mochenbet.zip">立即下载</a>
                            </span>
                        </li>
                        <li className="fl">
                            <img src={require("../../images/login/client-pc.png")} alt="" />
                            <span>
                                PC客户端
                                <a className="download-icon" href="https://download.volocn.com/static/client/McClient.zip">立即下载</a>
                            </span>
                        </li>
                        <li className="fl">
                            <img src={require("../../images/login/client-speed.png")} alt="" />
                            <span>
                                快速登录器
                                <a className="download-icon" href="https://download.volocn.com/static/client/linepublisher/%e6%91%a9%e8%87%a3%e7%99%bb%e5%bd%95%e5%99%a8.exe">立即下载</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Login;
