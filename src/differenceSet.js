/**
 * Implementing difference set.
 *
 * @param {Object} setA
 * @param {Object} setB
 * @return {Object} Returns difference set.
 */
function differenceSet(setA, setB) {
  const difference = new Set(setA)
  for (const item of setB) {
    difference.delete(item)
  }
  return difference
}

export default differenceSet
