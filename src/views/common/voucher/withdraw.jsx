/**
 * @author conrad 
 * @date 2018-10-25
 * @desc 转账
 */
import React from 'react'
import {Button,Input,InputNumber,message,Spin,Select,Form} from 'antd'
import {inject,observer} from 'mobx-react'
import {drawCashIndexAjax,withdrawCashAjax} from './ajax.js'
import {getPlayerBalance,validatePayPassword} from '../../../utils/commonApi.js'
import {regFloat,regBaseNum} from '../../../utils/regInputNum.js'
import md5 from 'md5';
import './index.styl'

const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol:{
        xs:{span:6},
    },
    wrapperCol:{
        xs:{span:18}
    }
}
message.config({
    maxCount:1
})
@inject('globalStore')
@observer
class Transfer extends React.Component{
    state={
        loading:true,           //进入页面ajax请求阶段数据返回前，loading...
        bindBank:0,             //是否绑定银行卡，1 绑定，0 未绑定
        bankCardList:[],        //用户银行卡列表
        curBankCard:'',       //当前选中的银行卡对象{id: 1, uin: 140, sn: "苏**", bankAllas: "CCB", bankCardNo: "6217***********4868", city: "西安",…}
        firstDrawingsAging:'',  //首张卡绑定限制时效
        nonFirstDrawingsAging:'',  //!首张卡绑定限制时效
        onceWithdrawMax:'',        //最大提现金额
        onceWithdrawMin:'',        //最小提现金额
        sn:'',                     //用户姓名
        money:'',                                    //手动输入的input金额
        withdrawMoneyErr:'',                         //提现金额错误类型
        withdrawMoneyErrText:'',                     //提现金额错误提示文字
        payPassword:'',                              //资金密码
        pwdErr:'',                                   //资金密码错误类型
        pwdErrText:'',                               //资金密码错误提示文字
        token:'',                                    //申请提现token
        withdrawLoading:false,                       //提现中loading
    }

