import React,{ Component } from 'react';
import './index.styl';
import "./iconfont.css";

class Agent extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "个人中心",
            content:[
                {
                    contentNum:1,
                    contentTitle:"如何更改会员密码",
                    contentContent:"您登陆账号之后，点击“用户中心” —— “账号管理” —— “修改密码” 页面，按照相应的规则进行修改您的账号密码。"
                },
                {
                    contentNum:2,
                    contentTitle:"如何找回密码",
                    contentContent:"在用户登录的页面点击“忘记密码”，根据您的账号，按照网站的提示来进行操作；如果您既没有绑定邮箱也没有设置安全问题，" +
                    "请联系客服人员，他们会给您修改成相关密码，之后您可以登录修改自己心仪的密码。 请放心，客服人员看不到您的密码。"
                },
                {
                    contentNum:3,
                    contentTitle:"如何编辑个人资料",
                    contentContent:"您可以通过“用户中心” —— “账号管理” —— “资料管理”页面来进行完善自己的个人资料。"
                },
                {
                    contentNum:4,
                    contentTitle:"如何绑定邮箱",
                    contentContent:"可以通过“用户中心”—“账号管理”—“绑定邮箱设置”页面，填写自己常用的邮箱，系统会给您要绑定的邮箱中发送一份验证邮件，" +
                    "您只需要再进入您的邮箱，点击相关的链接即可验证邮箱。<b>请注意：这个邮箱一旦绑定不可更改，并且也是您找回密码的重要凭证。</b>"
                },
                {
                    contentNum:5,
                    contentTitle:"如何设置密保问题",
                    contentContent:"您可以通过“用户中心”—“账号管理”—“密保问题设置”页面来进行设置密保问题。密保会有一个相关的问题。您可以选择一个喜欢的问题来进行自由设计答案。" +
                    "<b>请注意，密保问题请牢记，这个是您找回密码的重要凭证。</b>"
                },
                {
                    contentNum:6,
                    contentTitle:"如何设置资金密码",
                    contentContent:"您可以通过“用户中心”—“账号管理”—“资金密码设置”来进行设置自己的资金密码。资金密码首次设置需要账号的密码来进行确认。再次修改资金密码，需要使用自己原来的资金密码。" +
                    "<b>请注意：您的资金密码是您提现的重要密码，请牢记。</b>"
                },
                {
                    contentNum:7,
                    contentTitle:"什么是收款人姓名，如何进行设置",
                    contentContent:"收款人姓名是您提现的一个重要验证，如果收款人的姓名和您的开户行的姓名不一致，是无法来进行提款，请谨慎设置。" +
                    "<br/>您可以通过“用户中心”—“账号管理”—“资料管理”来进行收款人姓名的绑定，一经绑定是无法来进行修改的。"
                },
                {
                    contentNum:8,
                    contentTitle:"如何进行充值",
                    contentContent:"您可以通过“用户中心”—“出纳中心”—“充值”的页面来进行充值。您可以选择 在线支付， 快捷充值和 银行转账三种方式来进行对您的账号充值。\n" +
                    "<br/>在线支付和快捷充值，您可以选择相应的网上银行依据系统的引导一步一步的操作，提示操作成功即充值成功。\n" +
                    "<br/>银行转账，您可以根据我们给您提供的银行卡信息，在线下进行汇款，汇款成功之后您在网上填写相关的汇款单信息，填写完成之后，即充值成功。"
                },
                {
                    contentNum:9,
                    contentTitle:"如何查看余额",
                    contentContent:"您可以用过“用户中心”—“出纳中心”—“余额”页面进行查看。"
                },
                {
                    contentNum:10,
                    contentTitle:"如何进行提现",
                    contentContent:"您可以通过“用户中心”—“出纳中心”—“提现”页面查看自己可以进行提现的金额，点击提现系统一步一步的提示来进行账号提现。"
                },
                {
                    contentNum:11,
                    contentTitle:"如何查看交易记录",
                    contentContent:"您可以通过“用户中心”—“交易流水”查看自己各类型的交易记录。"
                }
            ],
            activeArr:[],
        }
    };
    handClick(key){
        const oldArr = [...this.state.activeArr];
        let itemIndex = oldArr.indexOf(key);
        if(itemIndex===-1){
            oldArr.push(key);
        }else{
            oldArr.splice(itemIndex,1)
        };
        this.setState(()=>{
            return{
                activeArr: oldArr
            }
        });
    }
    render(){
        return(
            <div className={"helper-agent-box"}>
                <h2>{this.state.title}</h2>
                <div className="helper-agent-content">
                    <ul>
                        {
                            this.state.content.map((item,index)=>{
                                return(
                                    <li
                                        key={item.contentNum}
                                        className={this.state.activeArr.indexOf(item.contentNum)!==-1?"helper-agent-content-ative":""}
                                    >
                                        <p
                                            className={"helper-agent-contentTitle"}
                                            onClick={(e)=>this.handClick(item.contentNum)}
                                        >

                                            <span>
                                                {item.contentTitle}
                                            </span>
                                            <a className={"helper-agent-open"}>展开<i className={`iconfont icon-baijiantou`}></i></a>
                                            <a className={"helper-agent-close"}>收起<i className={`iconfont icon-lanjiantou`}></i></a>
                                        </p>
                                        <p dangerouslySetInnerHTML={{ __html:item.contentContent }} className={"helper-agent-contentContent"}></p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    };
}
export default Agent;