import PriorityQueue from '../src/priorityQueue'

describe('priorityQueue', () => {
  test('should push element', () => {
    const queue = new PriorityQueue()
    queue.push('C', 60)
    queue.push('B', 80)
    queue.push('D', 40)
    queue.push('A', 100)
    expect(queue.size()).toBe(4)
    expect(queue.pop().val).toBe('A')
    expect(queue.peek().priority).toBe(80)
    expect(queue.size()).toBe(3)
  })
})
