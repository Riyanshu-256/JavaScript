const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// FOR LOOP
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//-----------------------------------------------------------------------------------//

// FOR OF
for(const fruit of fruits) {
    console.log(fruit);
}

const user = 'Riyanshu Sharma';
for(const letter of user) {
    console.log(letter);
}

//---------------------------------------------------------------------------------//

// FOR IN
const person = {
    firstName: 'Riyanshu',
    lastName: 'Sharma',
    age: 20,
    eyeColor: 'black',
    city: 'Koderma',
}

// for(const key in person) {
//     console.log(key, ': ' ,person[key]);
// }

const personKeys = Object.keys(person)
const personValues = Object.values(person)
const personEntries = Object.entries(person)
// for (const key of personKeys) {
//     console.log(person[key]);
// }

//-------------------------------------------------------------------------------//
