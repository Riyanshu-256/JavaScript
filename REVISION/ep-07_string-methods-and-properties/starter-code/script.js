const message = 'Riyanshu Sharma';

// METHODS (Without Argument)
// Upper & Lower case
const capitalMessage = message.toUpperCase(); // Capital letter
const smallMessage = message.toLowerCase();  // Small letter

// Trim
const faltuMessage = '   Hi, I am Anshu   '; 
const finalMessage = faltuMessage.trim();  // to remove the space
const capitalLetter = faltuMessage.trim().toUpperCase();  // Capital letter
const smallLetter = faltuMessage.trim().toLowerCase();  // Small letter
const a = faltuMessage.trimStart();
const b = faltuMessage.trimEnd();

//-----------------------------------------------------------------------------------------------------------------------------------//

// METHODS (With Argument)
// Include() : to know about a small string present in Long string
const  c = faltuMessage.includes('I')  // return -> true
const  d = faltuMessage.includes('am')  // return -> true
const  e = faltuMessage.includes('Anshu')  // return -> true
const  f = faltuMessage.includes('Hello')  // return -> false
const  g = faltuMessage.includes('anshu')  // return -> false

// Index() : to know about position 
const  h = faltuMessage.indexOf('I')
const  i = faltuMessage.indexOf('A')

// Replace() 
const replaceMessage = finalMessage.replace('Hi', 'Hello');

// Concat() : combine 2 string
const j = message.concat(' ',finalMessage) // message + finalMessage

// padStart() : Bank account -> ************2556
const lastFourDigits = '2556';
const k = lastFourDigits.padStart(16, '*');

// charAt() : to find a character at a position
const l = message.charAt(4);

// charCode() :
const m = message.charCodeAt(11);

// split()
const intro = 'I am Riyanshu Sharma'
const n = intro.split(' ');

//----------------------------------------------------------------------------------------------------------------------------------//