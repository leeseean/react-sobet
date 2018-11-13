/**
 * @author conrad
 * @desc input输入框校验
 * @date 2018-11-08
 */

//数字输入基本校验 整数/浮点数  eg:66/(66.66666/0.66666)
const regBaseNum = function ( p ) {
    p = p.toString(); 
    p = p.replace(/[^\d.]/g,'');                    //去除非数字，只留下数字和'.' 
    p = p.replace(/^\./,'');                        //不能以点开头
    p = p.replace(/(^0)(\d*)(\.*\d*)/,'$1$3');      //0开头后面不能再是0
    p = p.replace(/\.{2,}/g,'.');                   //1..连续输入，点只能输入一个
    p = p.replace(/(\d+)(\.)(\d+)(\.)/g,'$1$2$3');  //1.2.3 去除隔断输入‘.’
    return p;
}

//整数/浮点数，可以是0开头小数 ( p > 0 )，第二参数控制小数点后位数 
const regFloat = function ( p , w = '') {
    p = regBaseNum(p);
    if(w){//限制小数点后的位数 
        let reg = new RegExp("(\\d+)(\.\\d{0,"+w+"})(\\d*)$");
        p = p.replace(reg,"$1$2");    
    }
    return p;
}

//整数/浮点数，非0开头小数（p > 1），第二参数控制小数点后位数
const regFloatGtZero = function ( p , w = '') {
    p = regFloat(p,w);
    p = p.replace(/^0*/,'');   //非0开头
    return p;
}

//非零开头整数，第二参数控制输入整数的位数
const regInt = function (p , w = '') {
    p = regBaseNum(p);
    p = p.replace(/(\d+)(\.\d*)/g,'$1'); //去除小数点及以后的数字
    p = p.replace(/^0*/,'');             //非0开头
    if(w){
        let reg = new RegExp("(\\d{0,"+w+"})$");
        p = p.replace(reg,"$1");  
    }
    return p;
}

export {
    regBaseNum,
    regFloat,
    regFloatGtZero,
    regInt
}