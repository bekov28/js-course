"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log("I can't drive");

//Functions

// function logger() {
//   console.log("My name is Berd");
// }
// logger();
// logger();

//Function with paratametrs

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//Function declaration

// function calcAge(birthYear) {
//     return 2025 - birthYear;
// }
// const age = calcAge(1968);
// console.log(age);

//Function Expression

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
const age = calcAge(1968);
console.log(age);
