import { DoublyLinkedList } from "./doubly-linked-list.js";

const DLL = new DoublyLinkedList();
const userInput = document.getElementById("userWriting");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

userInput.addEventListener("keydown", (event) => {
    if(event.key === " " || event.key === "."){
        let input = userInput.value.split(" ").at(-1);
        DLL.append(input);
        console.log(DLL);
    }
});
