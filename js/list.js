export class List {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push_back(value) {
        let new_node = new Node(
            value,
            null,
            this.head);

        if (this.head) {
            this.head.prev = new_node;
            this.head = new_node;
        }
        else {
            this.head = new Node(
                value,
                null,
                null);
        }

        if (!this.tail)
            this.tail = new_node;
        else if (!this.tail.prev)
            this.tail.prev = new_node;
    }

    pop_back() {
        this.head = this.head.next;
    }

    push_front(value) {
        let new_node = new Node(
            value,
            this.tail,
            null);

        if (this.tail) {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        else {
            this.tail = new Node(
                value,
                null,
                null);
        }

        if (!this.head)
            this.head = new_node;
        else if (!this.head.next)
            this.head.next = new_node;
    }
    pop_front() {
        this.tail = this.tail.prev;
    }
    find(value, i=0, current_node=this.head) {
        if(!current_node) return -1;
        if(current_node.value !== value) return this.find(value, i+1, current_node.next);
        else return i;
    }
}

export class Node {
    value;
    prev;
    next;

    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
    print(dir = 1) {
        if (this != null) {
            console.log("prev:" + (this.prev == null ? "$" : this.prev.value) + " " +
                "this:" + this.value + " " +
                "next:" + (this.next == null ? "$" : this.next.value)
            );
            if (this.next && dir === 1) this.next.print(dir);
            else if(this.prev && dir === -1) this.prev.print(dir);
        }
    }
}