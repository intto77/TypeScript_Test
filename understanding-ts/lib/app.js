"use strict";
class Person {
    constructor(firstName, lanstName) {
        this.firstName = firstName;
        this.lanstName = lanstName;
        this.fullName = "";
        this.fullName = firstName + " " + lanstName;
    }
    getName() {
        return this.fullName;
    }
}
let person = new Person("taewoon", "kim");
console.log(person.getName());
//# sourceMappingURL=app.js.map