import {List} from "./list.js";

const debug = () => {
    list.head.print(1);
    console.log("---------");
}

let list = new List();
list.push_front(11);
list.push_front(2);
list.pop_back()
list.push_front(33);
list.from_array([4,5,66]);
debug();
console.log(list.find_by_value(1));
console.log(list.find_by_value(6));
console.log(list.find_by_index(3));
list.insert(10, 0);
console.log(list.to_string());
list.bubble_sort();
let arr = list.to_array();
console.log(arr);
list.clear();
list.from_array(arr);
debug();
list.reverse();
list.push_back(100);
console.log(list.to_string());

