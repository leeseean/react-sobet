import React from 'react'
import CommonView from '../../../../components/agent/teamReport/CommonView';
import "./index.styl";


class Lottery extends React.Component{
    columns = [
        {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName'
        },
        {
            title: '投注',
            dataIndex: 'betAmount',
            key: 'betAmount',
            sorter: true
        },
        {
            title: '中奖',
            dataIndex: 'bonusAmount',
            key: 'bonusAmount',
            sorter: true
        },
        {
            title: '返点',
            dataIndex: 'rebateAmount',
            key: 'rebateAmount',
            sorter: true
        },
        {
            title: '会员活动',
            dataIndex: 'mbrAtvtCash',
            key: 'mbrAtvtCash',
            sorter: true
        },
        {
            title: '代理活动',
            dataIndex: 'agtAtvtCash',
            key: 'agtAtvtCash',
            sorter: true
        },
        {
            title: '盈亏',
            dataIndex: 'profitAndLoss',
            key: 'profitAndLoss',
            sorter: true
        },
        {
            title: '操作',
            dataIndex: 'lastT',
            key: 'lastT',
            render: text => <a href="javascript:;" onClick={this.handleGameRecord}>{text}</a>
        }
    ]
    constructor(props) {
        super(props);
        console.log('TeamReport match=', this.props);
    }
    render(){
        return(
            <div>
                <CommonView {...this.props} />
            </div>
        )
    }
}

export default Lottery