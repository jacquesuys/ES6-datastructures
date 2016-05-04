class Stack { 
  constructor(){
    this.dataStore = [];
    this.top = 0;
  }
  length(){
    return this.top;
  }
  push(val){
    this.dataStore[this.top++] = val;
  }
  pop(){
    return this.dataStore[--this.top];
  }
}