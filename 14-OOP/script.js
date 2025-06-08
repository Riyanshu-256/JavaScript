'use strict';

// CONSTRUCTOR FUNCTION AND NEW OPERATOR
const Person = function(firstName, birthYear) {
    // Instances properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this
    //this.calcAge = function(){
    //   console.log(2025 - birthYear);
    // };
};

const Anshu = new Person('Anshu', 2005);
console.log(Anshu);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Riyanshu = new Person('Riyanshu', 2005);
const Riya = new Person('Riya', 2005);
console.log(Riyanshu, Riya);

console.log(Anshu instanceof Person);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Anshu.calcAge();
Riyanshu.calcAge();

console.log(Anshu.__proto__);
console.log(Riyanshu.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Anshu));
console.log(Person.prototype.isPrototypeOf(Riyanshu));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(Anshu.species, Riyanshu.species);

console.log(Anshu.hasOwnProperty('firstName'));
console.log(Riyanshu.hasOwnProperty('species'));

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

