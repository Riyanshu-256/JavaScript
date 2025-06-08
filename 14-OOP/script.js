'use strict';

// CONSTRUCTOR FUNCTION
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

Person.prototype.calcAge = function (){
    console.log(2025 - this.birthYear)
};

Anshu.calcAge();
Riyanshu.calcAge();
Riya.calcAge();