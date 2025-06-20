function addTwoNumbers(a, b) {
    return a + b
}
const result = addTwoNumbers(56, 6)
console.log(result);

//----------------------------------------------------------------------------------------------------------------//

// defination
function introduceMe(username, profession, age) {    //return value of function is undefined
    console.log('Hi,');
    console.log(`My name is ${username}`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old`)
}

// call->introduceMe
// const returnValue = introduceMe()
introduceMe('Riyanshu', 'Software Engineer', 20);
introduceMe('Anshu', 'Mechanical Engineer', 22);
