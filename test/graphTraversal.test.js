import GraphTraversal from '../src/graphTraversal'

describe('graphTraversal', () => {
  const graph = new GraphTraversal()
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  vertices.forEach((v) => {
    graph.addVertex(v)
  })
  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('B', 'E')
  graph.addEdge('B', 'F')
  graph.addEdge('C', 'D')
  graph.addEdge('C', 'G')
  graph.addEdge('D', 'G')
  graph.addEdge('D', 'H')
  graph.addEdge('E', 'I')
  test('should bfs graph', () => {
    const result = []
    graph.bfs('A', (v) => {
      result.push(v)
    })
    expect(result).toEqual(['A', 'B', 'C', 'E', 'F', 'D', 'G', 'I', 'H'])
  })
  test('should dfs graph', () => {
    const result = []
    graph.dfs('A', (v) => {
      result.push(v)
    })
    expect(result).toEqual(['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H'])
  })
})
