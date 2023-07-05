// import ==================================================== //
import { LinkNodeType } from "./types";

// additional functions ====================================== //
function getLastNode(node: LinkNodeType)  {
    let last_node = node;
    while (last_node.next) last_node = last_node.next;
    return last_node;
}
// function pushNodeIn(list: LinkListType, value: LinkNodeType) {
//     if (!list.__firstNode) {
//         list.__firstNode = value;
//         list.__lastNode = getLastNode(list.__firstNode);
//     } else if (list.__lastNode) {
//         list.__lastNode.next = value;
//         list.__lastNode = getLastNode(list.__lastNode.next);
//     }
// }

// main ====================================================== //
class LinkNode {

    public current: any | null;
    public next: any | null;

    constructor(current: any) {
        this.current = current;
        this.next = null;
    }

}
class LinkList {

    __firstNode: LinkNodeType | null;
    __lastNode: LinkNodeType | null;

    constructor () {
        this.__firstNode = null;
        this.__lastNode = null;
    }

    get firstNode() {
        return this.__firstNode ? this.__firstNode.current : null;
    }
    get lastNode() {
        return this.__lastNode ? this.__lastNode.current : null;
    }

    push(value: LinkNodeType) {
        if (!this.__firstNode) {
            this.__firstNode = value;
            this.__lastNode = getLastNode(this.__firstNode);
        } else if (this.__lastNode) {
            this.__lastNode.next = value;
            this.__lastNode = getLastNode(this.__lastNode.next);
        }
    }
    shift() {
        if (this.__firstNode) {
            this.__firstNode = this.__firstNode.next;
        }
    }

}

// export ==================================================== //
export { LinkNode, LinkList };