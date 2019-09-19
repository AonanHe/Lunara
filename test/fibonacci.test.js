import fibonacci from '../src/fibonacci'

describe('fibonacci', () => {
  test('should calculate fibonacci', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(7)).toBe(13)
    expect(fibonacci(12)).toBe(144)
  })
})
