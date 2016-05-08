class HashTable {
  constructor() {
    this.hashTable = new Array(137);
  }
  put(val){
    let hash = this.hashing(val);
    this.hashTable[hash] = val;
  }
  hashing(data) {
    let total = 0;
    for(let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.hashTable.length;
  }
  show(){
    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        console.log(i + ' : ' + this.hashTable[i]);
      }
    }
  }
}