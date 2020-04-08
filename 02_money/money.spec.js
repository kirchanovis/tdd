const Dollar = require('./dollar')
const Franc = require('./franc')

describe('Dollar:', () => {

    test('test multiptlication', () => {
        const five = new Dollar(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
    })

})

describe('Franc:', () => {

    test('test multiptlication', () => {
        const five = new Franc(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
        expect(new Franc(5).equals(new Franc(6))).toBeFalsy()
        expect(new Franc(5).equals(new Dollar(5))).toBeFalsy()
    })

})