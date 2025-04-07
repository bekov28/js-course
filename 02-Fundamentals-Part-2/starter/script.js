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

//Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmemand",
//   age: 2025 - 1985,
//   job: "teacher",
//   friends: ["Michael", "Williams", "Keynes"],
// };
// console.log(jonas);

// console.log(jonas.job); //1-method
// console.log(jonas["job"]); //2-method

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const name = prompt('What is your name?');
// console.log(name);

//Adding data to objects:

// jonas.location = "Tashkent";
// jonas["twitter"] = "@berdiyor";
// console.log(jonas);

// console.log(`${jonas.firstName} has  ${jonas.friends.length} friends, and his best friend
// is called ${jonas.friends[0]}`);

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// const result =
//   john.bmi > mark.bmi
//     ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//     : `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
//         john.fullName
//       }'s (${john.bmi.toFixed(1)})!`;

// console.log(result);

// for loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Hello World! ${rep}`)
// }


const jonasArray = [
    'Jonas',
    'Schmidt',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

