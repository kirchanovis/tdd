class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(val) {
        return new Dollar(this.amount*val)
    }

    equales(obj) {
        return obj.amount === this.amount
    }
}

module.exports = Dollar