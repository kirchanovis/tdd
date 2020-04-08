const Money = require('./money')

class Franc extends Money {
    constructor(amount) {
        super(amount);
    }
}

module.exports = Franc