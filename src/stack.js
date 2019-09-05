class Stack {
  /**
   * Creates a stack
   *
   * @private
   * @constructor
   */
  constructor() {
    this._stack = []
  }

  /**
   * Push element val onto stack.
   *
   * @memberOf Stack
   * @param {*} val
   * @return {void}
   */
  push(val) {
    this._stack.push(val)
  }

  /**
   * Removes the element on top of the stack and returns that element.
   *
   * @memberOf Stack
   * @return {*}
   */
  pop() {
    return this._stack.pop()
  }

  /**
   * Get the top element.
   *
   * @memberOf Stack
   * @return {*}
   */
  top() {
    return this._stack[this._stack.length - 1]
  }

  /**
   * Returns whether the stack is empty.
   *
   * @memberOf Stack
   * @return {boolean}
   */
  isEmpty() {
    return this._stack.length === 0
  }

  /**
   * Returns the size of the stack.
   *
   * @memberOf Stack
   * @return {number}
   */
  size() {
    return this._stack.length
  }

  /**
   * Removes all elements from the stack.
   *
   * @memberOf Stack
   * @return {void}
   */
  clear() {
    this._stack = []
  }
}

export default Stack
