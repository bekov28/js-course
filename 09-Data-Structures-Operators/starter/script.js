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
