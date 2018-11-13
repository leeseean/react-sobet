import React from 'react'
import { inject, observer } from 'mobx-react';
import {Tabs} from 'antd';
import {withRouter} from 'react-router-dom';
import './comment.styl';
@withRouter
@inject('personalStore')
@observer
@withRouter
class Trade extends React.Component{
    render() {
        const { personalNav } = this.props.personalStore
        let listTabls=null;
        const TabPane =Tabs.TabPane;
        for(var i=0 ;i < personalNav.length;i++){
            if(personalNav[i].type=="trade"){
                listTabls=personalNav[i].list
            }
        }
        return (
            <div>
                <Tabs defaultActiveKey='1' animated={false}>
                    {listTabls.map((m,i)=>{
                        return  <TabPane tab={m.cn} key={m.path}>

                        </TabPane>
                    })}
                </Tabs>
            </div>
        )
    }
}

export default Trade