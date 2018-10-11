/* 
        根据本命年生肖判断每个生肖对应的数字,获取生肖的号码盘数字
        规则：本命年生肖为1，累加12；逆生肖序号递增。比如本命年是马为1，则蛇为2.
        参数：bmnsx 本命年生肖 String如'牛'
    */
export function calcSxArr(bmnsx) {
    const sxArr = ['猪', '狗', '鸡', '猴', '羊', '马', '蛇', '龙', '兔', '虎', '牛', '鼠'];
    const cnToEn = {
        '猪': 'zhu',
        '狗': 'gou',
        '鸡': 'ji',
        '猴': 'hou',
        '羊': 'yang',
        '马': 'ma',
        '蛇': 'she',
        '龙': 'long',
        '兔': 'tu',
        '虎': 'hu',
        '牛': 'niu',
        '鼠': 'shu'
    };
    //生肖原本的序号，号码盘展示还是按传统的次序展示
    const normalIndexArr = {
        '猪': '11',
        '狗': '10',
        '鸡': '9',
        '猴': '8',
        '羊': '7',
        '马': '6',
        '蛇': '5',
        '龙': '4',
        '兔': '3',
        '虎': '2',
        '牛': '1',
        '鼠': '0'
    };
    const bmnsxIndex = sxArr.indexOf(bmnsx);
    const newArr = [...sxArr.slice(bmnsxIndex, 12), ...sxArr.slice(0, bmnsxIndex)]; //按本命年的生肖排序
    //生成渲染号码盘的数组
    let plateArr = newArr.map((value, index, arr) => {
        return {
            'cn': value,
            'en': cnToEn[value],
            'normalIndex': normalIndexArr[value],
            'code': Array(index === 0 ? 5 : 4).fill(0).map((v, i) => { //本命年有5个数字。递增12
                return `0${index + 1 + i * 12}`.slice(-2);
            })
        };
    });
    plateArr = plateArr.sort((a, b) => { //按传统次序排回来
        return a.normalIndex - b.normalIndex;
    });
    return plateArr;
}

export function calcSxFilterConfig(bmnsx) {
    const result = {};
    const sxArr = ['猪', '狗', '鸡', '猴', '羊', '马', '蛇', '龙', '兔', '虎', '牛', '鼠'];
    const bmnsxIndex = sxArr.indexOf(bmnsx);
    const newArr = [...sxArr.slice(bmnsxIndex, 12), ...sxArr.slice(0, bmnsxIndex)]; //按本命年的生肖排序
    newArr.forEach((item, index) => {
        result[item] = Array(index === 0 ? 5 : 4).fill(0).map((v, i) => { //本命年有5个数字。递增12
            return `0${index + 1 + i * 12}`.slice(-2);
        });
    });
    return result;
}
/**
 * 计算跨度
 * 规则：计算数组元素中最大值和最小值的差值
 * @param {数组} arr 
 */
export function calcKuadu(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('所传参数必须是数组');
    }
    arr = arr.map(v => Number(v));
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

/**
 * 计算和值
 * 规则：计算数组元素中所有值的和值
 * @param {数组} arr 
 */
export function calcHezhi(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('所传参数必须是数组');
    }
    arr = arr.map(v => Number(v));
    return arr.reduce((a, b) => a + b);
}
/**
 * 计算二星对子
 * 
 * @param {Array} arr 
 * @returns Boolean
 */
