'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Object destructuring
// const { thu, fri } = restaurant.openingHours;
// console.log(thu, fri);

// const { name, openingHours, categories } = restaurant;
// console.log(name)

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a : 23, b: 7, c: 14}

//Practice with arrays

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, , , last] = restaurant.categories;
// console.log(first, last);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main)

//Nested desctructuring
// const nested = [2, 4, [5, 6]];

// const [first, , third] = nested;
// console.log(first, third);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default values

// const [p = 1, q = 1, r = 1] = [8, 7];
// console.log(p, q, r)

//--------Sets-------------//

//Sets are very similar with arrays, but Sets only have unique data and no duplicates;

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
// const uniqueStaff = new Set(staff);
// console.log(uniqueStaff);

// const uniqueStaff2 = [...new Set(staff)]; //Converting Set back new array using spread
// console.log(new Set('Berdiyor').size); //length not used here

const italianFoods = new Set([
  //Set constructor
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicalFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avacado',
  'garlic',
]);

//Set methods: has, add, delete and clear

// But in ES 2025, some other methods added: intersection, union, difference, symmetricDifference, isDisjointFrom

//INTERSECTION method (takes only duplicates)

// const commonFoods = italianFoods.intersection(mexicalFoods);
// console.log('Intersection:', commonFoods); //{tomatoes, garlic}
// console.log('Intersection:', ...commonFoods); //tomatoes, garlic
// console.log('Intersection:', [...commonFoods]); //[tomatoes, garlic]

//UNION method: (combines all together, duplicates dropped)

// const italianMexicanFusion = italianFoods.union(mexicalFoods);
// console.log(italianMexicanFusion); //length: 10 (takes first duplicates, drops next duplicates)
// // console.log(new Set([...italianFoods, ...mexicalFoods])); //another way

//DIFFERENCE method - takes only Italian foods that dont come in mexicanFoods
// const uniqueItalianFoods = italianFoods.difference(mexicalFoods);
// console.log(uniqueItalianFoods); //pasta, gnocchi, olive oil, basil

// const uniqueMexicanFoods = mexicalFoods.difference(italianFoods);
// console.log(uniqueMexicanFoods); //4: tortiallas, beans, rice, avacado

// //SYMMETRICDIFFERENCE method - intersections (duplicates from both sides)
// const uniqueItalianMexicanDifference =
//   italianFoods.symmetricDifference(mexicalFoods);
// console.log(uniqueItalianMexicanDifference); //8: pasta, grocchi, olive oil, basil, tortillas, beans, rice, avacado

//isDisjoint method (to check if Sets have are totally different)
// console.log(italianFoods.isDisjointFrom(mexicalFoods)); //false (because there are duplicates)

//----------MAPS: Foundation-----------
//Maps are a lot more useful than SETS in practice
//Maps are also data structures, like Sets, arrays, objects..
//Maps contain key-value pairs, similar with objects
//Difference between objects and Maps, in Maps keys can be any data types. In objects, keys are usually strings

// const rest = new Map(); //Map constructor
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal')); // {'name' => 'Classico Italino', 1 => 'Firenze, Italy'...}

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name')); //Classico Italiano
// console.log(rest);

// //Practice
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are open

// console.log(rest.has('categories')); //true
// console.log(rest.delete(2));
// console.log(rest); //Key 2 deleted
// console.log(rest.size); //7
// rest.clear();
// console.log(rest); //cleared, size: 0

// rest.set([4, 5], 'Test');
// console.log(rest.get([4, 5])); //undefined

// const arr = [4, 5];
// rest.set(arr, 'Test');
// console.log(rest.get(arr)); //Test

//---------Maps: Iteration--------------
// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!!'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

//Convert object to Map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// //Convert map to array
// console.log([...question]);

//Challenge

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

// //Task -1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //Task -2
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(gameEvents.size);

// //Task -3
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //Task -4

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

//--------- Strings----------//
//Strings are also 0-based as arrays

const airline = 'TOP Air Portugal';
const plane = 'A320';
console.log(plane[0]);

//String methods
console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10

//slice method
console.log(airline.slice(4)); //Air Portugal

//Task
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// //1. Calculate the sum of juft indexes in arr
// let sum = 0;

// for (let i = 0; i < arr.length; i += 2) {
//   sum += arr[i];
// }
// console.log(sum);
