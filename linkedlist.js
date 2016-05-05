class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
    }
    // point the last node (tail) to the new node
    if (this.tail) {
      this.tail.next = node;
    }
    // the new node becomes the tail
    this.tail = node;
  }
  removeHead() {
    if (!this.head) {
      return null;
    }
    var removed = this.head;
    this.head = this.head.next;
    return removed.value;
  }
  contains(val) {
    var current = this.head;
    while (current) {
      if (current.value == val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}