function returnsThree() {
    return 3;
}

function reciprocal(n) {
    if (typeof n !== "number") throw new TypeError("Must be a number");
    if (n < 1 || n > 1000000) throw new TypeError("Must be between 1 and 1,000,000");
    return 1 / n;
}

module.exports = {
    returnsThree,
    reciprocal
};