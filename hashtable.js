class HashTable {
  constructor() {
    this.hashTable = new Array(137);
  }
  put(val){
    let hash = this.hashing(val);
    this.hashTable[hash] = val;
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
  show(){
    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        console.log(i + ' : ' + this.hashTable[i]);
      }
    }
  }
}