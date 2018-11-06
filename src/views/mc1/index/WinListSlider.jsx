import React from 'react';
import { getLotteryWinTop10 } from '../../../utils/ajax';
import Marquee from '../../../components/Marquee';
import './winListSlider.styl';

const WinItem = ({ item }) => {
    let time = Date.now() - item.winTime;
    time = Math.floor(time / 1000 / 60);
    const TimeHtml = ({ time }) => {
        if (time <= 0) {
            return <span>刚刚</span>;
        }
        const minutes = Math.floor(time / 1000 / 60);
        const hours = Math.floor(minutes / 60 % 24);
        const day = Math.floor(hours / 24);
        if (day > 0) {
            return (
                <span>({day}
                    <em>天前</em>)
                </span>
            );
        }
        if (day <= 0 && hours > 0) {
            return (
                <span>({hours}
                    <em>小时前</em>)
                </span>
            );
        }
        return (
            <span>{minutes}
                <em>分钟前</em>
            </span>
        );
    };
    return (
        <span className="good-news-item">
            <span>{item.winUserName}
                <em>投注</em>
            </span>
            <span className="good-news-lottery">{item.winLotteryName}
                <em>中奖</em>
            </span>
            <span className="good-news-money">{item.winMoney}
                <em>元</em>
            </span>
            <TimeHtml time={time} />
        </span>
    );
};

class WinListSlider extends React.Component {
    _mounted = false
    state = {
        list: []
    }
    componentDidMount() {
        this._mounted = true
        getLotteryWinTop10().then(res => {
            if (res.data.code === 1) {
                if (!this._mounted) return;
                this.setState({ list: res.data.result });
            }
        }).catch(error => { });
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    render() {
        const Items = ({ list }) => list.map((item, index) => <WinItem key={index} item={item} />);
        return (
            <Marquee className="win-list-wrapper">
                <Items list={this.state.list} />
            </Marquee>
        );
    }
}

export default WinListSlider;