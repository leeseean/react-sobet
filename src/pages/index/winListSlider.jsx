import React from 'react';
import {getLotteryWinTop10} from '../../utils/ajax';
import Marquee from '../../components/Marquee';

const WinItem = ({item}) => {
    let time = Date.now() - item.winTime;
    time = Math.floor(time / 1000 / 60);
    const TimeHtml = ({time}) => {
        if (time <= 0) {
            return <span>刚刚</span>;
        }
        return <span>{time}
            <em>分钟前</em>
        </span>;
    };
    return (
        <span>
            <span>{item.winUserName}
                <em>投注</em>
            </span>
            <span>{item.winLotteryName}
                <em>中奖</em>
            </span>
            <span>{item.winMoney}
                <em>元</em>
            </span>
            <TimeHtml time={time}/>
        </span>
    );
};

class WinListSlider extends React.Component {
    state = {
        list: []
    }
    componentDidMount() {
        getLotteryWinTop10().then(res => {
            if (res.data.code === 1) {
                this.setState({list: res.data.result});
            }
        }).catch(error => {});
    }
    render() {
        const Items = () => this
            .state
            .list
            .map((item, index) => <WinItem key={index} item={item}/>);
        return (
            <Marquee>
                <Items/>
            </Marquee>
        );
    }
}

export default WinListSlider;