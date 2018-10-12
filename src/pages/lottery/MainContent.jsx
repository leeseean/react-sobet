import React from 'react';
import { inject, observer } from 'mobx-react';
import LotteryHead from './LotteryHead';
import TrendList from './TrendList';
import LotteryRecord from './LotteryRecord';
import LotteryPlate from './LotteryPlate';
import LotteryOrder from './LotteryOrder';

@inject('lotteryStore')
@observer
class MainContent extends React.Component {
    mainRef = null
    componentDidMount() {
        const { queryTrendData, updateIssue } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
    }
    render() {
        const { lotteryCode, lotteryType, trendData, method, trendConfig, playWayToCn, lotteryCn, currentIssue, countdown, updateIssue, opencodeArr, openIssue, lotteryCodeToCn } = this.props.lotteryStore;
        return (
            <React.Fragment>
                <LotteryHead {...{ lotteryType, lotteryCode, lotteryCn, currentIssue, countdown, updateIssue, opencodeArr, openIssue }} />
                <div className="clearfix main-content">
                    <div className="fl main-content-left">
                        <LotteryPlate />
                        {/*<LotteryOrder />*/}
                        <LotteryRecord lotteryCode={lotteryCode} playWayToCn={playWayToCn} codeToCn={lotteryCodeToCn} />
                    </div>
                    <div className="fr main-content-right">
                        <TrendList lotteryType={lotteryType} data={trendData} method={method} trendConfig={trendConfig} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default MainContent;