    componentDidMount(){
        drawCashIndexAjax().then(({data})=>{
            this.setState({'loading':false})
            if(data.code==0){
                let res = data.result;
                this.setState({
                    'bindBank':1,
                    'bankCardList':res.bankCardList,
                    'curBankCard':res.bankCardList[0],
                    'firstDrawingsAging':res.PrePayConfigMap.firstDrawingsAging.value,
                    'nonFirstDrawingsAging':res.PrePayConfigMap.nonFirstDrawingsAging.value,
                    'onceWithdrawMin':res.onceWithdrawMin,
                    'onceWithdrawMax':res.onceWithdrawMax,
                    'sn':res.sn,
                    'token':res.token
                })
            }else if(data.code==-4){
                this.setState({'bindBank':0})
            }else{
                message.error(data.msg)
            }
        })
        
    }
    selectChange = (e)=>{ //选中银行卡
        this.setState({
            'curBankCard':this.state.bankCardList[e]
        })
    }
    withdrawMoney = (e)=>{ //提现金额校验
        let value = e.target.value,
            {onceWithdrawMax,onceWithdrawMin} = this.state,
            {globalStore} = this.props,
            errType='',
            errTxt='';
        if(parseFloat(value)>globalStore.balance){
            errType = 'error';
            errTxt = '余额不足';
        }else if(parseFloat(value)>onceWithdrawMax){ //最大输入金额
            errType = 'error';
            errTxt = '超过单笔最大提现金额'+onceWithdrawMax+'元';
        }
        this.setState({
            'money':regFloat(value,2),
            'withdrawMoneyErr':errType,
            'withdrawMoneyErrText':errTxt
        })
    }
    payPassword = (e)=>{ //资金密码校验
        this.setState({
            'payPassword':e.target.value
        })
    }
    handleSubmit = ()=>{ //申请提现
        let {payPassword,withdrawMoneyErr,money} = this.state;
        if(!regBaseNum(money)){
             this.setState({
                'withdrawMoneyErr':'error',
                'withdrawMoneyErrText':'请输入提现金额'
            })
            return false;
        }
        if(!regBaseNum(payPassword)){
             this.setState({
                'pwdErr':'error',
                'pwdErrText':'请输入资金密码',
            })
            return false;
        }
        this.setState({
            'pwdErr':'',
            'pwdErrText':'',
            'withdrawLoading':true
        })
        validatePayPassword({'payPassword':md5(payPassword)}).then(({data})=>{ //校验资金密码是否错误
            if(data!==true){
                this.setState({
                    'pwdErr':'error',
                    'pwdErrText':'资金密码错误',
                    'withdrawLoading':false
                })
            }else{ //密码正确，提现
                let {curBankCard,token}=this.state;
                let obj = {
                    operation:'add',
                    cardNo:curBankCard.bankCardNo,
                    user_bank_id:curBankCard.id,
                    bindTime:curBankCard.bindTime,
                    pay_password:md5(payPassword),
                    token:token,
                    withdrawMoney:money,
                    payPassword:''

                }
                withdrawCashAjax(obj).then(({data})=>{ //提现
                    this.setState({
                        'withdrawLoading':false,
                        'payPassword':'',
                        'money':''
                    })
                    if(data.code==0){ //提现成功 更新余额
                        message.success(data.msg)
                        getPlayerBalance({cbId:'sobet_01'}).then(({data})=>{
                            this.props.globalStore.refreshBalance(data.cash)
                        })
                    }else{
                        message.error(data.msg)
                    }
                })
            }
        })
    }
    render(){
        //姓名只保留姓，后面的用*替代
        const filterCN = (e)=>{
            return e.substr(0,1)+e.substring(1).replace(/[^\d]{1}/g,'*');
        }
        //未绑定银行卡
        const Nobank = (
                <div className="no-bank">
                    <img src={require('../../../images/no-tips.png')} alt=""/>
                    <p>您还未绑定提款银行卡。请点击<Button type="primary">绑定银行卡</Button></p>
                </div>
            )
        
        //主体
        const Main = (
            <div className="withdraw-main">
                <section className="withdraw-input">
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label='当前可用余额'
                        >
                        <div className="w_ba"><span>{this.props.globalStore.balance}</span><span>当前主钱包余额</span></div>
                        </FormItem>
                    </Form>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label='选择银行卡'
                        >
                            <Select defaultValue={0} onChange={this.selectChange} className="withdraw-select">
                            {
                                this.state.bankCardList.map((item,index)=>{
                                    return (
                                        <Option value={index} key={item.id}>{item.bankNameZH+' '+item.bankCardNo}</Option>
                                    )
                                })
                            }
                        </Select>
                        </FormItem>
                    </Form>
                       
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label='收款人姓名'
                        >
                            <Input value={filterCN(this.state.sn)} disabled/>
                        </FormItem>
                    </Form>
                    
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label='提现金额'
                            validateStatus={this.state.withdrawMoneyErr}
                            help={this.state.withdrawMoneyErrText}
                        >
                        <Input placeholder="请输入提现金额" onChange={this.withdrawMoney} value={this.state.money}/>
                        </FormItem>
                    </Form>
                       
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label='输入资金密码'
                            validateStatus={this.state.pwdErr}
                            help={this.state.pwdErrText}
                        >
                        <Input placeholder="请输入资金密码" type="password"  onChange={this.payPassword} value={this.state.payPassword}/>
                        </FormItem>
                    </Form>
                   
                    <div className="w_btn">
                        <Button type="primary" onClick={this.handleSubmit} loading={this.state.withdrawLoading}>申请提现</Button>
                    </div>
                </section>
                <section className="transfer-tip">
                    <h2>温馨提示</h2>
                    <div>
                        <span>1、</span>
                        <p className="tips">单笔最小提现金额：{this.state.onceWithdrawMin}&nbsp;元</p>
                    </div>
                    <div>
                        <span>2、</span>
                        <p className="tips">单笔最大提现金额：{this.state.onceWithdrawMax}&nbsp;元</p>
                    </div>
                    <div>
                        <span>3、</span>
                        <p className="tips">在首次新增银行卡{this.state.firstDrawingsAging}小时之后，非首次新增银行卡{this.state.nonFirstDrawingsAging}小时后，新卡才可以发起提现</p>
                    </div>
                </section>
            </div>
            
        )
        return(
            <div className="right-header charge">
                <h2 className="title">提现</h2>
                {
                    this.state.loading?
                    <div className="spin-center"><Spin/></div>:
                    (
                        this.state.bindBank? Main : Nobank
                    )
                }
            </div>
        )
    }
}
export default Transfer