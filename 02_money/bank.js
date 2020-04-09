const Money = require('./money'),
    factory = new Money()

class Bank {
    constructor() {
        
    }

    reduce() {
        return factory.dollar(10)
    }
}

module.exports = Bank