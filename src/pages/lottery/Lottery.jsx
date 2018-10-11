import React from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom';
import './lottery.styl';
import LotteryFavourite from './LotteryFavorite';
import MainContent from './MainContent';
import WinListMarquee from './WinListMarquee';

@inject('lotteryStore')
@observer
class Lottery extends React.Component {
    state = {
        _mounted: false
    }
    mainRef = null
    componentDidMount() {
        this.setState({
            _mounted: true
        });
    }
    componentWillUnmount() {
        this.setState({
            _mounted: false
        });
    }
    render() {
        const { lotteryCodeToCn } = this.props.lotteryStore;
        return (
            <div className="lottery-wrapper">
                <div className="lottery-inner-wrapper" ref={ref => this.mainRef = ref}>
                    {
                        this.state._mounted ? <LotteryFavourite codeToCn={lotteryCodeToCn} mainRef={this.mainRef} /> : null
                    }
                    <Route exact path="/lottery/:lotteryCode" component={MainContent} />
                </div>
                <WinListMarquee />
            </div>
        );
    }
}

export default Lottery;