'use strict';

// CONSTRUCTOR FUNCTION
const Person = function(firstName, birthYear) {
    console.log(this);
}

new Person('Anshu', 2005);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}