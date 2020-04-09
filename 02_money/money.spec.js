const Money = require('./money')
const Bank = require('./bank')
const Sum = require('./sum')

describe('Dollar:', () => {

    let money, bank, sm
    beforeEach(() => {
        money = new Money()
        bank = new Bank()
        sm = new Sum()
    })

    test('test multiptlication', () => {
        const five = money.dollar(5);
        let product = five.times(2);

        expect(product.amount).toEqual(10)
        product = five.times(3);
        expect(product.amount).toEqual(15)
    })

    test('test equality', () => {
        expect(money.dollar(5).equals(money.dollar(5))).toBeTruthy()
        expect(money.dollar(5).equals(money.dollar(6))).toBeFalsy()
    })

    test('test simple addition', () => {
        const five = money.dollar(5),
            sum = five.plus(five),
            reduce = bank.reduce(sum, 'USD')

        expect(reduce).toEqual(money.dollar(10))
    })

    test('test reduce sum', () => {
        const sum = new Sum(money.dollar(3), money.dollar(4)),
            reduce = bank.reduce(sum, 'USD')

        expect(reduce).toEqual(money.dollar(7))
    })

    test('test reduce money', () => {
        const reduce = bank.reduce(money.dollar(1), 'USD')

        expect(reduce).toEqual(money.dollar(1))
    })

    test('test reduce different currency', () => {
        const result = bank.reduce(money.franc(2), 'USD')

        expect(result).toEqual(money.dollar(1))
    })

    test('test mixed addition', () => {
        const fiveDollar = money.dollar(5),
            tenFranc = money.franc(10),
            add = bank.addRate('CHF','USD', 2),
            result = bank.reduce(fiveDollar.plus(tenFranc), 'USD')

        expect(result).toEqual(money.dollar(10))
    })

    test('test mixed sum times', () => {
        const fiveDollar = money.dollar(5),
            tenFranc = money.franc(10),
            sum = new Sum(fiveDollar, tenFranc).times(2),
            result = bank.reduce(sum, 'USD')

        expect(result).toEqual(money.dollar(20))
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