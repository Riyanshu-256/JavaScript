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

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

console.log(Anshu.__proto__);

// Object.prototype (top of prototype chain)
console.log(Anshu.__proto__.__proto__);
console.log(Anshu.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------CODING CHALLENGE #01-----------------------------------------------------------------------//
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

//------------------------------------------------------------------------------------------------------------------------------------------------------------//