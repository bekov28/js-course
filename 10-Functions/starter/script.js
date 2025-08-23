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

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtman',
//   passport: 2343533654,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH99';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2343533654) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);
// screen;

//********First class and higher-order functions********
//First class functions
//1. JavaScript treats functions as first class citizens;
//2. This means that functions are simply values;
//3. Functions are just another 'type' of object;

//Function methods: call, apply, bind

//---------Higher order functions-------:
//A function that receives another function as an argument, that returns a new function or both
//This is only possible because of first-class functions

// const greet = () => console.log('Hey Jonas');
// btnClose.addEventListener('click', greet); //addEventListener is a high order function here, because it receives another function as a argument
//call back function is a passed-in function, for ex: greet function here

function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

//This function is returning another function, so it is also a higher order function
//The difference between first-class functions and higher order function is that first class functions are just features or values
