class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency
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

module.exports = Money