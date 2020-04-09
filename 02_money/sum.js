
class Sum {
    constructor(augend, addend) {
        this.augend = augend,
        this.addend = addend
    }

    times(val) {
        return new Sum(this.augend.reduce(this.augend).times(val), this.addend.reduce(this.addend).times(val))
    }
}

module.exports = Sum