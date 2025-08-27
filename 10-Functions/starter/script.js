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

//Functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join('  ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const high5 = function () {
//   console.log('Hello World!');
// };

// document.body.addEventListener('click', high5); //high order function

//-------Functions returning functions--------->
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greaterHey = greet('Hey');
// greaterHey('Jonas'); //Hey Jonas
// greaterHey('Steven'); //Hey Steven

// greet('Hello')('Jonas'); //Hello Jonas

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// const greaterHey2 = greetArrow('Hey');
// greaterHey2('Berdiyor');

//------Call and apply methods------->
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtman');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowrings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book(23, 'Sarah Williams) //wrong, does not work
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

//Bind method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //23 is pre-set here
bookEW23('Berdiyor Orzikulov'); //we can just pass passenger name in this case
bookEW23('Martha Cooper');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)