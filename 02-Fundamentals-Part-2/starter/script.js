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

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };
// const age = calcAge(1968);
// console.log(age);



// const calcAverage = (a, b, c) => (a + b + c) / 3;
 
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
 
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// };
 
// checkWinner(scoreDolphins, scoreKoalas);


// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

