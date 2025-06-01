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
