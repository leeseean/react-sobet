import React from 'react';
import CountDown from '../../../components/Countdown.jsx';
import OpenCodes from './OpenCodes.jsx';
import { inject, observer } from 'mobx-react';

@inject('lhcStore')
@observer
class LhcTop extends React.Component {
    render() {
        const { lotteryCode, countdown, currentIssue, updateIssue, openIssue, opencodeArr } = this.props.lhcStore;
        const Logo = ({ lotteryCode }) => {
            if (lotteryCode === 'XGLHC') {
                return <img
                    className="lhc-top-logo"
                    src={require('../../../images/xglhc/xglhc-logo.png')}
                    width="191"
                    height="60"
                    alt="香港六合彩" />;
            }
            if (lotteryCode === 'JSLHC') {
                return <i className="lottery-logo" lt="jslhc"></i>;
            }
        };
        return (
            <div className="clearfix lhc-top-wrapper">
                <div className="fl lhc-top-logo-wrapper">
                    <Logo lotteryCode={lotteryCode} />
                </div>
                <div className="fl clearfix lhc-top-countdown-wrapper">
                    <div className="fl lhc-top-countdown-title">
                        <p>距离<i className="lhc-coming-issue">{currentIssue}</i>期</p>
                        <p>开奖还有</p>
                    </div>
                    <div className="fr lhc-top-countdown">
                        <CountDown count={countdown} callback={() => updateIssue()} />
                    </div>
                </div>
                <div className="fl clearfix lhc-top-opencode-wrapper">
                    <div className="fl lhc-top-opencode-title">
                        <p>第<i className="lhc-opened-issue">{openIssue}</i>期</p>
                        <p>开奖号码</p>
                    </div>
                    <div className="fr lhc-top-opencode">
                        <OpenCodes
                            codes={opencodeArr} />
                    </div>
                </div>
                <div className="fr lhc-top-trend">
                    <a href="">
                        <img
                            src={require('../../../images/xglhc/chart-logo.png')}
                            alt=""
                            width="17"
                            height="14" />
                        走势图
                    </a>
                </div>
            </div>
        );
    }
}

export default LhcTop;