import React from 'react';
import './backToTop.styl';

class BackToTop extends React.Component {
    state = {
        show: true
    }
    _mounted = false
    goTop = () => {
        document.documentElement.scrollTop = 0;
    }
    changeShowState = () => {
        if (this._mounted) {
            if (document.documentElement.scrollTop > 120) {
                !this.state.show && this.setState({show: true});
            } else {
                this.state.show && this.setState({show: false});
            }
        }
    }
    componentDidMount() {
        this._mounted = true;
        window.addEventListener('scroll', this.changeShowState);
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    render() {
        return (
            <div
                className={`back-to-top ${this.state.show ? 'show' : 'hide'}`}
                onClick={this.goTop}>
                <i></i>
            </div>
        );
    }
}

export default BackToTop;