class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  put(val) {
    let hash = this.hashing(val);
    this.table[hash] = val;
  }
  get(val) {
    let hash = this.hashing(val);
    return this.table[hash];
  }
  hashing(str) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += H * total + str.charCodeAt(i);
    }
    total = total % this.table.length; 
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }
  show() {
    for (let key in this.table) {
      console.log(`${key} : ${this.table[key]}`);
    }
  }
}