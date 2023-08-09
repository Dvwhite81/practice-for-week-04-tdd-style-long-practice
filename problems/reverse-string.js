module.exports = function reverseString(string) {
    if (typeof string !== "string") throw new TypeError("Must be a string");
    return string.split("").reverse().join("");
};