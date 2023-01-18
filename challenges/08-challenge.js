const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = (value) => {
  return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
};

const tips = bills.map((bill) => calcTip(bill));
const totalValues = bills.map((bill) => bill + calcTip(bill));

console.log(tips);
console.log(totalValues);

const calcAverage = (arr) => {
  const sum = arr.reduce((val1, val2) => {
    return val1 + val2;
  }, 0);

  return sum / arr.length;
};

console.log(calcAverage(totalValues));
