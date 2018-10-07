import React from 'react';
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
        return (
            <div className="info-mini clearfix">
                <div className={`info-mini-wrap ${this.state.showFlag ? 'show' : ''}`} ref={ref => this.domRef = ref}>
                    <div className="info-title-mini fl"><span className="info-title-text">瑞典1分彩</span> <span className="info-title-status"></span></div>
                    <div className="info-issue-mini fl">
                        <p>第<span className="current-issue">20181007-1300</span>期&nbsp;投注截止还有&nbsp;<span className="clock-mini"><b
                            className="clock_b0">00</b>:<b className="clock_b1">00</b>:<b className="clock_b2">12</b></span></p>
                    </div>
                    <div className="info-last-mini fr">
                        <div className="last-mini-text">第<em className="open-issue">20181007-1299</em>期&nbsp;开奖号码</div>
                        <ul className="open-code-list-mini open-code-list">
                            <li>0</li>
                            <li>4</li>
                            <li>7</li>
                            <li>6</li>
                            <li>8</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FixedCountdownTip;