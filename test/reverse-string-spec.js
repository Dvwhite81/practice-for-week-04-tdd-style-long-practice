const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString(string)", () => {
    it("should return the string in reverse order", () => {
        const input = "fun";
        expect(reverseString(input)).to.equal("nuf");
    });

    it("should throw a TypeError if input is not a string", () => {
        const number = 1234;
        const array = [1, 2, 3, "four"];
        const object = { one: "two", three: "four" };
        expect(() => reverseString(number)).to.throw(TypeError);
        expect(() => reverseString(array)).to.throw(TypeError);
        expect(() => reverseString(object)).to.throw(TypeError);
    });
});