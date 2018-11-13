/**
 * @author conrad 
 * @date 2018-10-25
 * @desc 转账
 */
import React from 'react'
import {Button,Input,InputNumber,message,Spin,Select} from 'antd'
import {inject,observer} from 'mobx-react'
import {getWallets,cbPointTransfer} from './ajax.js'
import {getPlayerBalance} from '../../../utils/commonApi.js'
import {regFloat,regBaseNum,regInt,regFloatGtZero} from '../../../utils/regInputNum.js'
import './index.styl'

const Option = Select.Option;
const cashConfig={
            sobet_01_ag_01:[20,50000], //彩票钱包向AG/PT/Kgame钱包转账，最低20元，最高50000元；
            sobet_01_pt_01:[20,50000],
            sobet_01_kg_01:[20,50000],
            sobet_01_sb_01:[50,50000],  //彩票钱包向沙巴钱包转账，最低50元，最高50000元
            sobet_01_idn_01:[100,50000],// 彩票钱包向IDN钱包转账，最低100元，最高50000元
            ag_01_sobet_01:[1,50000],  //AG/PT/沙巴/IDN/Kgame钱包向彩票钱包转账，最低1元，最高50000元；
            pt_01_sobet_01:[1,50000],
            sb_01_sobet_01:[1,50000],
            idn_01_sobet_01:[1,50000],
            kg_01_sobet_01:[1,50000],
        };
message.config({
    maxCount:1
})
@inject('globalStore')
@observer
class Transfer extends React.Component{
    state={
        loading:true,                //进入页面ajax请求阶段数据返回前，loading...
        outLoading:false,            //查询转出钱包余额loading状态
        inLoading:false,             //查询转入钱包余额loading状态
        turnLoading:false,           //立即转账 loading状态
        wallets:[],                  //所有钱包类型 转出
        inWallets:[],                //转入钱包
        turnOutId:'请选择',           //当前选中的转出钱包cbId
        turnInId:'请选择',            //当前选中的转入钱包cbId
        turnOutCn:'请选择',           //当前选中的转出钱包cbName
        turnInCn:'请选择',            //当前选中的转入钱包cbName
        cash:'',                     //转账金额
        walletBalacneOut:'0.0000',   //转出钱包余额
        walletBalacneIn:'0.0000',    //转入钱包余额
        
    }
    componentWillMount(){
        // turnOutCn:彩票钱包
        // turnInCn:PT钱包
        // turnOut:sobet_01
        // turnIn:pt_01
        // cash:23
    }
    componentDidMount(){
        getWallets().then(({data})=>{
            if(data.code==0){
                this.setState({
                    'loading':false,
                    'wallets':data.result.pcodeCbBaseList
                })
            }else{
                message.error(data.msg)
            }
        })
        
    }

    selectChangeOut=(v)=>{ //选择转出钱包
        this.setState({
            'turnOutId':v.key,
            'turnOutCn':v.label,
            'outLoading':true,
            'inLoading':true,
            'cash':''
        })
        if(v.key==='请选择'){
            this.setState({
                'inWallets':[],
                'turnInId':v.key,
                'turnInCn':v.label,
                'walletBalacneOut':'0.0000',
                'outLoading':false,
                'inLoading':false
            })
        }else{
            let arr = this.state.wallets,
                wArr = [];
            if(v.key==='sobet_01'){ //选择了彩票钱包
                for(let i=0,iLen=arr.length;i<iLen;i++){
                    arr[i].cbId!='sobet_01' && wArr.push(arr[i]);
                }
            }else{ //非彩票钱包
                for(let i=0,iLen=arr.length;i<iLen;i++){
                    arr[i].cbId=='sobet_01' && wArr.push(arr[i]);
                    break;
                }
            }
            this.setState({
                'inWallets':wArr,
                'turnInId':wArr[0].cbId,
                'turnInCn':wArr[0].cbName=='彩票钱包'?'彩票钱包（主钱包）':wArr[0].cbName
            })
            getPlayerBalance({cbId:v.key}).then(({data})=>{ //查询转出钱包余额
                setTimeout(()=>{ //延迟显示
                    this.setState({
                        'walletBalacneOut':data.cash==0?'0.0000':data.cash,
                        'outLoading':false
                    })
                },200)
            })
            getPlayerBalance({cbId:wArr[0].cbId}).then(({data})=>{ //查询转入钱包余额
                setTimeout(()=>{ //延迟显示
                    this.setState({
                        'walletBalacneIn':data.cash==0?'0.0000':data.cash,
                        'inLoading':false
                    })
                },200)
            })
        }
        
    }
    selectChangeIn=(v)=>{ //选择转入钱包
         this.setState({
            'turnInId':v.key,
            'turnInCn':v.label,
            'inLoading':true,
            'cash':''
        })
        if(v.key==='请选择'){
            this.setState({
                'walletBalacneIn':'0.0000',
                'inLoading':false
            })
        }else{
            getPlayerBalance({cbId:v.key}).then(({data})=>{
                setTimeout(()=>{
                    this.setState({
                        'walletBalacneIn':data.cash==0?'0.0000':data.cash,
                        'inLoading':false
                    })
                },500)
            })
        }
    }
    inputChange=(e)=>{ //输入金额
        //彩票钱包向PT/沙巴/IDN/Kgame钱包转账，支持小数点后两位，单位：元；彩票钱包向AG钱包转账，只支持正整数，单位：元；
        //AG/PT钱包向彩票钱包转账，只支持正整数；沙巴/IDN/Kgame钱包向彩票钱包转账，支持小数点后两位；
        let {turnOutId,turnInId,walletBalacneOut} = this.state,
            cashMinMax = cashConfig[turnOutId+'_'+turnInId],
            value = e.target.value,
            regValue,
            reg;
        value = regBaseNum(value);
        if(!cashMinMax){
            message.error('请选择转出钱包');
            return false;
        }
        if(cashMinMax && parseFloat(value) > cashMinMax[1]){ //校验输入最大金额
            regValue = cashMinMax[1]
        }else if(parseFloat(value)>parseFloat(walletBalacneOut)){ //余额不足清空
            regValue = '';
            message.error('余额不足')
        }else{
            if(turnOutId === 'sobet_01'){
                if(turnInId==='ag_01'){ //只支持正整数
                    regValue = regInt(value,3);
                } else { // 支持小数点后两位
                    regValue = regFloat(value,2);
                }
            }else{
                if(turnOutId === 'ag_01' || turnOutId === 'pt_01'){//只支持正整数
                    regValue = regInt(value);
                }else{// 支持小数点后两位
                    regValue = regFloat(value,2);
                }
            }
            
        }
        this.setState({'cash':regValue})
    }

