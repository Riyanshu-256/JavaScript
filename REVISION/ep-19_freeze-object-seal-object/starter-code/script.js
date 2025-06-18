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

Object.seal(user);
//Object.freeze(user);