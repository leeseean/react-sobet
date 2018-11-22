import React from 'react'
import { inject, observer } from 'mobx-react';
import {Tabs} from 'antd';
import {withRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import './comment.styl';

const TabPane =Tabs.TabPane;

@withRouter
@inject('personalStore')
@observer
class Account extends React.Component{
    state = {
        curActive:this.props.location.pathname
    }

    handleTabSwitch=(key)=>{
        this.props.history.push(key)
    }
    render() {
        const { personalNav } = this.props.personalStore;

        let listTabls=null;

        for(let i = 0 , len = personalNav.length ; i < len ;i++){
            if(personalNav[i].type=="account"){
                listTabls=personalNav[i].list
            }
        }
        //     {
        //         cn: '个人资料',
        //         path: '/personal/account/info'
        //     }, {
        //         cn: '登陆密码',
        //         path: '/personal/account/password'
        //     }, {
        //         cn: '电子邮箱',
        //         path: '/personal/account/email'
        //     }, {
        //         cn: '密保问题',
        //         path: '/personal/account/insurance'
        //     },
        //     {
        //         cn: '资金密码',
        //         path: '/personal/account/funds'
        //     }, {
        //         cn: '银行卡管理',
        //         path: '/personal/account/bankcard'
        //     },
        const urlParams = ['info','password','email','insurance','funds','bankcard']
        let Main = Loadable({
                loader: () => import('./account/'+this.props.match.params.type+'.jsx'),
                loading: ()=>'',
                delay: 500
            })
        return (
            <div className="com_personal account">
                <Tabs defaultActiveKey={this.state.curActive} animated={false} onChange={this.handleTabSwitch}>
                    {listTabls.map((m,i)=>{
                        return (
                            <TabPane tab={m.cn} key={m.path}>
                                {
                                    urlParams.indexOf(this.props.match.params.type)!=-1?<Main/>:window.location.href='/page404'
                                }
                            </TabPane>
                        )
                    })}
                </Tabs>
            </div>
        )
    }
}

export default Account