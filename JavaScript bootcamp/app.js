const process = require("process");
const helpers = require("./helpers");
const readlineSync = require("readline-sync");

// const userNum = process.argv[2];
// if (parseInt(userNum) % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// TODO: Get input from user (process.argv) - can always assume str[-1] will be C (celsius) or F (fahrenheit)
// TODO: If C => F, else F => C
// TODO: print final result

const userDegree = process.argv[2];
const response = readlineSync.question("Temperature: ");

if (userDegree.endsWith("c")) {
  const temp = helpers.cToF(parseInt(userDegree));
  console.log(temp);
} else {
  const temp = helpers.fToC(parseInt(userDegree));
  console.log(temp);
}

// can also use userDegree.endsWith("c")
// to get an int out of a string, use parseInt()
