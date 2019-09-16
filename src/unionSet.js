/**
 * Implementing union A ∪ B of two sets.
 *
 * @param {Object} setA
 * @param {Object} setB
 * @return {Object} Returns A ∪ B.
 */
function unionSet(setA, setB) {
  const union = new Set(setA)
  for (const item of setB) {
    union.add(item)
  }
  return union
}

export default unionSet
