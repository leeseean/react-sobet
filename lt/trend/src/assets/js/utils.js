/**
 * 计算出现总次数
 * posObj ['万位', '千位', '百位', '十位', '个位']
 * selectNumArr => 如时时彩[0,1,2,3,4,5,6,7,8,9]
 * openDataArr 开奖号码数组
 * return [[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7]] 返回每个位置统计值集合
 */
export function calcEachTotal(posObj, selectNumArr, openDataArr) {
  const totalArr = [];
  for (let posIndex in posObj) {
    const resultArr = [];
    selectNumArr.forEach(selectNum => {
      let count = 0;
      openDataArr.forEach(itemArr => {
        if (Number(itemArr[posIndex]) === Number(selectNum)) {
          count += 1;
        }
      });
      resultArr.push(count);
    });
    totalArr.push(resultArr);
  }
  return totalArr;
}

/**
 * 号码分布总次数
 */
export function caclDistributionTotalArr(posObj, selectNumArr, openDataArr) {
  const resultArr = [];
  const posIndexArr = Object.keys(posObj);
  const _openDataArr = openDataArr.map(itemArr => {
    const _arr = [];
    posIndexArr.forEach(i => {
      _arr.push(itemArr[i]);
    });
    return _arr;
  });
  selectNumArr.forEach(selectNum => {
    let count = 0;
    _openDataArr.forEach(itemArr => {
      count += itemArr.filter(item => {
        return Number(item) === Number(selectNum);
      }).length;
    });
    resultArr.push(count);
  });
  return resultArr;
}

/**
 * 号码分布最大遗漏
 */
export function getDistributionMissAndContinuousObj(posObj, selectNumArr, openDataArr) {
  const resultArr = [];
  const posIndexArr = Object.keys(posObj);
  const _openDataArr = openDataArr.map(itemArr => {
    const _arr = [];
    posIndexArr.forEach(i => {
      _arr.push(itemArr[i]);
    });
    return _arr;
  });
  selectNumArr.forEach(selectNum => {
    const arr = [];
    _openDataArr.forEach((itemArr, index) => {
      const numItemArr = itemArr.map(v => Number(v));
      if (numItemArr.indexOf(Number(selectNum)) !== -1) {
        arr.push(index + 1);
      }
    });
    resultArr.push(arr);
  });
  const openDataArrLength = _openDataArr.length;
  const missArr = resultArr.map(arr => {
    return calcMaxMiss(arr, openDataArrLength);
  });
  const continuousArr = resultArr.map(arr => {
    arr.sort((a, b) => a - b);
    if (arr.length === 0) {
      return 0;
    }
    if (filterShunziArr(arr).length > 0) {
      return filterShunziArr(arr).sort((a, b) => b.length - a.length)[0].length;
    } else {
      return 1;
    }
  });
  return {
    missArr,
    continuousArr
  };
}

/**
 * 获取最大遗漏值和连出值对象
 */
export function getMissAndContinuousObj(posObj, selectNumArr, openDataArr) {
  const missAndContinuousArr = [];
  for (let posIndex in posObj) {
    const resultArr = [];
    selectNumArr.forEach(selectNum => {
      const arr = [];
      openDataArr.forEach((itemArr, index) => {
        if (Number(itemArr[posIndex]) === Number(selectNum)) {
          arr.push(index + 1);
        }
      });
      resultArr.push(arr);
    });
    missAndContinuousArr.push(resultArr);
  }
  //最大遗漏值
  const missArr = missAndContinuousArr.map(posItem => {
    const openDataArrLength = openDataArr.length;
    return posItem.map(itemArr => {
      return calcMaxMiss(itemArr, openDataArrLength);
    });
  });
  //最大连出值
  const continuousArr = missAndContinuousArr.map(posItem => {
    return posItem.map(itemArr => {
      itemArr.sort((a, b) => a - b);
      if (itemArr.length === 0) {
        return 0;
      }
      if (filterShunziArr(itemArr).length > 0) {
        return filterShunziArr(itemArr).sort((a, b) => b.length - a.length)[0].length;
      } else {
        return 1;
      }
    });
  });
  return {
    missArr,
    continuousArr
  };
}

