/**
 * Created by Orange on 2018-10-05 10:26:44.
 */

import React from 'react';
import Countdown from '../../components/Countdown';

class LotteryHead extends React.Component {
    render() {
        const { lotteryType, lotteryCode, currentIssue, countdown, updateIssue, opencode } = this.props;
        return (
            <div className="clearfix lottery-head-wrapper">
                <div className="fl head-left">
                    <i class="lottery-logo" lt={lotteryCode}></i>
                </div>
                <div className="fl head-center">
                    <div className="head-center-inner">
                        <div className="head-center-issue">
                            <div className="head-center-issue-top">
                                第<em className="current-issue">{currentIssue}</em>期
                            </div>
                            <div className="head-center-issue-bottom">投注截止还有</div>
                        </div>
                        <div className="head-center-clock">
                            <Countdown className="issue-countdown" count={countdown} callback={updateIssue} />
                        </div>
                    </div>
                </div>
                <div className="fr clearfix head-right">
                    <div className="fr head-right-opencode">
                        <span className="opencode">1</span>
                        <span className="opencode">2</span>
                        <span className="opencode">3</span>
                        <span className="opencode">4</span>
                        <span className="opencode">5</span>
                    </div>
                    <div className="fr head-right-issue">
                        <div className="head-right-issue-top">
                            第<em className="open-issue">{currentIssue}</em>期
                        </div>
                        <div className="head-right-issue-bottom">开奖号码</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteryHead;