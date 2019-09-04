/**
 * Creates a list node
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

class SinglyLinkedList {
  /**
   * Creates a singly linked list
   *
   * @private
   * @constructor
   */
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * Get the value of the index-th node in the linked list.
   * If the index is invalid, return -1.
   *
   * @memberOf singlyLinkedList
   * @param {number} index
   * @return {*}
   */
  get(index) {
    if (index < 0 || this.length <= index) return -1
    let cursor = this.head
    for (let i = 0; i < index; i += 1) {
      cursor = cursor.next
    }
    return cursor.val
  }

  /**
   * Append a node of value val to the last element of the linked list.
   *
   * @memberOf singlyLinkedList
   * @param {*} val
   * @return {void}
   */
  append(val) {
    const node = new ListNode(val)
    let cursor = this.head
    if (!cursor) {
      this.head = node
    } else {
      while (cursor.next) {
        cursor = cursor.next
      }
      cursor.next = node
    }
    this.length += 1
  }

  /**
   * Add a node of value val before the index-th node in the linked list.
   * If index equals to the length of linked list,
   * the node will be appended to the end of linked list.
   * If index is greater than the length, the node will not be inserted.
   *
   * @memberOf singlyLinkedList
   * @param {number} index
   * @param {*} val
   * @return {void}
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return
    const node = new ListNode(val)
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      let cursor = this.head
      for (let i = 0; i < index - 1; i += 1) {
        cursor = cursor.next
      }
      node.next = cursor.next
      cursor.next = node
    }
    this.length += 1
  }

  /**
   * Remove the index-th node in the linked list, if the index is valid.
   *
   * @memberOf singlyLinkedList
   * @param {number} index
   * @return {void}
   */
  removeAt(index) {
    if (index < 0 || index >= this.length) return
    if (index === 0) {
      this.head = this.head.next
    } else {
      let cursor = this.head
      for (let i = 0; i < index - 1; i += 1) {
        cursor = cursor.next
      }
      cursor.next = cursor.next.next
    }
    this.length -= 1
  }

  /**
   * Returns whether the singly linked list is empty.
   *
   * @memberOf singlyLinkedList
   * @return {boolean}
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * Returns the size of the singly linked list.
   *
   * @memberOf singlyLinkedList
   * @return {number}
   */
  size() {
    return this.length
  }
}

export default SinglyLinkedList
