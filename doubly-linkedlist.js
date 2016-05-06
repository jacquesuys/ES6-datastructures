class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node('head');
  }
  find(target) {
    let current = this.head;
    while(current.value != target) {
      current = current.next;
    }
    return current;
  }
  insert(val, item) {
    let node = new Node(val);
    let target = this.find(item);
    node.next = target.next;
    node.prev = target;
    target.next = node;
  }
  remove(item) {
    let target = this.find(item);
    target.prev.next = target.next;
    target.next.prev = target.prev;
    target.next = null;
    target.prev = null;
  }
}
