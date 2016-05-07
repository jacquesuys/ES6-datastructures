class Dictionary {
  constructor(){
    this.dataStore = new Array();
  }
  add(key, val){
    this.dataStore[key] = val;
  }
  find(key) {
    return this.dataStore[key];
  }
  remove(key) {
    delete this.dataStore[key];   
  }
}