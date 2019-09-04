class Stack {
  /**
   * Creates a stack
   *
   * @private
   * @constructor
   */
  constructor() {
    this.stack = []
  }

  /**
   * Push element val onto stack.
   *
   * @memberOf Stack
   * @param {*} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val)
  }

  /**
   * Removes the element on top of the stack and returns that element.
   *
   * @memberOf Stack
   * @return {*}
   */
  pop() {
    return this.stack.pop()
  }

  /**
   * Get the top element.
   *
   * @memberOf Stack
   * @return {*}
   */
  top() {
    return this.stack[this.stack.length - 1]
  }

  /**
   * Returns whether the stack is empty.
   *
   * @memberOf Stack
   * @return {boolean}
   */
  isEmpty() {
    return this.stack.length === 0
  }

  /**
   * Returns the size of the stack.
   *
   * @memberOf Stack
   * @return {number}
   */
  size() {
    return this.stack.length
  }

  /**
   * Removes all elements from the stack.
   *
   * @memberOf Stack
   * @return {void}
   */
  clear() {
    this.stack = []
  }
}

export default Stack
