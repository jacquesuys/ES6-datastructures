class BinaryTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
  insert(val) {
    if (val < this.value) {
      if (this.left === null) {
        this.left = new BinaryTree(val);
      } else {
        this.left.insert(val);
      }
    } else if (val > this.value) {
      if (this.right === null) {
        this.right = new BinaryTree(val);
      } else {
        this.right.insert(val);
      }
    }
  }
  
  DFS(callback) {
   callback(this.value);
   if (this.left) {
     this.left.DFS(callback);
   }
   if (this.right) {
     this.right.DFS(callback);
   }
  }
}
