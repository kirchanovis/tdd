const Money = require('./money')
const Bank = require('./bank')
const Sum = require('./sum')

describe('Dollar:', () => {

    let momey, bank, sum
    beforeEach(() => {
        momey = new Money()
        bank = new Bank()
        sm = new Sum()
    })

    test('test multiptlication', () => {
        const five = momey.dollar(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(momey.dollar(5).equals(momey.dollar(5))).toBeTruthy()
        expect(momey.dollar(5).equals(momey.dollar(6))).toBeFalsy()
    })

    test('test simple addition', () => {
        const five = momey.dollar(5),
            sum = five.plus(five),
            reduce = bank.reduce(sum, 'USD')

        expect(reduce).toEqual(momey.dollar(10))
    })

    test('test reduce sum', () => {
        const sum = new Sum(momey.dollar(3), momey.dollar(4)),
            reduce = bank.reduce(sum, 'USD')

        expect(reduce).toEqual(momey.dollar(7))
    })

    test('test reduce money', () => {
        const reduce = bank.reduce(momey.dollar(1), 'USD')

        expect(reduce).toEqual(momey.dollar(1))
    })

    test('test reduce different currency', () => {
        const add = bank.addRate('CHF','USD', 2),
            result = bank.reduce(momey.franc(2), 'USD')

        expect(result).toEqual(momey.dollar(1))
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