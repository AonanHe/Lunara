/**
 * Implementing intersection A ∩ B of two sets.
 *
 * @param {Object} setA
 * @param {Object} setB
 * @return {Object} Returns A ∩ B.
 */
function intersectionSet(setA, setB) {
  const intersection = new Set()
  for (const item of setA) {
    if (setB.has(item)) {
      intersection.add(item)
    }
  }
  return intersection
}

export default intersectionSet
