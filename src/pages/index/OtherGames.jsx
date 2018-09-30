import React from 'react';

class OtherGames extends React.Component {
    render() {
        return (
            <ul className="index-game">
                <li className="game-by"><a href="/fish"><img src={require("../../images/index/byw_icon.png")} width="206" height="185"
                    alt="" /></a></li>
                <li className="game-zryl"><a href="/live"><img src={require("../../images/index/zryl_icon.png")} width="188"
                    height="216" alt="" /></a></li>
                <li className="game-ty"><a href="/sport"><img src={require("../../images/index/ty_icon.png")} width="226"
                    height="194" alt="" /></a></li>
                <li className="game-lhj"><a href="/slot"><img src={require("../../images/index/lhj_icon.png")} width="183"
                    height="176" alt="" /></a></li>
                <li className="game-lhc"><a href="/lhc"><img src={require("../../images/index/lhc_icon.png")}
                    width="209" height="158" alt="" /></a></li>
            </ul>
        );
    }
}

export default OtherGames;