import React from 'react'
import { Form, Input, Progress, Button, message} from 'antd';
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {checkPwdGrade} from '../../../../utils/checkPwdGrade.js';
import {strEnc} from '../../../../utils/des.js';
import { updatePassword,updatePasswordAjax } from '../ajax.js'
import md5 from 'md5';

const FormItem = Form.Item;

@withRouter
@inject('globalStore')
@observer
class Email extends React.Component{
    state = {
        submitLoading:false,
        email:'',
    };

  
    
    handleSubmit = (e) => { //提交修改
       e.preventDefault();
       this.props.form.validateFieldsAndScroll((err,values)=>{
           if(!err){
               console.log('v',values)
           }
       })
    }

    handleInput = (e)=>{ //输入邮箱
        
    }
   
    render() {
        const formItemLayout = {
                labelCol: {
                    xs: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 16 },
                },
            };
        const tailFormItemLayout = {
                wrapperCol: {
                    xs: {
                        span: 24,
                        offset: 0,
                    },
                    sm: {
                        span: 16,
                        offset: 8,
                    },
                },
            };
        const { getFieldDecorator } = this.props.form;

    return (
        <div className="per_acc acc_email">
            <Form onSubmit={this.handleSubmit} hideRequiredMark>
                <FormItem
                    {...formItemLayout}
                    label="电子邮箱绑定"
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入正确的邮箱地址',
                        }, {
                            required: true, message: '请输入正确的邮箱地址',
                        }],
                    })(
                        <Input  placeholder="输入电子邮箱" />
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" onClick={this.handleSubmit} loading={this.state.submitLoading}>提交修改</Button>
                </FormItem>
            </Form>   
            <div className="warm-tip">
                <p className="warm-border"></p>
                <h2>温馨提示</h2>
                <p className="tips">1、邮箱一旦进行绑定，则不可更改</p>
                <p className="tips">2、绑定邮箱是唯一找回资金密码的方式</p>
                <p className="tips">3、绑定邮箱是找回账号密码的方式之一</p>
            </div>
      </div>
    );
  }
}

export default Form.create()(Email);