const Money = require('./money'),
    money = new Money()

class Bank {
    constructor() {}

    addRate() {
        return null
    }
    reduce(sum, to) {
        return money.reduce(sum, to)
    }
}

module.exports = Bank