/**
 * Created by Orange on 2018-10-10 13:42:53.
 */

import React from 'react';
import { getLotteryWinTop10 } from '../../../utils/ajax';
import Marquee from '../../../components/Marquee';
import elementInView from '../../../utils/elementInView';
import './winListMarquee.styl';

class WinListMarquee extends React.Component {
    _mounted = false
    listRef = null
    state = {
        list: [],
        marqueeShowFlag: true,
        fixedShowFlag: false
    }
    componentDidMount() {
        this._mounted = true;
        this.getLotteryWinTop10();
        setTimeout(this.initFixedShow, 666);
        window.addEventListener('scroll', this.initFixedShow);
        window.addEventListener('resize', this.initFixedShow);
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    getLotteryWinTop10 = async () => {
        const res = await getLotteryWinTop10();
        if (!this._mounted) {
            return;
        }
        if (res.data.code === 1) {
            this.setState({ list: res.data.result });
        }
    }
    initFixedShow = () => {
        if (this._mounted && this.listRef) {
            if (elementInView(this.listRef)) {
                this.setState({
                    fixedShowFlag: false
                });
            } else {
                this.setState({
                    fixedShowFlag: true
                });
            }
        }
    }
    closeMarquee = () => {
        this.setState({
            marqueeShowFlag: false
        })
    }
    render() {
        const WinItem = ({ item }) => {
            let time = Date.now() - item.winTime;
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
        const Items = ({ list }) => list.map((item, index) => <WinItem key={index} item={item} />);
        return (
            <React.Fragment>
                {
                    (this.state.list.length > 0 && this.state.marqueeShowFlag) ?
                        [<div key="1" className="list-marquee-wrapper" ref={ref => this.listRef = ref}>
                            <div className="list-marquee-outter">
                                <Marquee className="list-marquee">
                                    <Items list={this.state.list} />
                                </Marquee>
                                <i className="marquee-close" onClick={this.closeMarquee}></i>
                            </div>
                        </div>, <div key="2" className={`list-marquee-wrapper fixed ${this.state.fixedShowFlag ? '' : 'hide'}`}>
                            <div className="list-marquee-outter">
                                <Marquee className="list-marquee">
                                    <Items list={this.state.list} />
                                </Marquee>
                                <i className="marquee-close" onClick={this.closeMarquee}></i>
                            </div>
                        </div>] : null
                }
            </React.Fragment>
        );
    }
}

export default WinListMarquee;