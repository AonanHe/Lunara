import BinarySearchTree from '../src/binarySearchTree'

describe('binarySearchTree', () => {
  const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
  const bst = new BinarySearchTree()
  test('should traverse tree', () => {
    arr.forEach((item) => {
      bst.insert(item)
    })
    const inOrder = []
    bst.inOrderTraverse((i) => {
      inOrder.push(i)
    })
    expect(inOrder).toEqual([
      3,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      18,
      20,
      25
    ])
    const preOrder = []
    bst.preOrderTraverse((i) => {
      preOrder.push(i)
    })
    expect(preOrder).toEqual([
      11,
      7,
      5,
      3,
      6,
      9,
      8,
      10,
      15,
      13,
      12,
      14,
      20,
      18,
      25
    ])
    const postOrder = []
    bst.postOrderTraverse((i) => {
      postOrder.push(i)
    })
    expect(postOrder).toEqual([
      3,
      6,
      5,
      8,
      10,
      9,
      7,
      12,
      14,
      13,
      18,
      25,
      20,
      15,
      11
    ])
  })

  test('should find node', () => {
    expect(bst.min().key).toBe(3)
    expect(bst.max().key).toBe(25)
    expect(bst.search(20)).toBe(true)
    expect(bst.search(14.5)).toBe(false)
    expect(bst.search(100)).toBe(false)
  })

  test('should remove node', () => {
    bst.remove(6)
    expect(bst.search(6)).toBe(false)
    bst.remove(5)
    expect(bst.search(5)).toBe(false)
    bst.remove(15)
    expect(bst.search(15)).toBe(false)
    const inOrder = []
    bst.inOrderTraverse((i) => {
      inOrder.push(i)
    })
    expect(inOrder).toEqual([3, 7, 8, 9, 10, 11, 12, 13, 14, 18, 20, 25])
  })
})
