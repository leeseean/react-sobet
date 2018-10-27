// 数学公式
// 阶乘 n!=n*(n-1)!
export const factorial = function (n) {
    return n <= 0 ? 1 : n * factorial(n - 1);
};
// 组合combination: m个数中取出n个不同的数
export const combination = function (m, n) {
    const f = factorial;
    return m < n ? 0 : f(m) / (f(n) * f(m - n));
};
// 求两个数组的交集([1, 2, 3], [3, 4, 5]) →  [3]
export const intersection = function (a, b) {
    return a.filter(function (n) {
        return b.indexOf(n) != -1;
    });
};
// 求两个数组的无重复并集([1, 2], [2, 3]) → [1,2,3]
export const union = function (a, b) {
    return (a.concat(b)).filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
    });
};
// 求a数组相对于b数组的补集([1, 2, 3], [3, 4, 5]) →  [1, 2]
export const difference = function (a, b) {
    return a.filter(function (n) {
        return b.indexOf(n) === -1;
    });
};

//从数组中各取一个数字组成 [1,2] => [1,1] [2,2] [1,2] [2,1]
export const combineQuene = (arr, size) => {
    const final = [];
    const len = arr.length;
    for (let i = 0; i < Math.pow(len, size); i++) {
        const result = [];
        for (let j = 0; j < size; j++) {
            result.push(arr[Math.floor(i / Math.pow(len, j) % len)]);
        }
        final.push(result);
    }
    return final;
};

//求一组数字相加等于某个数字的组合数 和值计算注数
export const calcHzCount = (hz, size, nums) => {
    const arr = combineQuene(nums, size);
    return arr.filter(a => a.reduce((m, n) => m + n) === hz).length;
};

//求一组数字相加等于某个数字的组合数 和值计算注数  豹子号除外
export const calcZuxHzCount = (hz, size, nums) => {
    let arr = combineQuene(nums, size);
    arr = arr.filter(v => [...new Set(v)].length !== 1);
    arr = arr.map(v => JSON.stringify(v.sort()));
    arr = [...new Set(arr)].map(v => JSON.parse(v));
    return arr.filter(a => a.reduce((m, n) => m + n) === hz).length;
};

//跨度计算注数
export const calcKuaduCount = (kd, size, nums) => {
    const arr = combineQuene(nums, size);
    return arr.filter(a => {
        const min = Math.min(...a);
        const max = Math.max(...a);
        return max - min === kd;
    }).length;
};

//11选5直选复式 pk10猜前几,无重复阶乘, n是生成新数组的每个子数组的长度
export const noRepeatMul = (arr) => {
    let newArr = [];
    const calcpkzux = function (arr) {
        if (arr.length == 1) {
            return;
        }
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                if (String(arr[0][i]).indexOf(arr[1][j]) === -1) {
                    const item = arr[0][i] + '-' + arr[1][j];
                    newArr.push(item);
                }
            }
        }
        arr.splice(0, 2, newArr);
        newArr = [];
        calcpkzux(arr);
    }
    calcpkzux(arr);
    return arr[0];
}