import React from 'react';
import { inject, observer } from 'mobx-react';
import './lottery.styl';
import LotteryHead from './LotteryHead';
import TrendList from './TrendList';
import LotteryFavourite from './LotteryFavorite';

@inject('lotteryStore')
@observer
class Lottery extends React.Component {
    mainRef = null
    componentDidMount() {
        const { queryTrendData, updateIssue } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
    }
    render() {
        const { trendData, method, trendConfig, lotteryType, lotteryCode, currentIssue, countdown, updateIssue, opencodeArr, lotteryCodeToCn } = this.props.lotteryStore;
        return (
            <div className="lottery-wrapper">
                <div className="lottery-inner-wrapper" ref={ref => this.mainRef = ref}>
                    <LotteryFavourite codeToCn={lotteryCodeToCn} mainRef={this.mainRef} />
                    <LotteryHead {...{ lotteryType, lotteryCode, currentIssue, countdown, updateIssue, opencodeArr }} />
                    <TrendList data={trendData} method={method} trendConfig={trendConfig} />
                </div>
            </div>
        );
    }
};

export default Lottery;