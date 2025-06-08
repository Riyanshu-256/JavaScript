'use strict';

/*
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

//---------------------------------------------------------------------CODING CHALLENGE #01-------------------------------------------------------------------//
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

// ES6 CLASSES

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Anshu Sharma', 2005);
console.log(Anshu);
jessica.calcAge();
console.log(Anshu.age);

console.log(Anshu.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Riyanshu Sharma', 2005);
// PersonCl.hey();

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

// SETTERS & GETTERS
const account = {
  owner: 'Anshu',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


//---------------------------------------------------------------------------------------------------------------------------------------------------------//

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Saloni = Object.create(PersonProto);
console.log(Saloni);
Saloni.name = 'Saloni';
Saloni.birthYear = 2004;
Saloni.calcAge();

console.log(Saloni.__proto__ === PersonProto);

const Supriya = Object.create(PersonProto);
sarah.init('Supriya', 1979);
sarah.calcAge();

const Aisha = Object.create(PersonProto);
sarah.init('Aisha', 1979);
sarah.calcAge();

//----------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------CODING CHALLENGE #02-------------------------------------------------------------//

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() { 
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); 
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS

const Person = function(firstName, birthYear) {
   
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Riyanshu', 2005, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------CODING CHALLENGE #03------------------------------------------------------//

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const Riyans = new EV('Riyans', 120, 23);
Riyans.chargeBattery(90);
console.log(Riyans);
Riyans.brake();
Riyans.accelerate();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// INHERITANCE BETWEEN "CLASSES": ES6 CLASSES 

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2025 - this.birthYear
      } years old, but as a student I feel more like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const Anshu = new StudentCl('Anshu Sharma', 2005, 'Computer Science');
Anshu.introduce();
Anshu.calcAge();


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Priya = Object.create(StudentProto);
Priya.init('Priya', 2010, 'Computer Science');
Priya.introduce();
Priya.calcAge();


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
/*
// ANOTHER CLASS EXAMPLE

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const Acc1 = new Account('Andrew', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.approveLoan(1000);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);
*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS 

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chaninable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Andrew', 'EUR', 1111);
// acc1.deposit(300);
// acc1.withdraw(100);
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);
// console.log(acc1.#movements);
// Account.#test();
console.log(movements);

//----------------------------------------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------CODING CHALLENGE #04------------------------------------------------------//


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const Riyan = new EVCl('Riyan', 120, 23);
console.log(Riyan);
// console.log(Riyan.#charge);
Riyan
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(Riyan.speedUS);

//-----------------------------------------------------------------------COMPLETED-----------------------------------------------------------------------------//