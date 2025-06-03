/*
// SCOPING IN PRACTICE

'use strict';

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1999 && birthYear <= 2007) {
      var millionaire = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Riyanshu';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh my god!!!,  you're a millionaire, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millionaire);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Riyanshu';
calcAge(2005);
// console.log(age);
// printAge();
*/


/*
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Riyanshu';
let profession = 'student';
const year = 2025;

// Functions
console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
console.log(addArrow);

// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  //console.log(this)
};
calcAge(2005);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this)
};
calcAge(2005);

const Riyanshu = {
  year: 2025,
  calcAge: function (){
    console.log(this);
    console.log(2025 - this.year);
  },
};
Riyanshu.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Riyanshu.calcAge;
matilda.calcAge();

const f = Riyanshu.calcAge;
f();