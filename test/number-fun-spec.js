const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", () => {
    it("should return the number 3", () => {
        expect(returnsThree()).to.equal(3);
    });
});

describe("reciprocal(num)", () => {
    it("should return the reciprocal of a given number", () => {
        const input = 32;
        expect(reciprocal(input)).to.equal(1 / 32);
    });
    it("should throw a TypeError if input is not valid", () => {
        const string = "string";
        const array = [1, 2, 3, "four"];
        const object = { one: "two", three: "four" };
        const tooLow = -50;
        const tooHigh = 3210000;
        expect(() => reciprocal(string)).to.throw(TypeError);
        expect(() => reciprocal(array)).to.throw(TypeError);
        expect(() => reciprocal(object)).to.throw(TypeError);
        expect(() => reciprocal(tooLow)).to.throw(TypeError);
        expect(() => reciprocal(tooHigh)).to.throw(TypeError);
    });
});