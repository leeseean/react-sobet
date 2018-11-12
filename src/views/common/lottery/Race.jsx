/**
 * Created by Orange on 2018-11-12 14:57:51.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import './race.styl';

@inject('lotteryStore')
@observer
class Race extends React.Component {
    init = async () => {
        const { queryTrendData, lotteryType, lotteryCode } = this.props.lotteryStore;
        if (lotteryType !== 'pk10') {
            return;
        }
        const res = await queryTrendData();
        const data = res.data.result.issue[0];
        document.getElementById('raceFrame').onload = function () {
            this.contentWindow.postMessage({
                data,
                lottery: lotteryCode,
                type: 'mounted',
            }, '*');
        }
        document.getElementById('raceFrame').contentWindow.postMessage({
            data,
            lottery: lotteryCode,
            type: 'mounted',
        }, '*');
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate(prevProps) {
        // if (prevProps.lotteryStore.lotteryCode !== this.props.lotteryStore.lotteryCode) {
        //     this.init();
        // }
    }
    render() {
        const { lotteryCode, showRaceTabFlag, showRaceFlag } = this.props.lotteryStore;

        return (
            <div className={`race-wrapper ${!showRaceTabFlag ? 'hide' : ''} ${!showRaceFlag ? 'hidden' : ''}`}>
                <iframe id="raceFrame" scrolling="no" width="794" height="498" src={`/static/race/${lotteryCode}/index.html`}></iframe>
            </div>
        );
    }
}

export default Race;