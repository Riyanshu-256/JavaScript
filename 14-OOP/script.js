'use strict';

// CONSTRUCTOR FUNCTION
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const Anshu = new Person('Anshu', 2005);
console.log(Anshu);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}