import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import './globalHead.styl';
import AllGameList from './AllGameList';
import AgentCenterList from './AgentCenterList';
import PersonalCenterList from './PersonalCenterList';

@withRouter
@inject('globalStore')
@observer
class GlobalHead extends React.Component {
    state = {
        showBackToIndex: false,
        showBalanceFlag: true,
        showBalanceText: '隐藏',
        fixed: false
    }
    initFixed(path) {
        if (/^\/lottery/.test(path)) {
            this.setState({
                fixed: true
            });
        } else {
            this.setState({
                fixed: false
            });
        }
    }
    initBackToIndex(path) {
        if (path === '/index') {
            this.setState({
                showBackToIndex: false
            });
        } else {
            this.setState({
                showBackToIndex: true
            });
        }
    }
    toggleBalance = () => {
        if (this.state.showBalanceText === '隐藏') {
            this.setState({
                showBalanceFlag: false,
                showBalanceText: '显示'
            });
        }
        if (this.state.showBalanceText === '显示') {
            this.setState({
                showBalanceFlag: true,
                showBalanceText: '隐藏'
            });
        }
    }
    voucherCenter(p) { //充值中心
        this.props.history.push('/voucher/' + p);
    }
    componentDidMount() {
        const { history, globalStore } = this.props;
        history.listen(location => {
            this.initBackToIndex(location.pathname);
            this.initFixed(location.pathname);
        });
        this.initBackToIndex(history.location.pathname);
        this.initFixed(history.location.pathname);
        globalStore.getPlayerBalance();
    }
    render() {
        const { logined } = this.props.globalStore;
        const { nickname, username, balance, getPlayerBalance } = this.props.globalStore;
        if (!logined) {
            return <Redirect to={"/login"} />;
        }
        const BackToIndex = ({ show }) => {
            if (show) {
                return (
                    <div className="fl head--height head__to-index">
                        <i className="head__to-index-icon"></i>
                        <a className="head__to-index-text" href="/index">返回首页</a>
                    </div>
                );
            } else {
                return null;
            }
        };
        const BalanceContent = ({ show, text, balance, toggleBalance, getPlayerBalance }) => {
            const Count = ({ _show, _balance }) => {
                if (_show) {
                    return (
                        <React.Fragment>
                            <span className="head__balance-text">
                                账号余额：<em className="head__balance-count">{_balance === 'loading' ? <Spin size='small' /> : _balance}</em>元
                            </span>
                            <i className="head__balance-icon" onClick={getPlayerBalance}></i>
                        </React.Fragment>
                    );
                }
                return (
                    <React.Fragment>
                        <span className="head__balance-text">
                            账号余额：
                        </span>
                    </React.Fragment>
                );
            };
            return (
                <div className="fr head--height head__balance">
                    <Count _show={show} _balance={balance} />
                    <span className="head__balance-display" onClick={toggleBalance}>{text}</span>
                </div>
            );
        };
        return (
            <div className={`head-wrapper ${this.state.fixed ? 'fixed' : ''}`}>
                <div className="clearfix head-wrapper__main">
                    <BackToIndex show={this.state.showBackToIndex} />
                    <div className="fl head--height head__all-game">
                        <i className="head__all-game-icon"></i>
                        <span className="head__all-game-text" href="/index">全部游戏</span>
                        <AllGameList />
                    </div>
                    <div className="fr head--height head__download">
                        <a className="head__download-wrapper" href="https://download.volocn.com" target="_blank">
                            <i className="head__download-icon"></i>
                            <span className="head__download-text">下载中心</span>
                        </a>
                    </div>
                    <div className="fr head--height head__money">
                        <span className="head__money-charge" onClick={this.voucherCenter.bind(this, 'charge')}>充值</span>
                        <span className="head__money-transfer" onClick={this.voucherCenter.bind(this, 'transfer')}>转账</span>
                        <span className="head__money-withdraw" onClick={this.voucherCenter.bind(this, 'withdraw')}>提现</span>
                    </div>
                    <BalanceContent show={this.state.showBalanceFlag} text={this.state.showBalanceText} balance={balance} toggleBalance={this.toggleBalance} getPlayerBalance={getPlayerBalance} />
                    <div className="fr head--height head__agent">
                        <span className="head__agent-text">代理中心</span>
                        <i className="head__agent-icon"></i>
                        <AgentCenterList />
                    </div>
                    <div className="fr head--height head__greet">
                        <span className="head__greet-text">您好，{nickname || username}</span>
                        <i className="head__greet-icon"></i>
                        <PersonalCenterList />
                    </div>
                </div>
            </div>
        );
    }
}

export default GlobalHead;