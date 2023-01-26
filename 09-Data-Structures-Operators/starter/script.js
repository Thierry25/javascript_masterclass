'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Learn how to skip values when destructuring array
const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//
const arr = ['Daniel', 'Thierry', 'Marcelin'];
// Learn how to switch two variables without the use of a temp variable
// [] on the left -> Destructure an array. Is expecting the right side to be an array
let [, firstName, lastName] = arr;
console.log(firstName, lastName);
[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName);

const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [first, , [a, b]] = nested;
console.log(first, a, b);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
