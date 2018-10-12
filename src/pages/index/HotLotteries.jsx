import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@withRouter
@inject(stores => ({
    linkToLottery: stores.lotteryStore.linkToLottery
}))
@observer
class HotLotteries extends React.Component {
    render() {
        const { history, linkToLottery } = this.props;
        return (
            <ul className="lottery clearfix">
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('cqssc', history, '/lottery')}><i className="lottery-logo logo-cqssc"></i>
                        <span className="lottery-txt">重庆时时彩</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('3dfc', history, '/lottery')}><i className="lottery-logo logo-3dfc"></i>
                        <span className="lottery-txt">福彩3D</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('shssl', history, '/lottery')}><i className="lottery-logo logo-shssl"></i>
                        <span className="lottery-txt">上海时时乐</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('wbgmmc', history, '/lottery')}><i className="lottery-logo logo-wbgmmc"></i>
                        <span className="lottery-txt">WBG秒秒彩</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('sckl12', history, '/lottery')}><i className="lottery-logo logo-sckl12"></i>
                        <span className="lottery-txt">四川快乐12</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('bjpk10', history, '/lottery')}><i className="lottery-logo logo-bjpk10"></i>
                        <span className="lottery-txt">北京PK10</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('mck3', history, '/lottery')}><i className="lottery-logo logo-mck3"></i>
                        <span className="lottery-txt">摩臣快3</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('mc11y', history, '/lottery')}><i className="lottery-logo logo-mc11y"></i>
                        <span className="lottery-txt">摩臣11选5</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('txffc', history, '/lottery')}><i className="lottery-logo logo-txffc"></i>
                        <span className="lottery-txt">腾讯分分彩</span></a></li>
                <li className="game-item fl">
                    <Link to="/lhc"><i className="lottery-logo logo-xglhc"></i>
                        <span className="lottery-txt">香港六合彩</span></Link></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('rbssm', history, '/lottery')}><i className="lottery-logo logo-rbssm"></i>
                        <span className="lottery-txt">日本30秒</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('rdffc', history, '/lottery')}><i className="lottery-logo logo-rdffc"></i>
                        <span className="lottery-txt">瑞典1分彩</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('rdlfc', history, '/lottery')}><i className="lottery-logo logo-rdlfc"></i>
                        <span className="lottery-txt">瑞典2分彩</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('mcpk10', history, '/lottery')}><i className="lottery-logo logo-mcpk10"></i>
                        <span className="lottery-txt">摩臣PK10</span></a></li>
                <li className="game-item fl">
                    <a href="javascript: void(0);" onClick={() => linkToLottery('hnky481', history, '/lottery')}><i className="lottery-logo logo-hnky481"></i>
                        <span className="lottery-txt">河南快赢481</span></a></li>
            </ul>
        );
    }
}

export default HotLotteries;