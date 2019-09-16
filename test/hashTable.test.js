import HashTable from '../src/hashTable'

describe('hashTable', () => {
  test('should set hash', () => {
    const hashTable = new HashTable()
    hashTable.set('Ana', 'ana@email.com')
    expect(hashTable.get('Ana')).toBe('ana@email.com')
  })

  test('should remove hash', () => {
    const hashTable = new HashTable()
    hashTable.set('Donnie', 'donnie@email.com')
    hashTable.set('Ana', 'ana@email.com')
    expect(hashTable.get('Ana')).toBe('ana@email.com')
    expect(hashTable.get('Donnie')).toBe('donnie@email.com')
    hashTable.remove('Ana')
    hashTable.remove('Bill')
    expect(hashTable.get('Ana')).toBe(undefined)
    expect(hashTable.get('Donnie')).toBe('donnie@email.com')
  })

  test('should clear hash table', () => {
    const hashTable = new HashTable()
    expect(hashTable.isEmpty()).toBe(true)
    hashTable.set('Donnie', 'donnie@email.com')
    hashTable.set('Ana', 'ana@email.com')
    expect(hashTable.isEmpty()).toBe(false)
    hashTable.clear()
    expect(hashTable.isEmpty()).toBe(true)
  })
})
