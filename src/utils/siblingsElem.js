export default function siblingsElem(elem) {

    var nodes = [];

    var _elem = elem;

    while ((elem = elem.previousSibling)) {

        if (elem.nodeType === 1) {

            nodes.push(elem);

        }

    }

    var elem = _elem;

    while ((elem = elem.nextSibling)) {

        if (elem.nodeType === 1) {

            nodes.push(elem);

        }

    }

    return nodes;

}