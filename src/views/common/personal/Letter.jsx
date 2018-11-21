import React from 'react';
import {withRouter} from 'react-router-dom';
import {Spin,Table,Pagination,Button,Modal} from 'antd';
import { getPreAdminMessage,updateMessageUserById,deletePreAdminMessageAjax } from './ajax'


//消息类型
function msgType (msgType) {
    switch(msgType){
        case 0 :
            return "系统消息";
        case 1 :
            return "用户消息";
        default :
            return "其他";
    }
}
//状态
function readState (state) {
    return state ==1?"已读":"未读";
}
//定义契约种类
const contractObj = {
    '0': '日工资',
    '1': '分红',
    '2': '私返',
    '3': 'AG真人日工资',
    '4': '沙巴体育日工资',
    '5': '第三方分红'
};
//定义发放契约工资类型
const sendObj = {
    '_0': '日工资',
    '_1': '分红',
    '_2': '私返',
    '_3': 'AG真人日工资',
    '_4': '沙巴体育日工资',
    '_5': '第三方分红'
};
//定义跳转地址
const hrefUrl = {
    '0': 'daySalary',
    '1': 'dividents',
    '2': 'sifan',
    '3': 'agDaySalary',
    '4': 'sbDaySalary'
}
const top = {top: '326px'}

function countDown(){
    let secondsToGo = 5,
        t = null;
    const modal = Modal.warning({
        title: '温馨提示',
        content: `请选择要删除的内容！(${secondsToGo}s)`,
        style:top
    })
    t = setInterval(()=>{
        secondsToGo-=1;
        modal.update({
            content: `请选择要删除的内容！(${secondsToGo}s)`
        })
    },1000)
    setTimeout(()=>{
        clearInterval(t)
        modal.destroy();
    },secondsToGo*1000)
}
function setList(data){
    let arr = [];
    if(data.data && data.data.length>0){
        let obj={};
        data.data.map((item,index)=>{
            let obj = {
                key:item.id,
                id:item.id,
                title: item.title,
                createDate: item.createDate,
                msgType: msgType(item.msgType),
                opt:item,
                msgState:readState(item.msgState),
            }
            arr.push(obj);
        })
    }
    return arr;
}
@withRouter
class Letter extends React.Component{
    state = {
        loading:true,  //首次进入 ajax loading阶段
        list:[],       //list
        nowPage:1,     //当前请求页
        pageCount:0,   //总页数
        total:0,       //消息条数 
        visible:false, //false 不显示弹框，true 显示弹框
        id:'',         //消息弹框id
        title:'',      //消息弹框标题
        content:'',    //消息弹框内容
        selectedRowKeys:[], //选中行的id
        delLoading:false,   //删除loading中
        detailW:'400px',    //消息弹框宽度，默认400px; 
    }
    componentDidMount(){
        this.getMsgList(1) //进入页面，默认请求第一页
    }
    getMsgList(key){ //请求站内信数据
        getPreAdminMessage({page:key}).then(({data}) => {
            this.setState({
                'loading':false,
                'list':setList(data),
                'nowPage':data.nowPage,
                'pageCount':data.pageCount,
                'total':data.total
            })
        });
    }
    handleDetail(item,e){ //显示某条消息详情弹框
        this.setState({
            'visible':true,
            'title':item.title,
            'content':item.content
        })
        if (Object.keys(contractObj).indexOf(item.content.split(',')[1]) !== -1) { //平台或代理 与用户签订契约通知
            this.setState({'detailW':'425px'})
        }else if(Object.keys(sendObj).indexOf(item.content.split(',')[1]) !==-1) { //发放下级契约分红,日工资等，余额不够通知
            this.setState({'detailW':'475px'})
        }
        let msgstate = e.target.getAttribute('msgstate')
        if(msgstate=="0"){ //未读
            
            updateMessageUserById({ id: item.id,type: 0}).then(({data})=>{})

            this.state.list.map((d,index,arr)=>{
                if(d.id==item.id){
                    arr[index].msgState=readState(1);
                }
            })
            e.target.setAttribute('msgstate',1);
        }
       
    }
    handleCancel = ()=>{ //关闭消息详情弹框
        this.setState({
            'visible':false
        })
    }

