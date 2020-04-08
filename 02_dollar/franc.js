class Franc {
    constructor(amount) {
        this.amount = amount;
    }

    times(val) {
        return new Franc(this.amount*val)
    }

    equales(obj) {
        return obj.amount === this.amount
    }
}

module.exports = Franc