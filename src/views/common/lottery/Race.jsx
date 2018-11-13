/**
 * Created by Orange on 2018-11-12 14:57:51.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import './race.styl';

@inject('lotteryStore')
@observer
class Race extends React.Component {
    xgpk10Posted = false
    init = async () => {
        const { queryTrendData, lotteryCode } = this.props.lotteryStore;
        if (lotteryCode !== 'xgpk10') {
            return;
        }
        const res = await queryTrendData();
        const data = res.data.result.issue[0];
        const domRaceFrameOfXgpk10 = document.getElementById('xgpk10');
        if (lotteryCode === 'xgpk10') {//特殊处理香港pk10，因为底下有期号栏
            domRaceFrameOfXgpk10.onload = () => {
                domRaceFrameOfXgpk10.contentWindow.postMessage({
                    data,
                    lottery: 'xgpk10',
                    type: 'mounted',
                }, '*');
                this.xgpk10Posted = true;
            }
            if (!this.xgpk10Posted) {
                domRaceFrameOfXgpk10.contentWindow.postMessage({
                    data,
                    lottery: 'xgpk10',
                    type: 'mounted',
                }, '*');
                this.xgpk10Posted = true;
            }
        }
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate(prevProps) {
        if (!this.xgpk10Posted) {
            this.init();
        }
    }
    render() {
        const { lotteryCode, lotteryType, showRaceFlag } = this.props.lotteryStore;

        return (
            <div className={`race-wrapper ${lotteryType === 'pk10' ? '' : 'hide'} ${!showRaceFlag ? 'hidden' : ''}`} lottery={lotteryCode}>
                <iframe id="xgpk10" style={{ display: lotteryCode !== 'xgpk10' ? 'none' : '' }} scrolling="no" width="794" height="498" src={`/static/race/xgpk10/index.html`}></iframe>
                <iframe id="bjpk10" style={{ display: lotteryCode !== 'bjpk10' ? 'none' : '' }} scrolling="no" width="794" height="472" src={`/static/race/bjpk10/index.html`}></iframe>
                <iframe id="mcpk10" style={{ display: lotteryCode !== 'mcpk10' ? 'none' : '' }} scrolling="no" width="794" height="472" src={`/static/race/mcpk10/index.html`}></iframe>
            </div>
        );
    }
}

export default Race;