    allIn=()=>{//全额转入
        let {turnOutId,turnInId,walletBalacneOut} = this.state,
            cashMinMax = cashConfig[turnOutId+'_'+turnInId],
            regValue;
        if(!cashMinMax){
            message.error('请选择转出钱包');
            return false;
        }
        if(parseFloat(walletBalacneOut)===0){
            regValue = '';
            message.error('余额不足');
        }else{
            if(turnOutId === 'sobet_01'){
                if(turnInId==='ag_01'){ //只支持正整数
                    if(parseFloat(walletBalacneOut)>cashMinMax[1]){
                        regValue = cashMinMax[1]
                    }else{
                        regValue = regInt(walletBalacneOut);
                    }
                } else { // 支持小数点后两位
                    if(parseFloat(walletBalacneOut)>cashMinMax[1]){
                        regValue = cashMinMax[1]
                    }else{
                        regValue = regFloat(walletBalacneOut,2);
                    }
                }
            }else{
                if(turnOutId === 'ag_01' || turnOutId === 'pt_01'){//只支持正整数
                    if(parseFloat(walletBalacneOut)>cashMinMax[1]){
                        regValue = cashMinMax[1]
                    }else{
                        regValue = regInt(walletBalacneOut);
                    }
                } else { // 支持小数点后两位
                    if(parseFloat(walletBalacneOut)>cashMinMax[1]){
                        regValue = cashMinMax[1]
                    }else{
                        regValue = regFloat(walletBalacneOut,2);
                    }
                }
            }
        }
        this.setState({'cash':regValue})
    }

