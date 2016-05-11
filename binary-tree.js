class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
  show() {
    return this.value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node =  new Node(val);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
            continue;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
            continue;
          }
        }
      }
    }
  }
  contains(target) {
    let current = this.root;
    while (true) {
      if (current.value === target) {
        return true;
      } else if (target < current.value && current.left !== null) {
        current = current.left;
        continue;
      } else if (target > current.value && current.right !== null) {
        current = current.right;
        continue;
      }
      break;
    }
    return false;
  }
}