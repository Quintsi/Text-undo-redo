import { DoublyLinkedList } from "./doubly-linked-list.js";

const DLL = new DoublyLinkedList();
const input = document.getElementById("userWriting");

input.addEventListener("keydown", (event) => {
    if(event.key === " "){
        DLL.append(input.value);
        console.log(DLL);
    }
})
