import isSubSet from '../src/isSubSet'

describe('isSubSet', () => {
  test('should check if one set B is subset of set A', () => {
    expect(isSubSet(new Set([1, 2, 3]), new Set([1, 2]))).toBe(true)
    expect(isSubSet(new Set([1, 2, 3]), new Set([0]))).toBe(false)
    expect(isSubSet(new Set([1, 2, 3]), new Set([1, 2, 3, 4, 5]))).toBe(false)
    expect(isSubSet(new Set([0]), new Set([0]))).toBe(true)
  })
})
