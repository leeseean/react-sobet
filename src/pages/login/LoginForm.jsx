import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

const FormItem = Form.Item;

@withRouter
@inject('loginStore')
@observer
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {loginStore, history} = this.props;
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    loginStore.login();
                    history.push('/index');
                    console.log('Received values of form: ', values);
                }
            });
    }
    componentDidMount() {
        const {loginStore, history} = this.props;
        if (loginStore.logined) { //如果登陆状态为true。直接跳到首页
            history.push('/index');
        }
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                            placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Password!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                            type="password"
                            placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;