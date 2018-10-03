import React from 'react';
import { getHotSlotGamesData } from '../../utils/ajax';
import CountUp from 'react-countup';

class HotGames extends React.Component {
    state = {
        hotGamesData: [],
        hideHotGames: false,
        isLastPage: false
    }
    totalPage = null
    currPage = 1
    showNextHotGames = () => {
        if (this.state.isLastPage) {
            this.currPage = 1
        } else {
            this.currPage += 1;
        }
        this.getHotGamesData({
            currPage: this.currPage,
            pageSize: 6
        });
    }
    getHotGamesData(param) {
        this.setState({
            hideHotGames: true
        });
        getHotSlotGamesData(param).then(res => {
            if (res.data.code === 0) {
                this.totalPage = res.data.data.total;
                this.setState({
                    isLastPage: res.data.data.isLastPage,
                    hotGamesData: res.data.data.list
                });
                setTimeout(() => {
                    this.setState({
                        hideHotGames: false
                    });
                }, 1000);
            }
        });
    }
    componentDidMount() {
        this.getHotGamesData({
            currPage: this.currPage,
            pageSize: 6
        });
    }
    render() {
        const GameItem = ({ item }) => {
            const { imgUrl, isProgressive, chsName, gameUrl, gameTestUrl } = item;
            return (
                <div className="game-item">
                    <div className="game-item-img">
                        <img className={isProgressive ? 'game-item-img--short' : null} src={imgUrl} alt="" />
                        {
                            isProgressive ? (<span className="count-up-wrapper">￥<CountUp start={300000 * (0.2 + Math.random())} end={400000} duration={12 * 60 * 60} separator="," decimal="." decimals={2} /></span>) : null
                        }
                    </div>
                    <div className="game-item-bg"></div>
                    <div className="game-item-hover">
                        <div style={{ color: '#fff', marginTop: '4px' }}>{chsName}</div>
                        <a href={gameUrl} target="_blank"><div className="play-game">立即游戏</div></a>
                        <a href={gameTestUrl} target="_blank"><div style={{ color: '#fff' }}>免费试玩</div></a>
                    </div>
                </div>
            );
        };
        const GameList = ({ listData, ...restObj }) => {
            return (
                <div {...restObj}>
                    {
                        listData.map(item => {
                            return <GameItem item={item} key={item.id} />;
                        })
                    }
                </div>
            );
        };
        return (
            <div className="clearfix slot-hot-games">
                <div className="fl clearfix slot-hot-games-left">
                    <img className="fl" width="105" height="105" src={require("../../images/slot/hot-game-icon.png")} alt="" />
                    <div className="fl slot-hot-games-left-text">
                        <p>Hot Slots Game</p>
                        <p style={{ letterSpacing: '12px' }}>热门游戏</p>
                    </div>
                </div>
                <div className="fl clearfix slot-hot-games-center">
                    <GameList listData={this.state.hotGamesData} className="clearfix hot-games-list" />
                    <div className={`hot-games-list-mask ${this.state.hideHotGames ? 'hide' : ''}`}></div>
                </div>
                <div className="fl slot-hot-games-right">
                    <p style={{ color: "#b48f48" }}>热门游戏</p>
                    <p style={{ color: "#505050", cursor: "pointer" }} onClick={this.showNextHotGames}>下一页</p>
                </div>
            </div>
        );
    }
}

export default HotGames;