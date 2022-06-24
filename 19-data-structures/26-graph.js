// unweighted, unordered graph represented by adjacency lists
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // TODO throw if the vertex is already exist
    if(this.adjacencyList[vertex]) throw Error;
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    // TODO Error handling invalid key or make it ordered graph
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    // TODO Error handling invalid key 
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(v => {
      this.removeEdge(vertex, v);
    });

    delete this.adjacencyList[vertex]
  }

  // ANCHOR Traverse
  
  depthFirstRecursive(start) {
    const res = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if(!vertex) return;
      res.push(vertex);
      visited[vertex] = true;
  
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) return dfs(neighbor);
      })
    })(start);

    return res;
  }

  depthFirstIterative(start) {
    let stack = [start];
    const res = [];
    const visited = {};

    visited[start] = true;
    while(stack.length) {
      let currentVertex = stack.pop();
      res.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return res;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;

    // const res = [];
    // const visited = {};
    // const queue = [start];
    // const adjacencyList = this.adjacencyList;
    // let currentVertex;

    // visited[start] = true;
    // (function bfs(vertex) {
    //   if(!vertex) return;
    //   currentVertex = queue.shift(vertex);
    //   res.push(vertex);
    //   visited[vertex] = true;
    //   queue.push(vertex)

    //   adjacencyList[currentVertex].forEach(neighbor => {
    //     if(!visited[neighbor]) {
    //       return bfs(neighbor);
    //     }
    //   })
    // })(start)

    // return res;
  } 
}

let g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Bangkok');
// g.addVertex('WashingtonDC');
// g.addEdge('Tokyo', 'Bangkok')
// g.addEdge('WashingtonDC', 'Bangkok')
// console.log(g);
// g.removeEdge('Bangkok', 'WashingtonDC')
// g.removeVertex('Tokyo');


g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.addEdge('D','F')
g.addEdge('E','F')


// console.log(g.depthFirstRecursive("A"))
// console.log(g.depthFirstIterative("A"))

console.log(g.breadthFirst('A'))


