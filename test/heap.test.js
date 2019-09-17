import Heap from '../src/heap'

describe('heap', () => {
  test('test max-heap', () => {
    const heap = new Heap()
    heap.heapify([10, 80, 21, 15, -1, 32, 93, 0, 100, -5])
    expect(heap.size()).toBe(10)
    expect(heap.get()).toBe(100)
    expect(heap.insert(101))
    expect(heap.isEmpty()).toBe(false)
    const result = []
    while (!heap.isEmpty()) {
      result.push(heap.extract())
    }
    expect(result).toEqual([101, 100, 93, 80, 32, 21, 15, 10, 0, -1, -5])
    expect(heap.isEmpty()).toBe(true)
  })

  test('test min-heap', () => {
    const heap = new Heap((a, b) => b - a)
    heap.insert(100)
    heap.clear()
    expect(heap.isEmpty()).toBe(true)
    heap.heapify([100, 0, 80, -5, 0, 15, 10, 100, 32, 93])
    expect(heap.size()).toBe(10)
    expect(heap.get()).toBe(-5)
    expect(heap.insert(101))
    expect(heap.isEmpty()).toBe(false)
    const result = []
    while (!heap.isEmpty()) {
      result.push(heap.extract())
    }
    expect(result).toEqual([-5, 0, 0, 10, 15, 32, 80, 93, 100, 100, 101])
    expect(heap.isEmpty()).toBe(true)
  })

  test('should insert string value', () => {
    const heap = new Heap()
    heap.heapify(['e', 'f', 'ab', 'cd', 'abc'])
    expect(heap.get()).toBe('f')
  })
})
