const Lodash = require('./sync')

describe('Lodash: compact', () => {

    const _ = new Lodash();
    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello'];
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined();
    })

    test('shoulds remove falsy values from array', () => {
        const result = [42, true, 'hello']

        expect(_.compact(array)).toEqual(result)
    })

    test('shoulds NOT contain falsy values', () => {

        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })

})

describe('Lodash: groupBy', () => {
    const _ = new Lodash();

    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined();
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1],
            result = {
                2: [2.2, 2.4],
                4: [4.2], 
                3: [3.1],
            }
        expect(_.groupBy(array,  Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three'],
            result = {
                5: ['three'],
                3: ['one', 'two']
            }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})

describe('Lodash: concat', () => {
    const _ = new Lodash();

    test('should be defined', () => {
        expect(_.concat).toBeDefined()
        expect(_.concat).not.toBeUndefined();
    })

    test('should come array', () => {
        const array1 = [1],
            array2 = {2: 2},
            result = [1]

        expect(_.concat(array1, array2)).toEqual(result)
    })

    test('should new concatenated array', () => {
        const array1 = [1],
            array2 = [2],
            array3 = [3, 4],
            result = [1, 2, 3, 4]

        expect(_.concat(array1, array2, array3)).toEqual(result)
    })
})