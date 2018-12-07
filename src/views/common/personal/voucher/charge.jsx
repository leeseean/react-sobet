/**
 * @author conrad 
 * @date 2018-10-25
 * @desc 充值
 */
import React from 'react'
import {Button,Input,InputNumber,message,Spin,Form,Icon} from 'antd'
import {queryChannel,rechargeIndexAjax} from '../ajax.js'
import {floatAdd,floatSub,floatMul,floatDiv} from '../../../../utils/calculation.js'
import {regFloat,regBaseNum,regChinese} from '../../../../utils/regInputTxt.js'
import './index.styl'

const FormItem = Form.Item;
const formItemLayout = {
    labelCol:{
        xs:{span:10},
    },
    wrapperCol:{
        xs:{span:8}
    }
}
const TipTxt = {
    ALIPAY_WEB_TRANSFER:'请填写您付款支付宝账户的真实姓名,否则将不能正常到账。',
    ALIPAY_CHECK_AMOUNT_WEB_TRANSFER:'为确保充值尽快到账，我们会对您的充值金额进行随机扣减，请以扣减后的金额进行充值，否则无法正常上分。',
    WEB002:'为了您充值后能尽快上分，我们对充值金额有如下要求：<br/>充值金额≤500时，金额必须是10的整数倍，如50、60……490、500；<br/>充值金额＞500时，金额必须是50的整数倍，如550……1450、1500。',
    ALIPAY_WEB_TRANS:'为了您充值后能尽快上分，我们对充值金额有如下要求：<br/>充值金额≤500时，金额必须是10的整数倍，如50、60……490、500；<br/>充值金额＞;500时，金额必须是50的整数倍，如550……1450、1500。',
    WEB003_HT:'为方便尽快上分，充值金额必须是100的整数倍'
}
const PAY_CODE = {
        web1: 'WEB001',
        web2: 'WEB002',
        web3: 'WEB003',
        web3_HT: 'WEB003_HT',
        web4: 'WEB004',
        wap1: 'WAP001',
        wap2: 'WAP002',
        wap3: 'WAP003',
        wap4: 'WAP004',
        ebank: {
            web: 'EBANK_WEB_TRANSFER',
            wap: 'EBANK_WAP_TRANSFER'
        },
        ali: {
            web: 'ALIPAY_WEB_TRANSFER',
            wap: 'ALIPAY_WAP_TRANSFER',
            web_sweep: 'ALIPAY_WEB_SWEEPCODE_TRANSFER',
            wap_sweep: 'ALIPAY_WAP_SWEEPCODE_TRANSFER',
            web_personal: 'ALIPAY_WEB_TRANS',
            amount_web_transfer: 'ALIPAY_CHECK_AMOUNT_WEB_TRANSFER'
        },
        wechat: {
            web_sweep: 'WECHAT_WEB_SWEEPCODE_SCAN',
            wap_sweep: 'WECHAT_WAP_SWEEPCODE_SCAN',
            web_transfer: 'WECHAT_WEB_TRANSFER',
            wap_transfer: 'WECHAT_WAP_TRANSFER'
        }
    }
function getRandomMoney(v){ //获取随机扣减金额0.1~1.9之间，排除1
    let num = 0;

    if(parseFloat(v)<10){
        num = (Math.random()*0.8+0.1).toFixed(1);
    }else{
        num = (Math.random()*1.8+0.1).toFixed(1);
    }

    num==1.0 && (num=1.1); //排除随机到数字1

    return num;
}

