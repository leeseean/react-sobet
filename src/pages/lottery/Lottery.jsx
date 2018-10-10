import React from 'react';
import { inject, observer } from 'mobx-react';
import './lottery.styl';
import LotteryHead from './LotteryHead';
import TrendList from './TrendList';
import LotteryFavourite from './LotteryFavorite';
import LotteryRecord from './LotteryRecord';
import LotteryPlate from './LotteryPlate';
import LotteryOrder from './LotteryOrder';
import WinListMarquee from './WinListMarquee';

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
        const { trendData, method, trendConfig, playWayToCn, lotteryType, lotteryCode, lotteryCn, currentIssue, countdown, updateIssue, opencodeArr, openIssue, lotteryCodeToCn } = this.props.lotteryStore;
        return (
            <div className="lottery-wrapper">
                <div className="lottery-inner-wrapper" ref={ref => this.mainRef = ref}>
                    <LotteryFavourite codeToCn={lotteryCodeToCn} mainRef={this.mainRef} />
                    <LotteryHead {...{ lotteryType, lotteryCode, lotteryCn, currentIssue, countdown, updateIssue, opencodeArr, openIssue }} />
                    <div className="clearfix main-content">
                        <div className="fl main-content-left">
                            <LotteryPlate />
                            <LotteryOrder />
                            <LotteryRecord lotteryCode={lotteryCode} playWayToCn={playWayToCn} codeToCn={lotteryCodeToCn} />
                        </div>
                        <div className="fr main-content-right">
                            <TrendList data={trendData} method={method} trendConfig={trendConfig} />
                        </div>
                    </div>
                </div>
                <WinListMarquee />
            </div>
        );
    }
};

export default Lottery;