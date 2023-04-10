'use strict';

const bookings = [];

const createBooking = (flightNum, numPassengers = 1, price = 199) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

const flight = 'LHJ232';
const thierry = {
  name: 'Thierry',
  passport: 39213493,
};

const checkIn = function (flightNum, passenger) {};

checkIn(flight, thierry);
// ---

// Higher Order Functions
// Functions that receive other functions

// Fucntion that replaces all empty spaces
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Upper First Word
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hello')('Thierry');

const jetblue = {
  airline: 'JetBlue',
  code: 'JB',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight 
            ${this.code}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.code}${flightNum}`,
      name,
    });
  },
};

jetblue.book(392, 'Thierry Marcelin');
jetblue.book(322, 'Loudwige Odice');
console.log(jetblue.bookings);

const delta = {
  airline: 'Delta',
  code: `DT`,
  bookings: [],
};

const book = jetblue.book;
book.call(delta, 942, 'Fabrice Marcelin');
console.log(delta);

jetblue.planes = 600;
jetblue.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', jetblue.buyPlane.bind(jetblue));

const addTax = (rate, number) => number + rate * number;

const VAT = addTax.bind(null, 0.23);
console.log(VAT(100));

const getTax = rate => {
  return number => {
    return number + rate * number;
  };
};

const newTax = getTax(0.25);
console.log(newTax(100));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
  },
  displayResults: function (type = 'array') {
    type === 'array' && console.log(this.answers);
    type === 'string' &&
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, 'array');
poll.displayResults.call({ answers: data2 }, 'array');
poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data2 }, 'string');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
