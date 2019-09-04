class Queue {
  /**
   * Creates a queue
   *
   * @private
   * @constructor
   */
  constructor() {
    this.queue = []
  }

  /**
   * Push element val to the back of queue.
   *
   * @memberOf Queue
   * @param {*} val
   * @return {void}
   */
  push(val) {
    this.queue.push(val)
  }

  /**
   * Removes the element from in front of queue and returns that element.
   *
   * @memberOf Queue
   * @return {*}
   */
  pop() {
    return this.queue.shift()
  }

  /**
   * Get the front element.
   *
   * @memberOf Queue
   * @return {*}
   */
  peek() {
    return this.queue[0]
  }

  /**
   * Returns whether the queue is empty.
   *
   * @memberOf Queue
   * @return {boolean}
   */
  isEmpty() {
    return this.queue.length === 0
  }

  /**
   * Returns the size of the queue.
   *
   * @memberOf Queue
   * @return {number}
   */
  size() {
    return this.queue.length
  }

  /**
   * Removes all elements from the queue.
   *
   * @memberOf Queue
   * @return {void}
   */
  clear() {
    this.queue = []
  }
}

export default Queue
