export function Node(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

Node.prototype.print = function(dir = 1) {
    if (this != null) {
        console.log("prev:" + (this.prev == null ? "$" : this.prev.value) + " " +
            "this:" + this.value + " " +
            "next:" + (this.next == null ? "$" : this.next.value)
        );
        if (this.next && dir === 1) this.next.print(dir);
        else if(this.prev && dir === -1) this.prev.print(dir);
    }
}