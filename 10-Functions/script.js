'use strict';

/*
// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
) {
    //ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

//-----------------------------------------------------------------------------------------------------------------------------//

// HOW PASSING ARGUMENTS WORKS: VALUE(Yes) vs REFERENCE(No)

const flight = 'LH234';
const Anshu = {
    name: 'Anshu Sharma',
    passport: 1234567890,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mrs.' + passenger.name;

    if(passenger.passport === 1234567890) {
        alert('Checked in');
    }else{
        alert('Wrong passport');
    }
};

//checkIn(flight, Anshu);
//console.log(flight);
//console.log(Anshu);

// Is the same as doing....
//const flightNum = flight;
//const passenger = Anshu;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(Anshu) ;
checkIn(flight, Anshu);