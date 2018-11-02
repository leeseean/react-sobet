import React from 'react';
import { inject, observer } from 'mobx-react';
import LotteryHead from './head/LotteryHead';
import TrendList from './trend/TrendList';
import LotteryRecord from './record/LotteryRecord';
import LotteryPlate from './plate/LotteryPlate';
import LotteryOrder from './order/LotteryOrder';
import LotteryTrace from './trace';

@inject('lotteryStore')
@observer
class MainContent extends React.Component {
    componentDidMount() {
        const { queryTrendData, updateIssue, getTabConfig } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
        getTabConfig();
    }
    render() {
        const { setMainLeftRef, trendData, lotteryType, trendConfig, method } = this.props.lotteryStore;
        return (
            <React.Fragment>
                <LotteryHead />
                <div className="clearfix main-content">
                    <div className="fl main-content-left" id="mainLeftRef" ref={ref => setMainLeftRef(ref)}>
                        <LotteryPlate />
                        <LotteryOrder />
                        <LotteryTrace />
                        <LotteryRecord />
                    </div>
                    <div className="fr main-content-right">
                        <TrendList {...{ trendData, lotteryType, trendConfig, method }} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default MainContent;