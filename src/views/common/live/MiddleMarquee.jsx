import React from 'react';
import Marquee from '../../../components/Marquee';
import { queryTopBetData } from '../../../utils/ajax';

class MiddleMarquee extends React.Component {
    state = {
        list: [
            {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 100.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 450.0000
            }, {
                "gameType": "百家乐",
                "playerName": "hhy123321",
                "netAmount": 585.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ch18859696790",
                "netAmount": 400.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 195.0000
            }, {
                "gameType": "百家乐",
                "playerName": "kfw20000",
                "netAmount": 100.0000
            }, {
                "gameType": "龙虎",
                "playerName": "qqx520",
                "netAmount": 60.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ch18859696790",
                "netAmount": 200.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 390.0000
            }, {
                "gameType": "龙虎",
                "playerName": "yinlei888",
                "netAmount": 84.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 195.0000
            }, {
                "gameType": "竞咪百家乐",
                "playerName": "xzk456150",
                "netAmount": 160.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ch18859696790",
                "netAmount": 390.0000
            }, {
                "gameType": "龙虎",
                "playerName": "qqx520",
                "netAmount": 40.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 400.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ch18859696790",
                "netAmount": 340.0000
            }, {
                "gameType": "百家乐",
                "playerName": "lwj66666",
                "netAmount": 9750.0000
            }, {
                "gameType": "百家乐",
                "playerName": "ning168",
                "netAmount": 200.0000
            }, {
                "gameType": "龙虎",
                "playerName": "yinlei888",
                "netAmount": 42.0000
            }, {
                "gameType": "百家乐",
                "playerName": "hhy123321",
                "netAmount": 400.0000
            }
        ]
    }
    getList = () => {
        queryTopBetData({
            num: 20
        }).then(res => {
            if (res.data && res.data.code === 1) {
                this.setState({ list: res.data.result });
            }
        }).catch(error => console.log(error));
    }
    componentDidMount() {
        // this.getList();
    }
    render() {
        const ListHtml = () => this
            .state
            .list
            .map((item, index) => {
                return (
                    <span className="marquee-item" style={{ color: 'white', marginRight: '36px' }} key={index}>
                        恭喜
                        <i className="marquee-item-name">
                            {item.playerName}
                        </i>
                        在
                        <i className="marquee-item-game">
                            {item.gameType}
                        </i>
                        中奖¥
                        <i className="marquee-item-money">
                            {item.netAmount}
                        </i>
                    </span>
                );
            });
        return (
            <div className="clearfix middle-marquee-wrapper">
                <div className="fl center middle-marquee-title">最新中奖名单</div>
                <div className="fr middle-marquee-list">
                    <Marquee style={{ width: '1032px', height: '40px', 'lineHeight': '40px' }}>
                        <ListHtml />
                    </Marquee>
                </div>
            </div>
        );
    }
}

export default MiddleMarquee;