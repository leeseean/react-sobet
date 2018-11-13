/**
 * @author conrad 
 * @date 2018-10-25
 * @desc 转账
 */
import React from 'react'
import {Button,Input,InputNumber,message,Spin,Select} from 'antd'
import {inject,observer} from 'mobx-react'
import {drawCashIndexAjax} from './ajax.js'
import {getPlayerBalance} from '../../../utils/commonApi.js'
import {regFloat,regBaseNum,regInt,regFloatGtZero} from '../../../utils/regInputNum.js'
import './index.styl'

const Option = Select.Option;

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
        curBankCardNo:'',       //当前选中的银行卡号
        firstDrawingsAging:'',  //首张卡绑定限制时效
        nonFirstDrawingsAging:'',  //!首张卡绑定限制时效
        onceWithdrawMax:'',        //最大提现金额
        onceWithdrawMin:'',        //最小提现金额
        sn:'',                     //用户姓名
    }

    componentDidMount(){
        drawCashIndexAjax().then(({data})=>{
            this.setState({'loading':false})
            if(data.code==0){
                let res = data.result;
                this.setState({
                    'bindBank':1,
                    'bankCardList':res.bankCardList,
                    'curBankCardNo':res.bankCardList[0].bankCardNo,
                    'firstDrawingsAging':res.PrePayConfigMap.firstDrawingsAging.value,
                    'nonFirstDrawingsAging':res.PrePayConfigMap.nonFirstDrawingsAging.value,
                    'onceWithdrawMin':res.onceWithdrawMin,
                    'onceWithdrawMax':res.onceWithdrawMax,
                    'sn':res.sn
                })
            }else if(data.code==-4){
                this.setState({'bindBank':0})
            }else{
                message.error(data.msg)
            }
        })
        
    }
    selectChange = (e)=>{

    }
    render(){
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
                    <div className="w_li">
                        <div className="w_lf">当前可用余额：</div><div className="w_lr w_ba"><span>999999.9999</span><span>当前主钱包余额</span></div>
                    </div>
                    <div className="w_li">
                        <div className="w_lf">选择银行卡：</div>
                        <div className="w_lr">
                            <Select defaultValue={this.state.curBankCardNo} onChange={this.selectChange} className="withdraw-select">
                                {
                                    this.state.bankCardList.map((item,index)=>{
                                        return (
                                            <Option value={item.bankCardNo} key={item.id}>{item.bankNameZH+' '+item.bankCardNo}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div className="w_li">
                        <div className="w_lf">收款人姓名：</div><div className="w_lr"><Input placeholder="请输入提现金额" value={this.state.sn} disabled/></div>
                    </div>
                    <div className="w_li">
                        <div className="w_lf">提现金额：</div><div className="w_lr"><Input placeholder="请输入提现金额"/></div>
                    </div>
                    <div className="w_li">
                        <div className="w_lf">输入资金密码：</div><div className="w_lr"><Input placeholder="请输入资金密码" type="password"/></div>
                    </div>
                    <div className="w_btn">
                        <Button type="primary">申请提现</Button>
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