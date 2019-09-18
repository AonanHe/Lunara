import Graph from './graph'
import Queue from './queue'

class GraphTraversal extends Graph {
  /**
   * Breadth-first search
   *
   * @param {*} v Vertex
   * @param {*} callback
   */
  bfs(v, callback) {
    const queue = new Queue()
    const visited = {}
    queue.push(v)
    while (!queue.isEmpty()) {
      const u = queue.pop()
      const neighbors = this.adjList[u]
      visited[u] = true
      neighbors.forEach((w) => {
        if (!visited[w]) {
          queue.push(w)
          visited[w] = true
        }
      })
      if (callback) {
        callback(u)
      }
    }
  }

  /**
   * Depth-first search
   *
   * @param {*} v Vertex
   * @param {*} callback
   */
  dfs(v, callback) {
    const visited = {}
    const visit = (u) => {
      visited[u] = true
      if (callback) {
        callback(u)
      }
      const neighbors = this.adjList[u]
      neighbors.forEach((w) => {
        if (!visited[w]) {
          visit(w, callback)
        }
      })
      visited[u] = true
    }
    visit(v)
  }
}

export default GraphTraversal
