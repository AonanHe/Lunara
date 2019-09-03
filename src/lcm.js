import gcd from './gcd'

/**
 * The least common multiple of two integers a and b,
 * is the smallest positive integer that is divisible by both a and b.
 * @category Math
 * @param {number} a
 * @param {number} b
 * @return {number} Return the LCM.
 */
function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

export default lcm
