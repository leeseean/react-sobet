import React from 'react'
import { 
    Tabs, 
    DatePicker, 
    Button,
    Table 
} from 'antd';
import {withRouter} from 'react-router-dom'
// import RouteWithSubRoutes from '../../../../routers/RouteWithSubRoutes';
import Breadcrumb from '../../../../components/agent/Breadcrumb';
import SearchBar from '../../../../components/agent/SearchBar';
import './index.styl';


const TabPane = Tabs.TabPane;

const TabsConfig = [
    {
        name: '彩票',
        code: 'lottery',
        active: true,
        show: true
    },
    {
        name: 'AG游戏',
        code: 'ag',
        active: false,
        show: true
    },
    {
        name: 'PT游戏',
        code: 'pt',
        active: false,
        show: true
    },
    {
        name: 'AG捕鱼王',
        code: 'ag_py',
        active: false,
        show: true
    },
    {
        name: 'BBIN游戏',
        code: 'bbin',
        active: false,
        show: false
    },
    {
        name: '沙巴体育',
        code: 'sb',
        active: false,
        show: true
    },
    {
        name: 'IDN棋牌',
        code: 'idn',
        active: false,
        show: false
    },
    {
        name: 'Kgame棋牌',
        code: 'kgame',
        active: false,
        show: false
    },
    {
        name: '香港六合彩',
        code: 'hklhc',
        active: false,
        show: true
    },
    {
        name: '第三方游戏汇总',
        code: 'third',
        active: false,
        show: true
    },
    {
        name: '充提数据',
        code: 'summary',
        active: false,
        show: true
    }
];

@withRouter
class Index extends React.Component {
    listUrl = [
        {
            path: '/agent/teamReport',
            url: '/agent/teamReport/lottery',
            title: '彩票',
            exact: true
        },
        {
            path: '/agent/teamReport',
            url: '/agent/teamReport/agGame',
            title: 'AG游戏'
        },
        {
            path: '/agent/teamReport',
            url: '/agent/teamReport/ptGame',
            title: 'PT游戏'
        }
    ];
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
    footer = () => <p className="warm-tip">温馨提示：仅保留最近35天的数据</p>;
    constructor(props) {
        super(props);
        this.state = {
            curPath: this.matchPath(this.props.location.pathname),
            defaultTab: this.props.match.params.type,
            breadcrumbData: [{name: 'brian001'},{name: 'brian002'},{name: 'brian003'}],
            tableProps: {
                footer: this.footer
                // pagination: false
            }
        }
    }
    handleMenu = (data) => {
        // this.props.history.push(data.key);
        this.props.history.push(this.getUrlByPath(data.key));
    }
    handleChangeTab = (key) => {
        this.props.history.push('/agent/teamReport/'+key);
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
    matchPath(path = '') {
        let reg;
        for (let i = 0; i < this.listUrl.length; i++) {
            reg = new RegExp(this.listUrl[i].path)
            if (path.match(reg)) {
                return this.listUrl[i].path;
            }
        }
        return '';
    }
    getUrlByPath(path = '') {
        for (let i = 0; i < this.listUrl.length; i++) {
            if (path == this.listUrl[i].path) {
                return this.listUrl[i].url;
            }
        }
        return '';
    }
    render(){
        // const match = this.props.match;
        console.log('info: render props=', this.props)
        console.log('info: render =', this.props.match.path)
        return(
            <div className="team-report-view">
                <Tabs defaultActiveKey={this.state.defaultTab} onChange={this.handleChangeTab}>
                    {TabsConfig.map((tab) => {
                        if (tab.show) {
                            return (<TabPane tab={tab.name} key={tab.code}>
                                <div className="search-wp"><SearchBar /></div>
                                <div className="breadcrumb-wp"><Breadcrumb data={this.state.breadcrumbData} onHandleClick={this.handleBreadcrumb} /></div>
                                <div className="table-wp"><Table {...this.state.tableProps} columns={this.columns} dataSource={this.state.reportList} /></div>
                            </TabPane>)
                        }     
                    })}
                </Tabs>   
            </div>
        )
    }
}

export default Index