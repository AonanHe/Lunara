import lcm from '../src/lcm'

describe('lcm', () => {
  test('should calculate the least common multiple of two natural numbers', () => {
    expect(lcm(21, 6)).toBe(42)
    expect(lcm(10, 15)).toBe(30)
  })

  test('should calculate the LCM for edge cases around zero', () => {
    expect(lcm(0, 1)).toBe(0)
    expect(lcm(2, 0)).toBe(0)
  })
})
