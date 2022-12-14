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
list.from_array([403,105,66]);
for (let i = 0; i < 1000; i++) {
    list.push_back(i);
}
list.bubble_sort();
let arr = list.to_array();
console.log(arr.toString());
console.log(list.binary_find(222))
list.clear();
list.from_array(arr);
// debug();
console.log(list);

list.reverse();
console.log(list);
console.log(list.to_string());


