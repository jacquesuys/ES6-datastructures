class BinaryTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    let dir = val < this.val ? 'left' : 'right';
    
    if (this[dir] === null) {
      this[dir] = new BinaryTree(val);
    } else {
      this[dir].insert(val);
    }
  }

  DFS(callback) {
    callback(this.value);
    if (this.left) this.left.DFS(callback);
    if (this.right) this.right.DFS(callback);
  }

  contains(target) {
    let current = this;

    while (current.value !== undefined) {
      if (target === current.value) return true;

      let dir = target < current.value ? 'left' : 'right';

      if (current[dir] === null) break;

      current = current[dir];
      continue;
    }

    return false;
  }
}