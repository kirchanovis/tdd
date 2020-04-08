const Money = require('./money')

class Dollar extends Money {
    constructor(amount) {
        super(amount);
    }
}

module.exports = Dollar