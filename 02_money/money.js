const Sum = require('./sum')

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency
    }

    plus(addend) {
        return new Sum(this ,addend)
    }

    reduce(sum, to) {
        if (sum instanceof Money) {
            const rate = sum.currency === 'CHF' ? 2 : 1;
            return new Money(sum.amount / rate, to)
        } else {
            const amount = sum.augend.amount + sum.addend.amount
            return new Money(amount, to)
        }
    }

    dollar(val) {
        return new Dollar(val)
    }

    franc(val) {
        return new Franc(val)
    }

    times(val) {
        return new Money(this.amount*val)
    }

    currency() {
        return this.currency
    }

    equals(obj) {
        return obj.amount === this.amount && obj.currency === this.currency
    }
}

class Dollar extends Money {
    constructor(amount) {
        super(amount, 'USD');
    }
}

class Franc extends Money {
    constructor(amount) {
        super(amount, 'CHF');
    }
}

module.exports = Money