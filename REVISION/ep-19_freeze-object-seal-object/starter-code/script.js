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