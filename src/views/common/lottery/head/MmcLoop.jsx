/**
 * Created by Orange on 2018-11-02 17:27:09.
 **/

import React from 'react';
import './mmcLoop.styl';

class MmcLoop extends React.Component {
    state = {
        Y0: 0,
        Y1: 0,
        Y2: 0,
        Y3: 0,
        Y4: 0
    }
    _mounted = false
    resultConfig = {//每个数字显示的transfromY值
        0: 0,
        1: -50,
        2: -100,
        3: -150,
        4: -200,
        5: -250,
        6: -300,
        7: -350,
        8: -400,
        9: -450
    }
    timeConfig = {//每个位置号码滚动的时间
        0: 1000,
        1: 1050,
        2: 1080,
        3: 1100,
        4: 1150
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.opencode !== this.props.opencode) {
            this.flip();
        }
    }
    flip = () => {
        this.props.opencode.forEach((code, index) => {
            this.tick(code, index, 10);
        });
    }
    componentDidMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    tick = (code, index, speed) => {
        let timer = null;
        const startTime = Date.now();
        const fn = () => {
            if (!this._mounted) return;
            if (Date.now() - startTime >= this.timeConfig[index]) {
                this.setState({ [`Y${index}`]: this.resultConfig[code] });
                cancelAnimationFrame(timer);
                return;
            }
            this.setState((prevState, props) => ({
                [`Y${index}`]: prevState[`Y${index}`] - speed
            }));
            timer = requestAnimationFrame(fn);
        };
        timer = requestAnimationFrame(fn);
    }
    render() {
        const LoopList = ({ opencode }) => {
            if (opencode.length === 0) {
                return [...Array(5)].map((v, i) => <div key={i} className="fl loop-num"></div>);
            }
            return opencode.map((v, i) => {
                return (
                    <div key={i} style={{ backgroundPosition: `0 ${this.state[`Y${i}`]}px` }} className="fl loop-num active"></div>
                );
            });
        };
        return (
            <div className="clearfix mmc-loop-wrapper">
                <LoopList opencode={this.props.opencode} />
            </div>
        );
    }
}

export default MmcLoop;