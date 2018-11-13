import * as columns from '../../common/columns';

const lotteryColumns = [
    columns.userName,
    columns.activityUserOfCP,
    columns.betAmount,
    columns.bonusAmount,
    columns.rebateAmount,
    columns.mbrAtvtCash,
    columns.agtAtvtCash,
    columns.profitAndLoss,
    columns.operator
];

const agColumns = [
    columns.userName,
    columns.betAmount,
    columns.validBetAmount,
    columns.bonusAmount,
    columns.activityBonus,
    columns.profitAndLoss,
    columns.operator
];

const commonColumns = [
    columns.userName,
    columns.betAmount,
    columns.bonusAmount,
    columns.activityBonus,
    columns.profitAndLoss,
    columns.operator
]

const ptColumns = commonColumns;
const agPyColumns = commonColumns;
const bbinColumns = commonColumns;
const sbColumns = commonColumns;
const idnColumns = commonColumns;
const kgameColumns = commonColumns;
const hklhcColumns = commonColumns;

const thirdColumns = [
    columns.userName,
    columns.betAmount,
    columns.bonusAmount,
    columns.activityBonus,
    columns.releaseProfitAndLoss,
    columns.lastMonthProfitAndLoss,
    columns.resultProfitAndLoss
];


const rechargeWithdrawColumns = [
    columns.userName,
    columns.newUserCount,
    columns.rechargeNum,
    columns.rechargeSum,
    columns.rechargeCash,
    columns.withdrawNum,
    columns.withdrawSum,
    columns.withdrawCash,
    columns.operator
];

export default {
    lotteryColumns,
    agColumns,
    ptColumns,
    agPyColumns,
    bbinColumns,
    sbColumns,
    idnColumns,
    kgameColumns,
    hklhcColumns,
    thirdColumns,
    rechargeWithdrawColumns
}