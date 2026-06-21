import { DoublyLinkedList } from "./doubly-linked-list.js";

const DLL = new DoublyLinkedList();
const userInput = document.getElementById("userWriting");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

DLL.append("");

let current = DLL.tail;

//main way that the state changes. If the user presses space or period then the changes will be saved in a new linked list node.
userInput.addEventListener("input", (e) => {
    if(e.data === " " || e.data === "."){
        if(current != DLL.tail){
            DLL.sever(current);
        }
        
        DLL.append(userInput.value);
        current = DLL.tail;
    }
});

// moves the linked list back to a previous node in the list
undo.addEventListener("click", (e) => {
    if(current.prev != null){
        current = current.prev;
    }
    userInput.value = current.data;
});

//move the linked list forward to a more recent node if such a node exists.
redo.addEventListener("click", (e) => {
    if(current.next != null){
        current = current.next;
    }
    userInput.value = current.data;
});