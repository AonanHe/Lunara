/**
 * Checks if one set B is subset of set A.
 *
 * @param {Object} superSet
 * @param {Object} subSet
 * @return {boolean} Returns `true` if set A is subset of set A, else `false`.
 */
function isSubSet(superSet, subSet) {
  for (const item of subSet) {
    if (!superSet.has(item)) {
      return false
    }
  }
  return true
}

export default isSubSet
