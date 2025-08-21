'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES-5 way
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800); //flightNum: 'LH123', numPassengers: 2, price: 800

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 2343533654,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH99';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2343533654) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

