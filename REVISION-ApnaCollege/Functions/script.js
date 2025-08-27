// --------------------------------------------
// 📌 1. Function Definition
// --------------------------------------------
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
greet();  // Output: Hello, welcome to JavaScript!

// --------------------------------------------
// 📌 Function with Parameters
// --------------------------------------------
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// --------------------------------------------
// 📌 2. Arrow Functions
// --------------------------------------------

// Normal arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 6));  // Output: 10

// Short-hand arrow function (one line)
const square = n => n * n;
console.log(square(5)); // Output: 25

// --------------------------------------------
// 📌 3. forEach Loop in Arrays
// --------------------------------------------
let arr = [1, 2, 3, 4];

arr.forEach((val) => {
    console.log(val * val);
});
// Output: 1, 4, 9, 16

// --------------------------------------------
// 📌 4. Some More Array Methods
// --------------------------------------------

// ✅ map()
let nums = [1, 2, 3, 4];
let doubled = nums.map(val => val * 2);
console.log(doubled);  // [2, 4, 6, 8]

// ✅ filter()
let nums2 = [1, 2, 3, 4, 5, 6];
let evenNums = nums2.filter(val => val % 2 === 0);
console.log(evenNums);  // [2, 4, 6]

// ✅ reduce()
let nums3 = [1, 2, 3, 4];
let total = nums3.reduce((acc, val) => acc + val, 0);
console.log(total);  // 10

// Product example
let product = nums3.reduce((acc, val) => acc * val, 1);
console.log(product);  // 24

// --------------------------------------------
// 📌 5. Practice Questions
// --------------------------------------------

// 1️⃣ Count vowels in a string (function)
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Apna College")); // Output: 4

// 2️⃣ Count vowels (arrow function)
const countVowelsArrow = (str) => {
    return str.split("").filter(ch => "aeiouAEIOU".includes(ch)).length;
};
console.log(countVowelsArrow("Apna College")); // Output: 4

// 3️⃣ Filter students with marks > 90
let marks = [88, 95, 76, 99, 92];
let toppers = marks.filter(m => m > 90);
console.log(toppers);  // [95, 99, 92]

// 4️⃣ Sum of numbers from 1 to n using reduce
let n = 5;
let numbers = [];
for (let i = 1; i <= n; i++) {
    numbers.push(i);
}

let sumOfN = numbers.reduce((acc, val) => acc + val, 0);
console.log(sumOfN);  // 15



