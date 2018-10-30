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
    mainLeftRef = null
    componentDidMount() {
        const { queryTrendData, updateIssue, getTabConfig } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
        getTabConfig();
        this.setState({ trendShowFlag: true });
    }
    render() {
        const { lotteryCode, playWayToCn, lotteryCodeToCn, recordData } = this.props.lotteryStore;
        return (
            <React.Fragment>
                <LotteryHead />
                <div className="clearfix main-content">
                    <div className="fl main-content-left" ref={ref => this.mainLeftRef = ref}>
                        <LotteryPlate />
                        <LotteryOrder />
                        <LotteryTrace />
                        <LotteryRecord lotteryCode={lotteryCode} recordData={recordData} playWayToCn={playWayToCn} codeToCn={lotteryCodeToCn} />
                    </div>
                    <div className="fr main-content-right">
                        {
                            this.state.trendShowFlag ? <TrendList mainLeftRef={this.mainLeftRef} /> : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default MainContent;