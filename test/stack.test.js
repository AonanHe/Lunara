import Stack from '../src/stack'

describe('stack', () => {
  test('should push element', () => {
    const stack = new Stack()
    stack.push(10)
    expect(stack.size()).toBe(1)
  })

  test('should pop element', () => {
    const stack = new Stack()
    stack.push(10)
    expect(stack.pop()).toBe(10)
    expect(stack.pop()).toBe(undefined)
  })

  test('should get the top element', () => {
    const stack = new Stack()
    stack.push('A')
    stack.push('B')
    expect(stack.top()).toBe('B')
  })

  test('should get the size', () => {
    const stack = new Stack()
    stack.push({
      name: 'Bill'
    })
    stack.push({
      name: 'Allen'
    })
    const size = stack.size()
    expect(size).toBe(2)
  })

  test('should check whether empty', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
    stack.push(3.14)
    expect(stack.isEmpty()).toBe(false)
  })

  test('should remove all elements', () => {
    const stack = new Stack()
    stack.push(10)
    stack.push(20)
    expect(stack.size()).toBe(2)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })
})
