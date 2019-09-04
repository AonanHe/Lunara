/**
 * The Euclid's algorithm calculates the greatest common divisor of two natural numbers a and b,
 * which are not all zero.
 * The greatest common divisor g is the largest natural number
 * that divides both a and b without leaving a remainder.
 *
 * @category Math
 * @param {number} a
 * @param {number} b
 * @return {number} Returns the GCD.
 * @example
 *
 * gcd(18, 27)
 * // => 9
 */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

export default gcd
