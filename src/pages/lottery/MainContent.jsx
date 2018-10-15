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
    mainLeftRef = null
    componentDidMount() {
        const { queryTrendData, updateIssue } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
    }
    render() {
        const { lotteryCode, lotteryType, trendData, method, trendConfig, playWayToCn, lotteryCn, currentIssue, countdown, updateIssue, opencodeArr, openIssue, lotteryCodeToCn } = this.props.lotteryStore;
        return (
            <React.Fragment>
                <LotteryHead />
                <div className="clearfix main-content">
                    <div className="fl main-content-left" ref={ref => this.mainLeftRef = ref}>
                        <LotteryPlate />
                        <LotteryOrder />
                        <LotteryRecord lotteryCode={lotteryCode} playWayToCn={playWayToCn} codeToCn={lotteryCodeToCn} />
                    </div>
                    <div className="fr main-content-right">
                        {
                            this.mainLeftRef ? <TrendList mainLeftRef={this.mainLeftRef} /> : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default MainContent;