/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to theconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
*/

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

let output;
if (markBMI > johnBMI) {
  message = `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`;
} else {
  message = `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`;
}

console.log(message);