export function calc2xDuizi(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('所传参数必须是数组');
    }
    if (arr.length !== 2) {
        throw new Error('数组只能含2个数字');
    }
    arr = arr.map(v => Number(v));
    const length = [...new Set(arr)].length;
    if (length === 1) return true;
    return false;
}
//计算龙湖和
export function calcLhh(a, b) {
    if (a > b) {
        return '<em class="margin-0-4px shape--long">龙</em>';
    }
    if (a < b) {
        return '<em class="margin-0-4px shape--hu">虎</em>';
    }
    return '<em class="margin-0-4px shape--he">和</em>';
}
/* 
牛牛：
根据开奖第一球~第五球开出的球号数字为基础，
任意组合三个号码成0或10的倍数，
取剩余两个号码之和为点数（大于10时减去10后的数字作为兑奖基数，如：00026为牛8,02818为牛9，68628、23500皆为牛牛，
26378、15286因任意三个号码都无法组合成0或10的倍数，
称为无牛，注：当五个号码相同时，只有00000视为牛牛，其它11111,66666等皆为无牛）。
大小：牛大（牛6、牛7、牛8、牛9、牛牛），
牛小（牛1、牛2、牛3、牛4、牛5），
若开出斗牛结果为无牛，则投注牛大牛小皆为不中奖。
单双：牛单（牛1、牛3、牛5、牛7、牛9），牛双（牛2、牛4、牛6、牛8、牛牛），
若开出斗牛结果为无牛，
则投注牛单牛双皆为不中奖。
*/
export function calcNiuniu(arr) {
    arr = arr.map(v => Number(v));
    const HZ = arr.reduce((a, b) => a + b);
    const YU = HZ % 10;
    const combinationArr = choose(arr, 3);
    // 是否有 任意组合三个号码成0或10的倍数，
    const has10X = combinationArr.findIndex(a => {
        const _hz = a.reduce((m, n) => m + n);
        return _hz % 10 === 0;
    }) !== -1;
    let niuniuXt;
    let dxXt;
    let dsXt;
    if (!has10X) {
        niuniuXt = '<em class="niuniu">无牛</em>';
        dxXt = '---';
        dsXt = '---';
    } else {
        niuniuXt = YU === 0 ? '<em class="margin-0-4px shape--niuniu">牛牛</em>' : `<em class="margin-0-4px shape--niuniu">牛${YU}</em>`;
        dxXt = [6, 7, 8, 9, 0].indexOf(YU) !== -1 ? '<em class="margin-0-4px shape--niuda">牛大</em>' : '<em class="margin-0-4px shape--niuxiao">牛小</em>';
        dsXt = YU % 2 === 0 ? '<em class="margin-0-4px shape--niushuang">牛双</em>' : '<em class="margin-0-4px shape--niudan">牛单</em>';
    }
    return {
        nn: niuniuXt,
        dx: dxXt,
        ds: dsXt
    };
}
//求数组组合的所有组合方式[1,2,3]->[1,2],[1,3],[2,3]
export function choose(arr, size) {
    var allResult = [];

    function _choose(arr, size, result) {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size == arrLen) {
            allResult.push([].concat(result, arr))
        } else {
            for (var i = 0; i < arrLen; i++) {
                var newResult = [].concat(result);
                newResult.push(arr[i]);

                if (size == 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [].concat(arr);
                    newArr.splice(0, i + 1);
                    _choose(newArr, size - 1, newResult);
                }
            }
        }
    }
    _choose(arr, size, []);

    return allResult;
}
/* 
(万位+千位)的和值，取其个位数为庄；
(十位+个位)的和值，取其个位数为闲。
庄大于闲，即押"庄"赢；
庄小于闲，即押"闲"赢；
庄=闲，即押"和"赢；
若万位与千位号码相同，即押"庄对"赢；
若十位与个位号码相同，即押"闲对"赢；
若庄为6，闲小于6，即押"Super6"赢。
*/
export function calcBjl(arr) {
    arr = arr.map(v => Number(v));
    const wan = arr[0];
    const qian = arr[1];
    const shi = arr[3];
    const ge = arr[4];
    const zhuang = (wan + qian) % 10;
    const xian = (shi + ge) % 10;
    let bjlXtPlus = '';
    if (wan === qian) {
        bjlXtPlus = '<em class="shape--zhuangdui">庄对</em>';
    }
    if (shi === ge) {
        bjlXtPlus = '<em class="shape--xiandui">闲对</em>';
    }
    if (wan === qian && shi === ge) {
        bjlXtPlus = '<em class="shape--zhuangdui">庄对</em><em class="shape--xiandui">闲对</em>';
    }
    if (zhuang > xian) {
        if (zhuang === 6 && xian < 6) {
            return `<i><em class="shape--s6">S6${bjlXtPlus}</em></i>`;
        }
        return `<i><em class="shape--zhuang">庄${bjlXtPlus}</em></i>`;
    }
    if (zhuang < xian) {
        return `<i><em class="shape--xian">闲${bjlXtPlus}</em></i>`;
    }
    return `<i><em class="shape--he">和${bjlXtPlus}</em></i>`;
}
/* 
    数组转成计算每个值重复的个数 的对象
    [1,3,4,5,1] => {
        1:2,
        3:1,
        4:1,
        5:1
    }
*/
export function arrToCountItemObj(arr) {
    const obj = Object.create(null);
    for (let item of arr) {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    }
    return obj;
}
//计算顺子 参数，数组范围最小值，范围最大值
export function calcShunzi(arr, min = 0, max = 9) {
    arr = arr.map(v => Number(v));
    arr.sort((a, b) => a - b);
    //如果数组最大值超过设定的最大值max，返回错误提醒
    if (arr[arr.length - 1] > max) {
        throw Error("数组元素最大值超过预期，错误");
        return false;
    }
    const flag = arr.every((m, n) => n == 0 ? true : m - arr[n - 1] == 1 ? true : false);
    if (flag) return true; //如果传进来的数组本身是[2,3,4]这样的连续递增的数据，返回true
    //走到这里，索命传进来的数据不是连续的，那么可以判断没有的数据是不是连续的
    //把1-5这几个元素看成一个圆环，取环上一段连续的数据，那么剩下的数据也必然是连续的
    const arrRest = [];
    //从[1,2,3,4,5]中检测[1,5,2]少了哪些数据
    for (let i = min; i < max + 1; i++) {
        arr.indexOf(i) === -1 && arrRest.push(i);
    }
    //arrRest得到[3,4],然后检测arrRest是不是连续的
    return arrRest.every((t, i) => i == 0 ? true : t - arrRest[i - 1] == 1 ? true : false);
}
//计算杂六
export function calcBanshunzi(arr, min = 0, max = 9) {
    arr = arr.map(v => Number(v));
    if (calcShunzi(arr, min, max)) {
        return false;
    }
    if (arr.indexOf(min) !== -1 && arr.indexOf(max) !== -1) {
        return true;
    }
    arr.sort((a, b) => a - b);
    const reduceArr = [];
    let start = arr[0];
    for (let i = 1; i < arr.length; i++) {
        reduceArr.push(arr[i] - start);
        start = arr[i];
    }
    return reduceArr.indexOf(1) !== -1;
}
//daxiaodanshuang
export function calcDxds(num, flag) {
    num = Number(num);
    let dx;
    let ds;
    if (num >= flag) {
        dx = '<em class="margin-0-4px shape--da">大</em>';
    } else {
        dx = '<em class="margin-0-4px shape--xiao">小</em>';
    }
    if (num % 2 === 0) {
        ds = '<em class="margin-0-4px shape--dan">双</em>';
    } else {
        ds = '<em class="margin-0-4px shape--dan">单</em>';
    }
    return {
        dx,
        ds
    };
}
//daxiaogeshu
export function calcDxgs(arr, flag) {
    arr = arr.map(v => Number(v));
    let da = 0;
    let xiao = 0;
    for (let value of arr) {
        if (value >= flag) {
            da++;
        } else {
            xiao++;
        }
    }
    return {
        da: `<em class="margin-0-4px>${da}</em>`,
        xiao: `<em class="margin-0-4px>${xiao}</em>`
    };
}
//danshuanggeshu
export function calcDsgs(arr) {
    let dan = 0;
    let shuang = 0;
    for (let value of arr) {
        if (value % 2 === 0) {
            shuang++;
        } else {
            dan++;
        }
    }
    return {
        dan: `<em class="margin-0-4px>${dan}</em>`,
        shuang: `<em class="margin-0-4px>${shuang}</em>`
    };
}
/**
 * 计算3星组态
 * 规则：3个号码中有两个相同为“组三”，3个都不相同为“组六”,3个相同为“豹子”
 * @param {数组} arr [1,2,3],只能是3个元素
 */
export function cacl3xZutai(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('所传参数必须是数组');
    }
    if (arr.length !== 3) {
        throw new Error('数组只能含3个数字');
    }
    arr = arr.map(v => Number(v));
    const obj = {
        1: '<em class="margin-0-4px shape--baozi">豹子</em>',
        2: '<em class="margin-0-4px shape--duizi">对子</em>',
        3: calcShunzi(arr, 0, 9) ? '<em class="margin-0-4px shape--shunzi">顺子</em>' : '<em class="margin-0-4px shape--za6">杂六</em>'
    };
    const deduplicationArr = [...new Set(arr)]; //去重
    return obj[deduplicationArr.length];
}