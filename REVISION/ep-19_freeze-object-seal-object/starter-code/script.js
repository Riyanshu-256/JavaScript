const user = {
    firstName: 'Anshu', lastName: 'Sharma', age: 20, education: 'JNV KODERMA', 
     address: {
        city: 'Koderma',
        pinCode: 825109,
        state: 'Jharkhand',
        moreDetails: {
            population: 9798897897,
            area: '787 sq km',
        }
    }
}

Object.seal(user);   // No adding/deleting, but updating existing values is fine. 
Object.freeze(user);  // No adding, deleting, or updating values (fully locked).

//---------------------------------------------------EXAMPLE---------------------------//

const username = {
  name: "Anshu",
  age: 20
};

Object.seal(user);

// ✅ Updating existing property (allowed)
user.age = 21;  
console.log(user.age); // 21

// ❌ Adding new property (not allowed)
user.city = "Koderma";
console.log(user.city); // undefined

// ❌ Deleting a property (not allowed)
delete user.name;
console.log(user.name); // "Anshu"
