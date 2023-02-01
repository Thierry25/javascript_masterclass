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

  orderDelivery({ starterIndex, mainIndex, address, time }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your wonderful Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza('beef', 'peperoni', 'cheese');
//
restaurant.orderDelivery({
  time: '22:30',
  address: '143, Rue Jean Desprez',
  mainIndex: 2,
  starterIndex: 2,
});

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

// Object Destructuring
const { name, categories, openingHours: loli } = restaurant;
console.log(name, categories, loli);

// Get the objects with different names
const {
  name: restaurantName,
  categories: kindOfFood,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, kindOfFood, hours);

// Get the objects but with default values if non-existed
const { menu: restaurantMenu = [], location: restaurantLocation = '' } =
  restaurant;
console.log(restaurantMenu, restaurantLocation);

// Nested Objects
// Retrieve 'fri' from 'openingHours' in restaurant

// From openingHours take 'fri'-> From 'fri' take open and close
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);

// NEW-SECTION -> Spread operator
// We want to add two new elements at the start of an array
const array = [7, 8, 9];
const newArray = [1, 2, ...array];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, 'Duri Kole', 'Pwa', 'Mais'];
console.log(newMenu);

// Copy array:
const mainMenuCopy = [...restaurant.mainMenu];
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

const str = 'Thierry';
const testIng = [...str, 'l', 'o', 'l'];
console.log(testIng);

// - Real-world Example
const ingredients = [
  // prompt("Let's build a wonderful pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 2018, founder: 'Thierry', ...restaurant };
console.log(newRestaurant);

// SPREAD, because on the right side of =
const bl = [1, 2, 3, ...[7, 8, 9]];
console.log(bl);

// 1) Destructuring
// REST, because on the left side of =
const [ar, , br, ...others] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(ar);
console.log(br);
console.log(others);

// Take out Saturday from the openingHours into it's own variable an add the others
// in an array called 'weekDays'

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const multiply = (...numbers) => {
  return numbers.reduce((num1, num2) => {
    return num1 * num2;
  }, 1);
};

console.log(multiply(2, 3, 4, 5, 6));
console.log(multiply(2, 3));

console.log('------------OR--------------');
// NEW-SECTION
// Short-Circuiting || and &&
restaurant.numGuests = 20;
// || operator will output the first truthy value that it finds
// In the example below -> undefined, '', 0 are all falsy values
console.log(undefined || '' || 0 || 'lol' || 23);

const guests = restaurant.numGuests || 10;
console.log(guests);

console.log('----------AND-------------');
// Will output the first falsy value -> in that case undefined
console.log(undefined && 0 && '' && 'Hello' && 23 && null);
//  Or If all values are truthy -> Will output the last one of them
// In that case 'Thierry'
console.log(7 && 'lol' && true && 'Soccer' && 'Thierry');
// Should be null -> The first falsy value
console.log(7 && 'lol' && true && 'Soccer' && null && 'Thierry');

// World Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('chicken', 'tomatoes');
} // CAN BE REPLACED BY ->
// IMPORTANT
restaurant.orderDelivery &&
  restaurant.orderPizza('cheese', 'mushrooms', 'chicken');

// Nullish coalescing operator
const testValue = 0;
console.log(testValue ?? 10);

// NEW LOGICAL Operators -> ES2021
const rest1 = {
  name: 'Restaurant Lakay',
  numGuests: 0,
};

const rest2 = {
  name: 'Gadon Lavi',
  owner: 'Thierry Marcelin',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// IMPORTANT -> NEW WAY ES2021
// BUG: Will not work if value is 0 (falsy value)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && 'anonymous';
// rest2.owner = rest2.owner && 'anonymous';

rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';
console.log(rest1);
console.log(rest2);

// NEW-SECTION
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const [i, el] of fullMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'N/A';
  console.log(`On ${day}, we are open at ${open}`);
}

const hours1 = {
  thu: '07:30',
  fri: '06:25',
  sat: '11:00',
};
// Property NAMES
const propertyNames = Object.keys(hours1);
for (const day of propertyNames) {
  console.log(day);
}

// Property VALUES
const propertyValues = Object.values(hours1);
for (const pptVal of propertyValues) {
  console.log(pptVal);
}

// Enitre Object
const entireObject = Object.entries(hours);
for (const [i, { open, close }] of entireObject) {
  console.log(`On ${i}, we open at ${open}, and close at ${close}`);
}

const ordersSet = new Set(['Pizza', 'Pasta', 'Pasta', 'Pizza', 'Sandwich']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Pasta');
console.log(ordersSet);

const newSet = new Set('Thierry');
console.log(newSet);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffSet = new Set(staff);
const uniqueStaffPositions = [...new Set(staff)];
console.log(uniqueStaffPositions);

// NEW-SECTION
const restaurantMap = new Map();
restaurantMap.set('name', 'Clasico Italiano');
restaurantMap.set(1, 'Firenze, Italy');
restaurantMap.set(2, 'Lisbon, Portugal');

restaurantMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

const time = 21;
console.log(
  restaurantMap.get(
    time > restaurantMap.get('open') && time <= restaurantMap.get('close')
  )
);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C++'],
  [2, 'Python'],
  [3, 'Ruby'],
  [4, 'Java'],
  [5, 'Javascript'],
  ['correct', 5],
  [true, 'Correct 🥳'],
  [false, 'Try Again 😢'],
]);

// console.log(question.get('question'));
let questionName = `${question.get('question')}\n`;
for (const [key, value] of question) {
  if (typeof key === 'number') questionName += `Answer ${key}: ${value}\n`;
}

const userAnswer = Number(prompt(`${questionName} \n\n Your answer?`));
const message = alert(question.get(question.get('correct') === userAnswer));

// NEW-SECTION
// Working with Strings

const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

// Methods on strings
console.log(airplane.length);
// Get the index of a certain character
console.log(airplane.indexOf('r'));
// Get the last index of a recurring character
console.log(airplane.lastIndexOf('r'));
