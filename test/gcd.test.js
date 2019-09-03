import gcd from '../src/gcd'

describe('gcd', () => {
  test('should calculate the greatest common divisor of two natural numbers', () => {
    expect(gcd(18, 27)).toBe(9)
    expect(gcd(15, 3)).toBe(3)
  })

  test('should calculate the GCD for edge cases around zero', () => {
    expect(gcd(2, 0)).toBe(2)
    expect(gcd(0, 6)).toBe(6)
  })
})
