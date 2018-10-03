/*
 * @Author: Maple Joe
 * @des: 公共方法库
 *       使用之前必须引入
 *       jquery.js navigation.js api.js md5.js jquery.validate.min.js
 */
'use strict';

// 公共库
Navigation.comm = {
    ids: 'comm',
    http: {
        index: '/index'
    },
    EVENT: {
        click: 'click',
        dblclick: 'dblclick',
        menter: 'mouseenter',
        mleave: 'mouseleave',
        input: 'input propertychange',
        sinput: 'input',
        spchange: 'propertychange',
        change: 'change',
        keyup: 'keyup',
        keydown: 'keydown',
        keypress: 'keypress',
        blur: 'blur',
        focus: 'focus',
        submit: 'submit'
    },
    // 充值，转账，提现
    pay: {
        // 特殊页面
        '000': 'formPay',
        '-2': 'error1',
        '-3': 'formPay',
        '-4': 'formBind',
        // 特殊页面模板
        formPay: '<div id="main" class="cards fl cash-main">\
                    <a href="#setPayPassword" style="display: none;"></a>\
                    <div class="charge-con">\
                        <img src="/static/sobet/images/noband.png">\
                    </div>\
                    <div class="charge-con">\
                        您还未设置资金密码，请先去<span>资金密码</span>设置资金密码\
                    </div>\
                    <div class="charge-con">\
                        <a href="/static/sobet/personalCenter.html#capitalPw" class="btn" style="background: #FFA837;">设置资金密码</a>\
                    </div>\
                </div>',
        formBind: '<div id="main" class="cards fl cash-main">\
                    <a href="#bindBankcard" style="display: none;"></a>\
                    <div class="charge-con">\
                        <img src="/static/sobet/images/noband.png">\
                    </div>\
                    <div class="charge-con">\
                        您还未绑定提款银行卡,会影响正常提现,请先去<span>银行卡管理</span>绑定银行卡\
                    </div>\
                    <div class="charge-con">\
                        <a href="/static/sobet/personalCenter.html#bank" style="background: #FFA837;" class="btn">绑定银行卡</a>\
                    </div>\
                </div>',
        error1: '<div id="feedContainer">\
                    <div id="container-feed">\
                     <div id="main-success">\
                        <div class="success">\
                            <p><i class="icon-frown"></i>温馨提示:{{msg}}</p>\
                            <p id="gohome"><em>5</em>秒之后将返回首页，或者点击此处<a href="/index">返回首页</a></p>\
                        </div>\
                     </div>\
                    </div>\
                  </div>',
        // 常用类
        cont: $('.cash-cont').eq(0),
        container: $('#container')
    },
    /* 公共方法 */
    // 字符串解析
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
    empty: function(cur, el) {
        return el.empty();
    },
    // append添加
    addPage: function(cur, cont, str, type) {
        if(!type) return cur.append(cur, cont, 'simple', str);
        return cur.append(cur, cont, type, str);
    },
    // api对接
    action: function(cur, url, p, cb, err) {
        if (p) return Api[url](p, cb, err);
        return Api[url](cb, err);
    },
    // 得到及设置锚点
    anchor: function(cur, a) {
        if(a) return /#/.test(a) ? window.location.hash = a : 
            window.location.hash = '#' + a;
        var href = window.location.href;
        if(/\?/.test()) return href.split('?')[0].split('#')[1];
        return href.split('#')[1];
    },
    // 添加字符串
    append: function(cur, el, data, temp, len) {
        if(data === 'simple') return el.append(temp);
        return el.append(cur.getList(cur, data, temp, len));
    },
    // 表单检验
    form: function(cur, form, check, pay) {
        if(check) Navigation.comm.formCheck(form, check);
        form.on(cur.EVENT.submit, function(evt) {
            cur.formCheck(form, check);
        })
        // form.find('.submit-btn').eq(0).on('click', function(e) {
            
        // });
    },
    formCheck: function(form, check) {
        form.validate(check);
    },
    // 得到列表
    getList: function(cur, data, tmpl, len) {
        var i = 0,
            str = '';
        if (this.isArray(data)) {
            if (!len) len = data.length;
            for (; i<len; i++) {
                str += cur.parser(tmpl, data[i]);
            }
        } else {
            for (i in data) {
                str += cur.parser(tmpl, data[i]);
            }
        }
        return str;
    },
    // 跳转到相应页面
    go: function(href, a) {
        typeof href === 'number' ? window.history.go(href) : 
            window.location.href = href;
    },
    // 当前元素的索引值
    index: function(cur, el) {
        return el.index();
    },
    // 是不是数组
    isArray: function(data) {
        return /array/ig.test(Object.prototype.toString.call(data));
    },
    // md5加密
    md5: function(cur, val, data) {
        if(data) return md5(cur.parser(val, data));
        return md5(val);
    },
    // 清空相应元素
    removePage: function(cur, el) {
        return Navigation.comm.empty(cur, el);
    },
    // 表单序列化
    serialize: function(cur, el) {
        return el.serialize();
    },
    toggle: function(cur, el, type, args) {
        type && el[type]();
    },
    zip: function(cur, data, type, zip) {
        if(typeof data !== 'string')
            data = data.toString();
        if(type === 'sn') {
            return data.substring(0, 1) + zipStr(2);
        } else if(type === 'cardno') {
            return data.substring(0, 4) + zipStr(data.length - 8) + data.substring(data.length - 4);
        }
        function zipStr(num, zip) {
            var i, str = '';
            zip = zip || '*';
            for(i=0; i<num; i++) str += zip;
            return str;
        }
    }
};