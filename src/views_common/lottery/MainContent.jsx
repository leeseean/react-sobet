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
    state = {
        trendShowFlag: false
    }
    componentDidMount() {
        const { queryTrendData, updateIssue, getTabConfig } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
        getTabConfig();
    }
    render() {
        const { lotteryCode, playWayToCn, lotteryCodeToCn, recordData, showTraceFlag, setMainLeftRef } = this.props.lotteryStore;
        return (
            <React.Fragment>
                <LotteryHead />
                <div className="clearfix main-content">
                    <div className="fl main-content-left" ref={ref => setMainLeftRef(ref)}>
                        <LotteryPlate />
                        <LotteryOrder />
                        {
                            showTraceFlag ? <LotteryTrace /> : null
                        }
                        <LotteryRecord lotteryCode={lotteryCode} recordData={recordData} playWayToCn={playWayToCn} codeToCn={lotteryCodeToCn} />
                    </div>
                    <div className="fr main-content-right">
                        <TrendList />
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default MainContent;