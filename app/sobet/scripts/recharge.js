function payWechat() {
    $("#payWechat").validate({
        rules: {
            wechatAmount: {
                required: true,
                sobet_floatlimit: true,
                sobet_charge_min: true,
                sobet_charge_max: true,
                sobet_chargeDay_max: true,
                sobet_charge_zs01: true
            }
        },
        messages: {
            wechatAmount: {
                required: "请输入正确的充值金额"
            }
        },
        errorPlacement: function (error, element) {
            element.parent().parent().append(error);
        },
        submitHandler: function (form) {

            Api.queryWechatBind(function (res) {
            	if(res.code == 1) {
            		if ($('#payWechat .btn').hasClass('clicking')) {
		                return;
		            }
		            $('#payWechat .btn').addClass('clicking');
		            var cash = Number($('#wechatAmount').val());
					var cutPointsSwitch =  $("#styleChoose .radio.cur").attr('cutPointsSwitch');
		            
					$("#payWechat .rechargeDetail .cash").text(wechatNewCash);
					$('#md5Str').val(md5(wechatpay['payWayType'] + wechatpay['channelCode'] + wechatpay['bankId'] + wechatNewCash + wechatpay['token'] +
		                $('#md5key').val()));

		            var p = {
		                'payWayType': wechatpay['payWayType'],
		                'channelCode': wechatpay['channelCode'],
		                'token': wechatpay['token'],
		                'md5Str': $('#md5Str').val(),
		                'amount': wechatNewCash,
		                'bankUrl': wechatpay['bankUrl'],
		                'bankAlias': wechatpay['bankAlias'],
		                'bankId': wechatpay['bankId'],
		                'recodeInfo': wechatpay['recodeInfo'],
						'cutPointsSwitch':cutPointsSwitch,
		            };
		            setTimeout(function() {
						p['amount'] = wechatNewCash;
						callbackFun();	
					}, 1000);
		            $('#payWechat #payWayType').val('4');
		            document.forms['payWechat'].target = "_blank";
            	} else {
            		$('#payWechat .wechat-recharge').hide();
            		$('#payWechat .minmax').hide();
            		$('#payWechat .wechat-bind').show();
            	}
            	//给予随机减少金额的提示再跳转
				var callbackFun = function(){
					Api.recharge(p, function (r) {
						if (r.code == 0) {
							$('#payWechat .wechat-recharge').hide();
							$('#payWechat .minmax').hide();
							$('#payWechat .wechat-in').html($('#payWechat .calcMny').html() || $('#payWechat #wechatAmount').val());
							var id = res.result;
							$('#payWechat .wechat-id').html(
								id.length > 15 ? id.substring(0, 15) + '...' : id
							).attr('title', id);

							$('#payWechat .wechat-success').show();
							if($("#payWechat .wechat-id").width() > 116) {
	                        	$('#payWechat .wechat-change-btn').css({
	                        		position: 'absolute',
	                        		left: '0',
	                        		marginTop: '36px',
	                        		marginLeft: '42px'
	                        	});
	                        }
							$('#payWechat .wechat-recharge .btn').removeClass('clicking');
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
							}).show($('#payWechat .wechat-recharge .btn')[0]);
							$('#payWechat .wechat-recharge .btn').removeClass('clicking');
						}
						// $('#secondStepZFB').find('.rechargeAgain').off('click').on('click', function () {
						// 	$('#payWechat .wechat-recharge').find('span.cur').trigger('click');
						// });
					});
				};
            });
            
        }
    });
}
payWechat();
$('#wechatAmount').bind('keyup',Q.debouncer(function(e){
	if(e.keyCode === 13) return;
	var me = $(this);
	var cash = parseFloat($(this).val());
	var cutPointsSwitch =  $("#styleChoose .radio.cur").attr('cutPointsSwitch');
	wechatNewCash = resetMoney(cash,cutPointsSwitch);
	var min = $('#payWechat ul li').eq(0).find('span.aliMin').text();
	var max = $('#payWechat ul li').eq(1).find('span.aliMax').text();

	var costStatus =  $("#styleChoose .radio.cur").attr('costStatus');
	var rate =  $("#styleChoose .radio.cur").attr('costRate');
	var minCost = $('#payWechat .minCostLimit').text();
	var maxCost = $('#payWechat .maxCostLimit').text();

	// setTimeout(function() {
	// 	me.blur();
	// }, 3000);

	if(cutPointsSwitch==1&&cash>=min&&(cash==max||cash<max)&&isInteger(cash)){
		$('#payWechat').find('i.tipReduceMoney').css({
		'display':'inline',
		}).text((wechatNewCash-cash).toFixed(1));
		$('#payWechat').find('li p.tipMoney').css({display: 'inline-block'});
		$('#payWechat').find('li p.tipMoney').find('i.chargeMny').text(cash);
		$('#payWechat').find('li p.tipMoney').find('i.cutMny').text((cash-wechatNewCash).toFixed(1));
		$('#payWechat').find('li p.tipMoney').find('i.calcMny').text(wechatNewCash);
		$('#payWechat').find('li p.tipMoney').show();
	}else{
		$('#payWechat').find('i.tipReduceMoney').css({ 
			'display':'none',
		});
		$('#payWechat').find('li p.tipMoney').hide();
	}

	if(costStatus == 1&&cash>=min&&(cash==max||cash<max)&&isInteger(cash)) {
		$(this).parent().parent().next('ul').find('li p.costStatus').find('i.lastMoney').text(costMoney(fourthZFBNewCash, rate, minCost, maxCost));
		$(this).parent().parent().next('ul').find('li p.costStatus').show();
	} else {
		$(this).parent().parent().next('ul').find('li p.costStatus').hide();
	}
}, 200)).bind('input',Q.debouncer(function(e){
	var me = $(this);
	var cash = parseFloat($(this).val());
	var cutPointsSwitch =  $("#styleChoose .radio.cur").attr('cutPointsSwitch');
	wechatNewCash = resetMoney(cash,cutPointsSwitch); debugger
	var min = $('#payWechat ul li').eq(0).find('span.aliMin').text();
	var max = $('#payWechat ul li').eq(1).find('span.aliMax').text();

	var costStatus =  $("#styleChoose .radio.cur").attr('costStatus');
	var rate =  $("#styleChoose .radio.cur").attr('costRate');
	var minCost = $('#payWechat .minCostLimit').text();
	var maxCost = $('#payWechat .maxCostLimit').text();

	// setTimeout(function() {
	// 	me.blur();
	// }, 3000);
	if(cutPointsSwitch==1&&cash>=min&&(cash==max||cash<max)&&isInteger(cash)){
		$('#payWechat').find('i.tipReduceMoney').css({
		'display':'inline',
		}).text((wechatNewCash-cash).toFixed(1));
		$('#payWechat').find('li p.tipMoney').css({display: 'inline-block'});
		$('#payWechat').find('li p.tipMoney').find('i.chargeMny').text(cash);
		$('#payWechat').find('li p.tipMoney').find('i.cutMny').text((cash-wechatNewCash).toFixed(1));
		$('#payWechat').find('li p.tipMoney').find('i.calcMny').text(wechatNewCash);
		$('#payWechat').find('li p.tipMoney').show();
	}else{
		$('#payWechat').find('i.tipReduceMoney').css({ 
			'display':'none',
		});
		$('#payWechat').find('li p.tipMoney').hide();
	}

	if(costStatus == 1&&cash>=min&&(cash==max||cash<max)&&isInteger(cash)) {
		$(this).parent().parent().next('ul').find('li p.costStatus').find('i.lastMoney').text(costMoney(fourthZFBNewCash, rate, minCost, maxCost));
		$(this).parent().parent().next('ul').find('li p.costStatus').show();
	} else {
		$(this).parent().parent().next('ul').find('li p.costStatus').hide();
	}
}, 200));