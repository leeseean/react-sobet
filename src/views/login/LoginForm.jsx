import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {
    ssoLogin
} from '../../utils/jsonp';
import md5 from 'md5';

const FormItem = Form.Item;

@withRouter
@inject('globalStore', 'forgetStore')
@observer
class NormalLoginForm extends React.Component {
    _mounted = false
    state = {
        verifycodeFlag: false,
        capchaUrl: `/sso/imageCode?date=${new Date()}`
    }
    refreshCapcha = () => {
        if (!this._mounted) {
            return;
        }
        this.setState({
            capchaUrl: `/sso/imageCode?date=${new Date()}`
        });
    }
    jumpByUserType = (type) => {
        const { history } = this.props;
        let url = '/';
        switch (type) {
            case 0:
            case 1:
                //history.push('/index');
                url = '/index';
                break;
            default:
                //history.push('/index');
                url = '/index';
                break;
        }
        window.location.href = url;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { globalStore } = this.props;
        this
            .props
            .form
            .validateFields((err, formData) => {
                if (!err && this._mounted) {
                    ssoLogin(formData.userName, md5(formData.password), formData.capchaCode).then(res => {
                        if (res.needCapchaCode) {//验证码
                            this.setState({
                                verifycodeFlag: true
                            });
                        } else {
                            this.setState({
                                verifycodeFlag: false
                            });
                        }
                        if (res.server && res.server === 'maintenance') { //系统维护提示
                            message.warning(`${res.tipinfo || `系统维护中，预计${res.time}结束！`}`);
                            return;
                        }
                        if (res.code === 0) {
                            globalStore.login(res.user);
                            this.jumpByUserType(res.user.userType);
                        } else {
                            if (res.code === 2) {
                                if (res.loginFailCount === 1) {
                                    message.error('您输入的密码有误');
                                } else if (res.loginFailCount === 2) {
                                    message.error('您输入的密码有误，连续输错5次密码，账号将被锁定，您还有3次机会');
                                } else if (res.loginFailCount === 3) {
                                    message.error('您输入的密码有误，连续输错5次密码，账号将被锁定，您还有2次机会');
                                } else if (res.loginFailCount === 4) {
                                    message.error('您输入的密码有误，连续输错5次密码，账号将被锁定，您还有1次机会');
                                } else if (res.loginFailCount === 5) {
                                    message.error('该账号已被锁定，请联系客服解锁');
                                }
                            } else {
                                message.error(res.msg);
                            }
                        }

                    });
                }
            });
    }
    componentDidMount() {
        this._mounted = true;
        const { globalStore } = this.props;
        if (globalStore.logined) { //如果登陆状态为true。直接跳到首页
            this.jumpByUserType(globalStore.userType);
        }
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { forgetStore } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: '请输入用户名!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名" size="large" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入密码!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码" size="large" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox className="login-remember-me">记住我</Checkbox>
                    )}
                    <a className="login-form-forgot"  onClick={()=>{
                        forgetStore.setModalVisible(true)
                    }}>忘记密码</a>
                    {
                        this.state.verifycodeFlag ? (
                            <div className="login-with-capcha">
                                {getFieldDecorator('capchaCode', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入验证码!'
                                        }
                                    ]
                                })(
                                    <Input
                                        className="capcha-input"
                                        prefix={< Icon type="check" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="text"
                                        placeholder="验证码" size="large" />
                                )}
                                <img className="capcha-img" src={this.state.capchaUrl} alt="点击刷新验证码" onClick={this.refreshCapcha} />
                                <Button type="primary" htmlType="submit" className="login-form-button" size="large">登录</Button>
                            </div>
                        ) : (<Button type="primary" htmlType="submit" className="login-form-button" size="large">登录</Button>)
                    }
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;