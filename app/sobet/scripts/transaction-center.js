 /* @Author: Maple Joe
  * @Date:   2017-10-25
  */
'use strict';
var ctx = '/sobet';
Navigation.transaction = function(type, args) {
    Navigation[type] && Navigation[type][type] &&
        Navigation[type][type].apply(Navigation[type], args);
};

// 充值
Navigation.recharge = {
    ids: 'recharge',
    payObj: {},
    info: {},
    newcash: '',
    checkRules: {
        amount: {
            required: true,
            sobet_floatlimit: true,
            sobet_charge_min: true,
            sobet_charge_max: true,
            sobet_chargeDay_max: true,
            sobet_charge_zsDeposit: true
        },
        platTradeNo: {
            required: true
        },
        transferSn: {
            required: true
        },
        transferBankAlias: {
            required: true
        },
        transferType: {
            required: true
        },
        aliUserName: {
            required: true,
            sobet_chargeUserName: true
        }
    },
    checkMsg: {
        amount: {
            required: "请输入充值金额"
        },
        platTradeNo: {
            required: "请输入存款流水单号"
        },
        transferSn: {
            required: "请输入转账人姓名"
        },
        transferBankAlias: {
            required: "请选择银行"
        },
        transferType: {
            required: "请选择转账方式"
        },
        aliUserName: {
            required: "请输入真实姓名"
        }
    },
    PAY_CODE: {
        web1: 'WEB001',
        web2: 'WEB002',
        web3: 'WEB003',
        web3_HT: 'WEB003_HT',
        web4: 'WEB004',
        wap1: 'WAP001',
        wap2: 'WAP002',
        wap3: 'WAP003',
        wap4: 'WAP004',
        ebank: {
            web: 'EBANK_WEB_TRANSFER',
            wap: 'EBANK_WAP_TRANSFER'
        },
        ali: {
            web: 'ALIPAY_WEB_TRANSFER',
            wap: 'ALIPAY_WAP_TRANSFER',
            web_sweep: 'ALIPAY_WEB_SWEEPCODE_TRANSFER',
            wap_sweep: 'ALIPAY_WAP_SWEEPCODE_TRANSFER',
            web_personal: 'ALIPAY_WEB_TRANS',
            amount_web_transfer: 'ALIPAY_CHECK_AMOUNT_WEB_TRANSFER'
        },
        wechat: {
            web_sweep: 'WECHAT_WEB_SWEEPCODE_SCAN',
            wap_sweep: 'WECHAT_WAP_SWEEPCODE_SCAN',
            web_transfer: 'WECHAT_WEB_TRANSFER',
            wap_transfer: 'WECHAT_WAP_TRANSFER'
        }
    },
    temp: {
        amount: '<span value="{{amountArrs}}">{{amountArrs}}</span>',
        bankList: '<li><span class="radio" data-href="{{bankSiteUrl}}" data-value="{{bankCode}}"></span><i class="ps_{{bankKey}}"></i><h1>{{description}}</h1></li>',
        payWay: '<span class="radio {{iconText}}" data-value="{{code}}" costStatus="{{costStatus}}" costRate="{{costRate}}" cutPointsSwitch="{{cutPointsSwitch}}">{{name}}</span>',
        md5: '{{payWayType}}{{channelCode}}{{bankId}}{{cash}}{{token}}{{md5key}}',
        rechargeMain: '<div id="main" class="balance deposit fl cash-main">\
                    <a href="recharge" class="hide"></a>\
                    <div class="cz-part hide">\
                        <div>\
                            <label class="auto-width">支付方式：</label>\
                            <div id="styleChoose" class="radio-wrap zfMethod">\
                            </div>\
                        </div>\
                    </div>\
                    <div class="form-slot"></div>\
                </div>',
        maxmin: '<li class="d-inline-block">\
                    <label>最低</label>\
                    <span class="aliMin min red">{{minRechargeAmount}}</span><em> 元，</em>\
                </li>\
                <li class="d-inline-block">\
                    <label>最高</label>\
                    <span class="aliMax max red">{{maxRechargeAmount}}</span><em> 元</em>\
                </li>\
                <li class="d-inline-block">\
                    <span class="costFree hide">，免手续费</span>\
                </li>\
                <li class="d-inline-block tip-HT hide">\
                    <span>，充值金额必须是100的整数倍</span>\
                </li>\
                <li class="err-HT red hide"></li>\
                <li class="clear hide">\
                    <p class="tipMoney">为了避免您支付限额，系统默认对您填写的金额 \
                        <i class="chargeMny"></i> 元，随机减少 <i class="cutMny"></i>\
                         元，实际充值金额为 <i class="calcMny red"></i> 元。\
                    </p>\
                </li>\
                <li class="clear hide">\
                    <p class="costStatus">此通道收取\
                        <i class="costRate red"></i> 的手续费（上限\
                        <i class="maxCostLimit">{{maxCostLimit}}</i> 元，下限\
                        <i class="minCostLimit">{{minCostLimit}}</i> 元），实际到账金额为：\
                        <i class="lastMoney red"></i> 元。</p></li>',
        formNormal: '<form id="payform" action="/sobet/pay/recharge" method="post">\
                        <input type="hidden" name="payWayType" id="payWayType" class="payWayType">\
                        <input type="hidden" name="channelCode" id="channelCode" class="channelCode">\
                        <input type="hidden" name="bankId" id="bankId" class="bankId">\
                        <input type="hidden" name="token" id="token" class="token">\
                        <input type="hidden" name="md5Str" id="md5Str" class="md5Str">\
                        <input type="hidden" name="cutPointsSwitch" id="cutPointsSwitch" class="cutPointsSwitch">\
                        <input type="hidden" name="amount" id="amount">\
                        <!--<div id="transfer" style="display: block">\
                        </div>-->\
                        <div id="quick" class="clearfix hide">\
                            <label for="">选择银行</label>\
                            <div class="quick-banks radio-wrap">\
                                <ul>\
                                </ul>\
                            </div>\
                        </div>\
                        <div id="chargeSubmitInput" class="clearfix">\
                            <div>\
                                <div class="fourthInput">\
                                    <label>充值金额：</label>\
                                    <input id="amounts" class="form-input" name="amounts" type="text" placeholder="请输入充值金额" value="" autocomplete="off"/>\
                                    <i class="tipReduceMoney red"></i>\
                                    <!--\
                                    <select id="amountSelect" name="amountSelect" style="display:none;">\
                                    </select>\
                                    -->\
                                    <input type="submit" class="btn submit-btn" value="马上充值">\
                                </div>\
                            </div>\
                        </div>\
                        <ul class="maxmin hide">\
                        </ul>\
                    </form>',
        formWechat: '<form id="payWechat">\
                        <div id="wechat" class="clearfix wechat-recharge hide">\
                            <div>\
                                <div class="fourthInput">\
                                    <label>充值金额：</label>\
                                    <input id="amount" name="amount" class="form-input" type="text" placeholder="请输入充值金额" value="" autocomplete="off"/>\
                                    <i class="tipReduceMoney red"></i>\
                                    <input type="submit" class="btn" value="马上充值">\
                                </div>\
                            </div>\
                        </div>\
                        <ul class="maxmin hide">\
                        </ul>\
                        <div class="wechat-bind hide">\
                            <p><img src="/static/sobet/images/wechat-icon-s.png"></p>\
                            <div class="wechat-warm-icon">您还未绑定您的微信号</div>\
                            <a class="wechat-change-bind" href="/static/sobet/personalCenter.html#webind">微信号绑定</a>\
                        </div>\
                        <div class="wechat-success hide">\
                            <div class="wechat-bind-left">\
                                <div>扫描二维码</div>\
                                <div class="wechat-ecode"><img src="" class="wechat-paycode" width="250" height="250"></div>\
                                <div>充值金额：<span class="wechat-in"></span> 元</div>\
                            </div>\
                            <div class="wechat-bind-right">\
                                <p class="wechat-bind-step-tit">操作说明</p>\
                                <div>\
                                    <span class="tip-btn on">1</span>\
                                    请确认，您当前绑定的微信号是：\
                                    <span class="wechat-id">11111111111111111</span>\
                                    <a href="/static/sobet/personalCenter.html#webind?type=1" class="wechat-change-btn">微信号更换</a>\
                                </div>\
                                <div class="wechat-bind-step"></div>\
                                <div><span class="tip-btn on">2</span>\
                                使用已绑定的微信号，扫描左侧二维码，输入充值金额，进行转账充值</div>\
                                <div class="wechat-bind-step"></div>\
                                <div><span class="tip-btn on">3</span>\
                                转账成功后，十分钟内到账</div>\
                            </div>\
                        </div>\
                    </form>',
        formWechatBankcard: '<form id="payWechatBankcard">\
                                <div id="fourth" class="clearfix payWechatBankcard-recharge" style="display: inline-block;">\
                                    <div id="firstStepAli" class="firstStep hide">\
                                        <div class="fourthInput">\
                                            <label>充值金额：</label>\
                                            <input id="amount" name="amount" type="text" placeholder="请输入充值金额" value="" autocomplete="off"/>\
                                            <i class="tipReduceMoney red"></i>\
                                            <span class="help-transfer"><a style="text-decoration: underline;margin-left: 20px;color: gray;" href="/static/sobet/helper-center.html?type=trans" target="_blank">微信转银行卡教程</a></span>\
                                        </div>\
                                        <ul class="maxmin">\
                                        </ul>\
                                        <div class="row" id="fourthNextBtnAli">\
                                            <input type="submit" class="btn submit-btn" value="确定">\
                                        </div>\
                                    </div>\
                                    <div id="secondStepAli" class="hide secondStep">\
                                        <div class="collection">\
                                            <div class="rechargeTip">\
                                                <p>注意事项:</p>\
                                                <ul>\
                                                    <li>1.请务必按照以下信息正确填写，否则将无法正常到账，造成的损失请自行承担。</li>\
                                                    <li>2.<em class="tip-wechat">使用微信转账时，转账时间上，请选择“2小时内到账”，到账后立即自动上分。</em><em class="tip-ali">晚23:30至01:00，支付宝不会到账，若付款时支付宝提示第2天到账时，请勿付款。</em></li>\
                                                </ul>\
                                                <div class="clear"></div>\
                                            </div>\
                                            <div class="rechargeDetail">\
                                                <p><span>充值方式:</span><em class="name-recharge"></em></p>\
                                                <p><span>收款人姓名:</span><em class="bankUserName"></em></p>\
                                                <p><span>收款账号:</span><em class="BankCard"></em><em class="rctip">*该账号随机更换，请以此最新为准</em></p>\
                                                <p><span>收款银行:</span><em class="BankName"></em></p>\
                                                <p><span>金额:</span><em class="cash" style="color: red;"></em><em class="rctip red">*请务必按照该金额进行转账，否则将无法正常上分</em></p>\
                                                <p><span>备注(付款说明):</span><em class="fuyan"></em><em class="rctip">*付款时请确保"备注(付款说明)"信息无误，否则可能会影响到账</em></p>\
                                            </div>\
                                            <p>1.请在240分钟内完成付款,超时系统将不予以处理,谢谢。</p>\
                                            <p>2.完成转帐后请于30分钟内查收您的会员账号余额，如未更新请联系<a href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1" target="_blank" class="service">在线客服</a>。</p>\
                                            <p>3.如需修改充值金额，请点击<a href="javascript:;" class="rechargeAgain"></a>重新设置。</p>\
                                            <p>1.请在15分钟内完成付款,超时系统将不予以处理,谢谢。</p>\
                                            <p>2.转账时请选择“2小时到账”模式，否则无法及时上分。</p>\
                                            <p>3.转账成功后请于5分钟内查收您的会员账号余额，如未更新请联系<a href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1" target="_blank" class="service">在线客服</a>。</p>\
                                            <p>4.如需修改充值金额，请点击<a href="javascript:;" class="rechargeAgain"></a>重新设置。</p>\
                                        </div>\
                                    </div>\
                                </div>\
                             </form>',
        formAli: '<form id="payformFourthAli">\
                        <div id="fourth" class="clearfix" style="display: inline-block;">\
                            <div id="firstStepAli" class="hide">\
                                <div class="fourthInput">\
                                    <label>充值金额：</label>\
                                    <input id="amount" name="amount" type="text" placeholder="请输入充值金额" value="" autocomplete="off"/>\
                                    <i class="tipReduceMoney red"></i>\
                                </div>\
                                <div class="fourthInput last">\
                                    <label>真实姓名：</label>\
                                    <input id="aliUserName" name="aliUserName" type="text" placeholder="请填写您支付宝账户的真实姓名" value="" autocomplete="off"/>\
                                </div>\
                                <p class="aliTip">*温馨提示:请填写您付款支付宝账户的真实姓名,否则将不能正常到账。</p>\
                                <ul class="maxmin">\
                                </ul>\
                                <div class="row" id="fourthNextBtnAli">\
                                    <input type="submit" class="btn submit-btn" value="确定">\
                                </div>\
                            </div>\
                            <div id="secondStepAli" class="hide">\
                                <div class="collection">\
                                    <div class="rechargeTip">\
                                        <p>注意事项:</p>\
                                        <ul>\
                                            <li>1.请务必按照以下信息正确填写，否则将不能正常到账，造成的损失请自行承担。</li>\
                                            <li>2.晚23:30至01:00,支付宝不会到账，若付款时支付宝提示第2天到账时,请勿付款。</li>\
                                        </ul>\
                                        <div class="clear"></div>\
                                    </div>\
                                    <div class="rechargeDetail">\
                                        <p><span>充值方式:</span><em>支付宝转账</em></p>\
                                        <p><span>真实姓名:</span><em class="alipayUserName"></em><em class="rctip">*必为真实姓名</em></p>\
                                        <p><span>收款人姓名:</span><em class="bankUserName"></em></p>\
                                        <p><span>收款账号:</span><em class="BankCard"></em><em class="rctip">*该账号随机更换，请以此最新为准</em></p>\
                                        <p><span>收款银行:</span><em class="BankName"></em></p>\
                                        <p><span>金额:</span><em class="cash"></em></p>\
                                        <p><span>备注(付款说明):</span><em class="fuyan"></em><em class="rctip">*付款时请确保"备注(付款说明)"信息无误，否则可能会影响到账</em></p>\
                                    </div>\
                                    <p>1.请在15分钟内完成付款,超时系统将不予以处理,谢谢。</p>\
                                    <p>2.完成转帐后请于5分钟内查收您的会员账号余额，如未更新请联系<a href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1" target="_blank" class="service">在线客服</a>。</p>\
                                    <p>3.如需修改充值金额或真实姓名，请点击<a href="javascript:;" class="rechargeAgain">支付宝转账</a>重新设置。</p>\
                                </div>\
                            </div>\
                        </div>\
                    </form>',
        formZFB: '<form id="payformZFB" style="display: block;">\
                        <!--<input type="hidden" name="payWayType" id="payWayType" class="payWayType">-->\
                        <div id="zfb" class="clearfix">\
                            <div id="firstStepZFB" class="hide">\
                                <div class="fourthInput">\
                                    <label>充值金额：</label>\
                                    <input id="amount" class="form-input" name="amount" type="text" placeholder="请输入充值金额" value="" autocomplete="off" />\
                                    <i class="tipReduceMoney red"></i>\
                                    <input type="submit" class="btn submit-btn" value="马上充值">\
                                </div>\
                            </div>\
                        </div>\
                        <ul class="maxmin hide">\
                        </ul>\
                        <div id="secondStepZFB" class="hide">\
                            <div class="collection">\
                                <div class="rechargeTip">\
                                    <img src="/static/sobet/images/zfbIPhone.png" width="80%" height="485px"/>\
                                </div>\
                                <div class="rechargeDetail">\
                                        <p  class="p1"><i>请扫描下方二维码</i><img src=""/></p>\
                                        <p class="p2"><span>金额:</span><em class="cash"></em><em class="rctip">金额必须正确填写</em></p>\
                                        <p class="p3"><span>备注(付款说明):</span><em class="fuyan"></em><em class="rctip">请填写该数字，以便尽快为您上分</em></p>\
                                        <div class="p4">\
                                            <img src="/static/sobet/images/bg!.png"/>\
                                            <i>付款时请确保"备注(付款说明)"<br/>信息无误,否则可能会影响到账。</i>\
                                        </div>\
                                </div>\
                                <div class="clear"></div>\
                                    <p>1.请在240分钟内完成付款,超时系统将不予以处理,谢谢。</p>\
                                    <p>2.完成转帐后请于30分钟内查收您的会员账号余额，如未更新请联系<a href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1"target="_blank" class="service">在线客服</a>。</p>\
                                    <p>3.如需修改充值金额，请点击&nbsp;<a href="javascript:;" class="rechargeAgain">支付宝扫码</a>&nbsp;重新设置。</p>\
                                </div>\
                            </div>\
                        </div>\
                    </form>',
        formEbank: '<form id="payformFourth">\
                        <div id="fourth" class="clearfix" style="display: block;">\
                            <!--银行转账——银行卡选择列表结束-->\
                            <div id="firstStep" class="hide">\
                                <div id="quick" class="clearfix hide" style="padding-left: 0;">\
                                    <label for="">选择银行</label>\
                                    <div class="quick-banks radio-wrap">\
                                        <ul>\
                                        </ul>\
                                    </div>\
                                </div>\
                                <div class="">\
                                    <label>充值金额：</label>\
                                    <input id="amount" class="form-input" name="amount" type="text" placeholder="请输入充值金额" value="" style="position: relative; top: 8px; z-index: 0;"/>\
                                    <i class="tipReduceMoney red" style="z-index: 2; position: relative; top: 0;"></i>\
                                </div>\
                                <ul class="maxmin" style="padding-left: 90px; margin-left: 0; margin-top: 21px;">\
                                </ul>\
                                <div class="row" id="fourthNextBtn">\
                                    <input type="submit" class="btn submit-btn" value="确定">\
                                </div>\
                            </div>\
                            <div id="secondStep" class="hide">\
                                <div class="charge-verify">\
                                    <h1>充值确认</h1>\
                                    <div class="charge-info">\
                                        <ul>\
                                            <li><label>充值银行：</label> <i id="bankName"></i></li>\
                                            <li><label>充值金额：</label> <em title="" id="chargeMoney"></em> <i>元</i></li>\
                                        </ul>\
                                    </div>\
                                    <!--<div class="charge-countdown">\
                                        <label></label>\
                                        <span>请在30分钟之内完成支付，如未支付请在倒计时后重新下单</span>\
                                    </div>-->\
                                </div>\
                                <div class="collection">\
                                    <h1>收款方信息： <i>（以下信息是确保您充值到账的重要信息）</i></h1>\
                                    <div class="card-info">\
                                        <dl>\
                                            <dt><em class="ABC"></em></dt>\
                                            <dd class="cardNum">收款卡号：<h3 id="cardNum" title=""></h3> <em id="copyNum" data-clipboard-target="cardNum">复制</em></dd>\
                                            <dd>收款人： <h3 id="payeeName_forth"></h3> <em id="copyName" data-clipboard-target="payeeName_forth">复制</em></dd>\
                                            <!--<dd>开户网点：<h3 id="branch_forth"></h3> <em id="copyBranch" data-clipboard-target="branch_forth">复制</em></dd>-->\
                                            <dd class="red-font">附言：<h3 id="fuyan"></h3> <em id="copyFuyan" data-clipboard-target="fuyan">复制</em></dd>\
                                        </dl>\
                                    </div>\
                                    <div class="charge-tip">\
                                        <dl>\
                                            <dt>充值说明：</dt>\
                                            <dd>1、务必将附言内容填写在您的汇款信息中（有些银行叫做备注）</dd>\
                                            <dd>2、附言为随机生成，一个附言只能充值一次，过期或重复使用充值将无法到账</dd>\
                                            <dd>3、收款账户名和账号会不定期更换，请在获取最新信息后充值，否则充值将无法到账</dd>\
                                            <dd>4、如充值完成后30分钟内未到账请拨打客服电话进行查询</dd>\
                                        </dl>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <a href="" target="_blank" class="btn bankUrl">前往支付</a>\
                                </div>\
                            </div>\
                        </div>\
                    </form>'
    },
    rechargeForm: '',
    rechargeMain: '',
    rechargeFormSlot: '',
    submitHandler: '',
    radioCur: '',
    inputAmount: '',
    payTab: '',
    payRadio: '',
    bankTab: '',
    bankRadio: '',
    recharge: function(type) {
        var cur = this, obj;
        if(!cur.local) cur.local = Navigation[type];
        obj = cur.local.pay;
        cur.local.action.apply(cur, [cur.local, 'rechargeIndex', '', function(res) {
            // 初始页面
            cur.init(cur, res, obj);
            if(cur.rechargeFormSlot) {
                cur.info = res.result;
                cur.local.action.apply(cur, [cur.local, 'getQueryChannel', '', function(res) {
                    res = res.result;
                    // 初始表单数据
                    cur.formData(cur, res);
                }]);
            }
        }]);
    },
    aliPayWebSubmit: function(cur) {
        return function (form) {
            //给予随机减少金额的提示再跳转
            var cb = function(){
                 cur.local.action.apply(cur, [cur.local, 'recharge', p, function(res) {
                    res = {};
                    res.code = 0
                    if (res.code == 0) {
                        $('#firstStepAli, #chargeSubmitInput').hide();
                        $('#secondStepAli').show();
                        $('#fourthNextBtnAli .btn').removeClass('clicking');
                    } else {
                        var tip = dialog({
                            id: 'rechargeTip',
                            skin: 'rechargeTip',
                            align: 'top',
                            content: '系统正忙，请稍后重试！',
                            onshow: function () {
                                setTimeout(function () {
                                    tip.close().remove();
                                }, 2000);
                                return;
                            }
                        }).show($('.btn')[0]);
                        $('#fourthNextBtnAli .btn').removeClass('clicking');
                    }
                }]);
            };
            if ($('.btn').hasClass('clicking')) return;
            var cash, p, pay, aliUserName;
            $('.btn').addClass('clicking');
            cash = Number($('#amount').val());
            aliUserName = $('#aliUserName').val();
            $('.alipayUserName').html(aliUserName);
            $('.cash').html(cur.newcash);
            pay = cur.payObj;
            pay.cash = cur.newcash;
            var p = {
                'payWayType': pay['payWayType'],
                'channelCode': pay['channelCode'],
                'token': pay['token'],
                'md5Str': cur.local.md5.apply(cur, [cur.local, cur.temp.md5, pay]),
                'alipayUserName': aliUserName,
                'amount': pay['cash'],
                'bankUrl': pay['bankUrl'],
                'bankAlias': pay['bankAlias'],
                'bankId': pay['bankId'],
                'recodeInfo': pay['recodeInfo'],
                'cutPointsSwitch': pay['cutPoint']
            };
            window.setTimeout(function() {
                p['amount'] = pay.cash;
                cb();
            }, 1000);
            $('#secondStepAli').find('.rechargeAgain').off(cur.local.EVENT.click).on(cur.local.EVENT.click, function () {
                cur.radioCur.trigger(cur.local.EVENT.click);
            });
        };
    },
    aliPayWebTransfer: function(tab, cur) {
        cur.local.append.apply(cur, [cur.local, cur.rechargeFormSlot, 'simple', cur.temp.formAli]);
        cur.rechargeForm = $('form');
        cur.inputAmount = $('#amount');
        //cur.showHideSecondTab(tab, cur);
        cur.rechargeAction(cur, {code: tab.code}, function(d) {
            if (d.code == 0) {
                d = d.result;
                cur.getPayObj(cur, d);
                $('.BankName').html(cur.payObj.bankName);
                $('.BankCard').html(cur.payObj.bankNo);
                $('.bankUserName').html(cur.payObj.bankUserName);
                $('.fuyan').html(cur.payObj.recodeInfo);
                cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin]);
                if(tab.costStatus === 0) cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.costFree'), 'show']);
                cur.local.toggle.apply(cur, [cur.local, $('#firstStepAli, .maxmin'), 'show']);
            } else if (d.code == 1) {
                cur.rechargeActionError(d.msg);
                $('.btn').addClass('disabled').attr('disabled', 'disabled');
            }
        });
        cur.submitHandler = cur.aliPayWebSubmit(cur);
        cur.errorHandler = function(error, element) {
            element.parent().append(error);
            error.css('margin-left', '5px');
        };
    },
    aliPayWebSweepSubmit: function(cur) {
        return function (form) {
            //给予随机减少金额的提示再跳转
            var cb = function(){
                cur.local.action.apply(cur, [cur.local, 'recharge', p, function(res) {
                    if (res.code == 0) {
                        cur.local.toggle.apply(cur, [cur.local, $('#firstStepZFB, .maxmin'), 'hide']);
                        cur.local.toggle.apply(cur, [cur.local, $('#secondStepZFB'), 'show']);
                        $('.btn').removeClass('clicking');
                    } else {
                        var tip = dialog({
                            id: 'rechargeTip',
                            skin: 'rechargeTip',
                            align: 'top',
                            content: '系统正忙，请稍后重试！',
                            onshow: function () {
                                setTimeout(function () {
                                    tip.close().remove();
                                }, 2000);
                                return;
                            }
                        }).show($('.btn')[0]);
                        $('.btn').removeClass('clicking');
                    }
                    $('#secondStepZFB').find('.rechargeAgain').off(cur.local.EVENT.click).on(cur.local.EVENT.click, function () {
                        cur.radioCur.trigger(cur.local.EVENT.click);
                    });
                }]);
            };
            if ($('.btn').hasClass('clicking')) return;
            var cash, p, pay;
            $('.btn').addClass('clicking');
            cash = Number($('#amount').val());
            $('.cash').html(cur.newcash);
            pay = cur.payObj;
            pay.cash = cur.newcash;
            p = {
                'payWayType': pay['payWayType'],
                'channelCode': pay['channelCode'],
                'token': pay['token'],
                'md5Str': cur.local.md5.apply(cur, [cur.local, cur.temp.md5, pay]),
                'amount': pay['cash'],
                'bankUrl': pay['bankUrl'],
                'bankAlias': pay['bankAlias'],
                'bankId': pay['bankId'],
                'recodeInfo': pay['recodeInfo'],
                'cutPointsSwitch': pay['cutPoint']
            };
            setTimeout(function() {
                p['amount'] = pay.cash;
                cb();
            }, 1000);
        };
    },
    aliPayWebSweepTransfer: function(tab, cur) {
        cur.local.append.apply(cur, [cur.local, cur.rechargeFormSlot, 'simple', cur.temp.formZFB]);
        cur.rechargeForm = $('form');
        cur.inputAmount = $('#amount');
        //cur.showHideSecondTab(tab, cur);
        cur.rechargeAction(cur, {code: tab.code, bankCardType: 3}, function(d) {
            d = d.result;
            if (d.remitBankInfo && d.remitBankInfo.length <= 0) {
                cur.rechargeActionError();
                $('.btn').attr('disabled', 'disabled');
            } else {
                cur.getPayObj(cur, d);
                $(".rechargeDetail .p1 img").attr("src", cur.payObj.bankUrl);
                $(".rechargeDetail .fuyan").html(cur.payObj.recodeInfo);
                $('.btn').removeAttr('disabled');
                cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin]);
                if(tab.costStatus === 0) cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.costFree'), 'show']);
                cur.local.toggle.apply(cur, [cur.local, $('#firstStepZFB, .maxmin'), 'show']);
            }
        });
        cur.submitHandler = cur.aliPayWebSweepSubmit(cur);
    },
    appendBankList: function(cur, el, list, tmpl) {
        cur.local.empty.apply(cur, [cur.local, el]);
        cur.local.append.apply(cur, [cur.local, el, list, tmpl]);
    },
    appendCurTip: function(cur, tab) {
        var str = this.getMaxMinTip(tab);
        $('.deposit_tips .dt_in').html(str).show();
        if (typeof tab.fixedRechargeAmount !== 'undefined') {
            str = this.getFixedAmount(this, tab);
            $('.deposit_tips .kuaijie').html(str);
        }
    },
    costRate: function(rate) {
        return parseFloat(Number(rate*100).toFixed(2)) + '%';
    },
    costMoney: function(cash, rate, min, max) {
        var lastMoney;
        var cost = Q.floatMul(cash, rate);
        if (cost <= min) {
            lastMoney = Q.floatSub(cash, min);
        } else if (cost >= max) {
            lastMoney = Q.floatSub(cash, max);
        } else {
            lastMoney = Q.floatSub(cash, cost);
        }
        return parseFloat(lastMoney.toFixed(2));
    },
    delay: function(el, event, timeout, cur, fn) {
        var i = 0, len;
        if (cur.local.isArray.call(cur, event)) {
            for (len=event.length; i<len; i++) {
                el.on(event[i], Q.debouncer(fn, timeout));
            };
            return;
        }
        el.on(event, Q.debouncer(fn, timeout));
    },
    ebankPayWebSubmit: function(cur) {
        return function (form) {
            //给予随机减少金额的提示再跳转
            var cb = function(){
                 cur.local.action.apply(cur, [cur.local, 'recharge', p, function(res) {
                    if (res.code == 0) {
                        cur.local.toggle.apply(cur, [cur.local, $('#firstStep, .maxmin'), 'hide']);
                        cur.local.toggle.apply(cur, [cur.local, $('#secondStep'), 'show']);
                        $('.btn').removeClass('clicking');
                    } else {
                        var tip = dialog({
                            id: 'rechargeTip',
                            skin: 'rechargeTip',
                            align: 'top',
                            content: '系统正忙，请稍后重试！',
                            onshow: function () {
                                setTimeout(function () {
                                    tip.close().remove();
                                }, 2000);
                                return;
                            }
                        }).show($('.btn')[0]);
                        $('.btn').removeClass('clicking');
                    }
                }]);
            };

            if ($('.btn').hasClass('clicking')) return;
            var cash, p, pay;
            $('.btn').addClass('clicking');
            cash = Number($('#amount').val());
            $('.cash').html(cur.newcash);
            pay = cur.payObj;
            pay.cash = cur.newcash;

            $('.bankUrl').attr('href', $('.quick-banks').find('.cur').data('href'));
            $('#chargeMoney').html(cur.newcash);
            p = {
                'payWayType': pay['payWayType'],
                'channelCode': pay['channelCode'],
                'token': pay['token'],
                'md5Str': cur.local.md5.apply(cur, [cur.local, cur.temp.md5, pay]),
                'amount': pay['cash'],
                'bankUrl': pay['bankUrl'],
                'bankAlias': pay['bankAlias'],
                'bankId': pay['bankId'],
                'recodeInfo': pay['recodeInfo'],
                'cutPointsSwitch': pay['cutPoint']
            };
            setTimeout(function() {
                p['amount'] = pay.cash;
                cb();
            }, 1000);

            var selected_band_val = $('#fourth .fourth-first-step').find('li.selected').find('span').data('value'); //银行简码
            var selected_band = $('#' + selected_band_val + ''); //用户所选银行-选择
            var card_No = selected_band.find('#cardNo').val(); //银行卡号
            var payee = selected_band.find('#payee em').html(); //收款人姓名
            var branch = selected_band.find('#branch em').html(); //网点
            var bankId = selected_band.data('value'); //银行ID
            var bankUrl = selected_band.data('url'); //银行跳转Url

            $('#payWayType').val('2');
            var bankIdValue = $(".quick-banks li span.cur").data('value');
            $('#bankName').attr('class', bankIdValue);
            cur.rechargeForm.target = "_blank";
        };
    },
    ebankPayWebTransfer: function(tab, cur) {
        cur.local.append.apply(cur, [cur.local, cur.rechargeFormSlot, 'simple', cur.temp.formEbank]);
        cur.rechargeForm = $('form');
        cur.inputAmount = $('#amount');
        cur.showHideSecondTab(tab, cur);
        cur.bankRadio.css('padding-left', '6px');
        cur.rechargeAction(cur, {code: tab.code, bankCardType: 2}, function(d) {
            if (d.code == 0) {
                d = d.result;
                cur.getPayObj(cur, d);
                $('.card-info dt em').attr('class', cur.payObj.bankAlias);
                $('#cardNum').html(cur.payObj.bankNo);
                $('#payeeName_forth').html(cur.payObj.bankUserName);
                $('#branch_forth').html(cur.payObj.place);
                $('#fuyan').html(cur.payObj.recodeInfo);
                cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin]);
                if(tab.costStatus === 0) cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.costFree'), 'show']);
                cur.local.toggle.apply(cur, [cur.local, $('#firstStep, .maxmin'), 'show']);
            } else {
                cur.rechargeActionError(d.msg);
                $('.btn').addClass('disabled').attr('disabled', 'disabled');
            }
        });
        cur.submitHandler = cur.ebankPayWebSubmit(cur);
        cur.errorHandler = function(error, element) {
            element.parent().append(error);
            error.css({'margin-left': '5px', float: 'none'});
        };
    },
    error: function(cur, data, obj) {
        var count, timer, container = obj.container;
        cur.local.empty.apply(cur, [cur.local, container]);
        cur.local.addPage.apply(cur, [cur.local, container, obj[obj[data.code]], [data]]);
        timer = window.setInterval(function() {
           count = Number($('#feedContainer').find('em').html());
           count--;
           if(count === 0) {
                window.clearInterval(timer);
                cur.local.go('/index');
           }
           $('#feedContainer').find('em').html(count);
        }, 1000);
    },
    formAction: function(cur) {
        var eventType = [cur.local.EVENT.keyup, cur.local.EVENT.input];
        cur.local.form.apply(cur, [cur.local, cur.rechargeForm, {
            rules: cur.checkRules,
            messages: cur.checkMsg,
            errorPlacement: function(error, element) {
                cur.errorHandler && cur.errorHandler(error, element);
                !cur.errorHandler && element.parent().parent().append(error);
            },
            submitHandler: function(form) {
                cur.submitHandler(form);
            }
        }]);
        this.delay(cur.inputAmount, eventType, 200, cur, function(evt) {
            if(evt.keyCode === 13) return;
            var range = cur.getMaxMin(),
                me = $(this),
                cash = parseFloat(me.val()),
                tip,
                maxmin = $('.maxmin');
            // cur.payObj.cost = 1;
            // cur.payObj.rate = '0.05';
            if (cur.radioCur.attr('cutPointsSwitch') == 1 && cash >= range.min && cash <= range.max && cur.isInteger(cash)) {
                cur.newcash = cur.resetMoney(cash, cur.radioCur.attr('cutPointsSwitch'));
                me.next('i.tipReduceMoney').css('display', 'inline')
                    .html((cur.newcash - cash).toFixed(1));
                maxmin = maxmin.find('.tipMoney');
                cur.local.toggle.apply(cur, [cur.local, maxmin.parent(), 'show']);
                maxmin.find('.chargeMny').html(cash);
                maxmin.find('.cutMny').html((cash - cur.newcash).toFixed(1));
                maxmin.find('.calcMny').html(cur.newcash);
                cur.local.toggle.apply(cur, [cur.local, maxmin, 'show']);
            } else {
                cur.newcash = cash;
                me.next('i.tipReduceMoney').css('display', 'none');
                cur.local.toggle.apply(cur, [cur.local, maxmin.find('.tipMoney'), 'hide']);
            }
            maxmin = $('.maxmin');
            if($('#styleChoose').find('.radio.cur').attr('costStatus') == 1 && cash >= range.min && cash <= range.max && cur.isInteger(cash)) {
                maxmin = $('.maxmin').find('.costStatus');
                maxmin.find('.costRate').html(cur.costRate(cur.payObj.rate));
                cur.local.toggle.apply(cur, [cur.local, maxmin.parent(), 'show']);
                maxmin.find('.lastMoney').html(cur.costMoney(cur.newcash, cur.payObj.rate, cur.payObj.minCost, cur.payObj.maxCost));
                cur.local.toggle.apply(cur, [cur.local, maxmin, 'show']);
            } else {
                cur.local.toggle.apply(cur, [cur.local, maxmin.find('.costStatus'), 'hide']);
            }
        });
    },
    formData: function(cur, res) {
        // 绑定支付方式tab
        cur.errorHandler = '';
        cur.payWayTab(cur, res);
        cur.payRadio.eq(0).trigger(cur.local.EVENT.click);
    },
    getCurIndex: function(cur, el) {
        return cur.local.index.apply(cur, [cur.local, el]);
    },
    getMaxMin: function() {
        return {
            min: $('.min').html(),
            max: $('.max').html()
        };
    },
    getPayObj: function(cur, d) {
        cur.payObj = {};
        if(d) {
            var info = d.remitBankInfo[0];
            if (info) {
                cur.payObj = {
                    bankUrl: info.bankUrl || '',
                    bankId: info.bankId || '',
                    bankName: info.bankName || '',
                    bankNo: info.bnakNo || '',
                    bankUserName: info.sn || '',
                    bankAlias: info.bankAlias || '',
                    place: info.place || ''
                };
            }
            cur.payObj['randromAmount'] = d.randromAmount || ''
            cur.payObj['recodeInfo'] = d.recodeInfo || '';
            cur.payObj['payWayType'] = 2;
        }
        cur.payObj['token'] = d ? d.token : cur.info.token ? cur.info.token : '';
        cur.payObj['channelCode'] = cur.radioCur.data('value');
        cur.payObj['md5key'] = cur.info.md5Key;
        // 手续费及减额状态
        cur.payObj['cutPoint'] = cur.radioCur.attr('cutPointsSwitch');
        cur.payObj['cost'] = cur.radioCur.attr('costStatus');
        cur.payObj['rate'] = cur.radioCur.attr('costRate');
        cur.payObj['minCost'] = $('.minCostLimit').html();
        cur.payObj['maxCost'] = $('.maxCostLimit').html();
    },
    init: function(cur, data, obj) {
        cur.local.removePage.call(cur, cur.local, obj.cont);
        // 页面跳转
        if(data.code) {
            // 错误页面
            if(data.code === -2) return cur.error(cur, data, obj);
            // 设置页面
            else if(data.code !== 1) return cur.local.addPage.apply(cur, [cur.local, obj.cont, obj[obj[data.code]]]);
        }
        cur.local.addPage.apply(cur, [cur.local, obj.cont, cur.temp.rechargeMain]);
        cur.rechargeMain = $('.cash-main');
        cur.rechargeFormSlot = cur.rechargeMain.find('.form-slot');

        dialog.get('rechargeTipAli') && dialog.get('rechargeTipAli').close().remove();
    },
    otherPaySubmit: function(cur, type) {
        return function (form) {
            //给予随机减少金额的提示再跳转
            var cb = function(){
                //$('input[name="amount"]').val(cur.newcash);
                $(".btn").addClass("loading").attr("data-value", "clicked");
                clickCheck();
                cur.payObj.cash = cur.newcash;
                cur.payObj.payWayType = '0';
                $('#md5Str').val(cur.local.md5.apply(cur, [cur.local, cur.temp.md5, cur.payObj]));
                $('#token').val(cur.payObj.token);
                $('#amount').val(cur.newcash);
                // cur.local.action.apply(cur, [cur.local, 'recharge', cur.local.serialize.apply(cur, [cur, cur.rechargeForm]), function(r) { debugger

                // }]);
                form.submit();
            };
            function formDeal() {
                $('#channelCode').val(cur.radioCur.data('value'));
                $('#payWayType').val('0');
                var bankIdValue;
                if ($('#quick').css('display') != 'none') {
                    bankIdValue = $(".quick-banks li span.cur").data('value');
                }
                $('#bankId').val(bankIdValue);
                cur.payObj.bankId = bankIdValue;
                var cash = Number($('#amounts').val());
                $('#cutPointsSwitch').val(cur.payObj.cutPoint);
                setTimeout(function(){
                    cb();
                },1500);//延迟几秒提交防止操作太快数据没拿到
            }
            var cashes, tmp;
            if(type === cur.PAY_CODE.web2 || type === cur.PAY_CODE.ali.web_personal) {
                cashes = cur.newcash;
                if(cashes <= 500 && cashes % 10 !== 0) {
                    tmp = parseInt(cashes / 10);
                    cashes = cur.newcash = tmp === 0 ? 10 : tmp * 10;
                    // tip(cashes);
                    var tip = dialog({
                        width: 550,
                        align: 'top',
                        title: '温馨提示',
                        content: '<p>充值金额≤500时，金额必须是10的整数倍，<br>' + 
                                 '充值金额＞500时，金额必须是50的整数倍。<br><br>' + 
                                 '调整后实际充值金额：<span style="color: red;">' + cashes + '</span> 元。</p>', 
                        button: [
                            {
                                value: '马上充值',
                                callback: function() {
                                    tip.close().remove();
                                    formDeal();
                                    return;
                                }
                            },
                            {
                                value: '取消',
                                callback: function() {
                                    tip.close().remove();
                                    cur.newcash = $('#amounts').val();
                                    return;
                                }
                            }
                        ],
                        onshow: function() {
                            $('.ui-dialog-footer button').eq(0).css({
                                'background-color': 'rgba(255, 152, 24, 1)'
                            });
                            $('.ui-dialog-footer button').eq(1).css({
                                'background-color': '#999'
                            });
                            $('.btn').addClass('clicking');
                        }
                    }); 
                    tip.show();
                } else if(cashes > 500 && cashes % 50 !== 0) {
                    tmp = parseInt(cashes / 50);
                    cashes = cur.newcash = tmp * 50;
                    // tip(cashes);
                    var tip = dialog({
                        width: 550,
                        align: 'top',
                        title: '温馨提示',
                        content: '<p>充值金额≤500时，金额必须是10的整数倍，<br>' + 
                                 '充值金额＞500时，金额必须是50的整数倍。<br><br>' + 
                                 '调整后实际充值金额：<span style="color: red;">' + cashes + '</span> 元。</p>', 
                        button: [
                            {
                                value: '马上充值',
                                callback: function() {
                                    tip.close().remove();
                                    formDeal();
                                    return;
                                }
                            },
                            {
                                value: '取消',
                                callback: function() {
                                    tip.close().remove();
                                    cur.newcash = $('#amounts').val();
                                    return;
                                }
                            }
                        ],
                        onshow: function() {
                            $('.ui-dialog-footer button').eq(0).css({
                                'background-color': 'rgba(255, 152, 24, 1)'
                            });
                            $('.ui-dialog-footer button').eq(1).css({
                                'background-color': '#999'
                            });
                            $('.btn').addClass('clicking');
                        }
                    }); 
                    tip.show();
                } else {
                    formDeal();
                }
                return;
            } else if (type === cur.PAY_CODE.web3_HT) {
                if ($('.btn').hasClass('money-err')) {
                    $('.form-input').focus();
                    return
                }
            }
            formDeal();
        }
    },
    otherPayTransfer: function(tab, cur, type) {
        cur.local.append.apply(cur, [cur.local, cur.rechargeFormSlot, 'simple', cur.temp.formNormal]);
        cur.rechargeForm = $('form');
        cur.inputAmount = $('#amounts');
        cur.showHideSecondTab(tab, cur);
        if(type === cur.PAY_CODE.web2 || type === cur.PAY_CODE.ali.web_personal) {
            cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin +
                    '<li><label>温馨提醒：</label><p>为了您充值后能尽快上分，我们对充值金额有如下要求：<br>' +
                    '充值金额≤500时，金额必须是10的整数倍，如50、60……490、500；<br>' + 
                    '充值金额＞500时，金额必须是50的整数倍，如550……1450、1500。' + 
                    '</p></li>']);
        } else if(type === cur.PAY_CODE.web3) {
            cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin +
                    '<li><label>温馨提醒：</label><p>充值金额最低300，最高5000，且只能是100的整数倍，如300、400、500……5000</p></li>']);
        } else if(type === cur.PAY_CODE.web3_HT) {
            cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin]);
            cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.tip-HT'), 'show']);

            var range = cur.getMaxMin();
            $('.btn').addClass('money-err');
            $('.form-input').on('keyup', function () {
                var val = $(this).val();
                $(this).val(val.replace(/\D/g, ''));
                var cashes = parseFloat($(this).val());
                if (cashes < parseInt(range.min)) {
                    $('.btn').addClass('money-err');
                    $('.maxmin .err-HT').text('*充值金额不能小于最小金额');
                    cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.err-HT'), 'show']);
                } else if (cashes > parseInt(range.max)) {
                    $('.btn').addClass('money-err');
                    $('.maxmin .err-HT').text('*充值金额不能大于最大金额');
                    cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.err-HT'), 'show']);
                } else if (cashes % 10 !== 0) {
                    $('.btn').addClass('money-err');
                    $('.maxmin .err-HT').text('*为方便尽快上分，充值金额必须是100的整数倍');
                    cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.err-HT'), 'show']);
                } else {
                    $('.btn').removeClass('money-err');
                    cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.err-HT'), 'hide']);
                }
            })
        } else {
            cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin]);
        }
        if(tab.costStatus === 0) cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.costFree'), 'show']);
        cur.local.toggle.apply(cur, [cur.local, $('.maxmin'), 'show']);
        cur.getPayObj(cur);
        cur.submitHandler = cur.otherPaySubmit(cur, type);
    },
    payWayHandle: function(cur, tab) {
        switch (tab.payWayCode) {
            case cur.PAY_CODE.ali.web:
                // 阿里充值
                cur.aliPayWebTransfer(tab, cur);
                break;
            case cur.PAY_CODE.ali.web_sweep:
                // 支付宝扫码充值
                cur.aliPayWebSweepTransfer(tab, cur);
                break;
            case cur.PAY_CODE.ebank.web:
                cur.ebankPayWebTransfer(tab, cur);
                break;
            case cur.PAY_CODE.wechat.web_sweep:
                // 微信扫码充值
                cur.wechatPayWebSweepTransfer(tab, cur);
                break;
            case cur.PAY_CODE.wechat.web_transfer:
            case cur.PAY_CODE.ali.amount_web_transfer:
                // 微信转银行卡
                cur.wechatPayBankcardTransfer(tab, cur);
                break;
            default:
                cur.otherPayTransfer(tab, cur, tab.payWayCode);
        }
        copyFunc('copyNum');
        copyFunc('copyName');
        copyFunc('copyBranch');
        copyFunc('copyFuyan');
    },
    payWayTab: function(cur, data) {
        cur.payTab = $('#styleChoose');
        // 得到支付方式的tab,并加入, 最多为前12个
        cur.local.empty(cur, cur.payTab);
        cur.local.append.apply(cur, [cur.local, cur.payTab, data, cur.temp.payWay, data.length > 12 ? 12 : data.length]);
        cur.payRadio = cur.payTab.find('.radio');
        // 支付tab事件绑定
        cur.payWayTabEvent(cur, data);
        cur.local.toggle.apply(cur, [cur.local, $('.cz-part').eq(0), 'show']);
    },
    payWayTabEvent: function(cur, data) {
        cur.payRadio.on(cur.local.EVENT.click, function(evt) {
            var $_this = $(this),
                index;
            cur.radioCur = $_this;
            cur.errorHandler = '';
            $_this.addClass('cur').siblings().removeClass('cur');
            index = cur.getCurIndex(cur, $_this);
            // 根据支付方式切换样式
            cur.local.removePage.apply(cur, [cur.local, cur.rechargeFormSlot]);
            cur.payWayStyle(cur, data[index]);
            // 充值表单
            cur.formAction(cur);
        });
    },
    payWayStyle: function(cur, tab) {
        cur.payWayHandle(cur, tab);
    },
    rechargeAction: function(cur, p, cb) {
        cur.local.action.apply(cur, [cur.local, 'preTransferRechargeInfo', p, function(res) {
            cb(res);
        }]);
    },
    rechargeActionError: function(msg) {
        var tip = dialog({
            id: "",
            skin: 'rechargeTipAli',
            padding: '5px',
            align: 'top',
            content: msg || '请稍后再试'
        }).show($('.btn')[0]);
        window.setTimeout(function() {
            tip.close();
        }, 1500);
    },
    resetMoney: function(cash, cutPointsSwitch) {
        if (cutPointsSwitch == 1) {
            if (this.isInteger(cash)) {
                // 随机浮动范围在2元内，浮动金额只能减少
                if (cash < 10 && cash > 0) {
                    cash = (cash - (Math.random() * 0.8 + 0.1)).toFixed(1);
                } else if (cash >= 10) {
                    cash = (cash - (Math.random() * 1.8 + 0.1)).toFixed(1);
                    cash = this.isInteger(cash) ? (parseInt(cash) + 0.1) : cash;
                }
            }
        }
        return cash;
    },
    isInteger: function(num) {
        return typeof num === 'number' && /^[^.]*$/.test(num);
    },
    // 显示隐藏二级银行列表
    showHideSecondTab: function(tab, cur) {
        if ((tab.refBankId > 0 && tab.payWayCode !== cur.PAY_CODE.ebank.web) ||
            (tab.payWayCode === cur.PAY_CODE.ebank.web && !!tab.bankList)) {
            cur.bankTab = $('#quick').find('ul');
            cur.appendBankList(cur, cur.bankTab, tab.bankList, this.temp.bankList);
            cur.bankRadio = this.bankTab.find('li');
            cur.bankRadio.eq(0).addClass('selected').find('span').addClass('cur');
            cur.bankRadio.off(cur.local.EVENT.click).on(cur.local.EVENT.click, function(evt) {
                $(this).addClass('selected').find('span').addClass('cur');
                $(this).siblings().removeClass('selected').find('span').removeClass('cur');
            });
            cur.local.toggle.apply(cur, [cur.local, $('#quick'), 'show']);
            return;
        }
        cur.local.toggle.apply(cur, [cur.local, $('#quick'), 'hide']);
    },
    wechatPayWebSweepSubmit: function(cur) {
        return function (form) {
            cur.local.action.apply(cur, [cur.local, 'queryWechatBind', function(res) {
                // 给予随机减少金额的提示再跳转
                var cb = function(){
                    cur.local.action.apply(cur, [cur.local, 'recharge', p, function(r) {
                        if (r.code === 0) {
                            cur.local.toggle.apply(cur, [cur.local, $('.wechat-recharge, .maxmin'), 'hide']);
                            //$('.wechat-in').html(cur.payObj.cash);
                            var id = res.result;
                            $('.wechat-id').html(
                                id.length > 15 ? id.substring(0, 15) + '...' : id
                            ).attr('title', id);
                            if($('.wechat-id').html().length >= 15) {
                                $('.wechat-change-btn').css({
                                    position: 'absolute',
                                    left: '0',
                                    marginTop: '36px',
                                    marginLeft: '42px'
                                });
                            }
                            cur.local.toggle.apply(cur, [cur.local, $('.wechat-success'), 'show']);
                            $('.btn').removeClass('clicking');
                        } else {
                            var tip = dialog({
                                id: 'rechargeTip',
                                skin: 'rechargeTip',
                                align: 'top',
                                content: '系统正忙，请稍后重试！',
                                onshow: function () {
                                    setTimeout(function () {
                                        tip.close().remove();
                                    }, 2000);
                                    return;
                                }
                            }).show($('.btn')[0]);
                            $('.btn').removeClass('clicking');
                        }
                    }]);
                };
                if(1 === res.code) {
                    if ($('.btn').hasClass('clicking')) return;
                    var cash, p, pay;
                    var cash, cutPointsSwitch, p, pay;
                    cur.local.toggle.apply(cur, [cur.local, $('.wechat-recharge, .maxmin'), 'show']);
                    $('.btn').addClass('clicking');
                    cash = Number(cur.inputAmount.val());
                    $(".wechat-in").html(cur.newcash);
                    pay = cur.payObj;
                    pay.cash = cur.newcash;
                    p = {
                        'payWayType': pay['payWayType'],
                        'channelCode': pay['channelCode'],
                        'token': pay['token'],
                        'md5Str': cur.local.md5.apply(cur, [cur.local, cur.temp.md5, pay]),
                        'amount': pay['cash'],
                        'bankUrl': pay['bankUrl'],
                        'bankAlias': pay['bankAlias'],
                        'bankId': pay['bankId'],
                        'recodeInfo': pay['recodeInfo'],
                        'cutPointsSwitch': pay['cutPoint']
                    };
                    setTimeout(function() {
                        p['amount'] = pay.cash;
                        cb();
                    }, 1000);
                } else {
                    cur.local.toggle.apply(cur, [cur.local, $('.wechat-bind'), 'show']);
                }
            }]);
        }
    },
    wechatPayWebSweepTransfer: function(tab, cur) {
        cur.local.append.apply(cur, [cur.local, cur.rechargeFormSlot, 'simple', cur.temp.formWechat]);
        cur.rechargeForm = $('form');
        cur.inputAmount = $('#amount');
        //cur.showHideSecondTab(tab, cur);
        // 重新检查微信是否绑定
        cur.local.action.apply(cur, [cur.local, 'queryWechatBind', function(res) {
            res.code = window.parseInt(res.code);
            if(1 === res.code) {
                // cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin +
                //     '<li><label>温馨提醒：</label><p>为保障您的资金安全，微信付款码会不定期更换；请在每次微信转账前，获取最新付款码。</p></li>']);
                cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin +
                    '<li><label>温馨提醒：</label><p>为保障您的资金安全，微信付款码会不定期更换；请在每次微信转账前，获取最新付款码。</p></li>']);
                if(tab.costStatus === 0) cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.costFree'), 'show']);
                cur.local.toggle.apply(cur, [cur.local, $('.wechat-recharge, .maxmin'), 'show']);
                cur.rechargeAction(cur, {bankCardType: 4, code: tab.code}, function(d) {
                    var d = d.result;
                    if (d.remitBankInfo && d.remitBankInfo.length <= 0) {
                        cur.rechargeActionError();
                        $('.btn').attr('disabled', 'disabled');
                    } else {
                        // pay对象
                        cur.getPayObj(cur, d);
                        $('.wechat-paycode').attr('src', cur.payObj['bankUrl']);
                        $(".wechat-id").html(tab.wechatId);
                        $('.btn').removeAttr('disabled');
                    }
                });
            } else if(0 === res.code){
                cur.local.toggle.apply(cur, [cur.local, $('.wechat-bind'), 'show']);
            }
        }]);
        cur.submitHandler = cur.wechatPayWebSweepSubmit(cur);
        cur.errorHandler = function(error, element) {
            element.parent().parent().append(error)
            error.css({'margin-left': '135px'});
        };
    },
    wechatPayBankcardSubmit: function(cur, tab) {
        return function(form) {
            $('.btn').attr('disabled', true);
            var cb = function(p){
                var tip = dialog({
                    width: 550,
                    align: 'top',
                    title: '温馨提示',
                    content: '随机扣减后，实际充值金额为：<span style="color: red;">' + p.amount + '</span>元',
                    button: [
                        {
                            value: '确定',
                            callback: function() {
                                tip.close().remove();
                                cur.local.action.apply(cur, [cur.local, 'recharge', p, function(r) {
                                    if (r.code === 0) {
                                        cur.local.toggle.apply(cur, [cur.local, $('.firstStep, .maxmin'), 'hide']);
                                        cur.local.toggle.apply(cur, [cur.local, $('.secondStep'), 'show']);
                                        $('.btn').removeAttr('disabled').removeClass('clicking');
                                    } else {
                                        var tip = dialog({
                                            id: 'rechargeTip',
                                            skin: 'rechargeTip',
                                            align: 'top',
                                            content: '系统正忙，请稍后重试！',
                                            onshow: function () {
                                                setTimeout(function () {
                                                    tip.close().remove();
                                                }, 2000);
                                                return;
                                            }
                                        }).show($('.btn')[0]);
                                        $('.btn').removeClass('clicking').removeAttr('disabled');
                                    }
                                }]);
                            }
                        },
                        {
                            value: '取消',
                            callback: function() {
                                tip.close().remove();
                                $('.btn').removeAttr('disabled').removeClass('clicking');
                                return;
                            }
                        }
                    ],
                    onShow: function() {
                        $('.btn').addClass('clicking');
                    },
                    onclose: function() {
                        $('.btn').removeAttr('disabled').removeClass('clicking');
                    },
                    onClose: function() {
                        $('.btn').removeAttr('disabled').removeClass('clicking');
                    }
                });  
                tip.showModal();  
            };

            var bankCardType;
            if (tab.payWayCode === cur.PAY_CODE.ali.amount_web_transfer) {
                bankCardType = 7;
            } else {
                bankCardType = 6;
            }
            cur.rechargeAction(cur, {bankCardType: bankCardType, code: tab.code, amount: cur.inputAmount.val()}, function(d) {
                if(d.code != '0') {
                    cur.rechargeActionError(d.msg);
                    $('.btn').removeAttr('disabled');
                    return;
                }
                var d = d.result;
                if(d.remitBankInfo && d.remitBankInfo.length <= 0) {
                    cur.rechargeActionError();
                    $('.btn').removeAttr('disabled');
                    // $('.btn').attr('disabled', 'disabled');
                } else {
                    var pay, p;
                    // pay对象
                    cur.getPayObj(cur, d);
                    pay = cur.payObj;
                    pay.cash = pay.randromAmount;
                    $('.name-recharge').html(tab.name);
                    $('.bankUserName').html(pay.bankUserName);
                    $('.BankCard').html(pay.bankNo);
                    $('.BankName').html(pay.bankName);
                    $('.cash').html(pay.randromAmount);
                    $('.fuyan').html(pay.recodeInfo);
                    $('.rechargeAgain').html(tab.name);
                    // $('.btn').removeAttr('disabled');
                    if (tab.payWayCode === cur.PAY_CODE.ali.amount_web_transfer) {
                        $('.tip-wechat').remove();
                        $('#secondStepAli .collection>p').eq(3).prevAll('p').hide();
                    } else {
                        $('.tip-ali').remove();
                        $('#secondStepAli .collection>p').eq(2).nextAll('p').hide();
                    }
                    p = {
                        'payWayType': pay['payWayType'],
                        'channelCode': pay['channelCode'],
                        'token': pay['token'],
                        'md5Str': cur.local.md5.apply(cur, [cur.local, cur.temp.md5, pay]),
                        'amount': pay['randromAmount'],
                        'bankUrl': pay['bankUrl'],
                        'bankAlias': pay['bankAlias'],
                        'bankId': pay['bankId'],
                        'recodeInfo': pay['recodeInfo'],
                        'cutPointsSwitch': pay['cutPoint']
                    };
                    setTimeout(function() {
                        p['amount'] = pay.randromAmount;
                        cb(p);
                    }, 1000);
                    $('.secondStep').find('.rechargeAgain').off(cur.local.EVENT.click).on(cur.local.EVENT.click, function () {
                        cur.radioCur.trigger(cur.local.EVENT.click);
                    });
                }
            });
        };
    },
    wechatPayBankcardTransfer: function(tab, cur) {
        cur.local.append.apply(cur, [cur.local, cur.rechargeFormSlot, 'simple', cur.temp.formWechatBankcard]);
        if (tab.payWayCode === cur.PAY_CODE.ali.amount_web_transfer) {
            $('.help-transfer').remove();
        }
        cur.rechargeForm = $('form');
        cur.inputAmount = $('#amount');
        cur.local.append.apply(cur, [cur.local, $('.maxmin'), [tab], cur.temp.maxmin +
                    '<br><li><p style="line-height: 24px; width: 700px;">为确保充值尽快到账，我们会对您的充值金额进行随机扣减，<br>请以扣减后的金额进行充值，否则无法正常上分。</p></li>']);
        if(tab.costStatus === 0) cur.local.toggle.apply(cur, [cur.local, $('.maxmin').find('.costFree'), 'show']);
        cur.local.toggle.apply(cur, [cur.local, $('.maxmin, .firstStep'), 'show']);
        cur.submitHandler = cur.wechatPayBankcardSubmit(cur, tab);
        cur.errorHandler = function(error, element) {
            element.parent().find('span').last().before(error);
            error.css({'margin-left': '0'});
        };
    }
};
Navigation.transfer = {
    ids: 'transfer',
    checkRules: {
        cash: {
            required: true,
            sobet_transM: true
        },
        agcash: {
            required: true,
            sobet_transM: true
        },
        turnOut: {
            required: true
        },
        turnIn: {
            required: true
        },
        payPassword: {
            required: true,
            remote: {
                url: ctx+"/userInfo/validatePayPassword",
                type: "post",
                dataType: "text",
                data: {
                    payPassword: function() {
                        return md5($("#payPassword").val());
                    }
                }
            }
        }
    },
    checkMsg: {
        cash: {
            required: "请输入转账金额"
        },
        agcash: {
            required: "请输入转账金额"
        },
        turnOut: {
            required: "请选择转出平台"
        },
        turnIn: {
            required: "请选择转入平台"
        },
        payPassword: {
            required: "请输入资金密码"
        }
    },
    temp: {
        form: '<div id="main" class="balance fl cash-main" style="margin-left: -8px;">\
                    <a href="transfer" style="display: none;"></a>\
                    <div class="updatePwd-tip"></div>\
                    <form id="transMF" style="display: none;">\
                        <input id="turnOutCn" name="turnOutCn" type="hidden" value="" />\
                        <input id="turnInCn" name="turnInCn" type="hidden" value="" />\
                        <div class="transMF-wrap">\
                            <div class="transMF-part">\
                                <div class="zz-part clearfix">\
                                    <div>\
                                        <span>1</span>\
                                        <span>请选择转出钱包:</span>\
                                        <span>可用余额<em id="qbBalance"></em>元</span>\
                                        <select id="turnOut" name="turnOut" class="disabled-select">\
                                            <option value="">请选择</option>\
                                        </select>\
                                    </div>\
                                    <div>\
                                        <span>2</span>\
                                        <span>请选择转入钱包:</span>\
                                        <span>现有余额<em id="inBalance"></em>元</span>\
                                        <select id="turnIn" name="turnIn" class="disabled-select">\
                                            <option value="">请选择</option>\
                                        </select>\
                                    </div>\
                                    <div>\
                                        <span>3</span>\
                                        <span>请输入转账金额:</span>\
                                        <input id="cash" query="query" name="cash" type="text" placeholder="转账金额" autocomplete="off" value="" readonly="readonly">\
                                        <input id="agcash" name="agcash" type="text" placeholder="转账金额" value="" readonly="readonly">\
                                        <a class="allIn">全额转入</a>\
                                        <input type="submit" class="btn submit-btn" value="立即转入">\
                                    </div>\
                                    <p class="tips">\
                                        <span>从<em id="out" class="out">[请选择]</em> 转入<em id="in" class="in">[请选择]</em></span>\
                                    </p>\
                                    <p class="transRule">温馨提示：<br/>\
                                        1.彩票钱包向AG/PT/Kgame钱包转账，最低20元，最高50000元；彩票钱包向沙巴钱包转账，最低50元，最高50000元；<br/>\
                                        彩票钱包向IDN钱包转账，最低100元，最高50000元；AG/PT/沙巴/IDN/Kgame钱包向彩票钱包转账，最低1元，最高<br/>\
                                        50000元；<br/>\
                                        2.彩票钱包向PT/沙巴/IDN/Kgame钱包转账，支持小数点后两位，单位：元；彩票钱包向AG钱包转账，只支持正整数，单位：元；<br/>\
                                        3.AG/PT钱包向彩票钱包转账，只支持正整数；沙巴/IDN/Kgame钱包向彩票钱包转账，支持小数点后两位；<br/>\
                                        4.AG/PT/沙巴/IDN/Kgame钱包之间不得互相转账，可先转入彩票钱包，再转出。\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                    </form>\
                    <div class="none">\
                    <select id="private_platform">\
                    </select>\
                    <select id="private_platform_2">\
                    </select>\
                  </div>\
                </div>',
        opts: '<option id="{{cbId}}" value="{{cbId}}">{{cbName}}</option>'
    },
    transferForm: '',
    transfer: function(type) {
        var cur = this, obj;
        if(!cur.local) cur.local = Navigation[type];
        obj = cur.local.pay;
        cur.local.action.apply(cur, [cur.local, 'getTransferIndexAjax', '', function(res) {
            cur.init(cur, res, obj);
            if(cur.transferForm) {
                // 表单数据绑定
                cur.formData(cur, res.result);
                // 表单提交
                cur.formAction(cur);
            }
        }]);
    },
    error: function(cur, data, obj) {
        var count, timer, container = obj.container;
        cur.local.empty.apply(cur, [cur.local, container]);
        cur.local.addPage.apply(cur, [cur.local, container, obj[obj[data.code]], [data]]);
        timer = window.setInterval(function() {
           count = Number($('#feedContainer').find('em').html());
           count--;
           if(count === 0) {
                window.clearInterval(timer);
                cur.local.go('/index');
           }
           $('#feedContainer').find('em').html(count);
        }, 1000);
    },
    formAction: function(cur) {
        cur.local.form.apply(cur, [this.local, this.transferForm, {
            rules: cur.checkRules,
            messages: cur.checkMsg,
            errorPlacement: function(error, element) {
                $("#transErr").show().find("em").html(error);
            },
            submitHandler: function(form) { 
                if(cur.cancelFlag) {
                    cur.cancelFlag = null;
                    return;
                }
                var inputCash = cur.transferForm.find('input[name=cash]:hidden');
                var cloneCash = inputCash.clone();
                inputCash.remove();
                if($(".submit-btn").hasClass("loading")) return;
                $(".submit-btn").addClass('loading').attr("data-value","clicked");
                cur.transferStatus(cur, $(form), cloneCash);
            }
        }]);
    },
    formData: function(cur, data) {
        // 下拉列表绑定
        cur.formOptions(cur, data.pcodeCbBaseList);
        // input绑定
        cur.formInput(cur);
        // 全部转入绑定
        cur.formBtn(cur);
    },
    formBtn: function(cur) {
        $('.allIn').click(function () {
            var allMoney = $("#qbBalance").html();
            var from = $("#turnOut").children('option:selected').attr("id");
            var into = $('#turnIn').children('option:selected').attr("id");
            if (allMoney === '查询中' || allMoney === '') return;
            var all;
            Api.getPtBalance('cbId=' + from, function (d) {
                all = d.cash;
                $("#qbBalance").html(toFixedNum(all));
                all = toFixedNum(all);
                var allCb = all.split('.');
                var allAP = all.substring(0, all.length - 2);
                all = parseFloat(all);
                if (all == 0) {
                    var tip_unre = dialog({
                        align: "right",
                        padding: "15px 20px"
                    });
                    tip_unre.content("您的余额不足");
                    tip_unre.show($('.allIn')[0]);
                    setTimeout(function () {
                        tip_unre.close().remove();
                    }, 2000);
                    return;
                } else if (all >= 50000) {
                    $('#cash, #agcash').val('50000');
                } else {
                    if (from == 'sobet_01') {
                        if (into == "ag_01" || into == "bbin_01") {
                            $('#agcash').val(allCb[0]);
                        } else {
                            $('#cash').val(allAP);
                        }
                    } else {
                        $('#agcash, #cash').val(allCb[0]);
                    }
                }
            });
        });
    },
    formInput: function(cur) {
        $('#agcash').val('');
        $('#cash').val('');
        cur.formInputEvent(cur);
    },
    formInputEvent: function(cur) {
        $('#cash').on(cur.local.EVENT.input, function(evt) {
            if(evt.keyCode === 13) return;
            CashInput($(this)[0]);
        });
        $('#agcash').on(cur.local.EVENT.input, function(evt) {
            if(evt.keyCode === 13) return;
            agCashInput($(this)[0]);
        });
        // $('#cash').on(cur.local.EVENT.blur, function() {
        //     CashBlur($(this)[0])
        // });
        // $('#agcash').on(cur.local.EVENT.blur, function() {
        //     agCashBlur($(this)[0]);
        // });
        $('#cash, #agcash').on(cur.local.EVENT.focus, function() {
            $(this).removeAttr('readonly');
        });
        $(cur.transferForm).on(cur.local.EVENT.submit, function() {
            if($('#agcash').attr('sel')) {
                cur.cancelFlag = agCashBlur($('#agcash')[0]);
            } else {
                cur.cancelFlag = CashBlur($('#cash')[0]);
            } 
        });
    },
    formOptionsEvent: function(cur) {
        var transFrom, transFromId, transFromVal,
            transTo, transToId, transToVal;
        $('#turnOut, #turnIn').on(cur.local.EVENT.change, function(evt) {
            // 转出下拉列表变化
            if(/out/ig.test($(this).attr('id'))) {
                transFrom = $('#turnOut').find('option:selected');
                transFromId = transFrom.attr('id');
                transFromVal = transFrom.html();
                if(transFromId) {
                    /^(?:ag|bbin|pt)_01$/i.test(transFromId) ?
                    $('#cash').hide().attr('sel', '').next().show().attr('sel', 'sel') :
                    $('#agcash').hide().attr('sel', '').prev().show().attr('sel', 'sel');
                    // 查询转出钱包余额
                    $("#qbBalance").html('查询中');
                    cur.newBanlanceAction(cur, $("#qbBalance"), 'cbId=' + transFromId);
                } else {
                    $('#turnOut').removeAttr('disabled');
                    $('#turnIn').removeAttr('disabled');
                    $("#qbBalance").html('');
                }
                // 转出提示
                $('#out').html(transFromVal);
                $("#turnOutCn").val(transFromVal);
                // 转出为彩票的情况
                if(/sobet/g.test(transFromId)) {
                    $('#turnOut').addClass('zqb');
                    $('#turnIn').removeClass('zqb');
                    cur.local.empty.apply(cur, [cur.local, $('#turnIn')]);
                    cur.local.append.apply(cur, [cur.local, $('#turnIn'), 'simple',
                        $('#private_platform_2').html()]);
                    transTo = $('#turnIn').find('option:selected');
                    transToId = transTo.attr('id');
                    transToVal = transTo.html();
                    // 查询转入钱包余额
                    $("#inBalance").html('查询中');
                    $('#turnIn').attr('disabled', 'disabled');
                    cur.newBanlanceAction(cur, $("#inBalance"), 'cbId=' + transToId);
                // 转出不为彩票也不为请选择的情况
                } else if(transFromId && !/sobet/g.test(transFromId)){
                    $('#turnIn').addClass('zqb');
                    $('#turnOut').removeClass('zqb');
                    cur.local.empty.apply(cur, [cur.local, $('#turnIn')]);
                    cur.local.append.apply(cur, [cur.local, $('#turnIn'), 'simple',
                        '<option id="sobet_01" selected="selected" value="sobet_01">彩票钱包</option>']);
                    // 查询转入钱包余额
                    $("#inBalance").html('查询中');
                    $('#turnIn').attr('disabled', 'disabled');
                    cur.newBanlanceAction(cur, $("#inBalance"), 'cbId=sobet_01');
                // 转出为请选择的情况
                } else {
                    $('#turnOut').removeClass('zqb');
                    $('#turnIn').removeClass('zqb');
                    cur.local.empty.apply(cur, [cur.local, $('#turnIn')]);
                    cur.local.append.apply(cur, [cur.local, $('#turnIn'), 'simple',
                        '<option value="">请选择</option>']);
                    $("#inBalance").html('');
                }
                transTo = $('#turnIn').find('option:selected');
                transToId = transTo.attr('id');
                transToVal = transTo.html();
                // 转入提示
                $('#in').html(transToVal);
                $("#turnInCn").val(transToVal);
                $('#agcash').val('');
                $('#cash').val('');
                window.setTimeout(function() {
                    $('#turnIn').removeAttr('disabled');
                    $('#turnOut').removeAttr('disabled');
                }, 1000);
            // 转入下拉列表变化
            } else {
                transTo = $('#turnIn').find('option:selected');
                transToId = transTo.attr('id');
                transToVal = transTo.html();
                /^(?:ag|bbin)_01$/i.test(transToId) ?
                    $('#cash').attr('sel', '').hide().next().attr('sel', 'sel').show() :
                    $('#agcash').attr('sel', '').hide().prev().attr('sel', 'sel').show();
                // 查询转入余额
                $("#inBalance").html('查询中');
                $('#turnIn').attr('disabled', 'disabled');
                cur.newBanlanceAction(cur, $("#inBalance"), 'cbId=' + transToId);
                // 转入提示
                $("#in").html(transToVal);
                $("#turnInCn").val(transToVal);
                $('#agcash').val('');
                $('#cash').val('');
                window.setTimeout(function() {
                    $('#turnIn').removeAttr('disabled');
                }, 1000);
            }
        });
    },
    formOptions: function(cur, opts) {
        cur.local.append.apply(cur, [cur.local, $('#turnOut,#private_platform'), opts, cur.temp.opts]);
        $('#turnOut').find('option').each(function() {
            if($(this).val() === 'sobet_01') {
                $('#turnOut').find('option').eq(1).before($(this));
            }
        });
        $('#private_platform').html($('#turnOut').html());
        cur.local.append.apply(cur, [cur.local, $('#private_platform_2'), 'simple',
            $('#turnOut').html().replace(
                /(<(?=[a-z]{6}.*?value=(""|"sobet)).*?>.*?>|\s*$|\s*(?=<))/ig,
                function(match, p) {return '';}
        )]);
        cur.formOptionsEvent(cur);
    },
    init: function(cur, data, obj) {
        cur.local.removePage.call(cur, cur.local, obj.cont);
        // 页面跳转
        if(data.code) {
            // 错误页面
            if(data.code === -2) return cur.error(cur, data, obj);
            // 设置页面
            else return cur.local.addPage.apply(cur, [cur.local, obj.cont, obj[obj[data.code]]]);
        } else {
            // 设置资金密码页面
            //if(!data.result.exist) return cur.local.addPage.apply(cur, [cur.local, obj.cont, obj[obj['000']]]);
            cur.local.addPage.apply(cur, [cur.local, obj.cont, cur.temp.form]);
            cur.transferForm = $("#transMF");
            cur.local.toggle.apply(cur, [cur.local, cur.transferForm, 'show']);
        }
    },
    newBanlanceAction: function(cur, el, p) {
        cur.local.action.apply(cur, [cur.local, 'getPtBalance', p, function(res) {
            el.html(toFixedNum(res.cash));
        }]);
    },
    transferStatus: function(cur, formEl, cash) {
        cur.local.action.apply(cur, [cur.local, 'cbPointTransfer', {
            turnOutCn: $('#turnOutCn').val(),
            turnInCn: $('#turnInCn').val(),
            turnOut: $("#turnOut").children('option:selected').attr("id"),
            turnIn: $("#turnIn").children('option:selected').attr("id"),
            cash: $('#agcash').val() || $('#cash').val()
        }, function(data) {
                        var tips = dialog({
                            id: '',
                            align: 'top',
                            skin: 'transTip',
                            fixed:true,
                            quickClose: true
                        });
                        // $('#agcash, #cash').off(cur.local.EVENT.blur);
                        if(data.code == 0){
                            tips.content('转账成功').show();
                        } else if(data.code == -1) {
                            tips.content(data.msg).show();
                        } else {
                            tips.content('转账失败').show();
                        }
                        $(".submit-btn").removeClass("loading").removeAttr("data-value").val('立即转账');
                        $(".submit-btn").removeAttr("data-value");
                        setTimeout(function() {
                            tips.close().remove();
                            window.location.reload();
                        }, 2000);
                }, function() {
                    var d = dialog({
                        fixed : true,
                        title : '网络异常',
                        content : '请稍后再试……',
                        okValue : '确定'
                    });
                    $(".submit-btn").removeClass("loading").val('立即转账');
                    $(".submit-btn").removeAttr("data-value");
                    d.width(300);
                    d.showModal();
                    setTimeout(function() {
                        d.close().remove();
                        window.location.reload();
                    }, 2000);
                }]);
                cash.insertAfter(cur.transferForm.find('input[name=cash]'));
                cur.transferForm.find('input[name=cash]').val('');
    },
};
Navigation.withdraw = {
    ids: 'withdraw',
    checkRules: {
        sn: {
            required: true,
            remote: {
                url: ctx + "/userInfo/validateRealName",
                type: "post",
                dataType: "text",
                data: {
                    sn: function() {
                        return $("#sn").val();
                    }
                }
            }
        },
        cardNo: {
            required: true,
            sobet_cardno: true
        },
        withdrawMoney: {
            required: true,
            sobet_drawPwd: true,
            sobet_limit_min: true,
            sobet_limit_max: true,
            sobet_number: true
        },
        bankName: {
            required: true
        },
        payPassword: {
            required: true,
            remote: {
                url: ctx + "/userInfo/validatePayPassword",
                type: "post",
                dataType: "text",
                data: {
                    payPassword: function() {
                        return md5($("#payPassword").val());
                    }
                }
            }
        }
    },
    checkMsg: {
        sn: {
            required: "请输入收款账户姓名"
        },
        cardNo: {
            required: "请输入收款账号",
            sobet_cardno: "卡号格式错误"
        },
        bankName: {
            required: "请选择开户银行"
        },
        withdrawMoney: {
            required: "请输入提款金额"
        },
        payPassword: {
            required: "请输入资金密码"
        }
    },
    bankCard: '',
    bankCardOpt: '',
    withDrawForm: '',
    temp: {
        cardno: '<option value="{{bankCardNo}}" username ="{{sn}}"  id="{{id}}"  bindTime="{{bindTime}}">{{bankNameZH}}    {{bankCardNo}}</option>',
        form: '<div id="main" class="balance fl cash-main"  style="margin-left: -8px;">\
                    <a href="withdraw" style="display: none;"></a>\
                    <form id="account" class="form-indent" autocomplete="off" method="post" style="display: none;">\
                        <input type="hidden" name="operation" value="add"/>\
                        <input type="hidden" name="cardNo" value=""/>\
                        <input type="hidden" name="user_bank_id" value=""/>\
                        <input type="hidden" name="pay_password" id="pay_password" value=""/>\
                        <input type="hidden" name="token" id="token" value="">\
                        <input type="hidden" name="bindTime" id="bindTime" value="">\
                        <div class="row">\
                            <span class="num">1</span>\
                            <label>当前可用余额<br><em>当前主钱包余额</em></label>\
                            <input type="text" id="balanceUse" class="form-input" name="balance-use" placeholder="0" value="" disabled="disabled" style="color: #737bf8;">\
                        </div>\
                        <div class="row">\
                            <span class="num">2</span>\
                            <label>选择银行卡</label>\
                            <select id="bankCardNo" class="disabled-select" >\
                            </select>\
                        </div>\
                        <div class="row">\
                            <span class="num">3</span>\
                            <label>收款人姓名</label>\
                            <div class="input-wrap">\
                                <input type="text" id="sn" name="sn" placeholder="收款人姓名" value="" disabled/>\
                              </div>\
                        </div>\
                        <!--<div class="row" style="position:relative;">\
                            <label>开户银行</label>\
                            <select id="bankNameSel" name="bankName" class="disabled-select" disabled>\
                            </select>\
                        </div>-->\
                        <!--<div class="row">\
                            <label>银行卡</label>\
                            <div class="input-wrap select">\
                                <input type="text" placeholder="银行卡号码" id="bankCardNo" value="" disabled/>\
                            </div>\
                        </div>-->\
                        <div class="row">\
                            <span class="num">4</span>\
                            <label>提现金额</label>\
                            <div class="input-wrap">\
                                <input id="withdrawMoney" type="text" name="withdrawMoney" placeholder="请输入提现金额" value=""/>\
                              </div>\
                        </div>\
                        <div class="row">\
                            <span class="num">5</span>\
                            <label>输入资金密码</label>\
                            <div class="input-wrap">\
                                <input id="payPassword" type="password" name="payPassword" placeholder="请输入资金密码" value="" readonly />\
                                <input type="submit" class="btn submit-btn" value="申请提现">\
                              </div>\
                            <!-- <input type="password" id="pay-password" name="pay-password" class="form-input form-input-pwd" placeholder="请输入资金密码" value="" readonly />\
                            <input id="payPassword" type="password" name="payPassword" placeholder="请输入资金密码" value="" readonly />\
                            <input type="button" class="btn submit-btn" value="申请提现"> -->\
                        </div>\
                        <!--<div class="row">\
                            <label>&nbsp;</label>\
                            <input type="button" class="btn submit-btn" value="确认提现" style="width:237px;">\
                        </div>-->\
                        <div class="page-tips">\
                            <h5>温馨提醒：</h5>\
                            <div class="no-bottom">\
                                <p>1.单笔最小提现金额：<em id="eachMin"></em> 元</p>\
                                <p>2.单笔最大提现金额：\
                                <em id="eachMax"></em><em> 元</em>\
                                <em id="none-each-max">不设置提现上限值</em>\
                                </p>\
                                <p>3.在首次新增银行卡<em id="eachMinH">0</em>小时之后，非首次新增银行卡<em id="eachMinF">0</em>小时后，新卡才可以发起提现</p>\
                                <p>4.提款手续费为：<em class="with-draw-rate"></em>%</p>\
                            </div>\
                        </div>\
                    </form>\
                </div>'
    },
    withdraw: function(type) {
        var cur = this, obj;
        if(!cur.local) cur.local = Navigation[type];
        obj = cur.local.pay;
        cur.local.action.apply(cur, [cur.local, 'drawCashIndexAjax', '', function(res) { debugger
            cur.init(cur, res, obj);
            if(cur.withDrawForm) {
                // 表单数据绑定
                cur.formData(cur, res.result);
                // 表单提交
                cur.formAction(cur);
            }
        }]);
    },
    error: function(cur, data, obj) {
        var count, timer, container = obj.container;
        cur.local.empty.apply(cur, [cur.local, container]);
        cur.local.addPage.apply(cur, [cur.local, container, obj[obj[data.code]], [data]]);
        timer = window.setInterval(function() {
           count = Number($('#feedContainer').find('em').html());
           count--;
           if(count === 0) {
                window.clearInterval(timer);
                cur.local.go('/index');
           }
           $('#feedContainer').find('em').html(count);
        }, 1000);
    },
    formAction: function(cur) {
        cur.local.form.apply(cur, [cur.local, cur.withDrawForm, {
            rules: cur.checkRules,
            messages: cur.checkMsg,
            errorPlacement: function(error, element) {
                element.parent().parent().append(error);
            },
            submitHandler: function(form) {
                $(".submit-btn").addClass("loading").attr("data-value","clicked");
                clickCheck();
                $('#pay_password').val(cur.local.md5.call(cur, cur.local, $('#payPassword').val()));
                $('#payPassword').val('');
                cur.withdrawStatus(cur, $(form));
            }
        }]);
    },
    formData: function(cur, data) {
        var select = cur.bankCard.find('option:selected');
        cur.withDrawForm.find('input[name=token]').val(data.token);
        cur.withDrawForm.find('input[name=balance-use]').val(data.uinPointFourFixed);
        cur.withDrawForm.find('input[name=sn]').val(cur.bankCard.find('option:selected').attr('username'));
        cur.withDrawForm.find('input[name=cardNo]').val(select.val());
        cur.withDrawForm.find('input[name=user_bank_id]').val(select.attr('id'));
        cur.withDrawForm.find('input[name=sn]').val(select.attr('username'));
        cur.withDrawForm.find('#bindTime').val(select.attr('bindTime'));
        cur.withDrawForm.find('#eachMinH').text(data.PrePayConfigMap.firstDrawingsAging.value);
        cur.withDrawForm.find('#eachMinF').text(data.PrePayConfigMap.nonFirstDrawingsAging.value);
        this.bankCard.on(this.local.EVENT.change, function() {
            var select = cur.bankCard.find('option:selected');
            cur.withDrawForm.find('input[name=cardNo]').val(select.val());
            cur.withDrawForm.find('input[name=user_bank_id]').val(select.attr('id'));
            cur.withDrawForm.find('input[name=sn]').val(select.attr('username'));
            cur.withDrawForm.find('#bindTime').val(select.attr('bindTime'));
        });
        $('input[name="payPassword"]').on(this.local.EVENT.focus, function() {
            $(this).removeAttr('readonly');
        });
    },
    getData: function(cur, data) {
        data.uinPointFourFixed = toFixedNum(data.uinPoint);
        toFourPoint('#eachMin', data.onceWithdrawMin);
        if(data.onceWithdrawMax && !/null/ig.test(data.onceWithdrawMax)) {
            this.local.toggle.apply(cur, [cur.local, $('#none-each-max'), 'hide']);
            toFourPoint('#eachMax', data.onceWithdrawMax);
        } else {
            this.local.toggle.apply(cur, [cur.local, $('#none-each-max'), 'show']);
            this.local.toggle.apply(cur, [cur.local, $('#eachMax'), 'hide']);
            this.local.toggle.apply(cur, [cur.local, $('#eachMax').next(), 'hide']);
        }
        if(data.withdrawRate && !/null/ig.test(data.withdrawRate)) {
            $('.with-draw-rate').html(data.withdrawRate);
            this.local.toggle.apply(cur, [cur.local, $('.with-draw-rate'), 'show']);
        } else {
            this.local.toggle.apply(cur, [cur.local, $('.with-draw-rate').parent(), 'hide']);
        }
        // 银行卡列表
        cur.getOptions(cur, cur.bankCard, data, cur.temp.cardno);
    },
    getNewObj: function(data) {
        var res = data.options, i;
        for(i=0; i<res.length; i++) {
            res[i].sn = this.local.zip.call(this, this.local, res[i]['sn'], 'sn');
            res[i].bankCardNo = this.local.zip.call(this, this.local, res[i]['bankCardNo'], 'cardno');
        }
        return data;
    },
    getOptions: function(cur, el, data, temp) {
        if(data.bankCardList.length <= 0) return;
        cur.local.append.apply(cur, [cur.local, el, /* cur.getNewObj(data.bankCardList) */data.bankCardList, temp]);
        this.bankCardOpt = this.bankCard.find('option');
    },
    init: function(cur, data, obj) {
        cur.local.removePage.call(cur, cur.local, obj.cont);
        // 页面跳转
        if(data.code) {
            // 错误页面
            if(data.code === -2) return cur.error(cur, data, obj);
            // 设置页面
            else return cur.local.addPage.apply(cur, [cur.local, obj.cont, obj[obj[data.code]]]);
        } else {
            // 设置资金密码页面
            if(!data.result.exist) return cur.local.addPage.apply(cur, [cur.local, obj.cont, obj[obj['000']]]);
            cur.local.addPage.apply(cur, [cur.local, obj.cont, cur.temp.form]);
            cur.withDrawForm = $("#account");
            cur.bankCard = $('#bankCardNo');
            // 初始化数据
            cur.getData(cur, data.result);
            return cur.local.toggle.apply(cur, [cur.local, cur.withDrawForm, 'show']);
        }
    },
    withdrawStatus: function(cur, formEl) {
        cur.local.action.apply(cur, [cur.local, 'withdrawCash', cur.local.serialize.call(cur, cur.local, formEl), function(data) {
                        var tips = dialog({
                            id: '',
                            align: 'top',
                            skin: 'transTip',
                            fixed:true,
                            quickClose: true
                        });
                        tips.content(data.msg).show();
                        $(".submit-btn").removeClass("loading").removeAttr("data-value").val('立即转账');
                        $(".submit-btn").removeAttr("data-value");
                        setTimeout(function() {
                            tips.close().remove();
                            window.location.reload();
                        }, 2000);
                }, function() {
                    var d = dialog({
                        fixed : true,
                        title : '网络异常',
                        content : '请稍后再试……',
                        okValue : '确定'
                    });
                    $(".submit-btn").removeClass("loading").val('申请提现');
                    $(".submit-btn").removeAttr("data-value");
                    d.width(300);
                    d.showModal();
                    setTimeout(function() {
                        d.close().remove();
                        window.location.reload();
                    }, 2000);
                }]);
    },
};
+function(obj) {
    var local = Navigation['comm'],
        type = local.anchor(local);
    $('#aside').find('a').each(function(key, value) {
        $(this).removeClass('on');
        var t = $(this).data().type;
        if(t === type) $(this).addClass('on');
    });
    $('#aside').find('a').off(local.EVENT.click).on(local.EVENT.click, function(evt) {
        var type = local.anchor(local);
        $('#aside').find('a').removeClass('on');
        $(this).addClass('on');
        local.removePage(local, local.pay.cont);
        Navigation['transaction']($(this).data().type, ['comm']);
        local.anchor(local, $(this).data().type);
    });
    Navigation[obj](type || 'recharge', ['comm']);
}('transaction');
//解决诡异的IE浏览器网页 title 会带上地址栏 #hash 值的问题
(function () {
    var rememberTitle = document.title; //记住原有的窗口标题
    try {
        document.attachEvent('onpropertychange', function () {
            if (document.title !== rememberTitle) {
                document.title = rememberTitle;
            }
        });
    } catch (e) {}
})();