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

export default defaultCompare
