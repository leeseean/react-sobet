import React from 'react';
import { inject, observer } from 'mobx-react';
import LotteryHead from './head/LotteryHead';
import TrendList from './trend/TrendList';
import LotteryRecord from './record/LotteryRecord';
import LotteryPlate from './plate/LotteryPlate';
import LotteryOrder from './order/LotteryOrder';
import LotteryTrace from './trace';
import ComponentToPrint from './ComponentToPrint';

@inject('lotteryStore')
@observer
class MainContent extends React.Component {
    componentDidMount() {
        const { getOddsData, getRecord, queryTrendData, updateIssue, getTabConfig } = this.props.lotteryStore;
        getOddsData();
        updateIssue();
        queryTrendData();
        getTabConfig();
        getRecord();
    }
    render() {
        const { setMainLeftRef, setLotteryOrderRef, trendData, lotteryType, trendConfig, method } = this.props.lotteryStore;
        return (
            <React.Fragment>
                <LotteryHead />
                <div className="clearfix main-content">
                    <div className="fl main-content-left" id="mainLeftRef" ref={ref => setMainLeftRef(ref)}>
                        <LotteryPlate />
                        <LotteryOrder ref={ref => setLotteryOrderRef(ref)} />
                        <LotteryTrace />
                        <LotteryRecord />
                        <ComponentToPrint />
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