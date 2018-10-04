import React from 'react';

class Countdown extends React.Component {
    state = {
        count: Number(this.props.count)
    }
    timer = null
    tick = () => {
        let count = this.state.count;
        this.timer = setInterval(() => {
            if (count <= 0) {
                clearInterval(this.timer);
                if (typeof this.props.callback === 'function') {
                    this.props.callback();
                }
                return;
            }
            count--;
            this.setState({count});
        }, 1000);
    }
    componentDidMount() {
        this.tick();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        let h = Math.floor(this.state.count / 60 / 60);
        h = `0${h}`.slice(-2);
        let m = Math.floor(this.state.count / 60 - h * 60);
        m = `0${m}`.slice(-2);
        let s = this.state.count - h * 60 * 60 - m * 60;
        s = `0${s}`.slice(-2);
        const { className, style } = this.props;
        return (
            <span className={`count-down-wrapper ${className}`} style={style}>
                <i className="count-down-hours"></i>
                <i className="count-down-hours">{h}</i>
                <i className="count-down-symbol">:</i>
                <i className="count-down-minutes">{m}</i>
                <i className="count-down-symbol">:</i>
                <i className="count-down-seconds">{s}</i>
            </span>
        );
    }
}

export default Countdown;