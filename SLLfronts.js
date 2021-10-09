class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront() {
        if(!this.head) {
            new_front = this.next;
            this.head = new_front;
            return this;
        }
        else {
            return null;
        }
    }

    front() {
        if(!this.data) {
            return this.data;
        }
        else {
            return null;
        }
    }
}