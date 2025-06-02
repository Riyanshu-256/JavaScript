/* 1.
// Activating Strict mode

let hasDriveringLicence = false;
const passTest = true;

if (passTest) hasDriveringLicence = true;
if (hasDriveringLicence) console.log('I can drive : D');

// const interface = 'Audio';
// const private = 534;
*/

/* 2.
//FUNCTIONS
function logger(){
    console.log('My name is Anshu');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}'oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.Log(applejuice.juice);

const appleOrange = fruitProcessor(10,5);
console.Log(appleOrange.juice);
*/

/* 3.
// FUNCTION DECLARATION
const age1 = calcAge1(2005);

function calcAge1(birthYear) {
    return 2025 - birthYear;
}

//function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear
}
const age2 = calcAge2(2005);
console.log(age1, age2);
*/

/* 4.
//ARROW FUNCTIONS
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2005, 'Riyanshu'));
console.log(yearsUntilRetirement(2000, 'Anshu'));
*/

/* 5.
//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/
/* 6.
//REVIEWING FUNCTIONS
const calcAge = function(birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        return -1;
        console.log(`${firstName} has already retired`);
    }
}
yearsUntilRetirement(2005, 'Riyanshu');
yearsUntilRetirement(2000, 'Anshu');
*/

/* //Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/* 7.
// ARRAY
const friend1 = 'Indu';
const friend2 = 'Aditya';
const friend3 = 'Anshu';

const friends = ['Indu', 'Aditya', 'Anshu'];
console.log(friends);

const years = new Array(1996, 2001, 2005);
console.log(years);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Chiiki';
console.log(friends)

const firstName = 'Anshu';
const Anshu = [firstName, 'Sharma', 2025-2005, 'Student', friends ];
console.log(Anshu.length);

// Exercise
const calcAge = function (birthYear) {
    return 2025-2000;
}

const year = [1900, 1996, 2000, 2005, 2010] ;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);
const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(age);
*/

/* 8.
// Add elements
const friends = ['Indu', 'Aditya', 'Anshu'];
const newLength = friends.push('Chikki');
console.log(friends);
console.log(newLength);

friends.unshift('Ansh');
console.log(friends);

// Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(friends.indexOf('Anshu'));
friends.shift(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Anshu'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Chikki')) {
    console.log('You have a friend called Chikki');
}
*/
 
/*
// Coding Challenge #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/* 9.
// OBJECTS
//DOT vs BRACKET NOTATION
const Anshu = {
    firstName: 'Anshu',
    lastName: 'Sharma',
    age: 2025-2005,
    profession: 'Student',
    friends: ['Aditya', 'Indu', 'Riyanshu']
};
console.log(Anshu);

console.log(Anshu.lastName);
console.log(Anshu['lastName']);

const nameKey = 'Name';
console.log(Anshu['firstName' + nameKey]);
console.log(Anshu['lastName' + nameKey]);

//console.log(Anshu.'last' + nameKey) --> Wrong way

const interestedIn = prompt('What do you whant to know about Anshu? Choose between firstName, lastName, age, profession, and friends');

if (Anshu[interestedIn]) {
    console.log(Anshu[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, profession, and friends');
}
Anshu.location = 'Koderma';
Anshu['email'] = 'riyanshu062@gmail.com';
console.log(Anshu);

// Challenge --> "Anshu has 3 friends, and his best friend is called Indu"

console.log(`${Anshu.firstName} has ${Anshu.friends.length} friends, and his best friend is called ${Anshu.friends[1]}`);
*/

/* 10.
//OBJECT METHODS

const Anshu = {
  firstName: 'Anshu',
  lastName: 'Sharma',
  birthYeah: 2000,
  profession: 'Student',
  friends: ['Aditya', 'Indu', 'Riyanshu'],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${Anshu.profession}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`
  }
};

console.log(Anshu.calcAge());

console.log(Anshu.age);
console.log(Anshu.age);
console.log(Anshu.age);
*/

/*
// CODING CHALLENGE
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

/* 11.
//ITERATION_THE FOR LOOP
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');


// for loop keeps running while condition is true
for(let rep = 1; rep <=30; rep++) {
    console.log(`Lifting wights repetition ${rep}`);
}
*/

/* 12.
//LOOPING, ARRAYS, BREAKING CONDITION
const Anshu = [
    'Anshu',
    'Sharma',
    2025-2005,
    'Student',
    ['Aditya', 'Indu', 'Riyanshu']
];
const types = [];

// console.log(Anshu[0])
// console.log(Anshu[1])
// ...
// console.log(Anshu[4])
// jonas[5] does NOT exist

for (let i = 0; i <Anshu.length; i++) {

  // Reading from Anshu array
  console.log(Anshu[i], typeof Anshu[i]);

  // Filling types array
  // types[i] = typeof Anshu[i];
  types.push(typeof Anshu[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);
*/

/* 13.
//LOOPING BACKWARDS
  const Anshu = [
    'Anshu',
    'Sharma',
    2025-2005,
    'Student',
    ['Aditya', 'Indu', 'Riyanshu']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = Anshu.length - 1; i >= 0; i--) {
  console.log(i, Anshu[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

