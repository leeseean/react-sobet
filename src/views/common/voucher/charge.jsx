/**
 * @author conrad 
 * @desc 充值
 */
import React from 'react'
import {Button,Input,InputNumber,message,Spin} from 'antd'
import {queryChannel} from './ajax'
import './index.styl'
class Charge extends React.Component{
    state={
        loading:true,
        channel:[],             //所有充值渠道信息
        channelBtnCur:0,        //当前选中的充值渠道
        bankListBtnCur:0,       //当前选中的银行
        minRechargeAmount:0,    //当前渠道允许充值的最小充值金额
        maxRechargeAmount:1000, //当前渠道允许充值的最大充值金额
        costRate:0,             //当前充值渠道 手续费 费率 eg：0.02 代表收取2%
        minCostLimit:1,         //当前充值渠道 手续费 最低收取额度
        maxCostLimit:1,         //当前充值渠道 手续费 最高收取额度
        costStatus:0,           //当前充值渠道 是否开启手续费，1开启，否则不开启
        cutPointsSwitch:0,      //当前充值渠道 是否开启随机扣减，1开启，否则不开启
        bankList:[],            //当前渠道下的银行卡列表，没有则不显示
        warmTip:'',             //当前渠道下 的温馨提示，没有则不显示

    }
    componentWillMount(){

    }
    componentDidMount(){
        queryChannel().then(({data})=>{ //获取充值渠道
            this.setState({'loading':false})
            if(data.code==1){
                this.setState({'channel':data.result})
            }else{
                message.error(data.msg)
            }
        })
    }
    handlerClick=(e)=>{ //充值渠道点击事件
        let v = e.target.value,
            banklist = this.state.channel[v].bankList;
        this.setState(
            {
                channelBtnCur:v,
                bankList:banklist?banklist:[]
            }
        )
    }
    bankListClick=(e)=>{ //充值渠道 对应的银行卡点击事件
        
        // if(e.target && e.target.matches('span')){
        //     return;
        // }
        console.log(e.target.nodeName)

        this.setState(
            {
                bankListBtnCur:e.target.value
            }
        )
    }
    moneyChange=(e)=>{ //输入金额校验
        let v= e.target.value,
            reg= /^[1-9]\d*$/;
        if(!reg.test(v)){
            e.target.value=1;
        }
        console.log(e)
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
        const Main =()=>{ //渲染主体结构
            return (
                <div><section className="charge-section">
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
                                <Input placeholder="请输入充值金额" onChange={this.moneyChange}/>
                                <Button type="primary">马上充值</Button>
                                <p className="min-max">最低&nbsp;{this.state.minRechargeAmount}&nbsp;元，最高&nbsp;{this.state.maxRechargeAmount}&nbsp;元<span>，免手续费</span></p>
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
        }
        return(
            <div className="right-header charge">
                <h2>充值</h2>
                {
                    this.state.loading?<div className="spin-center"><Spin tip="loading"/></div>:<Main/>
                }
                
            </div>
        )
    }
}

export default Charge