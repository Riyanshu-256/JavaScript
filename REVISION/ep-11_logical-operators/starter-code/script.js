const userAge = 20;

// AND : &&
const isCollegeStudent = (userAge >= 18) && (userAge <= 24);
const isSchoolStudent = (userAge >= 5) && (userAge <= 21);
const isUser = isCollegeStudent && isSchoolStudent ;

// OR : ||
const isStudent = isCollegeStudent || isSchoolStudent ;

// &&, ||
const addResult = 0 && 2 ; 
const orResult = 0 || 2 ;

// LEVEL 1
const addResult2 = ' ' && 'Hello' ;
const orResult2 = ' ' || 'Hello' ;

const addResult3 = 'Hello' && null ;
const orResult3 = 'Hello' || null ;

// LEVEL 2
const addResult4 = 'Hello' && -4 + 4 ;
const orResult4 = 'undefined' || 4 + 4 * 5 ;

// LEVEL 3
const addResult5 = 'Hello' && console.log('Hello');
const orResult5 = 'undefined' || console.log('Hello');
