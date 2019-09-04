import SinglyLinkedList from '../src/singlyLinkedList'

function traverse(linkedList) {
  let p = linkedList.head
  const result = []
  while (p) {
    result.push(p.val)
    p = p.next
  }
  return result
}

describe('singlyLinkedList', () => {
  test('should add element', () => {
    const linkedList = new SinglyLinkedList()
    linkedList.append(10)
    linkedList.append(20)
    expect(traverse(linkedList)).toEqual([10, 20])
    linkedList.insert(0, -10)
    linkedList.insert(0, -20)
    expect(traverse(linkedList)).toEqual([-20, -10, 10, 20])
    linkedList.insert(2, 0)
    expect(traverse(linkedList)).toEqual([-20, -10, 0, 10, 20])
    linkedList.insert(-10, 100)
    linkedList.insert(10, 100)
    expect(traverse(linkedList)).toEqual([-20, -10, 0, 10, 20])
  })

  test('should get element', () => {
    const linkedList = new SinglyLinkedList()
    linkedList.append('A')
    linkedList.append('B')
    linkedList.append('C')
    expect(linkedList.get(0)).toBe('A')
    expect(linkedList.get(-10)).toBe(-1)
    expect(linkedList.get(10)).toBe(-1)
  })

  test('should delete element', () => {
    const linkedList = new SinglyLinkedList()
    linkedList.append({ name: 'Bill' })
    linkedList.append({ name: 'Alice' })
    linkedList.removeAt(0)
    expect(traverse(linkedList)).toEqual([{ name: 'Alice' }])
    linkedList.removeAt(10)
    expect(traverse(linkedList)).toEqual([{ name: 'Alice' }])
    linkedList.removeAt(0)
    expect(traverse(linkedList)).toEqual([])
  })

  test('should get the size', () => {
    const linkedList = new SinglyLinkedList()
    expect(linkedList.size()).toBe(0)
    expect(linkedList.isEmpty()).toBe(true)
    linkedList.append(3.14)
    expect(linkedList.size()).toBe(1)
    expect(linkedList.isEmpty()).toBe(false)
    linkedList.removeAt(0)
    expect(linkedList.size()).toBe(0)
    expect(linkedList.isEmpty()).toBe(true)
  })
})
