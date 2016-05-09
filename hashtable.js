class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  put(key, val) {
    let hash = this.hashing(key);
    let exists = false;
    this.table[hash] = this.table[hash] || [];
    for (let i = 0; i < this.table[hash].length; i++) {
      if (this.table[hash][i][0] === key) {
        this.table[hash][i][1] = val;
        exists = true;
      }
    }
    if (!exists) {
      this.table[hash].push([key, val]);
    }
  }
  get(key) {
    let hash = this.hashing(key);
    let current;
    for (let i = 0; i < this.table[hash].length; i++) {
      current = this.table[hash][i];
      if (current !== undefined && current[0] === key) {
        return current[1];
      }
    }
    return -1;
  }
  remove(key) {
    let hash = this.hashing(key);
    for (let i = 0; i < this.table[hash].length; i++) {
      if (this.table[hash][i][0] === key) {
        let result = this.table[hash][i][1];
        delete this.table[hash][i];
        return result;
      }
    }
  }
  hashing(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % this.table.length;
  }
  show() {
    for (let key in this.table) {
      console.log(`${key}:`);
      for (let i = 0; i < this.table[key].length; i++) {
        console.log(`${i} -> ${this.table[key][i]}`);
      }
    }
  }
}