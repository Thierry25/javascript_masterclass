const calcTip = (value) => {
  return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
};

const bills = [125, 555, 44];
const tips = bills.map((bill) => {
  return calcTip(bill);
});

console.log(tips);

const total = bills.map((bill) => {
  return bill + calcTip(bill);
});

console.log(total);
