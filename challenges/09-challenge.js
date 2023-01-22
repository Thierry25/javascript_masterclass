// [17,21,23];
const temps = [17, 21, 23];

const printForecast = (arr) => {
  return arr.forEach((element, i) => {
    if (i === arr.length - 1) {
      console.log(`... ${element}°C in ${i + 1} days ...`);
    } else return console.log(`... ${element}°C in ${i + 1} days`);
  });
};

console.log(printForecast(temps));
