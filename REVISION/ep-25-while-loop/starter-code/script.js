console.log('Program Started')

// debugger
// let i = 1
// while(i <= 10) {
//    console.log(i);
//    i++
// }

const codeBlooded = ['Riyanshu', 'Priya', 'Sourav', 'Mukund', 'Aditya', 'Asif', 'Kavita', 'Megha', 'Nikita'];

let i = 0;
while(i < codeBlooded.length) {
    console.log(`${i + 1}. ${codeBlooded[i]}`);
    codeBlooded[i] = codeBlooded[i] + 'i';
    i++
}

console.log('Program Ended');
