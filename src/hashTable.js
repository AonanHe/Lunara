import SinglyLinkedList from './singlyLinkedList'

/**
 * Creates a hash node
 */
function HashNode(key, value) {
  this.key = key
  this.value = value
}

/**
 * Creates a hash table with separate chaining.
 *
 * @private
 * @constructor
 */
class HashTable {
  constructor() {
    this.table = []
  }

  /**
   * The djb2 hash function.
   *
   * @memberOf HashTable
   * @param {string} key
   */
  hashCode(key) {
    let hash = 5381
    for (let i = 0; i < key.length; i += 1) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }

  /**
   * Associates the value given by value with the key given by key.
   *
   * @memberOf HashTable
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const index = this.hashCode(key)
    if (this.table[index] === undefined) {
      this.table[index] = new SinglyLinkedList()
    }
    this.table[index].append(new HashNode(key, value))
  }

  /**
   * Returns the value to which the specified key is mapped,
   * or undefined if this map contains no mapping for the key.
   *
   * @memberOf HashNode
   * @param {string} key
   * @return {*} value
   */
  get(key) {
    const index = this.hashCode(key)
    const linkedList = this.table[index]
    if (linkedList !== undefined && !linkedList.isEmpty()) {
      let cursor = linkedList.getHead()
      while (cursor) {
        if (cursor.val.key === key) {
          return cursor.val.value
        }
        cursor = cursor.next
      }
    }
    return undefined
  }

  /**
   * Removes the key (and its corresponding value) from this hash table.
   *
   * @memberOf HashTable
   * @param {string} key
   * @return {void}
   */
  remove(key) {
    const index = this.hashCode(key)
    const linkedList = this.table[index]
    if (linkedList !== undefined && !linkedList.isEmpty()) {
      let cursor = linkedList.getHead()
      let i = 0
      while (cursor) {
        if (cursor.val.key === key) {
          linkedList.removeAt(i)
          if (linkedList.isEmpty()) {
            delete this.table[index]
          }
          return
        }
        cursor = cursor.next
        i += 1
      }
    }
  }

  /**
   * Returns whether the hash table is empty.
   *
   * @memberOf HashTable
   * @returns {boolean}
   */
  isEmpty() {
    return this.table.length === 0
  }

  /**
   * Removes all elements from the hash table.
   *
   * @memberOf HashTable
   * @return {void}
   */
  clear() {
    this.table = []
  }
}

export default HashTable
