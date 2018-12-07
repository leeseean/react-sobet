import React from 'react';
import {Icon,Button,Tabs} from 'antd';
import { inject, observer } from 'mobx-react';
import {withRouter,Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import './comment.styl'
import './voucher.styl'

const TabPane =Tabs.TabPane;

function getListNav(personalNav){
    let listTabls=null;

    for(let i = 0 , len = personalNav.length ; i < len ;i++){
        if(personalNav[i].type=="voucher"){
            listTabls=personalNav[i].list
        }
    }
    return listTabls;
}

@withRouter
@inject('personalStore')
@observer
class Voucher extends React.Component{
    state={
        totalMoneyRefIcon:false,           //钱包总额iocn刷新效果，true为旋转，false不旋转
        listTabls:[],                      //tabs nav
        curActive:this.props.location.pathname
    }
    componentDidMount(){

        const { personalNav } = this.props.personalStore;
        this.setState({
            listTabls:getListNav(personalNav)
        })

    }
    handleTabSwitch=(key)=>{
        this.props.history.push(key)
    }
    render(){
        let Main = Loadable({
            loader: () => import('./voucher/'+this.props.match.params.type+'.jsx'),
            loading: ()=>'',
            delay: 500
        })
        return (
            <div className="per_voucher">
                <header>
                    <section className="header_top">
                        <div className="top-div top-lf">
                            <p>钱包总额：</p>
                            <div>
                                <span className="top-money">45827467.18</span><Icon type="reload" spin={this.state.totalMoneyRefIcon} className="ref-icon"/>
                                <Button type="primary" className="top-recharge">充值</Button>
                                <Button>回收余额</Button>
                            </div>
                        </div>
                        <div className="top-div top-lr">
                            <p>可提金额：</p>
                            <div>
                                <span className="top-money">45827467.18</span>
                                <Button type="primary" className="top-withdraw">提现</Button>
                            </div>
                        </div>
                    </section>
                    <section className="top_wallet">
                        <div>
                            <p>彩票钱包</p>
                            <p>900.00</p>
                        </div>
                        <div>
                            <p>AG钱包</p>
                            <p>900.00</p>
                        </div>
                        <div>
                            <p>WM钱包</p>
                            <p>900.00</p>
                        </div>
                        <div>
                            <p>PT钱包</p>
                            <p>900.00</p>
                        </div>
                        <div>
                            <p>沙巴钱包</p>
                            <p>900.00</p>
                        </div>
                        <div>
                            <p>IND钱包</p>
                            <p>900.00</p>
                        </div>
                        <div>
                            <p>KG钱包</p>
                            <p>900.00</p>
                        </div>
                    </section>
                </header>
                <main className="com_personal voucher_main">
                    <Tabs defaultActiveKey={this.state.curActive} onChange={this.handleTabSwitch} animated={false}>
                        {
                            this.state.listTabls.map((item,index)=>{
                                return (
                                    <TabPane tab={item.cn} key={item.path}><Main {...this.props}/></TabPane>
                                )
                            })
                        }
                    </Tabs>
                </main>
            </div>
        )
    }
}

export default Voucher;