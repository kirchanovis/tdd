const Dollar = require('./dollar')

describe('Dollar:', () => {

    test('test multiptlication', () => {
        const five = new Dollar(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(new Dollar(5).equales(new Dollar(5))).toBeTruthy()
    })

})