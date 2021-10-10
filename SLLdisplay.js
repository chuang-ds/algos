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

    findSum() {
        let runner=this.head;
        let sum=0;
        while(runner !== null){
            sum+=runner.data;
            runner=runner.next;
        }
        return sum;
    }

    contains(val) {
        let runner = this.head;
        while(runner !== null){
            if(runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    length() {
        let len = 0;
        let runner = this.head;
        while(runner !== null){
            len++;
            runner = runner.next;
        }
        return len;
    }

    display() {
        let str = "";
        let runner = this.head;
        while(runner !== null){
            str += runner.data + "\n";
            runner = runner.next;
        }
    }
}