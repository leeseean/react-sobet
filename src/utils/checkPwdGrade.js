/**
 * @author conrad
 * @date 2018-11-21
 * @desc 校验密码设置等级，1 弱，2 中，3强
 */ 

export function checkPwdGrade(pwd=''){
    var m = 0;
    var Modes = 0;
    for (let i = 0; i < pwd.length; i++) {
        var charType = 0;
        var t = pwd.charCodeAt(i);
        if (t >= 48 && t <= 57) {
            charType = 1;
        } else if (t >= 65 && t <= 90) {
            charType = 2;
        } else if (t >= 97 && t <= 122) {
            charType = 4;
        } else {
            charType = 4;
        }
        Modes |= charType;
    }
    for (let i = 0; i < 4; i++) {
        if (Modes & 1) {
            m++;
        }
        Modes >>>= 1;
    }
    if (pwd.length <= 4) {
        m = 1;
    }
    if (pwd.length <= 0) {
        m = 0;
    }
    return m;
}