    nowTransfer=()=>{ //立即转入
        let {turnOutId,turnInId,walletBalacneOut,cash,turnInCn,turnOutCn} = this.state,
            cashMinMax = cashConfig[turnOutId+'_'+turnInId],
            {globalStore}=this.props;
        if(!cashMinMax){
            message.error('请选择转出钱包');
            return false;
        }
        if(cash==0 || cash==''){
            message.error('请输入转账金额');
            this.input.focus();
            return false;
        }
        if(cash<cashMinMax[0]){
            message.error('输入转账金额最小为'+cashMinMax[0]+'元');
            this.input.focus();
            return false;
        }
        if(cash>cashMinMax[1]){
            message.error('输入转账金额最小为'+cashMinMax[1]+'元');
            this.input.focus();
            return false;
        }
        let obj = {
                turnOutCn:turnOutCn=='彩票钱包（主钱包）'?'彩票钱包':turnOutCn,
                turnInCn:turnInCn=='彩票钱包（主钱包）'?'彩票钱包':turnInCn,
                turnOut:turnOutId,
                turnIn:turnInId,
                cash:cash
            }
        this.setState({'turnLoading':true})
        cbPointTransfer(obj).then(({data})=>{
            this.setState({'turnLoading':false})
            if(data.code==0){
                message.error(data.result);
                this.setState({
                    'outLoading':true,
                    'inLoading':true
                })
                getPlayerBalance({cbId:turnOutId}).then(({data})=>{ //查询转出钱包余额
                    setTimeout(()=>{ //延迟显示
                        this.setState({
                            'walletBalacneOut':data.cash==0?'0.0000':data.cash,
                            'outLoading':false
                        })
                    },200)
                    turnOutId==='sobet_01' && globalStore.refreshBalance(data.cash)
                })
                getPlayerBalance({cbId:turnInId}).then(({data})=>{ //查询转入钱包余额
                    setTimeout(()=>{ //延迟显示
                        this.setState({
                            'walletBalacneIn':data.cash==0?'0.0000':data.cash,
                            'inLoading':false
                        })
                    },200)
                    turnOutId==='sobet_01' && globalStore.refreshBalance(data.cash)
                })
                this.setState({'cash':''})
            }else{
                message.error(data.msg);
            }
        })
    }
    render(){
        const WalletsOutOption = ()=>{ //转出钱包
            return (
                <Select labelInValue defaultValue={{key:this.state.turnOutId}} onChange={this.selectChangeOut} className="transfer-select">
                    <Option value="请选择">请选择</Option>
                    {
                        this.state.wallets.map((item,index)=>{
                            return (
                                <Option value={item.cbId} key={item.cbName}>{item.cbName==='彩票钱包'?'彩票钱包（主钱包）':item.cbName}</Option>
                            )
                        })
                    }
                </Select>
            )
        }
        const WalletsInOption = ()=>{ //转入钱包
            return (
                <Select labelInValue defaultValue={{key:this.state.turnInId}} onChange={this.selectChangeIn} className="transfer-select">
                    {this.state.turnOutCn==='请选择'?<Option value="请选择">请选择</Option>:''}
                    {
                        this.state.inWallets.map((item,index)=>{
                            return (
                                <Option value={item.cbId} key={item.cbName}>{item.cbName==='彩票钱包'?'彩票钱包（主钱包）':item.cbName}</Option>
                            )
                        })
                    }
                </Select>
            )
        }
        return(
            <div className="right-header charge">
                <h2 className="title">转账</h2>
                {
                    this.state.loading?
                    <div className="spin-center"><Spin/></div>:
                    (
                        <section className="transfer-conent">
                            <div className="selects">
                                <div className="trasnfer-in">请选择转出钱包：
                                    <WalletsOutOption/>
                                    可用余额：<span className="money-span">{this.state.outLoading?<Spin/>:this.state.walletBalacneOut}</span>
                                </div>
                                <div className="transfer-out">请选择转入钱包：
                                    <WalletsInOption/>
                                    可用余额：<span className="money-span">{this.state.inLoading?<Spin/>:this.state.walletBalacneIn}</span>
                                </div>
                                <div className="transfer-out">请选择转入钱包：
                                    <Input  placeholder="请输入转账金额" onChange={this.inputChange} className="transfer-input" value={this.state.cash} ref={(input)=>this.input=input} />
                                    从{this.state.turnOutCn}&nbsp;转入{this.state.turnInCn}
                                </div>
                                <div className="opt">
                                    <Button type="primary" onClick={this.allIn} disabled={this.state.turnLoading}>全额转入</Button>
                                    <Button type="primary" loading={this.state.turnLoading} onClick={this.nowTransfer}>立即转入</Button>
                                </div>
                            </div>
                             <div className="transfer-tip">
                                <h2>温馨提示</h2>
                                <div>
                                    <span style={{height:'42px'}}>1、</span>
                                    <p className="tips">彩票钱包向AG/PT/Kgame钱包转账，最低20元，最高50000元；彩票钱包向沙巴钱包转账，最低50元，最高50000元；彩票钱包向IDN钱包转账，最低100元，最高50000元；AG/PT/沙巴/IDN/Kgame钱包向彩票钱包转账，最低1元，最高50000元；</p>
                                </div>
                                <div>
                                    <span>2、</span>
                                    <p className="tips">彩票钱包向PT/沙巴/IDN/Kgame钱包转账，支持小数点后两位，单位：元；彩票钱包向AG钱包转账，只支持正整数，单位：元；</p>
                                </div>
                                <div>
                                    <span>3、</span>
                                    <p className="tips">AG/PT钱包向彩票钱包转账，只支持正整数；沙巴/IDN/Kgame钱包向彩票钱包转账，支持小数点后两位；</p>
                                </div>
                                <div>
                                    <span>4、</span>
                                    <p className="tips">AG/PT/沙巴/IDN/Kgame钱包之间不得互相转账，可先转入彩票钱包，再转出。</p>
                                </div>
                            </div>
                        </section>
                    )
                }
            </div>
        )
    }
}
export default Transfer