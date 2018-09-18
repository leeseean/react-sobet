/**
 * @author Maple Joe
 */

'use strict';
var trend = {
	tred: '01,02,07,08,12,13,18,19,23,24,29,30,34,35,40,45,46',
	tblue: '03,04,09,10,14,15,20,25,26,31,36,37,41,42,47,48',
	tgreen: '05,06,11,16,17,21,22,27,28,32,33,38,39,43,44,49',
	animalsNums: {
		'鼠': 0,
		'牛': 1,
		'虎': 2,
		'兔': 3,
		'龙': 4,
		'蛇': 5,
		'马': 6,
		'羊': 7,
		'猴': 8,
		'鸡': 9,
		'狗': 10,
		'猪': 11,
		'base': 12
	},
	animalsIssue: [
		'01,13,25,37,49', '12,24,36,48', '11,23,35,47', '10,22,34,46', '09,21,33,45', '08,20,32,44',
		'07,19,31,43', '06,18,30,42', '05,17,29,41', '04,16,28,40', '03,15,27,39', '02,14,26,38'
	],
	animals: [
		{cont: '鼠', nums: '01,13,25,37,49'}, 
		{cont: '牛', nums: '12,24,36,48'}, 
		{cont: '虎', nums: '11,23,35,47'}, 
		{cont: '兔', nums: '10,22,34,46'}, 
		{cont: '龙', nums: '09,21,33,45'},
		{cont: '蛇', nums: '08,20,32,44'},
		{cont: '马', nums: '07,19,31,43'}, 
		{cont: '羊', nums: '06,18,30,42'}, 
		{cont: '猴', nums: '05,17,29,41'},
		{cont: '鸡', nums: '04,16,28,40'},
		{cont: '狗', nums: '03,15,27,39'}, 
		{cont: '猪', nums: '02,14,26,38'}
	],
	base: '175',
	record30: '',
	record50: '',
	record100: '',
	status: {},
	status2: {},
	colors: {
		feRed: 'fe-red',
		feGreen: 'fe-green',
		feBlue: 'fe-blue',
		fRed: 'f-red',
		fGreen: 'f-green',
		fBlue: 'f-blue',
		fiRed: 'fi-red',
		fiGreen: 'fi-green',
		fiBlue: 'fi-blue',
		fWhite: 'f-white'
	},
	tmpl: {
		tableTr: '<div class="table-tr-div">\
					<div class="m">\
						<span class="w-min" style="line-height: 15px; padding-top: 28px;">{{issue}}</span>\
						<span class="w-large">\
							<ul class="table-ul">\
							{{numsP}}\
							</ul>\
							<ul class="table-ul table-ul2">\
							{{animalsP}}\
							</ul>\
						</span>\
						<span class="w-mlarge">\
							<ul class="table-status">\
							{{numStatusP}}\
							</ul>\
						</span>\
						<span class="w-mid last">\
							<ul class="table-total-status">\
							{{totalStatusP}}\
							</ul>\
						</span>\
					</div>\
				</div>',
		nums: '<li class="{{color}} {{color2}}">{{liCont}}</li>',
		status: '<li class="{{f-red}}{{f-green}}{{f-blue}}">{{liCount}}</li>',
		total: '<li class="table-total {{color}}">{{liCont}}</li>',
		statusTotal: '<li class="{{color1}}">{{maxmin}}</li><li class="last {{color2}}">{{type}}</li>',
		statusNum: '<li class="{{color1}}">{{maxmin}}</li><li class="{{color2}}">{{type}}</li><li class="{{color3}}">{{color}}</li>'
	},
	parser: function(str, data) {
		var reg, i;
		for (i = 0; i < 2; i++) {
			/(\{\{.*?\}\})/g.test(str);
			reg = RegExp.$1;
			if (!reg) break;
			str = replaceAll(str, reg, data);
			i--;
		}
		return str;
		function replaceAll(str, reg, data) {
			if (typeof data === 'object') {
				var rep = data[reg.substring(2, reg.length - 2)];
				return str.replace(new RegExp(reg, 'gm'), typeof rep !== 'undefined' ? rep : '');
			}
			return str.replace(new RegExp(reg, 'gm'), data);
		}
	},
	main: function() {
		this.getTrend(this);
		this.navEvent(this);
	},
	navEvent: function(_t) {
		$('.trend-nav li').on('click', function() {
			var t = $(this), num;
			t.parent().find('li').removeClass('on');
			t.addClass('on');
			$('.table-tr').html(_t['record' + t.data().num])
		});
	},
	getTrend: function(_t) {
	    const lt = window.location.href.split('?')[1] ? window.location.href.split('?')[1] : 'XGLHC';
        const name = lt === 'JSLHC' ? '极速六合彩' : '香港六合彩';
        $('.logo span').html(name);
		$.ajax({
			url: '/lottery/api/u/v1/lottery/trend',
			method: 'get',
		 	data: {lottery: lt, issuecount: 100},
			success: function(res) {
				res = res.result.data;
				_t.render(_t, res.reverse());
			}
		});
	},
	render: function(_t, res) {
		var strObj = '', tmp = '', el = $('.table-tr'),
			colors = this.colors, i, len, count = 0, str = '';
		for(i=0, len=res.length; i<len; i++) {
			strObj = this.getNums(_t, res[i].code, res[i].zodiac, colors);
			res[i].issue = res[i].issue.replace('-', '<br>-');
			res[i].numsP = strObj.nums;
			res[i].animalsP = strObj.animals;
			str = this.getStatus(_t, this.tmpl.statusTotal, this.status);
			res[i].totalStatusP = str;
			str = this.getStatus(_t, this.tmpl.statusNum, this.status2);
			res[i].numStatusP = str;
			tmp = _t.parser(_t.tmpl.tableTr, res[i]) + tmp;
			++count;
			this.setRecord(_t, el, count, tmp);
		}
		this.setRecord(_t, el, count, tmp, true);
	},
	setRecord: function(_t, el, count, tmp, tail) {
		if(tail) {
			el.html(tmp);
			if(count>0 && count<30) {
				this.record30 = this.record50 = this.record100 = el.html();
			} else if(count>30 && count<50) {
				this.record50 = this.record100 = el.html();
				el.html(this.record30);
			} else if(count>50 && count<100) {
				this.record100 = el.html();
				el.html(this.record30);
			} 
			return;
		}
		el.html(tmp);
		if(30 === count) {
			this.record30 = el.html();
		} else if(50 === count) {
			this.record50 = el.html();
			el.html(this.record30);
		} else if(100 === count) {
			this.record100 = el.html();
			el.html(this.record30);
		}
	},
	getNums: function(_t, nums, animal, colors) {
		var str = '', str2 = '', sum = 0, obj, num;
		nums = nums.split(',');
		for(var i=0, len=nums.length; i<len; i++) {
			num = window.parseInt(/^0/.test(nums[i]) ? nums[i][1] : nums[i]);
			obj = this.getColor(_t, nums[i], {}, colors);
			if(i === len-1) {
				obj = this.getSepcial(_t, obj, colors);
			}
			str += this.parser(this.tmpl.nums, obj);
			obj = this.getAnimals(_t, nums[i], animal, {}, colors);
			str2 += this.parser(this.tmpl.nums, obj);
			sum += num;
		}
		str += this.getTotal(_t, sum, colors)
		return {
			nums: str,
			animals: str2
		};
	},
	getAnimals: function(_t, num, animal, obj, colors) {
		var a = this.animals, len = a.length,
			reg = new RegExp('(^|,)' + num + '(,|$)', 'i'),
			tmp, animalNum, i;
		this.getAnimalsLoop(animal);
		for(i=0; i<len; i++) {
			tmp = a[i];
			if(reg.test(tmp.nums)) {
				obj.liCont = tmp.cont;
				break;
			}
		}
		return obj;
	},
	getAnimalsLoop: function(num) {
		var animals = this.animals, i, count = 0;
		if(animals[this.animalsNums[num]].nums.split(',').length !== 5) {
			var animalsNums = this.animalsNums, issues = this.animalsIssue;
			for(i=animalsNums[num]; i<animalsNums.base; i++) {
				animals[i].nums = issues[count++];
			}
			for(i=0; i<animalsNums[num]; i++) {
				animals[i].nums = issues[count++];
			}
		}
	},
	getSepcial: function(_t, obj, colors) {
		var color = obj.color;
		this.status = {};
		if(/red/i.test(color)) {
			obj.color = colors.fiRed;
			this.status2.color = '红波';
			this.status2.color3 = colors.fRed;
		} else if(/green/i.test(color)) {
			obj.color = colors.fiGreen;
			this.status2.color = '绿波';
			this.status2.color3 = colors.fGreen;
		} else if(/blue/i.test(color)) {
			obj.color = colors.fiBlue;
			this.status2.color = '蓝波';
			this.status2.color3 = colors.fBlue;
		}
		obj.color2 = colors.fWhite;
		if(obj.oldNum % 2 === 0) {
			this.status2.type = '双';
			this.status2.color2 = colors.fBlue;
		} else {
			this.status2.type = '单';
			this.status2.color2 = colors.fRed;
		}
		if(obj.oldNum >= 25) {
			this.status2.maxmin = '大';
			this.status2.color1 = colors.fRed;
		} else {
			this.status2.maxmin = '小';
			this.status2.color1 = colors.fBlue;
		}
		return obj;
	},
	getColor: function(_t, num, obj, colors) {
		obj.oldNum = num;
		num = /^0/.test(num) ? num[1] : num;
		var reg = new RegExp('(^|,)' + obj.oldNum + '(,|$)', 'i');
		if(reg.test(this.tred)) {
			obj.color = colors.feRed;
		} else if(reg.test(this.tgreen)) {
			obj.color = colors.feGreen
		} else if(reg.test(this.tblue)) {
			obj.color = colors.feBlue;
		}
		obj.liCont = obj.oldNum;
		return obj;
	},
	getTotal: function(_t, sum, colors) {
		var obj = {};
		this.status = {};
		if(sum >= this.base) {
			obj.color = colors.fRed;
			this.status.maxmin = '大';
			this.status.color1 = colors.fRed;
		} else {
			obj.color = colors.fBlue;
			this.status.maxmin = '小';
			this.status.color1 = colors.fBlue;
		}
		obj.liCont = sum;
		if(sum % 2 === 0) {
			this.status.type = '双';
			this.status.color2 = colors.fBlue;
		} else {
			this.status.type = '单';
			this.status.color2 = colors.fRed;
		}
		return this.parser(this.tmpl.total, obj);
	},
	getStatus: function(_t, tmpl, obj) {
		return this.parser(tmpl, obj);
	}
}
trend.main();