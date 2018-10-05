import React from 'react';
import { inject, observer } from 'mobx-react';
import './lottery.styl';
import LotteryHead from './LotteryHead';
import TrendList from './TrendList';
import LotteryFavourite from './LotteryFavourite';

@inject('lotteryStore')
@observer
class Lottery extends React.Component {
    componentDidMount() {
        const { queryTrendData, updateIssue } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
    }
    render() {
        const { trendData, method, trendConfig, lotteryType, lotteryCode, currentIssue, countdown, updateCountdownflag, updateIssue, opencodeArr } = this.props.lotteryStore;
        return (
            <div className="lottery-wrapper">
                <LotteryFavourite />
                <LotteryHead {...{ lotteryType, lotteryCode, currentIssue, countdown, updateCountdownflag, updateIssue, opencodeArr }} />
                <TrendList data={trendData} method={method} trendConfig={trendConfig} />
            </div>
        );
    }
};

export default Lottery;