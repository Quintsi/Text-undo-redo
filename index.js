import { DoublyLinkedList } from "./doubly-linked-list.js";

const DLL = new DoublyLinkedList();
const userInput = document.getElementById("userWriting");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

DLL.append("");

let current = DLL.tail;

userInput.addEventListener("keydown", (e) => {
    if(e.key === " " || e.key === "."){
        if(current != DLL.tail){
            while(current.next != null){
                DLL.pop();
            }
        }
        
        DLL.append(userInput.value);
        current = DLL.tail;
    }
});

undo.addEventListener("click", (e) => {
    if(current.prev != null){
        current = current.prev;
    }
    userInput.value = current.data;
});

redo.addEventListener("click", (e) => {
    if(current.next != null){
        current = current.next;
    }
    userInput.value = current.data;
});