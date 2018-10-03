/*首页余额滚动查询效果js*/
//乘法函数  
function accMul(arg1, arg2) {  
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
    try {  
        m += s1.split(".")[1].length;  
    }  
    catch (e) {  
    }  
    try {  
        m += s2.split(".")[1].length;  
    }  
    catch (e) {  
    }  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);  
}   

//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。   
Number.prototype.mul = function (arg) {  
    return accMul(arg, this);  
};   

//除法函数  
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;  
    try {  
        t1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
    }  
    try {  
        t2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
    }  
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));  
        r2 = Number(arg2.toString().replace(".", ""));  
        return (r1 / r2) * pow(10, t2 - t1);  
    }  
}   
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。   
Number.prototype.div = function (arg) {
    return accDiv(this, arg);  
};
function accAdd(arg1, arg2) {  
    var r1, r2, m;  
    try {  
        r1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r1 = 0;  
    }  
    try {  
        r2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r2 = 0;  
    }  
    m = Math.pow(10, Math.max(r1, r2));  
    return (arg1.mul(m) + arg2.mul(m)).div(m);  
}   

//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。   
Number.prototype.add = function (arg) {  
    return accAdd(arg, this);  
};  

  
//减法函数  
function Subtr(arg1, arg2) {  
    var r1, r2, m, n;  
    try {  
        r1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r1 = 0;  
    }  
    try {  
        r2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r2 = 0;  
    }  
    m = Math.pow(10, Math.max(r1, r2));  
     //last modify by deeka  
     //动态控制精度长度  
    n = (r1 >= r2) ? r1 : r2;  
    return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));  
}  
  
//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。   
Number.prototype.sub = function (arg) {  
    return Subtr(this, arg);  
};

var $qk = $(".q-k"); 
var $wk = $(".w-k"); 
var $e = $(".e"); 
var $hk = $(".h-k"); 
var $tk = $(".t-k"); 
var $k = $(".k"); 
var $h = $(".h"); 
var $t = $(".t"); 
var $single = $(".single"); 
var $td = $(".t-d"); 
var $hd = $(".h-d"); 
var $sd = $(".s-d"); 
var $ad = $(".a-d"); 
var $comma = $(".comma.sign");
var $dot = $(".dot.sign");
var $bigMap = $(".detail-map");

var data = {
  numbers: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
  targetClass: {
    "qk": $qk,
    "wk": $wk,
    "e": $e,
    "hk": $hk,
    "tk": $tk,
    "k": $k,
    "h": $h,
    "t": $t,
    "single": $single,
    "td": $td,
    "hd": $hd,
    "sd": $sd,
    "ad": $ad
  },
  zero: {
    qk: 0,
    wk: 0,
    e: 0,
    hk: 0,
    tk: 0,
    k: 0,
    h: 0,
    t: 0,
    single: 0,
    td: 0,
    hd: 0,
    sd: 0,
    ad: 0
  },
  numbersTmp: ""
};

(function (){
  function numberDiv(num){
    return "<div class='" + data.numbers[num] + "'>" + num + "</div>";
  }
  
  for(var i = 0; i < 10; i ++) {
    data.numbersTmp += numberDiv(i);
  }
  
  $(".price-div .number").append("<div class='numbers-view'>" + data.numbersTmp + "</div>");
})();

function priceToObj(price){
  if(price == 0) {
    return data.zero;
  }
  var obj = {};
  
  obj.ad = parseInt((price.mul(10000)) % 10); //小4
  obj.sd = parseInt((price.mul(1000)) % 10); //小3
  obj.hd = parseInt((price.mul(100)) % 10); //小2
  obj.td = parseInt((price.mul(10)) % 10); //小1
  obj.single = parseInt(price % 10); //个位
  obj.t = parseInt((price.div(10)) % 10); //十位
  obj.h = parseInt((price.div(100)) % 10); //百位
  obj.k = parseInt((price.div(1000)) % 10); //千位
  obj.tk = parseInt((price.div(10000)) % 10); //万位
  if(String(price).split('.')[0].length <= 2){
    obj.qk = obj.wk = obj.e = obj.hk = 0;
  }else {
    obj.wk = parseInt((price.div(10000000)) % 10); //千万位
    obj.qk = parseInt((price.div(100000000)) % 10); //亿位
    obj.e = parseInt((price.div(1000000)) % 10); //百万位
    obj.hk = parseInt((price.div(100000)) % 10); //十万位
  }
  return obj;
}

// function objToPrice(obj) {
//   return obj.qw.mul(100000000).add(obj.wk.mul(10000000)).add(obj.e.mul(1000000)).add(obj.hk.mul(100000)).add(obj.tk.mul(10000))
//       .add(obj.k.mul(1000)).add(obj.h.mul(100))
//       .add(obj.t.mul(10)).add(obj.single)
//       .add(obj.td.div(10)).add(obj.hd.div(100)).add(obj.hd.div(1000)).add(obj.hd.div(10000));
// }

function animateQueue(){
  locking = false;
  if(eventQueue.length > 0) {
    eventQueue.shift()();
  }
}

$.fn.extend({
  scrollToNumber: function(num, pos, btn){
    var $this = $(this);
    var target = data.numbers[num];
    $this.find(".numbers-view").stop(true, true);

    var top = num * $this.find(".zero").height();
    var currentTop = -parseFloat($this.find(".numbers-view").css("marginTop").split("px")[0]);
    
    if(top == currentTop) {
      return;
    } else if(currentTop < top) {
      $this.find(".numbers-view").animate({marginTop: -top}, 1500, "swing");
    } else {
      $this.find(".numbers-view").append($(data.numbersTmp).addClass("temp"));
      top = $this.find("." + target + ".temp").offset().top - $this.find(".numbers-view").offset().top;
      
      $this.find(".numbers-view").animate({marginTop: -top}, 1500, "swing", function(){
        if($this.find(".zero").size() > 1) {
          var top = $this.find("." + target + ":not(.temp)").first().offset().top - $this.find(".numbers-view").offset().top;
          $this.find(".numbers-view").css({marginTop: -top});
          $this.find(".numbers-view .temp").remove();
        }
      });
    }
  }
})

$.animateToPrice = function(price, btn){
  var obj = priceToObj(price);
  
  $.each(obj, function(key, value){
    data.targetClass[key].scrollToNumber(value, key, btn);
  });
  
  // btn.find('.hammer-down').hide();
  // btn.find('.hammer-up').show();
};

