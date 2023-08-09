const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/person");

describe("Person", () => {
    let person;
    let name = "Dan";
    let age = 42;
    let otherPerson;
    let otherName = "Sarah";
    let otherAge = 45;

    beforeEach(() => {
        person = new Person(name, age);
        otherPerson = new Person(otherName, otherAge);
    });

    describe("constructor()", () => {
        it("should make a new instance of Person", () => {
            expect(person).to.be.an.instanceof(Person);
        });
        it("should set properties of name and age on Person", () => {
            expect(person.name).to.equal(name);
            expect(person.age).to.equal(age);
        });
    });

    describe("sayHello()", () => {
        it("should return a greeting with the given Person instance's name", () => {
            expect(person.sayHello()).to.equal(`Hello, ${name}`);
        });
    });

    describe("visit(otherPerson)", () => {
        it("should return a string stating that this instance visited the passed-in person instance", () => {
            expect(person.visit(otherPerson)).to.equal(`${name} visited ${otherName}`);
        });
    });

    describe("switchVisit(otherPerson)", () => {
        it("should invoke the visit function of otherPerson, passing in the current instance", () => {
            const spy = chai.spy.on(otherPerson, "visit");
            person.switchVisit(otherPerson);
            expect(spy).to.have.been.called();
        });
    });

    describe("update(obj)", () => {
        context("argument is not a valid object", () => {
            it("should throw a new TypeError if argument is not an object", () => {
                expect(() => person.update(23)).to.throw(TypeError);
                expect(() => person.update([1, 2, 3])).to.throw(TypeError);
                expect(() => person.update("string")).to.throw(TypeError);
            });
            it("should throw a TypeError if the argument is an object without a name or age property", () => {
                expect(() => person.update({ name: "Bob" })).to.throw(TypeError);
                expect(() => person.update({ age: "55" })).to.throw(TypeError);
            });
        });
        context("argument is a valid object", () => {
            it("should update the instance's name and age to match the passed-in values", () => {
                let coolPerson = new Person("mai", 32);
                coolPerson.update({ name: "lulu", age: 57 });
                expect(coolPerson.name).to.equal("lulu");
                expect(coolPerson.age).to.equal(57);
            });
        });
    });

    describe("tryUpdate(obj)", () => {
        context("update(obj) is not successfully invoked", () => {
            it("should return false", () => {
                expect(person.tryUpdate(23)).to.be.false;
                expect(person.tryUpdate({ name: "Bob" })).to.be.false;
            });
        });
        context("update(obj) is successfully invoked", () => {
            it("should return true", () => {
                let coolPerson = new Person("mai", 32);
                expect(coolPerson.tryUpdate({ name: "lulu", age: 57 })).to.be.true;
            });
        });
    });

    describe("greetAll(obj)", () => {
        it("should return an array of strings calling sayHello on each instance in a given array", () => {
            expect(Person.greetAll([person, otherPerson])).to.eql([`Hello, ${person.name}`, `Hello, ${otherPerson.name}`]);
        });
        it("should call sayHello once for every given Person instance", () => {
            const spy = chai.spy.on(Person.prototype, "sayHello");
            Person.greetAll([person, otherPerson]);
            expect(spy).to.have.been.called(2);
        });
    });
});