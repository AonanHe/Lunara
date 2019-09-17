/**
 * Creates a graph.
 *
 * @private
 * @constructor
 */
class Graph {
  constructor() {
    this.vertices = []
    this.adjList = {}
  }

  /**
   * Adds a vertex.
   *
   * @param {number|string} v Vertex
   */
  addVertex(v) {
    this.vertices.push(v)
    this.adjList[v] = []
  }

  /**
   * Insert an edge (v, w) to the graph.
   *
   * @param {number|string} v Vertex
   * @param {number|string} w Vertex
   */
  addEdge(v, w) {
    this.adjList[v].push(w)
  }
}

export default Graph
