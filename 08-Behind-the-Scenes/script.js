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