import React from 'react';
import CountUp from 'react-countup';
import LazyLoad from 'react-lazy-load';
import { getSlotGamesData } from '../../utils/ajax';
import './allGame.styl';

class AllGame extends React.Component {
    state = {
        gamesData: [],
        searchValue: '',
        platform: 'all',
        progressive: '0',
        payLine: '0',
        typeId: '0',
        currPage: 1,
        isLastPage: false,
        showLoadMore: true
    }
    componentDidMount() {
        this.filterGamesByPlatform();
    }
    getSearchValue = (value) => {
        this.setState({
            searchValue: value
        });
    }
    searchGames = () => {
        getSlotGamesData({
            currPage: 1,
            pageSize: 15,
            chsName: this.state.searchValue,
        }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    currPage: 1,
                    isLastPage: res.data.data.isLastPage,
                    gamesData: res.data.data.list
                });
            }
        });
    }
    filterGamesByPlatform = (platform = this.state.platform) => {
        this.setState({
            platform
        });
        getSlotGamesData({
            currPage: 1,
            pageSize: 15,
        }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    platform,
                    currPage: 1,
                    isLastPage: res.data.data.isLastPage,
                    gamesData: res.data.data.list
                });
            }
        });
    }
    filterGamesByGameType = (typeId) => {
        this.setState({
            typeId
        });
        getSlotGamesData({
            currPage: 1,
            pageSize: 15,
            typeId
        }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    currPage: 1,
                    isLastPage: res.data.data.isLastPage,
                    gamesData: res.data.data.list
                });
            }
        });
    }
    filterGamesByDetail = (isProgressive, payLine) => {
        this.setState({
            progressive: isProgressive,
            payLine
        });
        getSlotGamesData({
            currPage: 1,
            pageSize: 15,
            typeId: 10,
            isProgressive,
            payLine
        }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    currPage: 1,
                    isLastPage: res.data.data.isLastPage,
                    gamesData: res.data.data.list
                });
            }
        });
    }
    loadMore = () => {
        if (this.state.isLastPage) {
            return;
        }
        getSlotGamesData({
            currPage: this.state.currPage + 1,
            pageSize: 15,
            typeId: this.state.typeId,
            isProgressive: this.state.progressive,
            payLine: this.state.payLine,
            chsName: this.state.searchValue
        }).then(res => {
            if (res.data.code === 0) {
                this.setState((prevState) => {
                    return {
                        showLoadMore: false,
                        currPage: prevState.currPage + 1,
                        isLastPage: res.data.data.isLastPage,
                        gamesData: prevState.gamesData.concat(res.data.data.list)
                    };
                });
                setTimeout(() => {
                    this.setState({
                        showLoadMore: true
                    });
                }, 300);
            }
        });
    }
    render() {
        const GameItem = ({ item }) => {
            const { imgUrl, isProgressive, chsName, gameUrl, gameTestUrl } = item;
            return (
                <div className="game-item">
                    <div className="game-item-img">
                        <img className={isProgressive ? 'game-item-img--short' : null} src={imgUrl} alt="" />

                    </div>
                    <div className="game-item-bg">
                        <div className="game-item-bg-bottom">
                            <span className="game-item-img-title-bg"></span>
                            <span className="game-item-img-title">{chsName}</span>
                            {
                                isProgressive ? (<span className="count-up-wrapper">累计奖金￥<CountUp start={300000 * (0.2 + Math.random())} end={400000} duration={12 * 60 * 60} separator="," decimal="." decimals={2} /></span>) : null
                            }
                        </div>
                    </div>
                    <div className="game-item-hover">
                        <div style={{ color: '#29cb85', marginTop: '12px', background: `url(${require('../../images/slot/playtech-logo-c.png')}) 8px center no-repeat` }}>{chsName}</div>
                        <a href={gameUrl} target="_blank"><div className="play-game">立即游戏</div></a>
                        <a href={gameTestUrl} target="_blank"><div className="test-game">免费试玩</div></a>

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
            <React.Fragment>
                <div className="bottom_center">
                    <div className="bottom_center_search">
                        <input type="text" placeholder="老虎机搜索....." value={this.state.value} onChange={(event) => this.getSearchValue(event.target.value)} />
                        <div onClick={this.searchGames}>
                            <a id="platform_btn"></a>
                        </div>
                    </div>
                    <div className="paltformChange"><em className="fl">平台选择</em>
                        <ul>
                            <li className={`${this.state.platform === 'all' ? 'active' : ''}`} onClick={() => this.filterGamesByPlatform('all')}>全部</li>
                            <li className={`${this.state.platform === 'pt' ? 'active' : ''}`} onClick={() => this.filterGamesByPlatform('pt')}>PT平台</li>
                        </ul>
                    </div>
                    <div className="gameType">
                        <em>游戏类型</em>
                        <select className="dropdown" onChange={(event) => this.filterGamesByGameType(event.target.value)}>
                            <option name="all" value="0">全部游戏类型</option>
                            <option name="老虎机" value="10">老虎机</option>
                            <option name="真人游戏" value="1">真人游戏</option>
                            <option name="刮刮乐" value="2">刮刮乐</option>
                            <option name="休闲游戏" value="3">休闲游戏</option>
                            <option name="视频老虎机" value="4">视频老虎机</option>
                            <option name="桌面卡牌" value="9">桌面卡牌</option>
                            <option name="其他" value="5">其他</option>
                        </select>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    {
                        this.state.typeId === '10' ? (<ul id="show_tiger">
                            <li className="tiger_poc"><em>奖励</em>
                                <a className={`${this.state.progressive === '0' ? 'select' : ''}`} onClick={() => this.filterGamesByDetail('0', this.state.payLine)}>全部</a>
                                <a className={`${this.state.progressive === true ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(true, this.state.payLine)}>有奖池</a>
                                <a className={`${this.state.progressive === false ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(false, this.state.payLine)}>无奖池</a>
                            </li>
                            <li className="tiger_por"><em>线数</em>
                                <a className={`${this.state.payLine === '0' ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(this.state.progressive, '0')}>全部</a>
                                <a className={`${this.state.payLine === '1' ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(this.state.progressive, '1')}>经典一线</a>
                                <a className={`${this.state.payLine === '2' ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(this.state.progressive, '2')}>3-25条线</a>
                                <a className={`${this.state.payLine === '3' ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(this.state.progressive, '3')}>30-50条线</a>
                                <a className={`${this.state.payLine === '4' ? 'select' : ''}`} onClick={() => this.filterGamesByDetail(this.state.progressive, '4')}>50+</a></li>
                        </ul>) : null
                    }
                </div>
                <div className="bottom-list">
                    <GameList listData={this.state.gamesData} className="clearfix bottom-list-wrapper" />
                    {
                        (!this.state.isLastPage && this.state.showLoadMore) ? (<LazyLoad onContentVisible={this.loadMore}>
                            <div className="bottom_height" style={{ display: 'block' }}>
                                <p>浏览更多游戏</p>
                            </div>
                        </LazyLoad>) : null
                    }

                </div>
            </React.Fragment>
        );
    }
}

export default AllGame;