// import ==================================================== //
import { LinkNodeType } from "./types";

// main ====================================================== //
class LinkNode {

    public current: any | null;
    public next: any | null;

    constructor(current: any = null) {
        this.current = current;
        this.next = null;
    }

}
class LinkList {

    __firstNode: LinkNodeType;
    __lastNode: LinkNodeType;

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

    push(value: any) {
        let new_link_node = new LinkNode(value);
        if (!this.__firstNode) {
            this.__firstNode = new_link_node;
            this.__lastNode = this.__firstNode;
        } else {
            this.__lastNode!.next = new_link_node;
            this.__lastNode = this.__lastNode!.next;
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