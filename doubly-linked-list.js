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

    //adds a value to the end of the list
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

    //removes a node from the end of the list
    pop(){
        if(this.length === 0){
            return this;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return this;
    }

    //removes all nodes from the users current position in the list.
    //this method is used to remove all nodes that a user has undone once new changes are made to the list
    sever(node){
        if (!node) return this;

        node.next = null;
        this.tail = node;

        let count = 1;
        let curr = this.head;
        while(curr !== this.tail){
            count++;
            curr = curr.next;
        }

        this.length = count;
        return this;
    }

    //adds a node to the start of the list
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

    //removes a node from the start of the list
    shift(){
        if(this.length === 0){
            return this;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return this;
    }

}