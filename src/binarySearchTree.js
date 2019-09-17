function TreeNode(key) {
  this.key = key
  this.left = null
  this.right = null
}

class BinarySearchTree {
  /**
   * Creates a binary search tree
   *
   * @private
   * @constructor
   * @param {*} compareFn A compare Function
   */
  constructor() {
    this.root = null
  }

  /**
   * Insert a new node with given key in BST.
   *
   * @param {number|string} key
   * @memberOf BinarySearchTree
   * @return {void}
   */
  insert(key) {
    const newNode = new TreeNode(key)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  /**
   * In-order traversal
   *
   * @memberOf BinarySearchTree
   * @param {*} callback
   * @return {void}
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * Pre-order traversal
   *
   * @memberOf BinarySearchTree
   * @param {*} callback
   * @return {void}
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * Post-order traversal
   *
   * @memberOf BinarySearchTree
   * @param {*} callback
   * @return {void}
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  /**
   * Returns a minimum item of BST.
   *
   * @memberOf BinarySearchTree
   * @return {TreeNode}
   */
  min() {
    return this.minNode(this.root)
  }

  /**
   * Returns a maximum item of BST.
   *
   * @memberOf BinarySearchTree
   * @return {TreeNode}
   */
  max() {
    return this.maxNode(this.root)
  }

  /**
   * Returns `true` if the key value is in the BST, else `false`.
   *
   * @param {number|string} key
   * @memberOf BinarySearchTree
   * @return {boolean}
   */
  search(key) {
    return this.searchNode(this.root, key)
  }

  /**
   * Removes a key value from the BST.
   *
   * @param {number|string} key
   * @return {void}
   */
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @param {TreeNode} newNode
   * @return {void}
   */
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else if (!node.right) {
      node.right = newNode
    } else {
      this.insertNode(node.right, newNode)
    }
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @param {Function} callback
   * @return {void}
   */
  inOrderTraverseNode(node, callback) {
    if (!node) return
    this.inOrderTraverseNode(node.left, callback)
    callback(node.key)
    this.inOrderTraverseNode(node.right, callback)
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @param {Function} callback
   * @return {void}
   */
  preOrderTraverseNode(node, callback) {
    if (!node) return
    callback(node.key)
    this.preOrderTraverseNode(node.left, callback)
    this.preOrderTraverseNode(node.right, callback)
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @param {Function} callback
   * @return {void}
   */
  postOrderTraverseNode(node, callback) {
    if (!node) return
    this.postOrderTraverseNode(node.left, callback)
    this.postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @return {TreeNode}
   */
  maxNode(node) {
    if (!node) return undefined
    let current = node
    while (current && current.right) {
      current = current.right
    }
    return current
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @return {TreeNode}
   */
  minNode(node) {
    if (!node) return undefined
    let current = node
    while (current && current.left) {
      current = current.left
    }
    return current
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @param {number|string} key
   * @return {boolean}
   */
  searchNode(node, key) {
    if (!node) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    }
    if (key > node.key) {
      return this.searchNode(node.right, key)
    }
    return true
  }

  /**
   * @private
   * @memberOf BinarySearchTree
   * @param {TreeNode} node
   * @param {number|string} key
   * @return {TreeNode}
   */
  removeNode(node, key) {
    if (!node) return undefined
    let current = node
    if (key < current.key) {
      current.left = this.removeNode(current.left, key)
      return current
    }
    if (key > current.key) {
      current.right = this.removeNode(current.right, key)
      return current
    }
    if (!current.left && !current.right) {
      current = undefined
      return current
    }
    if (!current.left) {
      current = current.right
      return current
    }
    if (!current.right) {
      current = current.left
      return current
    }
    const x = this.minNode(current.right)
    current.key = x.key
    current.right = this.removeNode(current.right, x.key)
    return current
  }
}

export default BinarySearchTree
