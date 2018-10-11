import React from 'react';
import { Link } from 'react-router-dom';

class OtherGames extends React.Component {
    render() {
        return (
            <ul className="index-game">
                <li className="game-by"><Link to="/fish"><img src={require("../../images/index/byw_icon.png")} width="206" height="185"
                    alt="" /></Link></li>
                <li className="game-zryl"><Link to="/live"><img src={require("../../images/index/zryl_icon.png")} width="188"
                    height="216" alt="" /></Link></li>
                <li className="game-ty"><Link to="/sport"><img src={require("../../images/index/ty_icon.png")} width="226"
                    height="194" alt="" /></Link></li>
                <li className="game-lhj"><Link to="/slot"><img src={require("../../images/index/lhj_icon.png")} width="183"
                    height="176" alt="" /></Link></li>
                <li className="game-lhc"><Link to="/lhc"><img src={require("../../images/index/lhc_icon.png")}
                    width="209" height="158" alt="" /></Link></li>
            </ul>
        );
    }
}

export default OtherGames;