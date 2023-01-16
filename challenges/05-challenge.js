"use strict";

const calcAverage = (val1, val2, val3) => {
  return (val1 + val2 + val3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win(${avgDolphins} vs ${avgKoalas})`;
  } else if (avgDolphins >= 2 * avgDolphins) {
    return `Koalas win(${avgDolphins} vs ${avgDolphins})`;
  } else {
    return "No one wins";
  }
};

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console;
console.log(checkWinner(avgDolphins, avgKoalas));
