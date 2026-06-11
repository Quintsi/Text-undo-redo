class Node {
    constructor(val){
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(val){
        const newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            return this;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail.prev = this.tail;
            this.tail.next = null;
        }

        this.length--;
        return this;
    }

    sever(index){
        let curr = this.head;
        let count = 0
        while(index > count){
            curr = curr.next;
            count ++;
        }

        curr.next = null;
    }

    unshift(val){
        const newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift(){
        if(this.length === 0){
            return this;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head.next = this.head;
            this.head.prev = null;
        }

        this.length--;
        return this;
    }

}