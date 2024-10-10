const lodash = require("lodash")

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 8, 10]

const diff1 = lodash.difference(a, b)
const diff2 = lodash.difference(b, a)

console.log(diff1, diff2);