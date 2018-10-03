"use strict";
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate"], t) : t(jQuery)
}(function(t) {
    t.validator.addMethod("sobet_password", function(t, a) {
        return t.length < 6 || t.length > 16 ? !1 : this.optional(a) || /^((?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z]))^.{6,16}$/.test(t)
    }, "6~16位，包含数字、字母"),
    t.validator.addMethod("sobet_username", function(t, a) {
        return t.length < 5 || t.length > 20 ? !1 : this.optional(a) || /^[a-zA-Z_]{1}\w{4,19}$/.test(t)
    }, "字母或下划线开头，5~20位，可以包含数字"),
    t.validator.addMethod("sobet_cardno_", function(t, a) {
        return t.length < 19 || t.length > 26 ? !1 : !0
    }, "银行卡号为16-21位数字"),
    t.validator.addMethod("sobet_zfbNo", function(t, a) {
        return /^[1][345678][0-9]{9}$/.test(t) || /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t) ? !0 : !1
    }, "请输入11位手机号或者邮箱账号"),
    t.validator.addMethod("sobet_cardNoCheck", function(t, a) {
        return t = t.replace(/\s+/g, ""),
        checkBankCard(t) ? !0 : !1
    }, "无法识别的银行卡号，请输入有效的银行卡号。"),
    t.validator.addMethod("sobet_drawPwd", function(a, e) {
        var o = Number(t("#balanceUse").val() || t("#balanceUse").text());
        return a > o ? !1 : !0
    }, "提现金额不能大于可用余额"),
    t.validator.addMethod("sobet_limit_min", function(a, e) {
        var o = Number(t("#account .page-tips em#eachMin").text());
        Number(t("#account .page-tips em#eachMax").text());
        return o > a ? !1 : !0
    }, "提现金额小于最小额度"),
    t.validator.addMethod("sobet_limit_max", function(a, e) {
        var o = (Number(t("#account .page-tips em#eachMin").text()),
        Number(t("#account .page-tips em#eachMax").text()));
        return a > o ? !1 : !0
    }, "提现金额大于最大额度"),
    t.validator.addMethod("sobet_charge_min", function(a, e) {
        var o = Number(t(".min").html());
        return o > a ? !1 : !0
    }, "充值金额不能小于最小金额"),
    t.validator.addMethod("sobet_charge_max", function(a, e) {
        var o = Number(t(".max").html());
        return a > o ? !1 : !0
    }, "充值金额不能大于最大金额"),
    t.validator.addMethod("sobet_charge_zs", function(a, e) {
        var o = Number(t("#amount").val())
          , r = /^[0-9]*[1-9][0-9]*$/;
        return r.test(o) ? !0 : !1
    }, "充值金额只能为整数"),
    t.validator.addMethod("sobet_charge_zs01", function(a, e) {
        var o = Number(t("#payformZFB #ZFBamount, #payWechat #wechatAmount").val())
          , r = /^[0-9]*[1-9][0-9]*$/;
        return r.test(o) ? !0 : !1
    }, "充值金额只能为整数"),
    t.validator.addMethod("sobet_charge_zsDeposit", function(a, e) {
        var o = Number(t("#amount").val())
          , r = /^[0-9]*[1-9][0-9]*$/;
        return r.test(o) ? !0 : !1
    }, "充值金额只能为整数"),
    t.validator.addMethod("sobet_charge_zsFourthNext", function(a, e) {
        var o = Number(t("#amountbank").val())
          , r = /^[0-9]*[1-9][0-9]*$/;
        return r.test(o) ? !0 : !1
    }, "充值金额只能为整数"),
    t.validator.addMethod("sobet_chargeUserName", function(a, e) {
        var o = t("#fourth #aliUserName").val()
          , r = /^[·{0,}\u4E00-\u9FA5]+$/;
        return r.test(o) ? !0 : !1
    }, "姓名只能输入中文"),
    t.validator.addMethod("sobet_chargeDay_max", function(a, e) {
        var o = Number(t("#dayMaxM").html());
        return a > o ? !1 : !0
    }, "充值金额不能大于每天最高存款"),
    t.validator.addMethod("sobet_transM", function(t, a) {
        return this.optional(a) || /^(([0-9]+)|([0-9]+\.[0-9]{1,2}))$/.test(t)
    }, "请输入正确的金额"),
    t.validator.addMethod("sobet_floatlimit", function(t, a) {
        return this.optional(a) || /^(([0-9]+)|([0-9]+\.[0-9]{1,2}))$/.test(t)
    }, "请输入正确的金额"),
    t.validator.addMethod("sobet_number", function(t, a) {
        return /^(([0-9]+)|([0-9]+\.[0-9]{1,2}))$/.test(t) ? !0 : !1
    }, "请输入正确的金额"),
    t.validator.addMethod("sobet_carNo_compare", function(a, e) {
        var o = t(e).attr("compareVal")
          , r = t(o).find("option:selected").attr("text")
          , a = a.replace(/\s/gi, "");
        return r == a ? !0 : !1
    }, "请输入正确的卡号"),
    t.validator.addMethod("sobet_sn", function(t, a) {
        return /^[·{0,}\u4E00-\u9FA5]+$/.test(t) ? !0 : !1
    }, "收款人姓名只能是中文"),
    t.validator.addMethod("sobet_sn_length", function(t, a) {
        return t.length > 20 ? !1 : !0
    }, "收款人姓名不得超过20个字符")
});
