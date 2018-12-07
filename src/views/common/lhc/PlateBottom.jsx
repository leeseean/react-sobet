import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Button, message, Modal } from 'antd';
import BetModal from './BetModal.jsx';

message.config({
    top: 100,
});

@withRouter
@inject(stores => ({
    refreshBalance: stores.globalStore.refreshBalance,
    lhcStore: stores.lhcStore
}))
@observer
class PlateBottom extends React.Component {
    quickBet = async () => {
        const { quickBet } = this.props.lhcStore;
        const { history, refreshBalance } = this.props;
        const res = await quickBet();
        if (res.data.code === 1) {
            message.success('订单提交成功！');
            refreshBalance(res.data.result.money.avail);
        } else if (res.data.code === 4001) {//余额不足
            Modal.confirm({
                centered: true,
                content: `余额不足，是否充值`,
                okText: '立即充值',
                onOk: () => history.push('/voucher/charge')
            });
        } else {
            message.error(res.data.msg);
        }
    }
    render() {
        const { lotteryCn, plateType, clickPerInputValue, fillClickPerInputValue, totalBetCount, totalBetMoney, addOrder, showQuickBetModal, closeQuickBetModal, quickBetModalShowed, quickOrderData, printOrderFlag, setPrintOrderFlag, quickBetting } = this.props.lhcStore;
        return (
            <div className="clearfix plate-bottom-wrapper">
                <div className="fl plate-bottom-text">
                    {
                        plateType === 'click' ? (<span>单注金额：<input className="clickType-per-input" value={clickPerInputValue} onChange={fillClickPerInputValue} /></span>) : null
                    }
                    您选择了<em className="total-bet-count">{totalBetCount}</em>注，
                    共计<em className="total-bet-money">{totalBetMoney}</em>元
                </div>
                <div className="fl quick-submit-button">
                    <Button disabled={totalBetMoney <= 0} size="large" onClick={showQuickBetModal} loading={quickBetting}>快速投注</Button>
                </div>
                <div className="fl add-num-button">
                    <Button disabled={totalBetMoney <= 0} size="large" onClick={addOrder}>添加选号</Button>
                </div>
                <BetModal
                    title={"请确认投注" + lotteryCn}
                    centered={true}
                    visible={quickBetModalShowed}
                    okText="确定"
                    cancelText="取消"
                    onOk={this.quickBet}
                    onCancel={closeQuickBetModal}
                    orderData={quickOrderData}
                    orderTotalMoney={totalBetMoney}
                    printOrderFlag={printOrderFlag}
                    setPrintOrderFlag={setPrintOrderFlag}
                />
            </div>
        );
    }
}

export default PlateBottom;