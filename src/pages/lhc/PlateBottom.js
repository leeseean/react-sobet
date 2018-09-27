import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import BetModal from './BetModal';

@inject('xglhcStore')
@observer
class PlateBottom extends React.Component {
    render() {
        const { plateType, clickPerInputValue, fillClickPerInputValue, totalBetCount, totalBetMoney, addOrder, showQuickBetModal, closeQuickBetModal, quickBet, quickBetModalShowed, quickOrderData, printOrderFlag, setPrintOrderFlag } = this.props.xglhcStore;
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
                    <Button disabled={totalBetMoney <= 0} size="large" onClick={showQuickBetModal}>快速投注</Button>
                </div>
                <div className="fl add-num-button">
                    <Button disabled={totalBetMoney <= 0} size="large" onClick={addOrder}>添加选号</Button>
                </div>
                <BetModal
                    title="请确认投注香港六合彩"
                    centered={true}
                    visible={quickBetModalShowed}
                    okText="确定"
                    cancelText="取消"
                    onOk={quickBet}
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