var Parser = {
	strParser: function(str, data) {
		var reg, i;
		for (i = 0; i < 2; i++) {
			/(\{\{.*?\}\})/g.test(str);
			reg = RegExp.$1;
			if (!reg) break;
			str = Parser.replaceAll.call(this, str, reg, data);
			i--;
		}
		return str;
	},
	replaceAll: function(str, reg, data) {
		if (typeof data === 'object') {
			var rep = data[reg.substring(2, reg.length - 2)];
			return str.replace(new RegExp(reg, 'gm'), typeof rep !== 'undefined' ? rep : '');
		}
		return str.replace(new RegExp(reg, 'gm'), data);
	}
};
var DatePlug = date = {
	mini: 1000 * 60 * 60 * 24,
	getNormalDate: function(date) {
		if(!date) return new Date();
		return new Date(date);
	},
	getTime: function(date, keep) {
		date = DatePlug.getNormalDate.call(this, date);
		if(keep) date.getTime();
		return parseInt(date.getTime());
	},
	getDateObj: function(date) {
		date = DatePlug.getNormalDate.call(this, date);
		return {
			year: this.getYear(date),
			nyear: this.getYear(date),
			nmonth: this.getMonth(date),
			month: this.getMonth(date, true),
			nday: this.getDate(date),
			day: this.getDate(date, true),
			week: this.getDay(date),
			hours: this.getHours(date),
			time: this.getTime(date)
		};
	},
	getYear: function(date, full) {
		if(!full) return date.getFullYear();
		return date.getYear();
	},
	getMonth: function(date, format) {
		var month = date.getMonth() + 1;
		return format && month < 10 ? ('0' + month) : month;
	},
	getDate: function(date, format) {
		date = date.getDate();
		return format && date < 10 ? ('0' + date) : date;
	},
	getDay: function(date) {
		return date.getDay();
	},
	getHours: function(date, timeSys) {
		var hours = date.getHours();
		if(timeSys) return hours >= 0 && hours < 13 ? hours + ' am' : (hours - 12) + 'pm';
		return date.getHours();
	},
	oneDay: function() {
		return this.mini;
	},
	formatDate: function(dObj, format) {
		if(!format) return dObj.year + '-' + dObj.month + '-' + dObj.day;
		else if(format === 'cn') return dObj.nmonth + '月' + dObj.nday + '日';
	}
};
// 活动 -> 签到活动
function Checkin() {}
Checkin.prototype = {
	constructor: Checkin,
	// 签到日期的五种状态
	checkin: {
		uncheck: '<li class="uncheck" continuSignDay="{{continuSignDay}}"><span>{{date}}</span><p>未签到</p></li>',
		full: '<li class="incheck full" continuSignDay="{{continuSignDay}}"><span>{{date}}</span><p>{{money}}{{unit}}</p><div class="already"></div></li>',
		unfull: '<li class="incheck unfull" continuSignDay="{{continuSignDay}}"><span>{{date}}</span><p>{{money}}{{unit}}</p><div class="already"></div></li>',
		normal: '<li class="normaldate">{{date}}</li>',
		today: '<li class="today"><span>{{date}}</span><div class="check">签到</div></li>'
	},
	checkinLi: '<li><span class="p25">{{signTime}}</span><span class="p15">{{continuSignStime}}</span><span class="p15">{{continuSignEtime}}</span><span class="p20">{{continuSignDay}}</span><span class="p8">{{bonus}}{{moneyUnit}}</span><span class="p25">{{actionMoneyTime}}</span></li>',
	bonusContinue: '<tr><td>{{day}}{{dayUnit}}</td><td>{{money}}{{moneyUnit}}</td><td>{{continueMoney}}{{moneyUnit}}</td></tr>',
	unFlag: false,
	i: 0,
	interval: 0,
	lastTime: 0,
	actionTime: 0,
	continueMoney: [{}],
	stime: {},
	etime: {},
	currentDay: {},
	startFlag: true,
	endFlag: false,
	celendarSwitch: true,
	actionDate: {},
	parser: function(str, data, special) {
		if(!special) return Parser.strParser.call(Parser, str, data);
		return Parser.strParser.call(Parser, this.checkin[str], data);
	},
	dateObj: function(curDate) {
		return DatePlug.getDateObj.call(DatePlug, curDate);
	},
	formatDate: function(curDate, lang) {
		return DatePlug.formatDate.call(DatePlug, curDate, lang);
	},
	oneDay: function() {
		return DatePlug.oneDay.call(DatePlug);
	},
	calendarList: function(result) {
		var firstDate;
		this.getCurrentDay();
		if(this.celendarSwitch) return this.calendar(result);
		else return;
	},
	beforeActiveDay: function(startDate) {
		var i = 0, str = '';
		for(; ;) {
			if(this.actionDate.time === startDate.time) {
				break;
			}
			str += this.normalDaySyle(this.actionDate);
			this.actionDate = this.addOneDay(this.actionDate);
		}
		return str;
	},
	normalDaySyle: function(actionDate) {
		return this.parser('normal',{date: this.formatDate(actionDate, 'cn')}, true);
	},
	calendar: function(result, firstDate) {
		var str = '', curDate, firstDate, startDate, endDate, endFlag = false, nextMonth = 0, tmp = '', res;
		firstDate = this.firstDay();

		//this.actionDate = this.dateObj(firstDate.time);
		endDate = date.getDateObj(date.formatDate(date.getDateObj(this.continueMoney[this.continueMoney.length - 1].activityEndTime)));
		startDate = date.getDateObj(date.formatDate(date.getDateObj(this.continueMoney[this.continueMoney.length - 1].activityStarTime)));

		if(startDate.time === endDate.time || endDate.time < this.currentDay.time || this.currentDay.time < startDate.time) {
			$('.msg-tip').eq(0).find('.alert').eq(0).find('p').eq(0).html('不在活动时间范围内，详情请联系客服！');
			$('.msg-tip').eq(0).show();
			return str;
		}

		debugger
		nextMonth = this.currentDay.nmonth + 1;
		if(nextMonth >12)nextMonth=1;
		// if(this.actionDate.time < startDate.time) {
		// 	str += this.beforeActiveDay(startDate);
		// }
		// if(this.actionDate.time >= startDate.time) {

		// }
		//console.log(startDate,endDate,nextMonth);return;
		if(firstDate.time < startDate.time) {
			//str += this.beforeStartDay(startDate);
			for(i=0; ; i++) {
				if(firstDate.time === startDate.time) {
					break;
				}
				str += this.parser('normal',{date: date.formatDate(firstDate, 'cn')}, true);
				firstDate = this.addOneDay(firstDate);
			}
		}

			if(firstDate.time >= startDate.time) {
				for(i=0; i<result.length; i++) {
					res = result[i];
					signTime = date.getDateObj(res.signTime);
				if(signTime.time === this.currentDay.time) {
						break;
					}
				if(signTime.time === firstDate.time) {
						if(res.resultStatus === 0) tmp = 'full';
						else if(res.resultStatus === 1) tmp = 'unfull';
						str += this.checkinStyle(firstDate, this.continueMoney[res.continuSignDay], tmp, res.continuSignDay);
						firstDate = this.addOneDay(firstDate);
					} else if(signTime.time > firstDate.time && signTime.time < this.currentDay.time) {
						var interval = (signTime.time - firstDate.time) / date.oneDay();
						for(j=0; j<interval; j++) {
							str += this.unCheckStyle(firstDate)
							firstDate = this.addOneDay(firstDate);
						}
						i--;
					}
				}
			}
		if(firstDate.time < this.currentDay.time) {
			for(i=0; ; i++) {
				if(firstDate.time === this.currentDay.time || firstDate.time > endDate.time) {
					if(firstDate.time > endDate.time) {
						endFlag = true;
					}
					break;
				}
				str += this.unCheckStyle(firstDate);
				firstDate = this.addOneDay(firstDate);
			}
		}
		if(endFlag) {
			for(i=0; ; i++) {
				if(firstDate.nmonth === nextMonth) {
					endFlag = false;
					break;
				}
				str += this.parser('normal',{date: date.formatDate(firstDate, 'cn')}, true);
				firstDate = this.addOneDay(firstDate);
			}
		} else { debugger
				str += this.curDayStyle();
				firstDate = this.addOneDay(this.currentDay);
				for(i=0; ;i++) {
					if(firstDate.nmonth === nextMonth || firstDate.time > endDate.time) {
						if(firstDate.time > endDate.time) {
							endFlag = true;
						}
						break;
					}
					str += this.parser('normal',{date: date.formatDate(firstDate, 'cn')}, true);
				firstDate = this.addOneDay(firstDate);
				}
				if(endFlag) {
					for(i=0; ; i++) {
						if(firstDate.nmonth === nextMonth) {
							endFlag = false;
							break;
						}
						str += this.parser('normal',{date: date.formatDate(firstDate, 'cn')}, true);
					firstDate = this.addOneDay(firstDate);
					}
			}
				}
		if(firstDate.week === 0) interval = 0;
		else interval = 6 - (firstDate.week - 1);
		for(i=0; i<interval; i++) {
			str += this.parser('normal',{date: date.formatDate(firstDate, 'cn')}, true);
			firstDate = this.addOneDay(firstDate);
		}
		if(str.match(/<\/li>/ig).length === 35) {
			for(i=0; i<7; i++) {
				str += this.parser('normal',{date: date.formatDate(firstDate, 'cn')}, true);
				firstDate = this.addOneDay(firstDate);
			}
		}
		return str;
	},
	firstDay: function() {
		var firstDate;
		firstDate = this.dateObj(date.formatDate(this.currentDay).replace(/[0-9][0-9]$/, '01'));
		return this.dateObj(firstDate.time - (firstDate.week * date.oneDay()));
	},
	addOneDay: function(date) {
		return this.dateObj(date.time + this.oneDay());
	},
	beforDay: function(result, sign) {
		endDate = date.getDateObj(date.formatDate(date.getDateObj(this.continueMoney[this.continueMoney.length - 1].activityStarEnd)));
		startDate = date.getDateObj(date.formatDate(date.getDateObj(this.continueMoney[this.continueMoney.length - 1].activityStarTime)));
		if(startDate.time === endDate.time) {
			return '';
		}
		if(sign) return this.signDay(result);
		var str = '';
		for(this.i=0; this.i<result.length; this.i++) {
			if(this.lastTime === 0) {
				this.lastTime = this.getSignTime(result[this.i]);
				this.i--;
			} else if(this.endFlag) {
				this.endFlag = false;
				break;
			} else {
				this.startDate = this.getSignTime(result[this.i]);
				this.interval = this.getDayInterval(this.startDate, this.lastTime);
				str += this.dayIntervalStatus(result[this.i], this.startDate, this.lastTime, this.i, this.continueMoney, this.i === result.length - 1, this.currentDay);
			}
		}
		return str;
	},
	getSignTime: function(time) {
		return date.getDateObj(time.signTime);
	},
	isUnFlag: function() {
		return this.unFlag;
	},
	setUnFlag: function(bool) {
		this.unFlag = bool;
	},
	getDayInterval: function(action, last) {
		if(this.isUnFlag()) {
			this.setUnFlag(false);
			return this.interval;
		} else {
			return (action.time - last.time) / date.oneDay();
		}
	},
	dayIntervalStatus: function(result, actionTime, lastTime, i, continueMoney, isEnd, curDay) {
		var str = '';
		if(i===0 && this.startFlag) {
			str = this.dayIsCheckin(result.continuSignStime, actionTime);
		} else if(isEnd === true) {debugger
			str += this.curDateStatus(result.resultStatus, actionTime, continueMoney[result.continuSignDay]);
			str += this.dayIsCheckin(result.signTime, curDay, isEnd);
		} else {
			if(this.interval === 1 || this.interval === 0) {
				str += this.curDateStatus(result.resultStatus, actionTime, continueMoney[result.continuSignDay]);
				this.lastTime = actionTime;
			} else {
				str += this.unCheckArr(lastTime);
				this.reductionValues();
			}
		}
		return str;
	},
	dayIsCheckin: function(result, actionTime, end) {
		var tmpTime, str = '';
		tmpTime = date.getDateObj(result);
		if(tmpTime.time !== actionTime.time) {
			for(i=0; ; i++) {
				tmpTime = date.getDateObj(tmpTime.time + date.oneDay());
				if(tmpTime.time === actionTime.time) {
					break;
				}
				str += this.unCheckStyle(tmpTime);
			}
			if(!end) this.reductionValues({startFlag: false});
			else this.reductionValues({endFlag: true});
			return str;
		}
	},
	reductionValues: function(add) {
		var i;
		this.i--;
		this.setUnFlag(true);
		this.interval = 0;
		this.lastTime = 0;
		if(add) {
			for(i in add) {
				this[i] = add[i];
			}
		}
	},
	curDateStatus: function(status, actionTime, result) {
		if(status === 0) {
			tempStr = 'full';
		} else if(status === 1) {
			tempStr = 'unfull';
		}
		return this.checkinStyle(actionTime, result, tempStr);
	},

	checkinStyle: function(actionTime, result, str, continuSignDay) {
		return this.parser(str, {date: date.formatDate(actionTime, 'cn'),
			money: result.money, unit: result.moneyUnit, continuSignDay: continuSignDay}, true);
	},
	unCheckArr: function(lastTime) {
		var str = '', curTime, i;
		for(i=1; i<this.interval; i++) {
			curTime = date.getDateObj(lastTime.time + (i * date.oneDay()));
			str += this.unCheckStyle(curTime);
		}
		return str;
	},
	unCheckStyle: function(curTime) {
		return this.parser('uncheck', {date: date.formatDate(curTime, 'cn'), continuSignDay: 0}, true);
	},
	getBonus: function(result, dayUnit, moneyUnit) {
		var str = '', unit, total = 0;
		unit = this.getUnit(dayUnit, moneyUnit);
		//str += this.bonusTitle();
		for(this.i=0; this.i<result.length; this.i++) {
			if(this.i === result.length - 1) {
				newResult = this.addResult(result[this.i], unit, total);
				break;
			}
			newResult = this.addResult(result[this.i], unit, total);
			total = newResult.continueMoney;
			str += this.bonusCont(newResult);
		}
		return str;
	},
	bonusTitle: function() {
		return '<tr class="bonus-table-th"><th>连续签到</th><th>奖金</th><th>奖金合计</th></tr>';
	},
	bonusCont: function(result) {
		return this.parser(this.bonusContinue, result);
	},
	getUnit: function(dayUnit, moneyUnit) {
		return {
			dayUnit: dayUnit ? dayUnit : '天',
			moneyUnit: moneyUnit ? moneyUnit : '元'
		};
	},
	addResult: function(result, unit, total) {
		result.dayUnit = unit.dayUnit;
		result.moneyUnit = unit.moneyUnit;
		result.continueMoney = total + result.money;
		this.continueMoneyObj(result);
		return result;
	},
	continueMoneyObj: function(result) {
		var tmp = {}, i;
		for(i in result) {
			tmp[i] = result[i];
		}
		this.continueMoney.push(result);
	},
	signDay: function(result) {
		var str = '';
		//str += this.signDayInfoTitle();
		for(this.i=0; this.i<result.length; this.i++) {
			str = this.signDayInfoCont(result[this.i], this.continueMoney) + str;
		}
		return str;
	},
	signDayInfoTitle: function() {
		return '<tr class="check-table-th"><th>签到时间</th><th>连续签到开始日期</th><th>连续签到结算日期</th><th>连续签到天数</th><th>奖金</th><th>奖金发放时间</th></tr>';
	},
	signDayInfoCont: function(result, continueMoney) {
		var str = '';
		result.moneyUnit = continueMoney[1].moneyUnit;
		result.bonus = continueMoney[result.continuSignDay].continueMoney;
		str += this.checkLiStyle(result);
		return str;
	},
	checkLiStyle: function(result) {
		return this.parser(this.checkinLi, result);
	},
	afterDay: function(result) {
		var str = '';
		str += this.curDay();
		str += this.willDay(result, this.currentDay, this.already);
		return str;
	},
	curDay: function() {
		this.getCurrentDay();
		return this.curDayStyle();
	},
	curDayStyle: function() {
		return this.parser('today', {date: date.formatDate(this.currentDay, 'cn')}, true);
	},
	getCurrentDay: function() {
		this.currentDay = date.getDateObj(date.formatDate(date.getDateObj()));
	},
	willDay: function(result, curDay, already) {
		var len, str = '';
		len = this.afterDayTotal(result, curDay);
		//len = this.activeTotalDays(result) - already - 1;
		for(this.i=1; this.i<=len; this.i++) {
			str += this.willDayStyle(curDay.time, this.i);
		}
		return str;
	},
	willDayStyle: function(curDay, i) {
		return this.parser('normal', {date: date.formatDate(date.getDateObj(curDay + (i * date.oneDay())), 'cn')}, true);
	},
	afterDayTotal: function(result, curDay) {
		var etime;
		etime = date.getDateObj(result[0].continuSignEtime);
		return Math.abs(etime.time - curDay.time) / (date.oneDay());
	}
};
var checkin = new Checkin();
$(document).ready(function() {
	var str = '';
	User.getStatus(function (res) {
		Navigation.init(res);
	});
	$(window).scroll(function() {
		$('.alert').css('top', $(document).scrollTop() + 300 + 'px');
	});
	//var host = location.protocol + '//' + location.host;
	$.ajax({
		url: '/sobet/api/i/u/activity/getUserLotteryAmount',
		type: 'GET',
		dataType: 'json',
		date: '',
		cache: false,
		success: function(data) { debugger
			$('.footer_float').eq(0).css('zIndex', '9998');
			$('#mc_header').css('position', 'relative').css('zIndex', '900').css('height', '32px');
			$('.home').eq(0).show();
			$('.footer_icon').eq(0).remove();
			$('.menu_bg').eq(0).hide();
			$('.alert div').off('click').on('click', function() {
				$(this).parent().parent().parent().hide();
			});
			if(typeof data !== 'object') data = JSON.parse(data);
			if(typeof data.code === 'number' && data.code === 0) {
				var bonus = parseInt(data.result.amount);
				$('.title-betting-bg').eq(0).find('span').eq(0).html(bonus > 1000 ? '大于1000元' : bonus + '元');
				$.ajax({
					url: '/sobet/api/i/u/activity/getNewActivityMoney',
					type: 'GET',
					dataType: 'json',
					cache: false,
					data: '',
					success: function(data) {
						if(typeof data !== 'object') data = JSON.parse(data);
						if(typeof data.code === 'number' && data.code === 0) {
							str = checkin.getBonus(data.result);
							$('.bonus-table').eq(0).append(str);
							$.ajax({
								url: '/sobet/api/i/u/activity/getUserSignData',
								type: 'GET',
								dataType: 'json',
								cache: false,
								data: '',
								success: function(data) {debugger
									if(typeof data !== 'object') data = JSON.parse(data);
									if(typeof data.code === 'number' && data.code === 0) { debugger
										//data.result = data2.result;

											str = checkin.calendarList(data.result);
											$('.time-li').eq(0).append(str);
											if(data.result[0]) {
												var res = data.result[data.result.length - 1];
												var continueMoney = checkin.continueMoney[res.continuSignDay];
												var cur = $('.today').eq(0);
												var sstr = '';
												if(date.formatDate(checkin.currentDay) == res.signTime) {
													if(res.continuSignDay < 7) {
														sstr = checkin.parser('unfull', {date: date.formatDate(date.getDateObj(res.signTime),'cn'), money: continueMoney.money, unit: continueMoney.moneyUnit, continuSignDay: res.continuSignDay}, true);
													} else if(res.continuSignDay == 7) {
														sstr = checkin.parser('full', {date: date.formatDate(date.getDateObj(res.signTime),'cn'), money: continueMoney.money, unit: continueMoney.moneyUnit, continuSignDay: res.continuSignDay}, true);
													}
													cur.before(sstr);
													cur.remove();
												}
												str = checkin.beforDay(data.result, true);
												$('.check-table-cont').eq(0).append(str);
											}

											/*
											if($('.check-table-cont').eq(0).find('li').length > 10) {
												$('.check-table-cont').eq(0).css('overflowY', 'scroll');
											}
											*/
											// 点击签到按钮

											$('.check').eq(0).on('click', function() {debugger
												$('.check').eq(0).hide();

												$('.alert').css('top', $(document).scrollTop() + 300 + 'px');
												var $this = $(this);
												$.ajax({
													url: '/sobet/api/i/u/activity/userSign',
													type: 'POST',
													dataType: 'json',
													cache: false,
													data: '',
													success: function(data) { debugger
														if(typeof data !== 'object') JSON.parse(data);
														if(typeof data.code === 'number' && data.code === 0) {
															$('.msg-success').eq(0).show();
															var str = '', continuSignDay, $curLi, continueMoney, index, prev;
															$curLi = $('.check').eq(0).parent();
															continuSignDay = parseInt($curLi.prev().attr('continuSignDay')) + 1;
															continueMoney = checkin.continueMoney;
															if(continuSignDay < 7) {
																$curLi.before(checkin.parser('unfull',
																	{date: $curLi.find('span').eq(0).html(), money:continueMoney[continuSignDay].money, unit: continueMoney[continuSignDay].moneyUnit, continuSignDay: continuSignDay}, true));
																$('.check').eq(0).parent().remove();
															} else if(continuSignDay == 7) {
																index = $curLi.index();
																for(i=index-6 ;i<index; i++) {
																	prev = $('.time-ul').eq(0).find('li').eq(i);
																	prev.before(checkin.parser('full',
																		{date: prev.find('span').eq(0).html(), money:prev.find('p').eq(0).html(), unit: '', continuSignDay: prev.attr('continuSignDay')}, true));
																	prev.remove();
																}
																$curLi.before(checkin.parser('full',
																	{date: $('.check').eq(0).parent().find('span').eq(0).html(), money:checkin.continueMoney[continuSignDay].money, unit: checkin.continueMoney[continuSignDay].moneyUnit, continuSignDay: continuSignDay}, true));
																$curLi.remove();
															} else if(continuSignDay > 7) {
																$curLi.before(checkin.parser('unfull',
																	{date: $this.parent().find('span').eq(0).html(), money:checkin.continueMoney[1].money, unit: checkin.continueMoney[1].moneyUnit, continuSignDay: 1}, true));
																$curLi.remove();
															}

															$.ajax({
																url: '/sobet/api/i/u/activity/getUserSignData',
																type: 'GET',
																dataType: 'json',
																cache: false,
																data: '',
																success: function(data) {
																	if(typeof data.code === 'number' && data.code === 0) {
																		if(data.result[0]) {
																			var tmp = data.result[data.result.length-1];
																			str = checkin.parser(checkin.checkinLi,
																				{signTime: tmp.signTime, continuSignStime: tmp.continuSignStime, continuSignEtime: tmp.continuSignEtime, continuSignDay: tmp.continuSignDay, bonus: checkin.continueMoney[tmp.continuSignDay].money, moneyUnit:checkin.continueMoney[tmp.continuSignDay].unit});
																		}
																		$('.check-table-cont').eq(0).find('li').eq(0).before(str);
																	}
																},
																error: function(xhr, status, error) {
																		console.log(status);
																		console.log(error);
																	}
															});

														} else {
															$('.msg-failed').eq(0).find('.alert').eq(0).find('p').eq(0).html(data.msg);
															$('.msg-failed').eq(0).show();
															$('.check').eq(0).show();
														}
													},
													error: function(xhr, status, error) {
														console.log(status);
														console.log(error);
													}
												});

												// var data = {
												// 	code: 0,
												// 	success: 'success'
												// }
												// if(typeof date.code === 'number' && date.code === 0) {
												// 	alert(data.success);
												// } else {
												// 	alert(data.success);
												// 	return;
												// }

											});

									} else {
										$('.msg-tip').eq(0).find('.alert').eq(0).find('p').eq(0).html(data.msg);
										$('.msg-tip').eq(0).show();
									}
								},
								error: function(xhr, status, error) {
									console.log(status);
									console.log(error);
								}
							});
						} else {
							$('.title-betting-bg').eq(0).find('span').eq(0).html('');
							$('.msg-tip').eq(0).find('.alert').eq(0).find('p').eq(0).html(data.msg);
							$('.msg-tip').eq(0).show();
						}
					},
					error: function(xhr, status, error) {
						console.log(status + ' - ' + error);
					}
				});
			} else {
				$('.msg-tip').eq(0).find('.alert').eq(0).find('p').eq(0).html(data.msg);
				$('.msg-tip').eq(0).show();
			}
		},
		error: function(xhr, status, error) {
			console.log(status + ' - ' + error);
		}
	});


	//var bonus = 370;
	//$('.title-betting-bg').eq(0).find('span').eq(0).html(bonus > 1000 ? '大于1000元' : bonus + '元');

	//if(typeof data.code === 'number' && data.code === 0) {
		//result = data.result;
		/*
		str = checkin.afterDay(data.result);
		console.log('after - ' + str);
		str = checkin.beforDay(data.result) + str;
		console.log('before - ' + str);
		$('.time-li').eq(0).append(str);
		*/
		/*
		str = checkin.calendar(data.result);
		console.log(str);
		$('.time-li').eq(0).append(str);
		*/



		/*
		str = checkin.calendarList(data.result);
		$('.time-li').eq(0).append(str);


		str = checkin.beforDay(data.result, true);
		console.log('beforeL - ' + str);
		$('.check-table-cont').eq(0).append(str);
		*/


	//}
});