    delMsg = ()=>{ //删除消息
        let { selectedRowKeys,nowPage } = this.state; 
        if(selectedRowKeys.length==0){
            countDown();
            return false;
        }
        let ids = selectedRowKeys.join(',');
        this.setState({
            'delLoading':true
        })
        deletePreAdminMessageAjax({'items':ids}).then(({data})=>{
             this.setState({
                'delLoading':false
            })
            if(data.code==0){ //删除成功
                this.setState({
                    'selectedRowKeys':[]
                })
                let page = nowPage;
                if(nowPage>1 && this.state.list.length===selectedRowKeys.length){ //当前页不是第一页，若全部删除则请求上一页，否则请求当前页
                    page = nowPage-1
                }
                this.getMsgList(page);
            }
        })
    }
    handleHref(r){
        console.log(r);
    }
    render(){
        const columns = [
            {
                title:'标题',
                dataIndex: 'title',
                width:'321px',
            },
            {
                title:'时间／日期',
                dataIndex: 'createDate',
                width:'250px',
            },
            {
                title:'消息类型',
                dataIndex: 'msgType',
            },
            {
                title:'操作',
                dataIndex: 'opt',
                render: item=>(<a msgstate={item.msgState?item.msgState:0} onClick={this.handleDetail.bind(this,item)}>查看</a>)
            },
            {
                title:'状态',
                dataIndex: 'msgState',
            },
        ]
        //没有站内信
        const NoLetter = (
                <div className="no-letter">
                    <img src={require('../../../images/no-tips.png')} alt=""/>
                    <p>您目前还没有收到任何消息</p>
                </div>
            )
        
        //选中行,存储id
        const rowSelection = {
            selectedRowKeys:this.state.selectedRowKeys,
            onChange: (selectedRowKeys)=>{
                this.setState({
                    selectedRowKeys
                })
            }
        }

        //分页配置
        const pagination = { 
            total:this.state.total,
            pageSize:10,
            showQuickJumper:true,
            onChange:(page)=>this.getMsgList(page)
        }

        //消息弹框标题
        const ModalTitle = (
            <span className="model-title">{this.state.title}</span>
        )

        //消息弹框内容
        const ModalContent =(()=>{
            let { content } = this.state;
            let contentArr = content.split(','),
                txt='',
                btnTxt = '';

            //契约分红情况0日工资1分红2私返3ag日工资4沙巴日工资5第三方分红 余额不足弹窗_0,_1,0 上级是平台，1上级是代理 
            
            if (Object.keys(contractObj).indexOf(contentArr[1]) !== -1) { //平台或代理 与用户签订契约通知
                contentArr[2] == 0 ? txt = `平台已与您签订了${contractObj[contentArr[1]]}契约`:txt = `您的上级希望与您签订${contractObj[contentArr[1]]}契约`;
                btnTxt = '点击进入';
            }else if(Object.keys(sendObj).indexOf(contentArr[1]) !==-1) { //发放下级契约分红,日工资等，余额不够通知
                txt = `您的可用余额不足以发放您的下级${sendObj[contentArr[1]]}，需要您充值后手动发放。`
                btnTxt = '立即充值';
            }
            return (
                <React.Fragment>
                    {
                        txt?
                        <div>
                            <p>尊敬的客户：</p>
                            <p className="model-p1">{txt}<Button className="enterContract" onClick={this.handleHref.bind(this,contentArr[1])}>{btnTxt}</Button></p>
                            <p className="model-p2">特此通知</p>
                            <p className="model-p3">摩臣</p>
                        </div>:
                        content
                    }
                </React.Fragment>
            )
        })
        return(
            <div className="right-header charge">
                <h2 className="title">站内信</h2>
                {
                    this.state.loading?
                    <div className="spin-center"><Spin/></div>:
                    (
                        this.state.list.length>0?
                        <div className="letter">
                            <div className="letter-title">
                                这里显示由本站发给您个人的信息
                                <Button className="del" onClick={this.delMsg} loading={this.state.delLoading}>删除</Button>
                            </div>
                            <div className="table-content">
                                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.list} pagination={pagination} position='both'/>
                            </div>
                        </div>:
                        NoLetter
                    )
                }
                <Modal 
                    title={ModalTitle}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    style={top}
                    width={this.state.detailW}
                >
                    <ModalContent/>
                </Modal>
                
            </div>
        )
    }
}

export default Letter