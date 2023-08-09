class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, ${this.name}`;
    }

    visit(otherPerson) {
        return `${this.name} visited ${otherPerson.name}`;
    }

    switchVisit(otherPerson) {
        return otherPerson.visit(this);
    }

    update(obj) {
        if (typeof obj !== "object") throw new TypeError("Must be an object");
        if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) throw new TypeError("Object must have name and age properties");

        this.name = obj.name;
        this.age = obj.age;
    }

    tryUpdate(obj) {
        try {
            this.update(obj);
        } catch (error) {
            return false;
        }
        return true;
    }

    static greetAll(obj) {
        let results = [];
        for (let i = 0; i < obj.length; i++) {
            results.push(obj[i].sayHello());
        }
        return results;
    }
}

module.exports = Person;