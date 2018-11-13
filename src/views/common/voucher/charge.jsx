/**
 * @author conrad 
 * @date 2018-10-25
 * @desc 充值
 */
import React from 'react'
import {Button,Input,InputNumber,message,Spin} from 'antd'
import {queryChannel,rechargeIndexAjax} from './ajax.js'
import {floatAdd,floatSub,floatMul,floatDiv} from '../../../utils/calculation.js'
import './index.styl'
class Charge extends React.Component{
    state={
        loading:true,           //进入页面ajax请求阶段数据返回前，loading...
        bindBank:0,             //是否绑定银行卡，1 绑定，0 未绑定
        channel:[],             //所有充值渠道信息
        channelBtnCur:0,        //当前选中的充值渠道
        bankListBtnCur:0,       //当前选中的银行
        minRechargeAmount:0,    //当前渠道允许充值的最小充值金额
        maxRechargeAmount:1000, //当前渠道允许充值的最大充值金额
        costRate:0,             //当前充值渠道 手续费 费率 eg：0.02 代表收取2%
        minCostLimit:1,         //当前充值渠道 手续费 最低收取额度
        maxCostLimit:100,       //当前充值渠道 手续费 最高收取额度
        costStatus:0,           //当前充值渠道 是否开启手续费，1开启，否则不开启
        cutPointsSwitch:0,      //当前充值渠道 是否开启随机扣减，1开启，否则不开启
        bankList:[],            //当前渠道下的银行卡列表，没有则不显示
        warmTip:'',             //当前渠道下 的温馨提示，没有则不显示
        inputMoney:'',          //手动输入的充值金额
        randomMoney:'',         //随机扣减金额0.1~1.9之间 排除1
        chargeMoney:'',         //开启随机扣减后的实际充值金额
        arriveMoney:'',         //开启充值手续费后的实际到账金额

    }
    componentWillMount(){

    }
    componentDidMount(){
        rechargeIndexAjax().then(({data})=>{
            if(data.code==0){
                this.setState({'bindBank':1})
                queryChannel().then(({data})=>{ //获取充值渠道
                    this.setState({'loading':false})
                    if(data.code==1){
                        this.setState({'channel':data.result})
                        this.setSelectChannleInfo(data.result[0])
                    }else{
                        message.error(data.msg)
                    }
                })
            }else if(data.code==-4){ //未绑定充值渠道
                this.setState({'loading':false})
                this.setState({'bindBank':0})
            }else{
                message.error(data.msg)
            }
        })
        
    }
    setSelectChannleInfo=(d)=>{ //设置点击选中的充值渠道信息
        this.setState({
            minRechargeAmount:d.minRechargeAmount,
            maxRechargeAmount:d.maxRechargeAmount,
            costRate:d.costRate,
            minCostLimit:d.minCostLimit,
            maxCostLimit:d.maxCostLimit,
            costStatus:d.costStatus,
            cutPointsSwitch:d.cutPointsSwitch,
            bankList:d.bankList?d.bankList:[],
            warmTip:d.warmTip?d.warmTip:'',
        })
    }

    handlerClick=(e)=>{ //充值渠道点击事件
        let v = e.target.value,
            bankList = this.state.channel[v].bankList;
        this.setState(
            {
                channelBtnCur:v,
                bankList:bankList?bankList:[]
            }
        )
    }

    bankListClick=(e)=>{ //充值渠道 对应的银行卡点击事件
        this.setState(
            {
                bankListBtnCur:e.target.value
            }
        )
    }

    getRandomMoney=(v)=>{//获取随机扣减金额0.1~1.9之间，排除1
        console.log(v)
        let randomNum = 0;
        if(v<10){
            randomNum = (Math.random()*0.8+0.1).toFixed(1);
        }else{
            randomNum = (Math.random()*1.8+0.1).toFixed(1);
        }
        randomNum=1.0 && (randomNum=1.1); //排除随机到数字1

        return randomNum;
    }  
    
