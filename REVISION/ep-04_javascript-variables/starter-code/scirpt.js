// LET(to change)
let firstName = 'Riyanshu';
let lastName = 'Sharma';
let age = 22;
let isHappy = true;

firstName = 'Anshu';  // to change the firstName

let userIntro = 'Hi I am' +' '+ firstName +' '+ lastName +'. I am' +' ' + age +' '+'years' ; // ' ' => to craete space b/w to words

console.log(userIntro);

//----------------------------------------------------------------------------------------------------------------------------//

// CONST(to remain the value same)
const hoursInDay = 24;

console.log(hoursInDay);

//----------------------------------------------------------------------------------------------------------------------------//

// VAR(similar as LET)
{
    var Name = 'Riyanshu Sharma';   // { } => if we use block bracket in LET & CONST -> we get undefined and show error in both case 
}
var team = 'CODE BLOODED';
var member = 9;

var Intro = 'Hi Myself' +' '+ Name +'. Currently I am learning frontend course'+' '+'which is organised by' +' '+ team +' '+'member' ;

console.log(Intro);

//---------------------------------------------------------------------------------------------------------------------------//

/*
KEYPOINTS: 
Difference b/w LET & VAR is mainly that 
1. if we define a variable inside a { }, we cannot access the LET outside the { } whereas We can access the VAR outside the { }.
2. In case of VAR we can access the variable before the declaration whereas in case of LET we cannot access the variable before the declaration
*/

//----------------------------------------------------------COMPLETED-------------------------------------------------------//