/**
 * 计算最大遗漏值
 * 
 * @param {Array} arr 选中的序号集合
 * @param {Number} openDataArrLength 列表的数量
 * @returns Number
 */
export function calcMaxMiss(arr, openDataArrLength) {
  const _arr = arr.map(v => Number(v));
  _arr.sort((a, b) => a - b);
  if (_arr.length === 0) {
    return openDataArrLength;
  }
  if (_arr.length === 1) {
    return Math.max(...[openDataArrLength - _arr[0], _arr[0] - 1]);
  }
  if (_arr.length === 2) {
    return Math.max(...[openDataArrLength - _arr[1], _arr[1] - _arr[0], _arr[0] - 1]);
  }
  const result = [];
  const min = Math.min(..._arr);
  const max = Math.max(..._arr);
  result.push(min - 1);
  result.push(openDataArrLength - max);
  for (let i = 0, len = _arr.length; i < len - 1; i++) {
    result.push(_arr[i + 1] - _arr[i] - 1);
  }
  return Math.max(...result);
}

/**
 * 从一组数字中取出顺子
 * 如[1,2,3,6,7,8] => [[1,2,3],[6,7,8]]
 * @param {数组} arr 
 * @returns 二维数组
 */
export function filterShunziArr(arr) {
  var len = arr.length,
    before = arr[0],
    i = 1,
    res = [],
    result = [],
    current;
  for (; i < len; i++) {
    current = arr[i];
    if (current - before === 1) {
      if (res.length === 0) {
        res.push(before);
      }
      res.push(current);
    } else {
      if (res.length) {
        result.push(res);
      }
      res = [];
    }
    before = current;
  }
  if (res.length) {
    result.push(res);
  }
  return result;
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
    1: '豹子',
    2: '组三',
    3: '组六'
  };
  const deduplicationArr = [...new Set(arr)]; //去重
  return obj[deduplicationArr.length];
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
    return '<em class="long">龙</em>';
  }
  if (a < b) {
    return '<em class="hu">虎</em>';
  }
  return '<em class="he">和</em>';
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
    niuniuXt = YU === 0 ? '<em class="niuniu">牛牛</em>' : `<em class="niuniu">牛${YU}</em>`;
    dxXt = [6, 7, 8, 9, 0].indexOf(YU) !== -1 ? '<em class="niuda">牛大</em>' : '<em class="niuxiao">牛小</em>';
    dsXt = YU % 2 === 0 ? '<em class="niushuang">牛双</em>' : '<em class="niudan">牛单</em>';
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
          newArr.splice(0, i + 　1);
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
    bjlXtPlus = '<em class="zhuangdui">庄对</em>';
  }
  if (shi === ge) {
    bjlXtPlus = '<em class="xiandui">闲对</em>';
  }
  if (wan === qian && shi === ge) {
    bjlXtPlus = '<em class="zhuangdui">庄对</em><em class="xiandui">闲对</em>';
  }
  if (zhuang > xian) {
    if (zhuang === 6 && xian < 6) {
      return `<i><em class="s6">S6${bjlXtPlus}</em>`;
    }
    return `<i><em class="zhuang">庄${bjlXtPlus}</em>`;
  }
  if (zhuang < xian) {
    return `<i><em class="xian">闲${bjlXtPlus}</em>`;
  }
  return `<i><em class="he">和${bjlXtPlus}</em></i>`;
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
//计算元素到body的距离
export function offsetDis(element) {
  let l = 0,
    t = 0;
  while (element) {
    l = l + element.offsetLeft + element.clientLeft;
    t = t + element.offsetTop + element.clientTop;
    element = element.offsetParent;
  }
  return {
    left: l,
    top: t
  };
}
