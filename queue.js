class Queue {
  constructor(){
    this.dataStore = [];
  }
  enqueue(val){
    this.dataStore.push(val);
  }
  dequeue(){
    return this.dataStore.shift();
  }
  toString(){
    return this.dataStore;
  }
  empty(){
    this.dataStore = [];
  }
}