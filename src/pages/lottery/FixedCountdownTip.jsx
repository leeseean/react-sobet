import React from 'react';
import Countdown from '../../components/Countdown';
import './fixedCountdownTip.styl';

class FixedCountdownTip extends React.Component {
    _mounted = false
    domRef = null
    state = {
        showFlag: false
    }
    componentDidMount() {
        this._mounted = true;
        window.addEventListener('scroll', () => {
            if (this._mounted) {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 60) {
                    this.setState({
                        showFlag: true
                    });
                } else {
                    this.setState({
                        showFlag: false
                    });
                }
            }
        });
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    render() {
        const { lotteryType, lotteryCode, lotteryCn, currentIssue, countdown, opencodeArr, openIssue } = this.props;
        return (
            <div className="info-mini clearfix">
                <div className={`info-mini-wrap ${this.state.showFlag ? 'show' : ''}`} ref={ref => this.domRef = ref}>
                    <div className="info-title-mini fl">
                        <span className="info-title-text">{lotteryCn}</span> 
                        <span className="info-title-status"></span></div>
                    <div className="info-issue-mini fl">
                        <p>
                            第<span className="current-issue">{currentIssue}</span>期&nbsp;投注截止还有&nbsp;
                            {
                                countdown === '等待开售' ? '等待开售' : <Countdown count={countdown} />
                            }
                            
                        </p>
                    </div>
                    <div className="info-last-mini fr">
                        <div className="last-mini-text">第<em className="open-issue">{openIssue}</em>期&nbsp;开奖号码</div>
                        <ul className="open-code-list-mini open-code-list">
                            {
                                opencodeArr.map((v, i) => {
                                    return <li key={i} code={v} lottery-type={lotteryType} lottery-code={lotteryCode}>{v}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FixedCountdownTip;