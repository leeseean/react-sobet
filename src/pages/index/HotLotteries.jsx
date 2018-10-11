import React from 'react';
import { Link } from 'react-router-dom';

class HotLotteries extends React.Component {
    render() {
        return (
            <ul className="lottery clearfix">
                <li className="game-item fl"><Link to="/lottery/cqssc"><i className="lottery-logo logo-cqssc"></i>
                    <span className="lottery-txt">重庆时时彩</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/3dfc"><i className="lottery-logo logo-3dfc"></i>
                    <span className="lottery-txt">福彩3D</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/shssl"><i className="lottery-logo logo-shssl"></i>
                    <span className="lottery-txt">上海时时乐</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/wbgmmc"><i className="lottery-logo logo-wbgmmc"></i>
                    <span className="lottery-txt">WBG秒秒彩</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/sckl12"><i className="lottery-logo logo-sckl12"></i>
                    <span className="lottery-txt">四川快乐12</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/bjpk10"><i className="lottery-logo logo-bjpk10"></i>
                    <span className="lottery-txt">北京PK10</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/mck3"><i className="lottery-logo logo-mck3"></i>
                    <span className="lottery-txt">摩臣快3</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/mc11y"><i className="lottery-logo logo-mc11y"></i>
                    <span className="lottery-txt">摩臣11选5</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/txffc"><i className="lottery-logo logo-txffc"></i>
                    <span className="lottery-txt">腾讯分分彩</span></Link></li>
                <li className="game-item fl"><Link to="/lhc"><i className="lottery-logo logo-xglhc"></i>
                    <span className="lottery-txt">香港六合彩</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/rbssm"><i className="lottery-logo logo-rbssm"></i>
                    <span className="lottery-txt">日本30秒</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/rdffc"><i className="lottery-logo logo-rdffc"></i>
                    <span className="lottery-txt">瑞典1分彩</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/rdlfc"><i className="lottery-logo logo-rdlfc"></i>
                    <span className="lottery-txt">瑞典2分彩</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/mcpk10"><i className="lottery-logo logo-mcpk10"></i>
                    <span className="lottery-txt">摩臣PK10</span></Link></li>
                <li className="game-item fl"><Link to="/lottery/hnky481"><i className="lottery-logo logo-hnky481"></i>
                    <span className="lottery-txt">河南快赢481</span></Link></li>
            </ul>
        );
    }
}

export default HotLotteries;