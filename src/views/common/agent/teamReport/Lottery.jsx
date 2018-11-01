import React from 'react'
import $http from '../../../../utils/ajax';
import { 
    Tabs, 
    Icon, 
    DatePicker, 
    Input, 
    Button,
    Table
} from 'antd';
import CommonView from '../../../../components/agent/teamReport/CommonView';
import "./index.styl";

const TabPane = Tabs.TabPane;
const Search  = Input.Search;


let dataSource = [
    {
        "userId": 16881,
        "userName": "brian01",
        "newUserCount": 0,
        "newAgencyCount": 0,
        "userType": 0,
        "isHaveDown": 0,
        "betDate": null,
        "betAmount": "0.0000",
        "rebateAmount": "0.0000",
        "realBetAmount": "0.0000",
        "bonusAmount": "0.0000",
        "payAmount": "0.0000",
        "withdrawAmount": "0.0000",
        "profitAndLoss": "0.0000",
        "commissonAmount": "0.0000",
        "teamBlance": "0.0000",
        "activityBonus": "0.0000",
        "mbrAtvtCash": "0.0000",
        "agtAtvtCash": "0.0000",
        "isLine": 1,
        "lastT": '游戏记录',
        "key": 1
    },
    {
        "userId": 16888,
        "userName": "brian02",
        "newUserCount": 0,
        "newAgencyCount": 0,
        "userType": 0,
        "isHaveDown": 1,
        "betDate": null,
        "betAmount": "0.0000",
        "rebateAmount": "0.0000",
        "realBetAmount": "0.0000",
        "bonusAmount": "0.0000",
        "payAmount": "0.0000",
        "withdrawAmount": "0.0000",
        "profitAndLoss": "0.0000",
        "commissonAmount": "0.0000",
        "teamBlance": "0.0000",
        "activityBonus": "0.0000",
        "mbrAtvtCash": "0.0000",
        "agtAtvtCash": "0.0000",
        "isLine": 0,
        "key": 2
    },
    {
        "userId": 16888,
        "userName": "brian02",
        "newUserCount": 0,
        "newAgencyCount": 0,
        "userType": 0,
        "isHaveDown": 1,
        "betDate": null,
        "betAmount": "0.0000",
        "rebateAmount": "0.0000",
        "realBetAmount": "0.0000",
        "bonusAmount": "0.0000",
        "payAmount": "0.0000",
        "withdrawAmount": "0.0000",
        "profitAndLoss": "0.0000",
        "commissonAmount": "0.0000",
        "teamBlance": "0.0000",
        "activityBonus": "0.0000",
        "mbrAtvtCash": "0.0000",
        "agtAtvtCash": "0.0000",
        "isLine": 0,
        "key": 3
    }
]
class LotteryReport extends React.Component{
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
        this.state = {
            defaultTab: this.props.match.params.type,
            breadcrumbData: [{name: 'brian001'},{name: 'brian002'},{name: 'brian003'}],
            reportList: dataSource
        }
        console.log('TeamReport props=', this.props);
    }
    componentWillMount() {
        this.getTeamReportData();
    }
    componentDidMount() {

    }
    handleChangeTab = (key) => {
        this.props.history.push('/agent/teamReport/'+key);
    }
    handleGameRecord = () => {
        console.log('info handleGameRecord')
    }
    handleBreadcrumb = (name) => {
        console.log('handler=', name);
        let breadcrumbData = this.state.breadcrumbData,
            index = breadcrumbData.findIndex((item) => {
                return item.name == name;
            });
        if (index != -1 && index != breadcrumbData.length - 1) {
            breadcrumbData.splice(index, breadcrumbData.length - 1 - index);
            this.setState({breadcrumbData: breadcrumbData});
        }
    }
    handleDate = () => {

    }
    handleName = (name) => {
        console.log('info: name=', name)
    }
    getTeamReportData() {
        $http({
          url: '/lottery/api/u/v1/agent/getTeamReport?startTime=2018%2F10%2F16&endTime=2018%2F10%2F16&pageSize=10&userName=&_=1539682255980',
          method: 'GET'
        }).then((data) => {
            if (data.code == 1 && data.result && data.result.list && data.result.list.length > 0) {
                const reportList = data.result.list;
                this.setState({reportList: reportList});
            } else {
                this.setState({reportList: []});
            }
        });
    }
    render(){
        return(
            <div>
                 <CommonView {...this.props} />
            </div>
        )
    }
}

export default LotteryReport