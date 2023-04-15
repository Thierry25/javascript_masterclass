'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
     <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
    `;

    //
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = account => {
  account.balance = account.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};

const calcDisplaySummary = account => {
  const depositsSum = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, val) => acc + val, 0);

  labelSumIn.textContent = `${depositsSum}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, val) => acc + val, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(val => (val * account.interestRate) / 100)
    .reduce((acc, val) => acc + val, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .split(' ')
      .map(name => name.at(0))
      .join('')
      .toLowerCase();
  });
};
createUsernames(accounts);

const recreateUi = account => {
  displayMovements(account.movements);
  // Display balance
  calcPrintBalance(account);
  // Display summary
  calcDisplaySummary(account);
};

// Event Handler here
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Clear fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Remove focus from field
    inputLoginPin.blur();
    // Display movements
    //displayMovements(currentAccount.movements);
    // Display balance
    //calcPrintBalance(currentAccount.movements);
    // Display summary
    //calcDisplaySummary(currentAccount);
    recreateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);
  const currentAccountBalance = currentAccount.balance;
  if (currentAccountBalance < amount) alert("You're not that rich pal");
  else if (
    amount > 0 &&
    receiverAccount &&
    receiverAccount !== currentAccount
  ) {
    currentAccount.movements.push(amount * -1);
    receiverAccount.movements.push(amount);
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    recreateUi(currentAccount);
  }

  console.log('******');
  console.log(`Current Account \n ${currentAccount.movements}`);
  console.log(`Receiver Account \n ${receiverAccount.movements}`);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // granted if there are any deposits made that is 10% of the requested amount
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
    recreateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1); // -> from position index, remove an element

    // Hide UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

// splice
console.log(arr.splice(2));
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reverse());

// At method
const arr_ = [32, 11, 64];
// Mutiple ways to get the last elem of an array
console.log(arr_[arr_.length - 1]);
console.log(arr_.slice(-1)[0]);
console.log(arr_.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  movement > 0 && console.log(`Movement ${i + 1}: You deposited ${movement}`);
}

console.log('---------------------------------');

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'USD', 'EUR', 'GBP']);
currenciesUnique.forEach((value, _, set) => {
  console.log(value);
  console.log(set);
});

const checkDogs = (dogsJulia, dogsKate) => {
  let correctJulia = dogsJulia.slice(1, 3);
  let correctKate = dogsKate.slice();

  const dogs = [...correctJulia, ...correctKate];
  printPuppyAge(dogs);
};

const printPuppyAge = arr => {
  arr.forEach((dog, i) => {
    console.log(
      dog > 5
        ? `Dog number ${i + 1} is an adult, and is 5 years old`
        : `Dog number ${i + 1} is still a puppy`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const euroToUsd = 1.1;
const usdArr = movements.map(mom => (mom * euroToUsd).toFixed(2));
console.log(usdArr);

const depositsOnly = movements.filter(mov => mov > 0);
console.log(depositsOnly);

const sumTransactions = movements.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(sumTransactions);

// Maximum value
const maximumVal = movements.reduce((acc, val) => {
  return acc > val ? acc : val;
}, movements.at(0));

console.log(movements);
console.log(maximumVal);

console.log(')_@_#(_@_____@@@@@_#_@_#_@_#___________------_____--');

const calcAverageHumanAge = ages => {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, val, _, arr) => acc + val / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//
console.log(movements);
// EQUALITY
console.log(movements.includes(-130));

// CONDITION -> Kind of like a filter but only returns true/false
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(account4.movements.every(mov => mov > 0));

// FLAT
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
