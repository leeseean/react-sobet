import React from 'react'
import { inject, observer } from 'mobx-react';
import {Row,Col,Button,Badge} from 'antd';
import {withRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import './account.styl';



@withRouter
@inject('personalStore')
@observer
class Account extends React.Component{
    state = {
        curActive:this.props.location.pathname
    }

    handleTabSwitch=()=>{

    }
    render() {
        return (
           <div className="right-header">
                <h2 className="title">账户设置</h2>
                <section className="acc_info">
                    <Row  gutter={24}>
                        <Col span={12}>
                            <span className="l-w">用户名：</span>
                            <span>phoebe123</span>
                        </Col>
                        <Col span={12}>
                            <span className="l-w">注册时间：</span>
                            <span>2018-07-24 09::47:38</span>
                        </Col>

                        <Col span={12}>
                            <span className="l-w">我的昵称：</span>
                            <span className="nick-name">phoebe123</span>
                            <Button type="primary" className="info-btn">立即设置</Button>
                        </Col>
                        <Col span={12}>
                            <span className="l-w">真实姓名：</span>
                            <span className="nick-name">暂未设置</span>
                            <Button type="primary" className="info-btn">立即设置</Button>
                        </Col>
                    </Row>
                </section>
                <section className="acc_opt">
                    <Row gutter={24}>
                        <Col span={12} >
                            <Row className="opt_cart-bg">
                                <Col span={4}>
                                    <img src={require('../../../images/allgame-sb-sport.png')} alt="" style={{width:'60px'}}/>
                                </Col>
                                <Col span={20}>
                                    <p>资金密码设置<Badge count={'未设置'}/></p>
                                    <p>进行银行卡绑定，转账等资金操作时需要进行密码确认，以提高您的资金安全</p>
                                    <p><span>设置资金密码>></span></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row className="opt_cart-bg">
                                <Col span={4}>
                                    <img src={require('../../../images/allgame-sb-sport.png')} alt="" style={{width:'60px'}}/>
                                </Col>
                                <Col span={20}>
                                    <p>资金密码设置<Badge count={'未设置'}/></p>
                                    <p>进行银行卡绑定，转账等资金操作时需要进行密码确认，以提高您的资金安全</p>
                                    <p><span>设置资金密码>></span></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row className="opt_cart-bg">
                                <Col span={4}>
                                    <img src={require('../../../images/allgame-sb-sport.png')} alt="" style={{width:'60px'}}/>
                                </Col>
                                <Col span={20}>
                                    <p>资金密码设置<Badge count={'未设置'}/></p>
                                    <p>进行银行卡绑定，转账等资金操作时需要进行密码确认，以提高您的资金安全</p>
                                    <p><span>设置资金密码>></span></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row className="opt_cart-bg">
                                <Col span={4}>
                                    <img src={require('../../../images/allgame-sb-sport.png')} alt="" style={{width:'60px'}}/>
                                </Col>
                                <Col span={20}>
                                    <p>资金密码设置<Badge count={'未设置'}/></p>
                                    <p>进行银行卡绑定，转账等资金操作时需要进行密码确认，以提高您的资金安全</p>
                                    <p><span>设置资金密码>></span></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default Account