    moneyChange=(e)=>{ //输入金额校验
        let inputMoney= e.target.value,
            reg= /^[1-9]+\.?\d*$/;//是否是数字，可以有小数

        if(!reg.test(inputMoney)){ //判断是否是数字（整数或小数）
            inputMoney=e.target.value='';
        }
        if(inputMoney.indexOf('.')!==-1){ //如果是小数，最多只能输入小数点后2位
            let subMoney = inputMoney.split('.');
            if(subMoney[1].length>2){
                inputMoney=e.target.value=subMoney[0]+'.'+subMoney[1].substr(0,2)
            }
        }
        if(inputMoney>this.state.maxRechargeAmount){ //最大充值金额
             inputMoney=e.target.value=this.state.maxRechargeAmount
        }
        if(this.state.cutPointsSwitch==1){ //随机扣减
           let randomNum = this.getRandomMoney(inputMoney) 
           console.log(randomNum)
        } 

        this.setState({'inputMoney':inputMoney})
    }
    render(){
        const ChannelList = ()=>{ // 渲染充值渠道
            return this.state.channel.map((item,i)=>{
                return (
                    <Button key={i} type={i==this.state.channelBtnCur?'primary':''} onClick={this.handlerClick} value={i}>{item.name}</Button>
                    // <span key={i} className={i===0?'pay-channel-active':''}>{item}</span>
                )
            })
        }

        const BankList = ()=>{ //渲染银行卡列表
            return this.state.bankList.map((item,i)=>{
                return (
                    <Button key={i} className={i==this.state.bankListBtnCur?'active':''} onClick={this.bankListClick} value={i}>
                        <span><i className={'pc_'+item.bankKey}></i>{item.description}</span>
                    </Button>
                )
            })
        }

        //未绑定银行卡
        const Nobank = (
                <div className="no-bank">
                    <img src={require('../../../images/no-tips.png')} alt=""/>
                    <p>您还未绑定提款银行卡。请点击<Button type="primary">绑定银行卡</Button></p>
                </div>
            )
        //充值手续费和随机扣减
        const RandomAndCostRate = (
            <div className="random-dec">
                <p style={{display:this.state.inputMoney!=''?'block':'none'}}>
                    {
                        this.state.cutPointsSwitch && <span>为了避免您支付限额，系统默认对您填写的金额&nbsp;{this.state.inputMoney}&nbsp;元，随机减少&nbsp;{this.state.randomNum}&nbsp;元，实际充值金额为&nbsp;<i className="red">{this.state.chargeMoney}</i>&nbsp;元。</span>
                    }
                    {
                        this.state.costStatus && <span>此通道收取&nbsp;<i className="red">{floatMul(this.state.costRate,100)+"%"}</i>&nbsp;的手续费（上限&nbsp;{this.state.maxCostLimit}&nbsp;，下限&nbsp;{this.state.minCostLimit}），实际到账金额为：<i className="red">{this.state.arriveMoney}</i></span>
                    }
                </p>
            </div>
        )
        
        //绑定了银行卡,渲染主体结构
        const Main = (
                <div>
                    <section className="charge-section">
                        <div className="pay-way">支付方式：</div>
                        <div className="pay-channel">
                            <ChannelList />
                        </div>
                    </section>
                    <section className="pay-input">
                        {
                            this.state.bankList.length>0 ?<div className="bankList"><BankList /></div>:''
                        }
                        <div className="pay-input-content">
                            <div className="pay-way">充值金额：</div>
                            <div className="pay-input-info">
                                <Input key="1" placeholder="请输入充值金额" onChange={this.moneyChange}/>
                                <Button type="primary">马上充值</Button>
                                <p className="min-max">最低&nbsp;<i className="red">{this.state.minRechargeAmount}</i>&nbsp;元，最高&nbsp;<i className="red">{this.state.maxRechargeAmount}</i>&nbsp;元{this.state.costStatus==0?<span>，免手续费</span>:''}</p>
                                {
                                    this.state.costStatus==1 || this.state.cutPointsSwitch==1 ? RandomAndCostRate:''
                                }
                            </div>
                        </div>
                        <div className="warm-tip">
                            <p className="warm-border"></p>
                            <h2>温馨提示</h2>
                            <p className="tips">充值金额最低300，最高5000，且只能是100的整数倍，如300、400、500……5000</p>
                        </div>
                    </section>
                </div>
            )
        
    
        return(
            <div className="right-header charge">
                <h2 className="title">充值</h2>
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
export default Charge