import React from 'react';
import { inject, observer } from 'mobx-react';
import TrendList from './TrendList';

@inject('lotteryStore')
@observer
class Lottery extends React.Component {
    render() {
        const { trendData, method, trendCodeColorConfig } = this.props.lotteryStore;
        return (
            <div className="center">
                <TrendList data={trendData} method={method} colorConfig={trendCodeColorConfig}/>
            </div>
        );
    }
};

export default Lottery;