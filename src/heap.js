import swap from './.internal/swap'

/**
 * Default compare function, that will sort the array in ascending order.
 *
 * @param {number|string} a
 * @param {number|string} b
 * @return {number} Returns `0` if `a` equal to `b`,
 * `-1` if `a` is less than `b`,
 * `1` if `a` greater than `b`.
 */
function defaultCompare(a, b) {
  if (a === b) return 0
  return a < b ? -1 : 1
}

class Heap {
  /**
   * Creates a heap.
   *
   * @private
   * @constructor
   * @param {Function} compareFn A compare function
   */
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }

  /**
   * @memberof Heap
   * @private
   * @param {number} index
   */
  getParent(index) {
    return Math.floor((index - 1) / 2)
  }

  /**
   * Get index of left child node.
   *
   * @memberof Heap
   * @private
   * @param {number} index
   */
  getLeftChild(index) {
    return 2 * index + 1
  }

  /**
   * Move a node up in the tree.
   * Used to restore heap condition after insertion.
   *
   * @memberof Heap
   * @private
   * @param {number} index
   */
  siftUp(index) {
    let current = index
    while (current) {
      const parent = this.getParent(current)
      if (this.compareFn(this.heap[parent], this.heap[current]) < 0) {
        swap(this.heap, parent, current)
      } else {
        break
      }
      current = parent
    }
  }

  /**
   * Move a node down in the tree.
   * Used to restore heap condition after deletion or replacement.
   *
   * @memberof Heap
   * @private
   * @param {number} index
   */
  siftDown(index) {
    let parent = index
    let current = this.getLeftChild(parent)
    const size = this.size()
    while (current < size) {
      const rightChild = current + 1
      if (
        rightChild < size &&
        this.compareFn(this.heap[current], this.heap[rightChild]) < 0
      ) {
        current = rightChild
      }
      if (this.compareFn(this.heap[parent], this.heap[current]) < 0) {
        swap(this.heap, parent, current)
      } else {
        break
      }
      parent = current
      current = this.getLeftChild(parent)
    }
  }

  /**
   * Add a new key to the heap.
   *
   * @memberOf Heap
   * @param {*} val
   */
  insert(val) {
    const index = this.size()
    this.heap.push(val)
    this.siftUp(index)
  }

  /**
   * Get a maximum item of a max-heap, or a minimum item of a min-heap.
   *
   * @memberOf Heap
   * @return {*}
   */
  get() {
    return this.heap[0]
  }

  /**
   * Returns the node of maximum value from a max heap
   * (or minimum value from a min heap) after removing it from the heap.
   *
   * @memberOf Heap
   * @return {*}
   */
  extract() {
    const bottom = this.size() - 1
    if (bottom < 0) return undefined
    swap(this.heap, 0, bottom)
    const node = this.heap.pop()
    this.siftDown(0)
    return node
  }

  /**
   * Creates a heap out of given array of elements.
   *
   * @memberOf Heap
   * @param {Array} arr
   */
  heapify(arr) {
    arr.forEach((item) => {
      this.insert(item)
    })
  }

  /**
   * Returns the size of the heap.
   *
   * @memberOf Heap
   * @return {number}
   */
  size() {
    return this.heap.length
  }

  /**
   * Removes all elements from the heap.
   *
   * @memberOf Heap
   * @return {void}
   */
  clear() {
    this.heap = []
  }

  /**
   * Returns whether the heap is empty.
   *
   * @memberOf Heap
   * @return {boolean}
   */
  isEmpty() {
    return this.heap.length === 0
  }
}

export default Heap
