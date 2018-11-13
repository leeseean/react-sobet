/**
 * Created by Orange on 2018-10-03 17:53:29.
 * 忘记密码页面
 */

import React from 'react';
import { Steps, Button, Input, Icon, Form } from 'antd';
import './forget.styl';
import { forgetPassword } from './forgetAjax';

import Userserver from '../../images/forget/userserver.svg';
import Userserverhide from '../../images/forget/userserverhide.svg';
import Mail from '../../images/forget/mail.svg';
import Mailhide from '../../images/forget/mailhide.svg';
import Pqshow from '../../images/forget/pqshow.svg';
import Pqhide from '../../images/forget/pqhide.svg';
import Success from '../../images/forget/success.svg';

const Step = Steps.Step;
const FormItem = Form.Item;

const steps = [
    { title: '验证账号' }, { title: "找回方式" }, { title: "完成" }
]
class StepUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
        this.change = this.change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    change(e) {
        this.setState({ val: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.fnx(values.userName, 1)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className="stepsUser">
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label='请输入您要找回密码的账号:'
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 11 }}>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: '请输入用户名!'
                            }
                        ]
                    })(
                        <div>
                            <Input placeholder="请输入用户名" ></Input>
                        </div>
                    )}
                </FormItem>
                <FormItem>
                    <   div className="btn">
                        <Button type='primary' htmlType="submit">下一步</Button>
                    </div>
                </FormItem>
            </Form>
        </div>;
    }
}

class StepFn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            confirmDirty: false,
        }
        this.next = this.next.bind(this)
        this.prve = this.prve.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.lastSubmit = this.lastSubmit.bind(this)
        this.validateToNextPassword = this.validateToNextPassword.bind(this)
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this)
    }
    prve() {
        const current = this.state.current - 1;
        this.setState({ current })
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.next()
            }
        })
    }
    lastSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.fnx('problem', 2)
            }
        })

    }
    validateToNextPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    }
    compareToFirstPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value != form.getFieldValue('password')) {
            callback('请保持密码一致')
        } else {
            callback()
        }
    }
    render() {
        const current = this.state.current;
        const { getFieldDecorator } = this.props.form;
        return <div className="stepFounds">
            {
                current == 0 && (
                    <div className='tofind'>
                        <Button onClick={() => this.props.fnx('mail', 2)}><Icon component={Mail}></Icon>邮箱找回</Button>
                        <Button onClick={this.next}><Icon component={Pqshow}></Icon>密码问题找回</Button>
                        <Button onClick={() => this.props.fnx('server', 2)}><Icon component={Userserver}></Icon>人工服务找回</Button>
                        <div className="btn">
                            <Button onClick={() => this.props.prevt()}>上一步</Button>
                        </div>
                    </div>
                )
            }
            {
                current == 1 && (
                    <div className='problem'>
                        <p>您正在找回账号nacwin888的密码</p>
                        <p>密保问题：你的出生地</p>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                wrapperCol={{ span: 16 }}>
                                {getFieldDecorator('answer', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入该账号的密保答案!'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入该账号的密保答案" ></Input>
                                )}
                            </FormItem>
                            <FormItem>
                                <div className="btn">
                                    <Button onClick={ this.prve }>上一步</Button>
                                    <Button type='primary' htmlType="submit">下一步</Button>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                )
            }
            {
                current == 2 && (
                    <div className='reproblem'>
                        <p>您正在找回账号nacwin888甄密码</p>
                        <Form onSubmit={this.lastSubmit}>
                            <FormItem
                                wrapperCol={{ span: 16 }}>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入新的登陆密码!'
                                        }, {
                                            validator: this.validateToNextPassword
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入新的登陆密码" type='password'></Input>
                                )}
                            </FormItem>
                            <FormItem
                                wrapperCol={{ span: 16 }}>
                                {getFieldDecorator('confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请再次输入新的登陆密码!'
                                        }, {
                                            validator: this.compareToFirstPassword,
                                        }
                                    ]
                                })(
                                    <Input placeholder="请再次输入新的登陆密码" type='password'></Input>
                                )}
                            </FormItem>
                            <FormItem>
                                <div className="btn">
                                    <Button type='primary' htmlType="submit">提交</Button>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                )
            }



        </div>
    }
}

class Stepdone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const types = this.props.types
        return <div className="donefn">
            {
                types === 'problem' && (
                    <div className='donefnproblem'>
                        <Success className='success' width='3em' height='3em'></Success> 
                        您的新密码已经设置成功
                    </div>
                )
            }{
                types === 'mail' && (
                    <div className='mail'>
                        <p>已发送邮件至邮箱：adasdasd@.com</p>
                        <p>请您注意查收邮件，并按照邮件中甄提示操作，完成安全验证</p>
                        <p>没有收到邮件？请点击 <a>重新发送</a></p>
                    </div>
                )
            }{
                types === 'server' && (
                    <div className='server'>
                        <div className='serverTop'>
                            <p>人工服务找回</p>
                            <p>1、在线客服 <Button>点此联系</Button></p>
                            <p>2、客服QQ 883952 </p>
                        </div>
                        <div className='serverBom'>
                            <h3>温馨提示</h3>
                            <p>您好,若您忘记登陆（或资金）密码，请您准备以下信息，然后联系我们，以便我们审核：</p>
                            <p>1、银行卡照片</p>
                            <p>2、身份证照片</p>
                            <p>3、最后一笔充值电子回单（网银，微信，支付宝等支付回单）</p>
                            <p>4、账户余额</p>
                        </div>
                    </div>
                )
            }
        </div>;
    }
}

function GreetDom(props) {
    switch (props.current) {
        case 0:
            const WarpStepUser = Form.create()(StepUser);
            return <WarpStepUser fnx={props.fnx} />
        case 1:
            const WarpStepFn = Form.create()(StepFn);
            return <WarpStepFn prevt={props.fnp} fnx={props.fnx} />
        case 2:
            return <Stepdone types={props.types} />
        default:
            return ''

    }

}


class Forget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            types: '',
        }
        this.next = this.next.bind(this)
        this.prevt = this.prevt.bind(this)
    }
    componentWillReceiveProps() {
        const current = 0;
        this.setState({ current })
    }
    next(val, type) {
        const current = this.state.current + 1;
        let types;
        if (type == 1) {
            forgetPassword({ 'userName': val }).then(res => {
                console.log(res)
            })
        } else if (type == 2) {
            types = val
        }
        this.setState({ types })
        this.setState({ current })
    }
    prevt() {
        const current = this.state.current - 1;
        this.setState({ current })
    }
    render() {
        const { current, types } = this.state
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">
                    <GreetDom fnx={this.next} current={current} fnp={this.prevt} types={types} />
                </div>
                <div className="steps-action"></div>
            </div>
        );
    }
}

export default Forget;