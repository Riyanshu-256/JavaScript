/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("BARIS");
console.log(13);

let firstName = "BARIS";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let riyanshu_sharma = "RS";
let $function = 37;

let Person = 'Riyanshu'
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(riyanshu_sharma);
console.log(PI);
console.log(myFirstJob);
console.log(myCurrentJob);
console.log(job1);
console.log(job2);

let javaScriptIsFun= true;
console.log(javaScriptIsFun);

 console.log(typeof true); 
console.log(typeof javaScriptIsFun);
console.log(typeof 37);
console.log(typeof 'Riyanshu');


javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 22;
age = 23;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastName = 'Sharma';
console.log(lastName);
*/

/*
//math operator
const ageRiyanshu = now-2005;
const ageAditya = now-2001;
const ageIndu = now-1997;
console.log(ageRiyanshu, ageAditya, ageIndu);

console.log(ageRiyanshu*2, ageAditya/5, ageIndu%2);

const firstName = 'Riyanshu';
const lastName = 'Sharma';
console.log(firstName + ' ' + lastName);

// assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// comparison opeartors
console.log(ageRiyanshu > ageAditya); // >, <, >=,<=
console.age(ageIndu >= 18);

const isFullAge = ageIndu >=18;

console.log(now - 2005 > now - 2001 > now - 1997);
*/
/*
let now=2025;
const ageRiyanshu = now-2005;
const ageAditya = now-2001;
const ageIndu = now-1997;
console.log(now - 2005 > now - 2001 > now - 1997);

let x,y;
x = y = 25 - 10 -5; //x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageRiyanshu + ageAditya + ageIndu)/2 ;
console.log(ageRiyanshu, ageAditya, ageIndu, averageAge);

const firstName = 'Riyanshu';
const job = 'teacher';
const birthYear = 2005;
const year = 2025;

const Riyanshu = `I'm" +' '+ firstName + ' ' + (year - birthYear) +' ' + 'year old' + ' ' + job + '!' ` ;
console.log(Riyanshu);
 console.log('Just a regular string');

 console.log('String with \n\
    multiple \n\
    lines');
*/
/*
const age = 21;

if (age >= 18){
    console.log('Riyanshu can drive');
}else{
    const yearsLeft = 18 - age;
    console.log('Riyanshu is too young. wait another ${yearsLeft} years :');
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John(${BMIJohn});!`)
}else{
    console.log(`Mark's BMI (${BMIJohn})is higher than John(${BMIMark});!`)
}

//type conversion
const inputYear = '1991' ;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Riyanshu'));
console.log(typeof NaN)

console.log(String(23), 23);

//type coercion
console.log('I am ' + 21 + ' years old');
console.log('23' - '10'- 3);
console.log('23' + '10'+ 3);
console.log('23' * '10');
console.log('23' / '10');
console.log('23' % '10');

let n = '1'+ 1;
n = n -1;
console.log(n);

console.log( 2+3+4 +'5');
console.log('10'-'4'-'3'-2+'5');

// 5 falsy values -->  0, null, ' ', undefined, NaN
const money = 100;
if(money) {
    console.log("Don't spend it all");
}else {
    console.log('You should get a job!');
}

let height = 0;
if(height) {
    console.log('YAY! height is defined');
}else {
    console.log('Height is UNNDEFINED');
}

//equality operator
const age = 18;
if(age == 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // 22 === 23 -> FALSE
    console.log('cool! 23 is amazing number!');
} else if(favourite==7) {
    console.log('7 is a cool number');
}else{
    console.log('Number is not 23 or 7')
}

if (favourite !==23) console.log('Why not 23!');

//logical operators
const hasDriveringLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriveringLicense && hasGoodVision);
console.log(hasDriveringLicense || hasGoodVision);

if (hasDriveringLicense && hasGoodVision) {
    console.log('Riyanshu is able to drive!');
}else{
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriveringLicense && hasGoodVision && isTired);

if (hasDriveringLicense && hasGoodVision && isTired) {
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive...');
}

//Bonus 1
const scoreDolphins = (97+112+80)/3;
const scoreKoalas = (100+95+50)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');

} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100);
else {
    console.log('No one win the trophy');
}
    */
 /*
//The switch statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
} 

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
  */
/*
//Statements and Expression
3 + 4
1991
true && false && !false

if (23>10) {
    const str = '23 is bigger';
}
const me ='Riyanshu';
console.log(`I'm ${2025-2005} years old ${me}`);
*/

/*
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

/*
// Coding Challenge #4

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/