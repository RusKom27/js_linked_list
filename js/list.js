import {Node} from "./node.js";

export function List() {
    this.head = null;
    this.tail = null;
}

List.prototype.push_back = function(value) {
    let new_node = new Node(value, null, this.head);

    if (this.head) {
        this.head.prev = new_node;
        this.head = new_node;
    }
    else {
        this.head = new Node(value, null, null);
    }

    if (!this.tail)
        this.tail = new_node;
    else if (!this.tail.prev)
        this.tail.prev = new_node;
}

List.prototype.pop_back = function() {
    let deleted_node = this.head;
    this.head = this.head.next;
    return deleted_node;
}

List.prototype.push_front = function(value) {
    let new_node = new Node(value, this.tail, null);

    if (this.tail) {
        this.tail.next = new_node;
        this.tail = new_node;
    }
    else {
        this.tail = new Node(value, null, null);
    }

    if (!this.head)
        this.head = new_node;
    else if (!this.head.next)
        this.head.next = new_node;
}

List.prototype.pop_front = function() {
    let deleted_node = this.tail;
    this.tail = this.tail.prev;
    return deleted_node;
}

List.prototype.find_by_value = function(value, i=0, current_node=this.head) {
    if(!current_node) return -1;
    if(current_node.value !== value) return this.find_by_value(value, i+1, current_node.next);
    else return i;
}

List.prototype.find_by_index = function(index, current_node=this.head, i=0) {
    if (index > -1)
        if (i < index) return this.find_by_index(index, current_node.next, i+1);
        else return current_node;
    else return null
}

List.prototype.insert = function(value, index) {
    let node = this.find_by_index(index);
    if (node) node.value = value;
}

List.prototype.reverse = function(head_node=this.head, tail_node=this.tail, i=0) {
    if (i <= Math.floor(this.length() / 2) && head_node != null && tail_node != null) {
        let temp = head_node.value;
        head_node.value = tail_node.value;
        tail_node.value = temp;
        this.reverse(head_node.next, tail_node.prev, i+1);
    }
}

List.prototype.length = function(current_node=this.head, i=0) {
    if(current_node) return this.length(current_node.next, i+1);
    else return i;
}

List.prototype.bubble_sort = function(current_node=this.head, finish = true) {
    console.log(arguments[0], arguments[1]);
    if (current_node) {
        if (current_node.next) {
            if (current_node.value > current_node.next.value) {
                let temp = current_node.value;
                current_node.value = current_node.next.value;
                current_node.next.value = temp;
                finish = false;
            }
            this.bubble_sort(current_node.next, finish);
        } else if (!finish)
            this.bubble_sort(this.head, true);
    }
}

List.prototype.from_array = function(array, i = 0) {
    if (i < array.length) {
        this.push_front(array[i]);
        this.from_array(array, i + 1);
    }
}

List.prototype.to_array = function(array = [], current_node=this.head) {
    if(current_node) {
        array.push(current_node.value);
        this.to_array(array, current_node.next);
    }
    return array
}

List.prototype.clear = function() {
    this.head = null;
    this.tail = null;
}

List.prototype.to_string = function() {
    return this.to_array().toString();
}