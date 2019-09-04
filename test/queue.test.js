import Queue from '../src/queue'

describe('queue', () => {
  test('should push element', () => {
    const queue = new Queue()
    queue.push(10)
    expect(queue.size()).toBe(1)
  })

  test('should pop element', () => {
    const queue = new Queue()
    queue.push(10)
    queue.push(20)
    queue.push(30)
    expect(queue.pop()).toBe(10)
    expect(queue.size()).toBe(2)
    expect(queue.pop()).toBe(20)
    expect(queue.pop()).toBe(30)
    expect(queue.pop()).toBe(undefined)
    expect(queue.size()).toBe(0)
  })

  test('should get the front element', () => {
    const queue = new Queue()
    queue.push('A')
    queue.push('B')
    expect(queue.peek()).toBe('A')
    expect(queue.size()).toBe(2)
  })

  test('should get the size', () => {
    const queue = new Queue()
    queue.push({
      name: 'Bill'
    })
    queue.push({
      name: 'Allen'
    })
    const size = queue.size()
    expect(size).toBe(2)
  })

  test('should check whether empty', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    queue.push(3.14)
    expect(queue.isEmpty()).toBe(false)
  })

  test('should remove all elements', () => {
    const queue = new Queue()
    queue.push(10)
    queue.push(20)
    expect(queue.size()).toBe(2)
    queue.clear()
    expect(queue.isEmpty()).toBe(true)
  })
})
