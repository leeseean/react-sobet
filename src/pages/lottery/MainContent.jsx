import React from 'react';
import { inject, observer } from 'mobx-react';
import LotteryHead from './head/LotteryHead';
import TrendList from './trend/TrendList';
import LotteryRecord from './record/LotteryRecord';
import LotteryPlate from './plate/LotteryPlate';
import LotteryOrder from './order/LotteryOrder';

@inject(stores => ({
    lotteryStore: stores.lotteryStore,
}))
@observer
class MainContent extends React.Component {
    state = {
        trendShowFlag: false
    }
    mainLeftRef = null
    componentDidMount() {
        const { queryTrendData, updateIssue } = this.props.lotteryStore;
        updateIssue();
        queryTrendData();
        this.setState({ trendShowFlag: true });
    }
    render() {
        const { lotteryCode, playWayToCn, lotteryCodeToCn } = this.props.lotteryStore;
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
                            this.state.trendShowFlag ? <TrendList mainLeftRef={this.mainLeftRef} /> : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default MainContent;