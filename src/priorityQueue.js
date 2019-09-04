import Queue from './queue'

/**
 * Creates a max priority queue.
 * The higher the value, the higher the priority.
 * An element with high priority is dequeued before an element with low priority.
 *
 * @param {*} val
 * @param {*} priority
 */
function QueueItem(val, priority) {
  this.val = val
  this.priority = priority
}

class PriorityQueue extends Queue {
  /**
   * Add element to the queue based on priority.
   *
   * @memberOf PriorityQueue
   * @param {*} val
   * @param {number} priority
   */
  push(val, priority) {
    const item = new QueueItem(val, priority)
    if (this.isEmpty()) {
      this.queue.push(item)
    } else {
      let added = false
      for (let i = 0; i < this.queue.length; i += 1) {
        if (item.priority > this.queue[i].priority) {
          this.queue.splice(i, 0, item)
          added = true
          break
        }
      }
      if (!added) {
        this.queue.push(item)
      }
    }
  }
}

export default PriorityQueue