//未绑定银行卡
class Nobank extends React.PureComponent{ 
    handleBindBank = ()=>{
        this.props.bindBank();
    }
    render(){
        return (
            <div className="no-bank">
                <div><Icon type="exclamation-circle" theme="filled" style={{color:'#52c41a',fontSize:'72px'}}/></div>
                <p>为了您的资金安全，首次充提前请先绑定提款银行卡！</p>
                <Button type="primary" onClick={this.handleBindBank}>去绑卡</Button>
            </div>
        )
    }
}
class Charge extends React.Component{
    state={
        loading:true,           //进入页面ajax请求阶段数据返回前，loading...
        bindBank:0,             //是否绑定银行卡，1 绑定，0 未绑定
        channel:[],             //所有充值渠道信息 最多显示12个充值渠道
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
        rechargeName:false,     //所选择的充值渠道是否需要输入真实姓名 目前AlIPAY_WEB_TRANSFER需要 其他不需要
        chineseName:'',         //输入的中文名
        nameErr:'',             //中文名是否合法
        nameErrTxt:'',          //不合法后的提示错误文案
        moneyErr:'',            //输入的金额是否合法
        moneyErrTxt:'',         //输入的金额不合法后的提示错误文案
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
            warmTip:TipTxt[d.payWayCode]?TipTxt[d.payWayCode]:'',
        })
        d.payWayCode === PAY_CODE.ali.web ? this.setState({rechargeName:true}) :this.setState({rechargeName:false}); //是否要输入真实姓名
        switch (d.payWayCode) {
            case PAY_CODE.ali.web:
                // 阿里充值
                console.log('阿里充值')
                break;
            case PAY_CODE.ali.web_sweep:
                // 支付宝扫码充值
                console.log('支付宝扫码充值')
                break;
            case PAY_CODE.ebank.web:
                 console.log('银行卡转账')
                break;
            case PAY_CODE.wechat.web_sweep:
                // 微信扫码充值
                console.log('微信扫码充值')
                break;
            case PAY_CODE.wechat.web_transfer:
            case PAY_CODE.ali.amount_web_transfer:
                // 微信转银行卡
                console.log('微信转银行卡')
                break;
            default:
                 console.log('其他')
        }
    }

    handlerClick=(e)=>{ //切换充值渠道
        let v = e.target.value,
            channel = this.state.channel[v];
        this.setState({
            channelBtnCur:v,
            bankList:channel.bankList?channel.bankList:[],
            inputMoney:''
        })
        console.log(channel)
        this.setSelectChannleInfo(channel)
    }

    bankListClick=(e)=>{ //充值渠道 对应的银行卡点击事件
        this.setState(
            {
                bankListBtnCur:e.target.value
            }
        )
    }
    handleBindBank = ()=>{ //跳转至绑定银行卡页面
        this.props.history.push('/personal/account/bankcard')
    }
    handleName = (e)=>{
        let v = e.target.value,
            nameErr='',
            nameErrTxt='';
        if(!regChinese(v)){
            nameErr = 'error';
            nameErrTxt = '中文名不合法。2~5个汉字，少数名族4~10个汉字。如：阿卜杜拉·买买提'
            
        }
        this.setState({
            chineseName:v,
            nameErr:nameErr,
            nameErrTxt:nameErrTxt
        })
    }
    moneyChange=(e)=>{ //输入金额校验
        let inputMoney = e.target.value,
            randomNum = '',
            chargeMoney = '',
            arriveMoney = '';

        let {cutPointsSwitch,costStatus} = this.state;

        inputMoney = regFloat(inputMoney,2); //限制只能输入数字，且如果是小数，只能输入小数后2位

        if(inputMoney>this.state.maxRechargeAmount){ //最大充值金额
             inputMoney=e.target.value=this.state.maxRechargeAmount
        }
        if(cutPointsSwitch==1){ //开启随机扣减
            randomNum = getRandomMoney(inputMoney)
            chargeMoney = floatSub(inputMoney,randomNum)

        } 
        if(costStatus==1){ //开启手续费 , 计算手续费金额，实际到账金额
            let { costRate,minCostLimit,maxCostLimit } = this.state,
                costMoney = 0;
            costMoney = cutPointsSwitch==1?floatMul(chargeMoney,costRate):floatMul(inputMoney,costRate);
            costMoney<minCostLimit && (costMoney=minCostLimit);
            costMoney>maxCostLimit && (costMoney=maxCostLimit);
            arriveMoney = cutPointsSwitch==1?floatSub(chargeMoney,costMoney):floatSub(inputMoney,costMoney)
        }

        this.setState({
            'inputMoney':inputMoney,
            'randomNum':randomNum,
            'chargeMoney':chargeMoney,
            'arriveMoney':regFloat(arriveMoney,2)
        })
    }

    
    handleSubmit = ()=>{ //马上充值
        let {rechargeName,inputMoney,chineseName} = this.state;
        let nameErr='',
            nameErrTxt='';
        if(rechargeName && (!chineseName || !regChinese(chineseName))){
             nameErr = 'error';
             nameErrTxt = '请输入合法的中文名'
        }
        this.setState({
            nameErr:nameErr,
            nameErrTxt:nameErrTxt
        })
    }
    render(){
        const ChannelList = ()=>{ // 渲染充值渠道
            return this.state.channel.map((item,i)=>{
                return (
                    <Button key={i} type={i==this.state.channelBtnCur?'primary':''} onClick={this.handlerClick} value={i}>{item.name}</Button>
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
        
        //充值手续费和随机扣减
        const RandomAndCostRate = (
            <div className="random-dec">
                <div style={{display:this.state.inputMoney!=''?'block':'none'}}>
                    {
                        this.state.cutPointsSwitch ?<p>为了避免您支付限额，系统默认对您填写的金额&nbsp;{this.state.inputMoney}&nbsp;元，随机减少&nbsp;{this.state.randomNum}&nbsp;元，实际充值金额为&nbsp;<i className="red">{this.state.chargeMoney}</i>&nbsp;元。</p>:''
                    }
                    {
                        this.state.costStatus?<p>此通道收取&nbsp;<i className="red">{floatMul(this.state.costRate,100)+"%"}</i>&nbsp;的手续费（上限&nbsp;{this.state.maxCostLimit}&nbsp;元，下限&nbsp;{this.state.minCostLimit}&nbsp;元），实际到账金额为：<i className="red">{this.state.arriveMoney}</i></p>:''
                    }
                </div>
            </div>
        )
        
        //绑定了银行卡,渲染主体结构
        const Main = (
                <div>
                    <section className="charge-section">
                        <div className="pay-way">支付方式:</div>
                        <div className="pay-channel">
                            <ChannelList />
                        </div>
                    </section>
                        {
                            this.state.bankList.length>0 ?
                                 <section className="charge-section">
                                    <div className="pay-way">选择银行:</div>
                                    <div className="pay-channel">
                                        <div className="bankList"><BankList /></div>
                                    </div>
                                </section>
                            :''
                        }
                        
                    <section className="pay-input">
                         <div className="pay-input-content">
                             <Form >
                                {
                                    this.state.rechargeName?
                                    <FormItem
                                        {...formItemLayout}
                                        label='真实姓名'
                                        validateStatus={this.state.nameErr}
                                        help={this.state.nameErrTxt}
                                    >
                                        <Input placeholder="请填写您支付宝账户的真实姓名" onChange={this.handleName} value={this.state.chineseName} onPressEnter={this.handleName}/>
                                    </FormItem>
                                    :''
                                }
                                <FormItem
                                    {...formItemLayout}
                                    label='充值金额'
                                    validateStatus={this.state.moneyErr}
                                    help={this.state.moneyErrTxt}
                                >
                                    <Input  placeholder="请输入充值金额" onChange={this.moneyChange} value={this.state.inputMoney} />
                                </FormItem>
                            </Form>
                            <div className="pay-way"></div>
                            <div className="pay-input-info">
                                <Button type="primary" onClick={this.handleSubmit}>马上充值</Button>
                                <p className="min-max">最低&nbsp;<i className="red">{this.state.minRechargeAmount}</i>&nbsp;元，最高&nbsp;<i className="red">{this.state.maxRechargeAmount}</i>&nbsp;元{this.state.costStatus==0?<span>，免手续费</span>:''}</p>
                                {
                                    this.state.costStatus==1 || this.state.cutPointsSwitch==1 ? RandomAndCostRate:''
                                }
                            </div>
                        </div> 
                        {
                            this.state.warmTip?
                            <div className="warm-tip">
                                <p className="warm-border"></p>
                                <h2>温馨提示</h2>
                                <p className="tips" dangerouslySetInnerHTML = {{__html:this.state.warmTip}}></p>
                            </div>:''
                        }
                        
                    </section>
                </div>
            )
        
    
        return(
            <div className="child_body charge">
                {
                    this.state.loading?
                    <div className="spin-center"><Spin/></div>:
                    (
                        this.state.bindBank? Main : <Nobank bindBank={this.handleBindBank}/>
                    )
                }
            </div>
        )
    }
}
export default Charge