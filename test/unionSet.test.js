import unionSet from '../src/unionSet'

describe('unionSet', () => {
  test('should calculate union set', () => {
    expect(unionSet(new Set([1, 2, 3]), new Set([1, 2, 3]))).toEqual(
      new Set([1, 2, 3])
    )
    expect(unionSet(new Set([1, 2, 3]), new Set([4, 5, 6]))).toEqual(
      new Set([1, 2, 3, 4, 5, 6])
    )
    expect(unionSet(new Set([1]), new Set([]))).toEqual(new Set([1]))
  })
})
