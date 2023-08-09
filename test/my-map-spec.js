const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap(inputArray, callback)", () => {
    let inputArray;
    let callback;
    let results;
    beforeEach(() => {
        inputArray = [1, 2, 3];
        callback = (el) => el * 2;
        results = myMap(inputArray, callback);
    });
    it("should work like the built-in Array.map method", () => {
        expect(results).to.eql([2, 4, 6]);
    });
    it("should not mutate the input array", () => {
        expect(inputArray).to.eql([1, 2, 3]);
    });
    it("should not call the built-in Array.map", () => {
        const spy = chai.spy.on(inputArray, "map");
        myMap(inputArray, callback);
        expect(spy).to.not.have.been.called();
    });
    it("should invoke the callback once for each element in the input array", () => {
        const spy = chai.spy.on((callback));
        myMap(inputArray, spy);
        expect(spy).to.have.been.called.exactly(3);
    })
});