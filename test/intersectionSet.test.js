import intersectionSet from '../src/intersectionSet'

describe('intersectionSet', () => {
  test('should calculate intersection set', () => {
    expect(intersectionSet(new Set([1, 2, 3]), new Set([1, 2, 3]))).toEqual(
      new Set([1, 2, 3])
    )
    expect(intersectionSet(new Set([1, 2, 3, 4, 5]), new Set([2, 3]))).toEqual(
      new Set([2, 3])
    )
    expect(
      intersectionSet(new Set([1, 2, 3, 4, 5]), new Set([2, 3, 6, 9]))
    ).toEqual(new Set([2, 3]))
    expect(intersectionSet(new Set([1]), new Set([2]))).toEqual(new Set([]))
  })
})
