class Lodash {
    compact(array) {
        return array.filter(val => !!val)
    }

    groupBy(array, prop) {
        return array.reduce((acc, i) => {
            const key = typeof prop === 'function' ? prop(i) : i[prop]
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(i)
            return acc
        }, {})
    }

    concat() {
        return [].reduce.call(arguments, (a, b) => {
            a = Array.isArray(a) ? a : [], 
            b = Array.isArray(b) ? b : []

            return [
                ...a,
                ...b
            ]
        });
    }
}

module.exports = Lodash