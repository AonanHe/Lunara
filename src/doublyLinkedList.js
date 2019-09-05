import SinglyLinkedList from './singlyLinkedList'

/**
 * Creates a list node
 */
function ListNode(val) {
  this.val = val
  this.next = null
  this.prev = null
}

class DoublyLinkedList extends SinglyLinkedList {
  /**
   * Creates a doubly linked list
   *
   * @private
   * @constructor
   */
  constructor() {
    super()
    this._prev = null
  }

  /**
   * Append a node of value val to the last element of the linked list.
   *
   * @memberOf doublyLinkedList
   * @param {*} val
   * @return {void}
   */
  append(val) {
    const node = new ListNode(val)
    const cursor = this._tail
    if (!cursor) {
      this._head = node
      this._tail = node
    } else {
      cursor.next = node
      node.prev = cursor
      this._tail = node
    }
    this._length += 1
  }

  /**
   * Add a node of value val before the index-th node in the linked list.
   * If index equals to the length of linked list,
   * the node will be appended to the end of linked list.
   * If index is greater than the length, the node will not be inserted.
   *
   * @memberOf doublyLinkedList
   * @param {number} index
   * @param {*} val
   * @return {void}
   */
  insert(index, val) {
    if (index < 0 || index > this._length) return
    const node = new ListNode(val)
    let cursor = this._head
    if (index === 0) {
      if (!this._head) {
        this._head = node
        this._tail = node
      } else {
        node.next = cursor
        cursor.prev = node
        this._head = node
      }
    } else if (index === this._length) {
      cursor = this._tail
      cursor.next = node
      node.prev = cursor
      this._tail = node
    } else {
      let previous = null
      for (let i = 0; i < index; i += 1) {
        previous = cursor
        cursor = cursor.next
      }
      node.next = cursor
      previous.next = node
      cursor.prev = node
      node.prev = previous
    }
    this._length += 1
  }

  /**
   * Remove the index-th node in the linked list, if the index is valid.
   *
   * @memberOf doublyLinkedList
   * @param {number} index
   * @return {void}
   */
  removeAt(index) {
    if (index < 0 || index >= this._length) return
    let cursor = this._head
    if (index === 0) {
      this._head = this._head.next
      if (this._length === 1) {
        this._tail = null
      } else {
        this._head.prev = null
      }
    } else if (index === this._length - 1) {
      cursor = this._tail
      this._tail = cursor.prev
      this._tail.next = null
    } else {
      let previous = null
      for (let i = 0; i < index; i += 1) {
        previous = cursor
        cursor = cursor.next
      }
      previous.next = cursor.next
      cursor.next.prev = previous
    }
    this._length -= 1
  }
}

export default DoublyLinkedList
