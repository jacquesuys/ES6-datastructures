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
  showAll() {
    for(var key in this.dataStore){
      console.log(key + ' -> ' + this.dataStore[key]);
    }
  }
}