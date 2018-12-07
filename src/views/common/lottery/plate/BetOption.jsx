/**
 * Created by Orange on 2018-10-23 15:30:10.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Radio, Select, Modal, message, Checkbox, Button } from 'antd';
import InputNumber from '../InputNumberUpDown';
import '../inputNumberUpDown.styl';
import './betOption.styl';
import { choose } from '../../../../utils/algorithm';
import { combination } from '../../../../utils/calcBetCount';

message.config({
    top: 100,
});

@withRouter
@inject(stores => ({
    refreshBalance: stores.globalStore.refreshBalance,
    lotteryStore: stores.lotteryStore
}))
@observer
class BetOption extends React.Component {
    componentDidMount() {
        const { setBetOptionRef } = this.props.lotteryStore;
        setBetOptionRef(this);
    }
    quickSubmitOrder = () => {
        const { lotteryCode } = this.props.lotteryStore;
        if (lotteryCode === 'wbgmmc') {
            if (this.singlePick(this.handleQuickSubmitOfMmc)) {
                return;
            }
            this.handleQuickSubmitOfMmc();
        } else {
            if (this.singlePick(this.handleQuickSubmit)) {
                return;
            }
            this.handleQuickSubmit();
        }
    }
    handleQuickSubmitOfMmc = async () => {
        const { lotteryCode, setOpenfinished, mmcQuickSubmitOrder, continuousCount, toggleMmcModal, mmcWinStopFlag } = this.props.lotteryStore;
        const { refreshBalance, history, lotteryStore } = this.props;

        if (Number(continuousCount) > 1) {
            toggleMmcModal(true);
            let timer;
            let count = Number(continuousCount);
            const fn = async () => {
                if (lotteryCode !== 'wbgmmc') {
                    clearTimeout(timer);
                    return;
                }
                if (lotteryStore.openfinished) {
                    clearTimeout(timer);
                    return;
                }
                if (count === 0) {
                    clearTimeout(timer);
                    setOpenfinished(true);
                    return;
                }
                const res = await mmcQuickSubmitOrder();
                if (res.data.code === 1) {//1 表是成功
                    if (mmcWinStopFlag && res.data.result.bonus > 0) {//中奖急停
                        clearTimeout(timer);
                        setOpenfinished(true);
                        return;
                    }
                    //更新投注记录，更新余额
                    refreshBalance(res.data.result.money.avail);
                } else if (res.data.code === 4001) {//余额不足
                    clearTimeout(timer);
                    setOpenfinished(true);
                    Modal.confirm({
                        centered: true,
                        content: `余额不足，是否充值`,
                        okText: '立即充值',
                        onOk: () => history.push('/voucher/charge')
                    });
                    return;
                } else {
                    clearTimeout(timer);
                    setOpenfinished(true);
                    message.error(res.data.msg);
                    return;
                }
                count--;
                timer = setTimeout(fn, 360);
            };
            fn();
            return;
        }
        const res = await mmcQuickSubmitOrder();
        if (res.data.code === 1) {//1 表是成功
            message.success('订单提交成功！');
            //更新投注记录，更新余额
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
    handleQuickSubmit = async () => {
        const { quickSubmitOrder } = this.props.lotteryStore;
        const { refreshBalance, history } = this.props;
        const res = await quickSubmitOrder();
        if (res.data.code === 1) {//1 表是成功
            message.success('订单提交成功！');
            //更新投注记录，更新余额
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
    singlePick = (callback) => {
        const { rxPosValues, genOrderData, chaidanConfig, method, oddsData, lotteryType } = this.props.lotteryStore;
        const result = genOrderData();
        if (/^rx/.test(method) && ['ssc', 'ky481'].includes(lotteryType)) {//任选玩法计算单挑
            let singlePickPoss = [];
            const orderObj = result[0];

            if (rxPosValues.length > 0) {
                let posArr;
                const singlePickMaxBonus = oddsData[method]['m'];
                if (lotteryType === 'ky481') {
                    posArr = rxPosValues.map(v => {
                        v.replace(/自由泳/, 1).replace(/仰泳/, 2).replace(/蛙泳/, 3).replace(/蝶泳/, 4);
                        return v;
                    });
                } else if (lotteryType === 'pk10') {
                    posArr = rxPosValues.map(v => {
                        v.replace(/冠军/, 1).replace(/第二名/, 2).replace(/第三名/, 3).replace(/第四名/, 4).replace(/第五名/, 5).replace(/第六名/, 6).replace(/第七名/, 7).replace(/第八名/, 8).replace(/第九名/, 9).replace(/第十名/, 10);
                        return v;
                    });
                } else {
                    posArr = rxPosValues.map(v => {
                        v.replace(/万/, 1).replace(/千/, 2).replace(/百/, 3).replace(/十/, 4).replace(/个/, 5);
                        return v;
                    });
                }
                if (/^rx2/.test(method)) {
                    posArr = choose(posArr, 2);
                    for (let item of posArr) {
                        const oddObj = oddsData[method + '_' + item.join('')];
                        if (!oddObj) continue;
                        const _n = orderObj.amount.betCount / combination(rxPosValues.length, 2);//注数
                        if (oddObj['s'] === 1 && _n > 0 && _n < oddObj['n']) {
                            singlePickPoss.push(item.join(''));
                        }
                    }
                }
                if (/^rx3/.test(method)) {
                    posArr = choose(posArr, 3);
                    for (let item of posArr) {
                        const oddObj = oddsData[method + '_' + item.join('')];
                        if (!oddObj) continue;
                        const _n = orderObj.amount.betCount / combination(rxPosValues.length, 3);//注数
                        if (oddObj['s'] === 1 && _n > 0 && _n < oddObj['n']) {
                            singlePickPoss.push(item.join(''));
                        }
                    }
                }
                if (/^rx4/.test(method)) {
                    posArr = choose(posArr, 4);
                    for (let item of posArr) {
                        const oddObj = oddsData[method + '_' + item.join('')];
                        if (!oddObj) continue;
                        const _n = orderObj.amount.betCount / combination(rxPosValues.length, 4);//注数
                        if (oddObj['s'] === 1 && _n > 0 && _n < oddObj['n']) {
                            singlePickPoss.push(item.join(''));
                        }
                    }
                }
                singlePickPoss = singlePickPoss.map(v => {
                    if (lotteryType === 'ky481') {
                        v.replace(/1/, '自由泳').replace(/2/, '仰泳').replace(/3/, '蛙泳').replace(/4/, '蝶泳');
                    } else if (lotteryType === 'pk10') {
                        v.replace(/冠军/, 1).replace(/第二名/, 2).replace(/第三名/, 3).replace(/第四名/, 4).replace(/第五名/, 5).replace(/第六名/, 6).replace(/第七名/, 7).replace(/第八名/, 8).replace(/第九名/, 9).replace(/第十名/, 10);
                    } else {
                        v.replace(/1/, '万').replace(/2/, '千').replace(/3/, '百').replace(/4/, '十').replace(/5/, '个');
                    }
                    return v;
                });
                if (singlePickPoss.length > 0) {
                    Modal.confirm({
                        content: `您的注单${singlePickPoss.map(v => `【${v}】`)}是单挑,将有当期单挑最高奖金${singlePickMaxBonus}元的限制，您确定要继续吗？`,
                        onOk: callback,
                        okText: '确认',
                        cancelText: '取消',
                    });
                    return true;
                }
            } else {//直选复式
                const betArr = orderObj.detail.betContent.split('|');
                const singlePickMaxBonus = oddsData[method]['m'];
                if (/^rx2/.test(method)) {
                    const posArr = choose([1, 2, 3, 4, 5], 2);//[[1,2],[1,3],[1,4]...]
                    for (let item of posArr) {
                        const oddObj = oddsData[method + '_' + item.join('')];
                        if (!oddObj) continue;//快赢481 5没有
                        const _n = betArr[item[0] - 1].length * betArr[item[1] - 1].length;//注数
                        if (oddObj['s'] === 1 && _n > 0 && _n < oddObj['n']) {
                            singlePickPoss.push(item.join(''));
                        }
                    }
                }
                if (/^rx3/.test(method)) {
                    const posArr = choose([1, 2, 3, 4, 5], 3);//[[1,2],[1,3],[1,4]...]
                    for (let item of posArr) {
                        const oddObj = oddsData[method + '_' + item.join('')];
                        if (!oddObj) continue;
                        const _n = betArr[item[0] - 1].length * betArr[item[1] - 1].length * betArr[item[2] - 1].length;//注数
                        if (oddObj['s'] === 1 && _n > 0 && _n < oddObj['n']) {
                            singlePickPoss.push(item.join(''));
                        }
                    }
                }
                if (/^rx4/.test(method)) {
                    const posArr = choose([1, 2, 3, 4, 5], 4);//[[1,2],[1,3],[1,4]...]
                    for (let item of posArr) {
                        const oddObj = oddsData[method + '_' + item.join('')];
                        if (!oddObj) continue;
                        const _n = betArr[item[0] - 1].length * betArr[item[1] - 1].length * betArr[item[2] - 1].length * betArr[item[3] - 1].length;//注数
                        if (oddObj['s'] === 1 && _n > 0 && _n < oddObj['n']) {
                            singlePickPoss.push(item.join(''));
                        }
                    }
                }
                singlePickPoss = singlePickPoss.map(v => {
                    if (lotteryType === 'ky481') {
                        v.replace(/1/, '自由泳').replace(/2/, '仰泳').replace(/3/, '蛙泳').replace(/4/, '蝶泳');
                    } else if (lotteryType === 'pk10') {
                        v.replace(/冠军/, 1).replace(/第二名/, 2).replace(/第三名/, 3).replace(/第四名/, 4).replace(/第五名/, 5).replace(/第六名/, 6).replace(/第七名/, 7).replace(/第八名/, 8).replace(/第九名/, 9).replace(/第十名/, 10);
                    } else {
                        v.replace(/1/, '万').replace(/2/, '千').replace(/3/, '百').replace(/4/, '十').replace(/5/, '个');
                    }
                    return v;
                });
                if (singlePickPoss.length > 0) {
                    Modal.confirm({
                        content: `您的注单${singlePickPoss.map(v => `【${v}】`)}是单挑,将有当期单挑最高奖金${singlePickMaxBonus}元的限制，您确定要继续吗？`,
                        onOk: callback,
                        okText: '确认',
                        cancelText: '取消',
                    });
                    return true;
                }
            }
        }
        if (chaidanConfig.chaidan) {
            const singlePickNums = [];
            let singlePickMaxBonus;
            result.forEach(elem => {
                if (elem.singlePickFlag) {
                    singlePickNums.push(elem.detail.betContent);
                    singlePickMaxBonus = elem.singlePickMaxBonus;
                }
            });
            if (singlePickNums.length > 0) {
                Modal.confirm({
                    content: `您的注单${singlePickNums.map(v => `【${v}】`)}是单挑,将有当期单挑最高奖金${singlePickMaxBonus}元的限制，您确定要继续吗？`,
                    onOk: callback,
                    okText: '确认',
                    cancelText: '取消',
                });
                return true;
            }
        } else {
            if (result[0]['singlePickFlag']) {
                Modal.confirm({
                    content: `您的注单是单挑,将有当期单挑最高奖金${result[0]['singlePickMaxBonus']}元的限制，您确定要继续吗？`,
                    onOk: callback,
                    okText: '确认',
                    cancelText: '取消',
                });
                return true;
            }
        }
    }
    addOrder = () => {//计算单挑
        const { addOrder } = this.props.lotteryStore;
        if (this.singlePick(addOrder)) {
            return;
        }
        addOrder();
    }
    render() {
        const { quickSubmitLoading, chaidanConfig, lotteryCode, method, betCount, betPiece, betMoney, changePiece, changeMode, defaultBetPiece, defaultBetMode, mmcWinStopFlag, toggleMmcWinStop, setContinuousCount, continuousCount, oddsData, currentNormalOddType, changeCurrentNormalOddType, currentChaidanOddType, changeCurrentChaidanOddType, currentChaidanOddArrMinMax } = this.props.lotteryStore;

        return (
            <div className="clearfix bet-option-wrapper">
                <div className="fl clearfix left-wrapper">
                    <div className="clearfix left-top-wrapper">
                        <div className="fl mode-select">
                            <Radio.Group defaultValue={defaultBetMode} size="small" buttonStyle="solid" onChange={(e) => changeMode(e.target.value)}>
                                <Radio.Button value={2}>2元</Radio.Button>
                                <Radio.Button value={1}>1元</Radio.Button>
                                <Radio.Button value={0.2}>2角</Radio.Button>
                                <Radio.Button value={0.1}>1角</Radio.Button>
                                <Radio.Button value={0.02}>2分</Radio.Button>
                                <Radio.Button value={0.002}>2厘</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="fl piece-input">
                            <span className="text">倍数</span>
                            <InputNumber min="1" defaultValue={defaultBetPiece} size="small" onChange={changePiece} />
                        </div>
                        <div className="fl odd-select">
                            <span className="text">奖金</span>
                            {
                                chaidanConfig.chaidan ? (
                                    currentChaidanOddArrMinMax.length === 0 ? <em style={{ color: '#d24454', marginLeft: '5px' }}>0</em> : (
                                        <Select size="small" value={currentChaidanOddType} onChange={(value) => changeCurrentChaidanOddType(value)}>
                                            {
                                                currentChaidanOddArrMinMax.map((item, i) => <Select.Option key={i} value={item.type}>{item.val}</Select.Option>)
                                            }
                                        </Select>
                                    )
                                ) : (
                                        <Select size="small" value={currentNormalOddType} onChange={(value) => changeCurrentNormalOddType(value)}>
                                            <Select.Option value="A">{oddsData[method] && oddsData[method]['bonusA'] + '~'}  {oddsData[method] && oddsData[method]['rateA'] * 100 + '%'}</Select.Option>
                                            <Select.Option value="B">{oddsData[method] && oddsData[method]['bonusB'] + '~'}  {oddsData[method] && oddsData[method]['rateB'] * 100 + '%'}</Select.Option>
                                        </Select>
                                    )
                            }
                        </div>
                    </div>
                    <div className="clearfix left-bottom-wrapper">
                        您选择了<span className="count">{betCount}</span>注，共<span className="piece">{betPiece}</span>倍，共计<span className="money">{betMoney}</span>元
                        {
                            lotteryCode === 'wbgmmc' ? (
                                <span className="mmc-option">
                                    连续开奖
                                    <Select style={{ margin: '0 4px' }} size="small" value={continuousCount} onChange={(value) => setContinuousCount(value)}>
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="5">5</Select.Option>
                                        <Select.Option value="10">10</Select.Option>
                                        <Select.Option value="50">50</Select.Option>
                                        <Select.Option value="100">100</Select.Option>
                                        <Select.Option value="200">200</Select.Option>
                                        <Select.Option value="500">500</Select.Option>
                                        <Select.Option value="1000">1000</Select.Option>
                                    </Select>
                                    次，
                                    <Checkbox style={{ margin: '0 4px' }} checked={mmcWinStopFlag} onChange={(e) => toggleMmcWinStop(e.target.checked)} />
                                    中奖即停
                                </span>
                            ) : null
                        }
                    </div>
                </div>
                <div className="fr right-wrapper">
                    <Button disabled={betCount <= 0} className={`quick-bet ${betCount > 0 ? '' : 'disabled'}`} onClick={this.quickSubmitOrder} loading={quickSubmitLoading}>快速投注</Button>
                    <Button disabled={betCount <= 0} className={`add-order ${betCount > 0 ? '' : 'disabled'}`} onClick={this.addOrder}>添加订单</Button>
                </div>
            </div>
        );
    }
}

export default BetOption;