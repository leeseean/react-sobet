export default function offsetDis(element) {
    let l = 0,
        t = 0;
    while (element) {
        l = l + element.offsetLeft + element.clientLeft;
        t = t + element.offsetTop + element.clientTop;
        element = element.offsetParent;
    }
    return {left: l, top: t};
}