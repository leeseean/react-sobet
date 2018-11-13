import React from 'react';
import { Radio, DatePicker, Table } from 'antd';
import moment from "moment";

export class Radios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { time, config, radioState, radiosChange, defaultRadios } = this.props

        return <div className='queryTime'>
            查询时间:
            <Radio.Group buttonStyle='solid' size='small' onChange={radiosChange} value={defaultRadios}>
                {Object.keys(time).map((m, i) => {
                    if (config[radioState].timeMounst) {
                        return <Radio.Button value={m} key={m}>{time[m]}</Radio.Button>
                    } else {
                        if (i < 3) {
                            return <Radio.Button value={m} key={m}>{time[m]}</Radio.Button>
                        }
                    }
                })}
            </Radio.Group>
        </div>
    }
}



export class Datecomponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: []
        }
    }
    render() {
        const { starValue, endValue, onEndChange, onStartChange, disableStarDate, disableEndDate } = this.props;
        const dateFormat = 'YYYY/MM/DD  HH:mm';
        return (
            <div>
                从<DatePicker
                    disabledDate={disableStarDate}
                    showTime
                    format={dateFormat}
                    value={moment(starValue, dateFormat)}
                    placeholder='开始日期'
                    onChange={onStartChange}
                />
                至<DatePicker
                    disabledDate={disableEndDate}
                    showTime
                    format={dateFormat}
                    value={moment(endValue, dateFormat)}
                    placeholder='开始日期'
                    onChange={onEndChange}
                />
            </div>
        )
    }
}


export class Tables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tips: []
        }
        this.selectDate = this.selectDate.bind(this)
    }
    selectDate(type) {
        let t, datas;
        switch (type) {
            case 'lottery':
                t = ['仅保留最近35天的数据']
                datas = [{
                    title: '投注时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '15%'
                }, {
                    title: '彩种',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '玩法',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '期号',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '投注内容',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '投注金额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '奖金',
                    dataIndex: 'money',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '状态',
                    dataIndex: 'state',
                    sorter: true,
                    width: '8%'
                }, {
                    title: '追号',
                    dataIndex: 'go',
                    sorter: true,
                    width: '8%'
                }, {
                    title: '操作',
                    dataIndex: 'to',
                    sorter: true,
                    width: '8%'
                }]
                break
            case 'trace':
                t = ['仅保留最近15天的数据']
                datas = [{
                    title: '追号时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '15%'
                }, {
                    title: '彩种',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '玩法',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '开始期数',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '投注内容',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '总金额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '完成金额',
                    dataIndex: 'money',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '中奖即停',
                    dataIndex: 'state',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '状态',
                    dataIndex: 'go',
                    sorter: true,
                    width: '6%'
                }, {
                    title: '操作',
                    dataIndex: 'to',
                    sorter: true,
                    width: '6%'
                }]
                break
            case 'agyx':
                t = ['仅保留90天的数据', 'AG游戏数据有15至30分钟的延迟']
                datas = [{
                    title: '投注时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '注单流水号',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '游戏类型',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '游戏局号',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '投注金额',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '盈亏金额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '订单状态',
                    dataIndex: 'money',
                    sorter: true,
                    width: '10%'
                }]
                break
            case 'fish':
                t = ['仅保留90天的数据', 'AG捕鱼王数据有15至30分钟的延迟']
                datas = [{
                    title: '开始时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '结束时间',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '房间号',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '盈亏',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '投注金额',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '中奖',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: 'jackpot中奖',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                },
                {
                    title: '第一名奖励',
                    dataIndex: '2',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '记录时间',
                    dataIndex: '3',
                    sorter: true,
                    width: '10%'
                },
                ]
                break
            case 'ptyx':
                t = ['仅保留90天的数据', 'PT游戏数据有15至30分钟的延迟']
                datas = [{
                    title: '游戏时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '游戏类型',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '游戏名称',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '游戏局号',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '投注金额',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '派奖金额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '奖池派奖金额',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                }]
                break
            case 'BBIN':
                t = ['仅保留90天的数据', 'BBIN游戏数据有15至30分钟的延迟']
                datas = [{
                    title: '投注时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '注单流水号',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '游戏类型',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '开奖结果',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '下注金额',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '派彩金额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '会员有效投注额',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                }]
                break
            case 'sport':
                t = ['仅保留90天的数据', '沙巴体育游戏数据有15至30分钟的延迟']
                datas = [{
                    title: '下注时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '游戏类型',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '事项',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '详情',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '结算状态',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '投注额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '输/赢',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                },
                {
                    title: '有效投注',
                    dataIndex: '2',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '中奖金额',
                    dataIndex: '3',
                    sorter: true,
                    width: '10%'
                }]
                break
            case 'IDN':
                t = ['仅保留90天的数据', 'DN棋牌游戏数据有15至30分钟的延迟']
                datas = [{
                    title: '结算时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '游戏类型',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '房间号',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '牌局',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '下注金额',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '返奖',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '输/赢',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                },]
                break
            case 'kgame':
                t = ['仅保留90天的数据', 'Kgame棋牌游戏数据有15至30分钟的延迟']
                datas = [{
                    title: '结算时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '游戏名称',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '牌局ID',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '下注额',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '有效下注',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '返奖',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '盈亏',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                },]
                break
            case 'xglhc':
                t = ['仅保留90天的数据']
                datas = [{
                    title: '投注时间',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '彩种',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '玩法',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '期号',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '投注内容',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '投注金额',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '奖金',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                },
                {
                    title: '状态',
                    dataIndex: '2',
                    sorter: true,
                    width: '10%'
                },
                {
                    title: '操作',
                    dataIndex: '3',
                    sorter: true,
                    width: '10%'
                },]
                break
            case 'statistics':
                t = ['仅保留最近一周的数据']
                datas = [{
                    title: '日期',
                    dataIndex: 'time',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '投注',
                    dataIndex: 'lottery',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '中奖',
                    dataIndex: 'game',
                    sorter: false,
                    width: '10%'
                }, {
                    title: '返点',
                    dataIndex: 'iussue',
                    sorter: true,
                    width: '12%'
                }, {
                    title: '会员活动',
                    dataIndex: 'concent',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '代理活动',
                    dataIndex: 'case',
                    sorter: true,
                    width: '10%'
                }, {
                    title: '盈亏',
                    dataIndex: '1',
                    sorter: true,
                    width: '10%'
                }]
                break
            default:
                t = ['仅保留最近35天的数据']
                datas = []
        }
        this.state.tips = t;

        return datas
    }
    render() {
        const { radioState , datas} = this.props;
        const data = this.selectDate(radioState);
        const { tips } = this.state;
        return (<div >
            <Table
                columns={data}
            />
            <div className='tips'>
                <div>温馨提示：</div>
                <div>
                    {tips.length > 1 && tips.map((m, i) => {
                        return <p key={i}>{i + 1}:{m}</p>
                    })}
                    {
                        tips.length == 1 && tips.map((m, i) => {
                            return <p key={i}>{m}</p>
                        })
                    }
                </div>
            </div>

        </div>)
    }
}