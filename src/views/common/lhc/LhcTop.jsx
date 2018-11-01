import React from 'react';
import CountDown from '../../../components/Countdown';
import OpenCodes from './OpenCodes';

class LhcTop extends React.Component {
    render() {
        return (
            <div className="clearfix lhc-top-wrapper">
                <div className="fl lhc-top-logo-wrapper">
                    <img
                        className="lhc-top-logo"
                        src={require('../../../images/xglhc/xglhc-logo.png')}
                        width="191"
                        height="60"
                        alt="香港六合彩"/>
                </div>
                <div className="fl clearfix lhc-top-countdown-wrapper">
                    <div className="fl lhc-top-countdown-title">
                        <p>距离<i className="lhc-coming-issue">2018016</i>期</p>
                        <p>开奖还有</p>
                    </div>
                    <div className="fr lhc-top-countdown">
                        <CountDown count={10000} callback={() => {}}/>
                    </div>
                </div>
                <div className="fl clearfix lhc-top-opencode-wrapper">
                    <div className="fl lhc-top-opencode-title">
                        <p>第<i className="lhc-opened-issue">2018015</i>期</p>
                        <p>开奖号码</p>
                    </div>
                    <div className="fr lhc-top-opencode">
                        <OpenCodes
                            codes={[
                            '01',
                            '02',
                            '03',
                            '04',
                            '05',
                            '06',
                            '07'
                        ]}/>
                    </div>
                </div>
                <div className="fr lhc-top-trend">
                    <a href="">
                        <img
                            src={require('../../../images/xglhc/chart-logo.png')}
                            alt=""
                            width="17"
                            height="14"/>
                        走势图
                    </a>
                </div>
            </div>
        );
    }
}

export default LhcTop;