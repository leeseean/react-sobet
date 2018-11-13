import React,{ Component } from 'react';
import GlobalFootLogo from '../../../components/GlobalFootLogo'
import Agent from './Agent'
import "./index.styl";
import "./iconfont.css";
import Loadable from 'react-loadable';
import GlobalLoading from '../../../components/GlobalLoading';

class Helpercenter extends Component{
    constructor(props){
        super(props);
        this.state={
            question:{
                title:"常见问题",
                iconName:"icon-changjianwenti",
                content:[
                    {
                        title:"个人中心",
                        id:"Agent"
                    },
                    {
                        title:"防劫持教程",
                        id:"Teacher"
                    },
                    {
                        title:"微信转银行卡教程",
                        id:"Vxzc"
                    },
                    {
                        title:"彩票常见问题",
                        id:"Lotteryquesition"
                    },

                ]
            },
            helperList:[
                {
                    title:"关于我们",
                    iconName:"icon-guanyuwomen",
                    id:"Aboutus"
                },
                {
                    title:"联系我们",
                    iconName:"icon-lianxiwomen",
                    id:"Concatus"
                },
                {
                    title:"彩种介绍",
                    iconName:"icon-caizhongjieshao",
                    id:"Conduct"
                },
            ],
            rules:{
                title:"规则与条款",
                iconName:"icon-guizeyutiaokuan",
                content:[
                    {
                        title:"摩臣娱乐",
                        id:"Mcrule"
                    },
                    {
                        title:"沙巴体育",
                        id:"Sportrule"
                    },
                ]
            },
            ModuleName:'Agent',
            openMenuList:[],
        }
        this.tabPage=this.tabPage.bind(this);
    };
    componentWillMount(){
        const oldList = [...this.state.openMenuList];
        let nowHash = this.props.location.hash.split("#")[1];

        if(nowHash==('Agent'||'Teacher'||'Vxzc'||'Lotteryquesition')){
            oldList.push(this.state.question.title)
        }else if(nowHash==('Mcrule'||'Sportrule')){
            oldList.push(this.state.rules.title)
        }
        this.setState(()=>({
            ModuleName:nowHash,
            openMenuList:oldList
        }));
    };
    tabPage(key){
        this.setState(()=>{
            return {
                ModuleName: key
            }
        })
    };
    openMenu(key){
        const oldArr = [...this.state.openMenuList];
        let itemIndex = oldArr.indexOf(key);
        if(itemIndex===-1){
            oldArr.push(key);
        }else{
            oldArr.splice(itemIndex,1)
        };
        this.setState(()=>{
            return{
                openMenuList: oldArr
            }
        });
        console.log(this.state.openMenuList);
    };
    render(){
        let NavComponet =Loadable({
            loader:()=>import('./'+this.state.ModuleName),
            loading:GlobalLoading,
            delay: 300
        })
        return(
            <div
                className={"a"}
            >
                <div className={"helper-content"}>
                    <ul className={"help-aside-nav"}>
                        <li className={"helper-nav-title"}>
                            <span>帮助中心</span>
                        </li>
                        {/*常见问题*/}
                        <li className={"helper-nav-quesition"}>
                            <dl
                                className={this.state.openMenuList.indexOf(this.state.question.title)!==-1?"helper-nav-quesition-active":""}>
                                <dt onClick={(e)=>this.openMenu(this.state.question.title)}>
                                    <i className={`iconfont ${this.state.question.iconName}`}></i>
                                    {this.state.question.title}
                                    <i className={`iconfont icon-baijiantou`}></i>
                                </dt>
                                {
                                    this.state.question.content.map((item,index)=>{
                                        return (
                                            <dd
                                                onClick={(e)=>this.tabPage(item.id)}
                                                key={item.id}
                                                className={item.id===this.state.ModuleName?"helper-nav-active":""}
                                            >
                                                {item.title}
                                            </dd>
                                        )
                                    })
                                }
                            </dl>
                        </li>
                        {/*常见问题,关于我们,联系我们，彩种介绍*/}
                        {
                            this.state.helperList.map((item,index)=>{
                                return(
                                    <li
                                        className={item.id===this.state.ModuleName?"helper-nav-active":""}
                                        onClick={(e)=>this.tabPage(item.id)}
                                        key={item.id}
                                    >
                                        <i className={`iconfont ${item.iconName}`}></i>
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                        {/*规则与条款*/}
                        <li className={"helper-nav-rule"}>
                            <dl className={this.state.openMenuList.indexOf(this.state.rules.title)!==-1?"helper-nav-rules-active":""}>
                                <dt onClick={(e)=>this.openMenu(this.state.rules.title)}>
                                    <i className={`iconfont ${this.state.rules.iconName}`}></i>
                                    {this.state.rules.title}
                                    <i className={`iconfont icon-baijiantou`}></i>
                                </dt>
                                {
                                    this.state.rules.content.map((item,index)=>{
                                        return (
                                            <dd
                                                className={item.id===this.state.ModuleName?"helper-nav-active":""}
                                                onClick={(e)=>this.tabPage(item.id)}
                                                key={item.id}
                                            >
                                                {item.title}
                                            </dd>
                                        )
                                    })
                                }
                            </dl>
                        </li>
                    </ul>
                    <div className={"fr helper-content-content"}>
                        <NavComponet/>
                    </div>
                </div>
                <GlobalFootLogo></GlobalFootLogo>
            </div>
        )
    }
}
export default Helpercenter;