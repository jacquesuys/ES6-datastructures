class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
    this.tail = null;
  }
  find(target) {
    let current = this.head;
    while(current.value != target) {
      current = current.next;
    }
    return current;
  }
  findPrevious(target) {
    let current = this.head;
    while(current.next.value != target) {
      current = current.next;
    }
    return current;
  }
  insert(val, target) {
    let node = new Node(val);
    let existing = this.find(target);
    node.next = existing.next;
    existing.next = node;
  }
  remove(target) {
    let prev = this.findPrevious(target);
    if (prev.next !== null) {
      prev.next = prev.next.next;
    }
  }
}
