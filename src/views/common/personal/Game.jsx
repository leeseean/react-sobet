import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Tabs, Button, Select } from 'antd';
import './comment.styl';
import { Radios, Datecomponent, Tables } from '../../../components/personal/personal';
import { timeDay } from '../../../utils/timeDay';
import moment from 'moment';
import { lotteryAjax } from './ajax'
@withRouter
@inject('personalStore')
@observer
class Game extends React.Component {
    constructor(props) {
        super(props)
        const selectTabs = this.props.history.location.pathname;
        const m = selectTabs.split('/')
        this.state = {
            concert: m[3],
            defaultRadios: '0',           //查询时间默认第一个按钮
            starValue: timeDay('start'), //时间开始
            endValue: timeDay('end'),   //结束时间
            endOpen: false,             //控制时间插件 
            handChange0Value: '',
            handChange1Value: '',
            handChange2Value: '',
            datas: null,
        }
        this.onChange = this.onChange.bind(this)
        this.radiosChange = this.radiosChange.bind(this)
        //处理时间插件
        this.disableStarDate = this.disableStarDate.bind(this)
        this.disableEndDate = this.disableEndDate.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onStartChange = this.onStartChange.bind(this)
        this.onEndChange = this.onEndChange.bind(this)

        this.handChange0 = this.handChange0.bind(this)
        this.handChange1 = this.handChange1.bind(this)
        this.handChange2 = this.handChange2.bind(this)
    }
    componentDidMount() {
        this.disableStarDate(timeDay('start'))
        this.disableEndDate(timeDay('end'))
        this.onChange()
    }
    onChange(e) {
        const selectTabs = this.props.history
        let paths = e;
        if (paths == undefined) {
            paths = selectTabs.location.pathname
        }
        const m = paths.split('/')
        const defaultRadios = this.state.defaultRadios = '0';
        this.setState({ defaultRadios })
        this.state.concert = m[3]
        this.setState({ 'concert': m[3] });
    }
    radiosChange(e) {
        const defaultRadios = e.target.value
        this.state.defaultRadios = e.target.value
        this.setState({ 'defaultRadios': defaultRadios })
        let starValue, endValue;
        switch (e.target.value) {
            case '0':
                starValue = timeDay('start');
                endValue = timeDay('end');
                break
            case '-1':
                starValue = timeDay('1');
                endValue = `${timeDay('1')} 23:59`;
                break
            case '-7':
                starValue = timeDay('6');
                endValue = timeDay('end');
                break
            case '-30':
                starValue = timeDay('29');
                endValue = timeDay('end');
                break
            default:
                starValue = timeDay('start');
                endValue = timeDay('end');
                break
        }
        this.setState({ starValue })
        this.setState({ endValue })
        this.disableStarDate(starValue)
        this.disableEndDate(endValue)
    }
    disableStarDate(starValue) {
        const endValue = this.state.endValue;
        const defaultRadios = this.state.defaultRadios;
        let time, betime
        if (defaultRadios != '-30') {
            time = timeDay('6');
            betime = timeDay('0');
        } else {
            time = timeDay('29');
            betime = timeDay('0');
        }
        return starValue.valueOf() >= moment(betime) || starValue.valueOf() < moment(time) || moment(starValue) >= moment(endValue)
    }
    disableEndDate(endValue) {
        const starValue = this.state.starValue;
        const defaultRadios = this.state.defaultRadios;
        let time, betime
        if (defaultRadios != '-30') {
            time = timeDay('6');
            betime = timeDay('0');
        } else {
            time = timeDay('29');
            betime = timeDay('0');
        }
        return endValue.valueOf() >= moment(betime) || endValue.valueOf() < moment(time) || moment(starValue) >= moment(endValue)
    }
    onChangeDate(field, value) {
        this.setState({
            [field]: value
        })
    }
    onStartChange(value) {
        this.onChangeDate('starValue', value);
    }
    onEndChange(value) {
        this.onChangeDate('endValue', value);
    }
    handChange0(value) {
        const handChange0Value = this.state.handChange0Value = value.key
        this.setState({ handChange0Value })

    }
    handChange1(value) {
        const handChange1Value = this.state.handChange1Value = value.key
        this.setState({ handChange1Value })
    }
    handChange2(value) {
        const handChange2Value = this.state.handChange2Value = value.key
        this.setState({ handChange2Value })
    }
    handsumit(config, radioState) {
        const { starValue, endValue, handChange0Value, handChange1Value, handChange2Value } = this.state
        if (config[radioState].Ajax) {
            let datas = null;
            if (radioState == 'lottery') {
                datas = {
                    orderStartTime: moment(starValue).format('YYYY/MM/DD  HH:mm'),
                    orderEndTime: moment(endValue).format('YYYY/MM/DD  HH:mm'),
                    currPage: 1,
                    pageSzie: 20,
                    lottery: handChange0Value,
                    status: handChange1Value,
                    singleStatus: handChange2Value
                }
            }
            config[radioState].Ajax(datas).then(res => {
                if (res.code == '1') {
                    const datas = this.state.result
                    this.setState({ datas })
                }
            })
        }
    }
    render() {
        const time = {
            '0': '今天',
            '-1': '昨天',
            '-7': '最近一周',
            '-30': '最近一月'
        }
        const lotteryGame = {
            "": '所有彩种',
            "WBG5FC": "WBG5分彩",
            "WBGFFC": "WBG分分彩",
            "TXFFC": "腾讯分分彩",
            "TX1FC": "腾讯1分彩",
            "QQSSM": 'QQ30秒',
            "WBGMMC": "WBG秒秒彩",
            "CQSSC": "重庆时时彩",
            "XJSSC": "新疆时时彩",
            "RBSSM": "日本30秒",
            "DCCQSSM": "多彩重庆30秒",
            "DCTXSSM": "多彩腾讯30秒",
            "JNDSSM": "加拿大30秒",
            "MC11Y": "摩臣11选5",
            "GD11Y": "广东11选5",
            "SD11Y": "山东11选5",
            "JX11Y": "江西11选5",
            "SH11Y": "上海11选5",
            "AH11Y": "安徽11选5",
            "HB11Y": "河北11选5",
            "YN11Y": "云南11选5",
            "HUB11Y": "湖北11选5",
            "HLJ11Y": "黑龙江11选5",
            "SX11Y": "山西11选5",
            "MCPK10": "摩臣PK10",
            "BJPK10": "北京PK10",
            "XGPK10": "香港PK10",
            "MC3D": "摩臣3D",
            "3DFC": "福彩3D",
            "HN5FC": "河内5分彩",
            "XN5FC": "悉尼5分彩",
            "TJSSC": "天津时时彩",
            "SHSSL": "上海时时乐",
            "TCP3": "排列3",
            "TCP5": "排列5",
            'MCK3': "摩臣快3",
            'JSK3': "江苏快3",
            'HNK3': "河南快3",
            'HBK3': "湖北快3",
            'AHK3': "安徽快3",
            "SCKL12": "四川快乐12",
            'RDFFC': "瑞典1分彩",
            'RDLFC': "瑞典2分彩"
        }
        const config = {
            "lottery": {
                timeMounst: false,  //时候有最近一周
                selectCount: {          //select渲染
                    allLottery: lotteryGame,
                    lotteryState: {
                        "": '全部状态',
                        '0': '未开奖',
                        '1': '未中奖',
                        '2': '已派奖',
                        '3': '等待派奖',
                        '4': '个人撤单',
                        '5': '系统撤单',
                    },
                    lotterydantiao: {
                        "": '是否单挑',
                        '2': '否',
                        '3': '是'
                    }
                },
                Ajax: lotteryAjax
            },
            'trace': {
                timeMounst: false,
                selectCount: {
                    allLottery: lotteryGame,
                    lotterydantiao: {
                        '': '是否单挑',
                        '2': '否',
                        '3': '是'
                    }
                }
            },
            'agyx': {
                timeMounst: true,
                selectCount: {
                    allLottery: {
                        '': '全部游戏类型',
                        'BAC': '百家乐',
                        'CBAC': '包桌百家乐',
                        'LINK': '连环百家乐',
                        'DT': '龙虎',
                        'SHB': '骰宝',
                        'ROU': '轮盘',
                        'FT': '蟠桃',
                        'LBAC': '竞咪百家乐',
                        'ULPK': '终极德州扑克',
                        'SBAC': '保险百家乐',
                        'NN': '牛牛',
                        'OTHER': '其他'
                    },
                    lotteryState: {
                        '': '所有状态',
                        '1': '已结算',
                        '0': '未结算',
                        '-1': '重置试玩额度',
                        '-2': '注单被篡改',
                        '-8': '取消制定局注单',
                        '-9': '取消注单',
                    },
                }
            },
            'fish': {
                timeMounst: true,
            },
            'ptyx': {
                timeMounst: true,
                selectCount: {
                    allLottery: {
                        '': '全部游戏类型',
                        '1': '真人游戏',
                        '2': '刮刮乐',
                        '3': '休闲游戏',
                        '4': '视频老虎机',
                        '5': '其他',
                        '9': '桌面卡牌',
                        '10': '老虎机'
                    }
                }
            },
            'BBIN': {
                timeMounst: true,
                selectCount: {
                    allLottery: {
                        '': '全部游戏类型',
                        '3001': '百家乐',
                        '3002': '二八杠',
                        '3003': '龙虎斗',
                        '3005': '三公',
                        '3006': '温州牌九',
                        '3007': '轮盘',
                        '3008': '骰宝',
                        '3010': '德州扑克',
                        '3011': '色碟',
                        '3012': '牛牛',
                        '3014': '无限21点',
                        '3015': '番摊',
                        '3016': '鱼虾蟹'
                    }
                }
            },
            'sport': {
                timeMounst: true,
            },
            'IDN': {
                timeMounst: true,
                selectCount: {
                    allLottery: {
                        '': '全部游戏类型',
                        'TXH': '德州扑克',
                        'LPK': '真人德州',
                        'DMM': '多米诺99',
                        '3005': '三公',
                        'EBN': '多米诺9',
                        'BTM': '多米诺',
                        'BJK': '21点',
                        'CAP': '十三张',
                    }
                }
            },
            'kgame': {
                timeMounst: true,
                selectCount: {
                    allLottery: {
                        '': '全部游戏类型',
                        'abaa8a9ffc7a5afb37473a99653ca44d': '百家乐',
                        '0a636149fdf36c98e47e7b4e62fdbc7a': '百人牛牛',
                        '4126d6e9e679c9574dc799e06fc70e6a': '奔驰宝马',
                        '1234567890abcdef': '彩金德州',
                        'fab61991dd952f155e430b82d9537e77': '德州牛仔',
                        '3e137d9e63d5a8e34fefb8bfd1aab357': '夺金捕鱼',
                        '8354e40811382019262acc7531c87c5b': '二八杠',
                        '904ad648d161251c4ac195f339269c44': '新二人麻将',
                        'dcb2c811292efb7216748802d91e731c': '森林舞会',
                        'c13bb7f1fd87361a1521d94d56eaa492': '悟空闹海',
                        '7b577d729ce1a9959f326b0ed8fa7460': '幸运水果机',
                        '1aa39cb263960aca4e491e7206b92cd0': '中国娃娃',
                    }
                }
            },
            'xglhc': {
                timeMounst: true,
                selectCount: {
                    lotterydantiao: {
                        '': '全部状态',
                        '0': '未开奖',
                        '1': '未中奖',
                        '2': '已派奖',
                        '3': '等待派奖',
                        '4': '个人撤单',
                        '5': '系统撤单',
                    }
                }
            },
            'statistics': {
                timeMounst: false,
                selectCount: {
                    allLottery: {
                        'CP': '彩票',
                        'AG': 'AG真人娱乐',
                        'AGHUNTER': 'AG捕鱼王',
                        'PT': 'PT老虎机',
                        'BBIN': 'BBIN游戏',
                        'SB': '沙巴体育',
                        'IDN': 'IDN棋牌',
                        'KGAME': 'Kgame棋牌',
                        'HKLHC': '香港六合彩',
                    }
                }
            }
        }
        const { personalNav } = this.props.personalStore
        const selectTabs = this.props.history
        let listTabls = null;
        const TabPane = Tabs.TabPane;
        const radioState = this.state.concert;

        for (var i = 0; i < personalNav.length; i++) {
            if (personalNav[i].type == "game") {
                listTabls = personalNav[i].list
            }
        }
        const { starValue, endValue, defaultRadios, datas } = this.state
        const Option = Select.Option;
        const selectfn = [this.handChange0, this.handChange1, this.handChange2]
        let selectkeys = ''
        if (radioState == 'statistics') {
            selectkeys = 'CP'
        }
        return (
            <div className='games'>
                <Tabs defaultActiveKey={selectTabs.location.pathname} animated={false} onChange={this.onChange}>
                    {listTabls.map((m, i) => {
                        return <TabPane tab={m.cn} key={m.path}>
                            <div className='queryCriteria'>
                                <Radios
                                    time={time}
                                    config={config}
                                    radioState={radioState}
                                    radiosChange={this.radiosChange}
                                    defaultRadios={defaultRadios}
                                />
                                <div className='queryTime'>
                                    <Datecomponent
                                        starValue={starValue}
                                        endValue={endValue}
                                        disableStarDate={this.disableStarDate}
                                        disableEndDate={this.disableEndDate}
                                        onChangeDate={this.onChangeDate}
                                        onStartChange={this.onStartChange}
                                        onEndChange={this.onEndChange}
                                    />
                                    {config[radioState].selectCount &&
                                        <div>
                                            {Object.keys(config[radioState].selectCount).map((m, i) => {
                                                return <Select labelInValue defaultValue={{ key: selectkeys }} style={{ width: 140 }} key={m} onChange={selectfn[i]}>
                                                    {Object.keys(config[radioState].selectCount[m]).map((v, j) => {
                                                        return <Option value={v} key={v}>{config[radioState].selectCount[m][v]}</Option>
                                                    })}
                                                </Select>
                                            }
                                            )}
                                        </div>
                                    }
                                    <Button type='primary' onClick={() => {
                                        this.handsumit(config, radioState)
                                    }}>立即查询</Button>
                                </div>
                            </div>
                        </TabPane>
                    })}
                </Tabs>
                <div className='queryCriteria'>
                    <Tables
                        radioState={radioState}
                        datas={datas} />
                </div>
            </div>
        )
    }
}




export default Game