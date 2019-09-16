import differenceSet from '../src/differenceSet'

describe('differenceSet', () => {
  test('should calculate difference set', () => {
    expect(differenceSet(new Set([1, 2, 3]), new Set([2, 3, 4, 5]))).toEqual(
      new Set([1])
    )
    expect(differenceSet(new Set([1]), new Set([1]))).toEqual(new Set([]))
  })
})
