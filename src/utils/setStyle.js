export default function setStyle(elem, obj) { //批量设置样式,elem要设置的元素,obj={'height':'5px','color':'red'}等样式集合
    for (let key in obj) {
        elem.style[key] = obj[key];
    }
    return this; //返回上下文方便链式调用
}