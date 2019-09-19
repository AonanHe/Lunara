/**
 * Fibonacci sequence
 *
 * @category Math
 * @param {number} n
 * @return {number}
 * @example
 *
 * // 0, 1, 1, 2, 3, 5, 8, 13, 21...
 * fibonacci(7)
 * // => 13
 */
function fibonacci(n) {
  let f = 0
  let a = 0
  let b = 1
  if (n === 1) return b
  for (let i = 2; i <= n; i += 1) {
    f = a + b
    a = b
    b = f
  }
  return f
}

export default fibonacci
