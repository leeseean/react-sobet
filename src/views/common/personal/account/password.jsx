import React from 'react'
import { Form, Input, Progress, Button, message} from 'antd';
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {checkPwdGrade} from '../../../../utils/checkPwdGrade.js';
import {strEnc} from '../../../../utils/des.js';
import { updatePassword,updatePasswordAjax } from '../ajax.js'
import md5 from 'md5';

const FormItem = Form.Item;

const setColor = ['','#f46b72','#fad337','#52c41a'];
const setGrade = ['','弱','中','强'];
const setProgress = ['',33,66,99];
@withRouter
@inject('globalStore')
@observer
class Password extends React.Component{
    state = {
        oldPwd:'',             //输入的旧密码
        newPwd:'',             //输入新密码
        comfirmPwd:'',         //再次输入的新密码
        oldPwdTip:'',          //旧密码输入框错误状态，空 不提示，error 提示
        oldPwdTipTxt:'',       //旧密码输入框错误文字信息
        newPwdTip:'',
        newPwdTipTxt:'',
        comfirmPwdTip:'',
        comfirmPwdTipTxt:'',
        color:setColor[1],    //密码强中弱颜色
        gradeTxt:setGrade[1], //密码强中弱文字
        progress:setProgress[1], //密码强度progress
        cn:'',
        token:'',
        passwordSecurity:'',
        submitLoading:false,
    };

    componentDidMount(){
        this.getTokenAndCn()
    }
    getTokenAndCn(){
        updatePassword().then(({data})=>{
            if(data.code==0){
                let r = data.result
                this.setState({
                    'cn':r.cn,
                    'token':r.token,
                })
            }
        })
    }
    
    handleSubmit = (e) => { //提交修改
        let {oldPwd,newPwd,comfirmPwd,oldPwdTip,newPwdTip,comfirmPwdTip} = this.state;
        if(!oldPwd){
            this.setState({
                'oldPwdTip':'error',
                'oldPwdTipTxt':'请输入当前登录密码'
            })
            return false;
        }
        if(!newPwd){
            this.setState({
                'newPwdTip':'error',
                'newPwdTipTxt':'请输入新密码'
            })
            return false;
        }
        if(!comfirmPwd){
            this.setState({
                'comfirmPwdTip':'error',
                'comfirmPwdTipTxt':'请再次输入新密码'
            })
            return false;
        }
        if(newPwd!==comfirmPwd){
            this.setState({
                'comfirmPwdTip':'error',
                'comfirmPwdTipTxt':'两次密码输入不一致'
            })
            return false;
        }
        if(!oldPwdTip && !newPwdTip && !comfirmPwdTip){ //提交
            
            const {cn,token,passwordSecurity} = this.state;
            const oldPassword = md5(oldPwd);
            const newPassword = md5(newPwd);
            const confirm_password  = md5(comfirmPwd);
            const desPassword = strEnc(comfirmPwd,'1', '2', '3');
            const obj = {
                cn:cn,
                token:token,
                passwordSecurity:passwordSecurity,
                desPassword:desPassword,
                oldPassword:oldPassword,
                newPassword:newPassword,
                confirm_password:confirm_password
            }
            this.setState({
                'submitLoading':true
            })
            updatePasswordAjax(obj).then(({data})=>{
                this.setState({
                        'submitLoading':false
                })
                if(data.code==0 || data.code==-2){
                    this.setState({
                        'submitLoading':false,
                        'oldPwd':'',
                        'newPwd':'',
                        'comfirmPwd':''
                    })
                    message.success(data.result.msg)
                }else{
                    message.error(data.msg)
                    this.getTokenAndCn();
                }
            })
            
        }
    }

    inputOldPwd = (e)=>{ //输入旧密码
        this.setState({
            'oldPwd':e.target.value,
            'oldPwdTip':'',
            'oldPwdTipTxt':''
        })
    }
    inputNewPwd = (e)=>{ //输入新密码 6-16,数字+字母
        let v = e.target.value;
        let grade = checkPwdGrade(v);
        this.setState({
            'newPwd':e.target.value,
            'color':setColor[grade],
            'gradeTxt':setGrade[grade],
            'progress':setProgress[grade],
            'passwordSecurity':grade
        })
        if(v.length>16 || v.length<6){
            this.setState({
                'newPwdTip':'error',
                'newPwdTipTxt':'密码长度6~16位',
            })
        }else if(v.length>=6 && v.length<=16 && !/^((?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z]))^.{6,16}$/.test(v)){
            this.setState({
                'newPwdTip':'error',
                'newPwdTipTxt':'密码需包含数字、字母',
            })
        }else{
            this.setState({
                'newPwdTip':'',
                'newPwdTipTxt':'',
            })
        }
        if(this.state.comfirmPwd && this.state.comfirmPwd!==v){
            this.setState({
                'comfirmPwdTip':'error',
                'comfirmPwdTipTxt':'两次密码输入不一致'
            })
        }else{
            this.setState({
                'comfirmPwdTip':'',
                'comfirmPwdTipTxt':''
            })
        }
    }
    inputcomfirmPwd = (e)=>{ //再次输入新密码
        let {newPwd} = this.state;
        let v = e.target.value;
        this.setState({
            'comfirmPwd':v,
        })
        if(newPwd!==v){
            this.setState({
                'comfirmPwdTip':'error',
                'comfirmPwdTipTxt':'两次密码输入不一致'
            })
        }else{
            this.setState({
                'comfirmPwdTip':'',
                'comfirmPwdTipTxt':''
            })
        }
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


    return (
        <div className="per_acc acc_password">
            <Form onSubmit={this.handleSubmit} hideRequiredMark>
                <FormItem
                    {...formItemLayout}
                    label="当前登录密码"
                    validateStatus={this.state.oldPwdTip}
                    help={this.state.oldPwdTipTxt}
                >
                    <Input type="password" placeholder="当前登陆密码" value={this.state.oldPwd} onChange={this.inputOldPwd}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="新登录密码"
                    validateStatus={this.state.newPwdTip}
                    help={this.state.newPwdTipTxt}
                >
                    <React.Fragment>
                        <Input type="password" className="" placeholder="密码长度6~16位，包含数字，字母" value={this.state.newPwd} onChange={this.inputNewPwd}/>
                        {
                            this.state.newPwd?
                            <div className="progress-content">
                                <div className="progress">
                                    <Progress percent={this.state.progress} size="small" showInfo={false} strokeColor={this.state.color}/>
                                </div>
                                <span className="active-grade" style={{color:this.state.color}}>{this.state.gradeTxt}</span>
                            </div>
                            :''
                        }
                    </React.Fragment>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="确认新登录密码"
                    validateStatus={this.state.comfirmPwdTip}
                    help={this.state.comfirmPwdTipTxt}
                >
                    <Input type="password" onBlur={this.handleConfirmBlur}  placeholder="再次输入新登陆密码" value={this.state.comfirmPwd} onChange={this.inputcomfirmPwd}/>
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" onClick={this.handleSubmit} loading={this.state.submitLoading}>提交修改</Button>
                </FormItem>
            </Form>   
      </div>
    );
  }
}

export default Password;