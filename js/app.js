import {List} from "./list.js";

let debug = () => {
    list.tail.print(-1);
    console.log("---------");
    list.head.print(1);
    console.log("---------");
}

let list = new List();
list.push_front(1);
list.push_front(2);
list.push_front(3);
list.push_front(4);
list.push_front(5);
list.push_front(6);
debug();
console.log(list.find(1));
console.log(list.find(6));
