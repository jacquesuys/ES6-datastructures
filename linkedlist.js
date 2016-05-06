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
  insert(val, item) {
    let node = new Node(val);
    let target = this.find(item);
    node.next = target.next;
    target.next = node;
  }
  remove(item) {
    let target = this.findPrevious(item);
    if (target.next !== null) {
      target.next = target.next.next;
    }
  }
}
