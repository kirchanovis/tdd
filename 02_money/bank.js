const Money = require('./money')

class Bank {
    constructor() {}

    reduce(sum, to) {
        if (sum instanceof Money) {
            return new Money(sum.amount, to)
        } else {
            const amount = sum.augend.amount + sum.addend.amount
            return new Money(amount, to)
        }

    }
}

module.exports = Bank