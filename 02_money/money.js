class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency
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