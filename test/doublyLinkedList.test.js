import DoublyLinkedList from '../src/doublyLinkedList'

function traverse(linkedList) {
  let p = linkedList.getHead()
  const result = []
  while (p) {
    result.push(p.val)
    p = p.next
  }
  return result
}

describe('doublyLinkedList', () => {
  test('should insert element', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.append(2)
    linkedList.append(3)
    linkedList.insert(0, 1)
    linkedList.insert(3, 4)
    linkedList.insert(10, 100)
    expect(traverse(linkedList)).toEqual([1, 2, 3, 4])
    expect(linkedList.size()).toBe(4)
    expect(linkedList.isEmpty()).toBe(false)
  })

  test('should remove element', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.insert(0, 20)
    linkedList.insert(1, 30)
    linkedList.insert(0, 0)
    linkedList.insert(1, 10)
    expect(traverse(linkedList)).toEqual([0, 10, 20, 30])
    linkedList.removeAt(-1)
    expect(linkedList.size()).toBe(4)
    linkedList.removeAt(1)
    expect(traverse(linkedList)).toEqual([0, 20, 30])
    linkedList.removeAt(2)
    expect(traverse(linkedList)).toEqual([0, 20])
    linkedList.removeAt(0)
    expect(traverse(linkedList)).toEqual([20])
    linkedList.removeAt(0)
    expect(traverse(linkedList)).toEqual([])
    expect(linkedList.isEmpty()).toBe(true)
  })
})
