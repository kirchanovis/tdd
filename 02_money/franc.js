const Money = require('./money')

class Franc extends Money {
    constructor(amount) {
        super(amount, 'CHF');
    }
}

module.exports = Franc