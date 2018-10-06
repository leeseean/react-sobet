/**
 * Created by Orange on 2018-10-05 14:13:16.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import './lotteryFavorite.styl';
import Countdown from '../../components/Countdown';
import offsetDis from '../../utils/offsetDis';
import setStyle from '../../utils/setStyle';

@inject('favoriteStore')
@observer
class LotteryFavorite extends React.Component {
    _mounted = false
    expendRef = null
    menuRef = null
    state = {
        menuShowFlag: true,
    }
    componentDidMount() {
        this._mounted = true;
        const { getFavorites, getCountdowns } = this.props.favoriteStore;
        getFavorites();
        getCountdowns();
        this.controlMenuPosition();
        window.addEventListener('resize', this.controlMenuPosition);
        window.addEventListener('scroll', this.controlMenuPosition);
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    controlMenuPosition = () => {
        if (this._mounted) {
            const { mainRef } = this.props;
            const mainOffsetLeft = offsetDis(mainRef).left;
            if (mainOffsetLeft < this.menuRef.offsetWidth + 25) {//25是两者间距
                this.setState({
                    menuShowFlag: false
                });
            } else {
                this.setState({
                    menuShowFlag: true
                });
                setStyle(this.menuRef, {
                    left: (mainOffsetLeft - (this.menuRef.offsetWidth + 25)) + 'px'
                });
            }
        }
    }
    toggleMenu = (bool) => {
        this.setState({
            menuShowFlag: bool
        });
    }
    render() {
        const { codeToCn } = this.props;console.log(this.props)
        const { data, countdownsObj } = this.props.favoriteStore;
        const Item = ({ item }) => {
            const { lottery_code } = item;
            return (
                <div className="lottery-favorite-item">
                    <div className="item-cn">{codeToCn[lottery_code]}</div>
                    <div className="item-countdown">
                        {
                            countdownsObj[lottery_code] > 0 ? <Countdown count={Date.now() + countdownsObj[lottery_code] * 1000} /> : '暂停销售'
                        }
                    </div>
                    <div className="item-recommend"></div>
                </div>
            );
        };
        const List = ({ data }) => {
            return data.map(item => <Item key={item.id} item={item} />);
        };
        return (
            <React.Fragment>
                <div className={`lottery-favorite-wrapper ${this.state.menuShowFlag ? '' : 'hide'}`} ref={ref => this.menuRef = ref}>
                    <div className="favorite-title-wrapper">
                        <div className="favorite-title">
                            <i className="favorite-title-icon"></i>
                            <span>常玩彩种</span>
                        </div>
                    </div>
                    <List data={data} />
                    <div className="set-button-wrapper">
                        <div className="set-button">
                            <i className="set-button-icon"></i>
                            <span>设置</span>
                        </div>
                    </div>
                    <div className="menu-close" onClick={() => this.toggleMenu(false)}>
                        <div className="menu-close-wrapper">
                            <i className="menu-close-icon"></i>
                            <span>收起</span>
                        </div>
                    </div>
                </div>
                <div className={`lottery-favorite-show ${this.state.menuShowFlag ? '' : 'show'}`} onClick={() => this.toggleMenu(true)} ref={ref => this.expendRef = ref}>
                    <i className="favorite-show-icon"></i>
                    <span>展开</span>
                </div>
            </React.Fragment>
        );
    }
}

export default LotteryFavorite;