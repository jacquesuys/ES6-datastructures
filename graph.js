class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push(""); 
    } 
  }
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    ++this.edges;
  }
  showEdges(){
    let str;
    for (let i = 0; i < this.adj.length; i++) {
      str = "";
      str += `${this.adj[i]} -> `;
      for (let j = 0; j < this.adj[i].length; j++) {
        str += `${this.adj[i][j]} `;
      }
      console.log(str);
    }
  }
}