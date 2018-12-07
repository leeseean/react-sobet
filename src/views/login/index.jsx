import React from 'react';
import { Carousel, Modal } from 'antd';
import { queryCurrentActivity } from '../../utils/ajax';
import WrappedNormalLoginForm from './LoginForm';
import GlobalFootLogo from '../../components/GlobalFootLogo';
import Forget from './forget';
import { observer, inject } from 'mobx-react';

import './index.styl';
import './modol.styl';

@inject('forgetStore')
@observer
class Login extends React.Component {
    state = {
        sliderData: []
    }
    componentDidMount() {
        queryCurrentActivity({ platformId: 1 }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    sliderData: res.data.result.entities
                });
            }
        });
    }
    render() {
        const { forgetStore } = this.props;
        return (
            <div className="login-bg">
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
                    <Modal title='找回密码' centered visible={forgetStore.modalvisible} footer={null} wrapClassName={'forgetModal'} maskClosable={false} onCancel={() => {
                        forgetStore.setModalVisible(false)
                    }}>
                        <Forget mv='forgetStore.modalvisible'></Forget>
                    </Modal>
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
                                                        <div style={{ background: `url(${frontImagePath}) no-repeat center` }} className="swiper-lazy"></div>
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
                <GlobalFootLogo page={'login'}/>
            </div>
        );
    }
}

export default Login;
