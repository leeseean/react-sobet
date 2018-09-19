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