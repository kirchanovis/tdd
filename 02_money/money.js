class Money {
    constructor(amount) {
        this.amount = amount;
    }

    times(val) {
        return new Money(this.amount*val)
    }

    equals(obj) {
        return obj.amount === this.amount
    }
}

module.exports = Money