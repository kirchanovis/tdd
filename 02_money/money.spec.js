const Money = require('./money')

describe('Dollar:', () => {

    let factory
    beforeEach(() => {
        factory = new Money()
    })

    test('test multiptlication', () => {
        const factory = new Money()
        const five = factory.dollar(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        const factory = new Money()
        expect(factory.dollar(5).equals(factory.dollar(5))).toBeTruthy()
        expect(factory.dollar(5).equals(factory.dollar(6))).toBeFalsy()
    })

})

describe('Franc:', () => {

    let factory
    beforeEach(() => {
        factory = new Money()
    })

    test('test multiptlication', () => {
        const factory = new Money()
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