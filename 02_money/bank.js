const Money = require('./money'),
    money = new Money()

class Bank {
    constructor() {}

    addRate() {
        return null
    }

    rate(sum, to) {
        return sum.currency === 'CHF' ? 2 : 1;
    }

    reduce(sum, to) {
        return money.reduce(sum, to)
    }
}

module.exports = Bank