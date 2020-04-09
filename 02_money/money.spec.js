const Money = require('./money')
const Bank = require('./bank')

describe('Dollar:', () => {

    let factory, bank
    beforeEach(() => {
        factory = new Money()
        bank = new Bank()
    })

    test('test multiptlication', () => {
        const five = factory.dollar(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(factory.dollar(5).equals(factory.dollar(5))).toBeTruthy()
        expect(factory.dollar(5).equals(factory.dollar(6))).toBeFalsy()
    })

    test('test simple addition', () => {
        const five = factory.dollar(5),
            sum = five.plus(five),
            reduce = bank.reduce(sum, 'USD')

        expect(reduce).toEqual(factory.dollar(10))
    })

})

describe('Franc:', () => {

    let factory
    beforeEach(() => {
        factory = new Money()
    })

    test('test multiptlication', () => {
        const five = factory.franc(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(factory.franc(5).equals(factory.franc(5))).toBeTruthy()
        expect(factory.franc(5).equals(factory.franc(6))).toBeFalsy()

        expect(factory.franc(5).equals(factory.dollar(5))).toBeFalsy()
    })

})