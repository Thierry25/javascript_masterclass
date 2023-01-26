'use strict';

// Understand the this keyword
const thierry = {
  name: 'thierry',
  birthYear: 1998,
  calcAge: function () {
    return 2023 - this.birthYear;
  },
};

// The this keyword is bound to object that is calling it

console.log(thierry.calcAge());

// Example for this within a function
// Will return undefined because there are no objects attached to it
function foo() {
  console.log('Haha');
  console.log(this);
}

foo();

// Arrow functions does not contain this, and arguments in their execution contexts
// Arrow function's this is tied to the surrounding function
//1st Example -> should return undefined
function lol() {
  console.log(this); // -> should be undefined
  const test = () => {
    console.log(this); // -> should also be undefined, because it is within the scope of the function
  };
  test();
}
lol();
//2nd Example -> should return window
const test2 = () => {
  console.log(this); // Will return the this keyword of the parent scope.
  // In this case because test2 is in the global scope, it will just return the
  // this of the global scope which is window.
};

test2();

// Primitive Types vs Reference Types
let lastName = 'Miller';
let oldLastName = lastName;
lastName = 'Valeverde';

const thie_rry = {
  firstName: 'Thierry',
  lastName: 'Marcelin',
  age: 26,
};

const marriedThierry = thie_rry;
marriedThierry.firstName = 'Lol';
