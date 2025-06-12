'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

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

  orderDelivery: function (obj) {
    console.log(obj);
  },
};



//Object destructuring
// const { name, openingHours, categories } = restaurant;

// //giving another name to properties
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//naming
// const { menu = [], starterMenu: starters = [] } = restaurant; //setting default values
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //{a, b} = obj   => doesnt work, need to wrap in parathesis
// console.log(a, b);

//Nested objects
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

//Array destructuring
// const arr = [2, 3, 4];

//without destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , , last] = restaurant.categories;
// console.log(first, last);

//Switching variables
//changing the order
// const temp = first;
// first = last;
// last = temp;
// console.log(first, last);

// [first, last] = [last, first];
// console.log(first, last);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0); //Garlic Bread && Pizza
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , g] = nested;
// // console.log(i, g);
// const [i, , [g, k]] = nested;
// console.log(i, g, k);

// //setting default value
// const [p = 1, q = 2, r = 7] = [8, 9];
// console.log(p, q, r); //8, 9, 7
