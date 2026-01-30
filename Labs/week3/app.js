function add(n1, n2) {
  return n1 + n2;
}

// when we call the above code, it sits in memory with some address - add is the label that refers to that address
// add() - tells computer to GO to that address, plugging in numbers
// ! Directly calling the add function (JavaScript allows you to also indirectly call fns)

add(5, 4);

// ! Indirectly calling add - address in memory where add is

const refOne = add;

// any time we use refOne, JS will point to the add fn -

refOne(5, 4); // indirectly called add, since refOne points to add function

function addTwo(num1, callback) {
  // Higher order function - a function that receives another function
  return callback(num1, 2); // callbacks are functions that are passed into a fn and are called back later
}

addTwo(7, add);

// callback is a parameter - this parameter, specified with "add", points to the add function
// addTwo - HOF
// add - callback

const colors = ["red", "blue"];
// function callbackfn(val, i) {
//   console.log(val, i);
// }

function printer(value, i) {
  console.log(value, i);
}
// function forEach(list, callback) {
//   // TODO: loop through the list, no printing
//   for (let n = 0; n < list.length; n++) {
//     callback(list[n], n);
//   }
// }

// colors.forEach(callbackfn); // forEach is a HOF, callbackfn is a callback
// dot syntax - for all arrays (as colors), take the array and add a method that every array method will have

// forEach(colors, printer); // callback is printing

// colors.forEach((value) => {
//   console.log(value);
// });
// only forEach should be able to call it - but since it's in a global scope, its callable by anyone - we want only the
// higher order function to call it
// solution is to take the fn and dump it into the other fn - Prevent anyone other than the HOF from calling callback
// make sure to use arrow function syntax for ! for callback functions

/*
TODO: make func called multiplier, this fn does not do any console logging
multiplier will receive number 1, number 2, callback (printer)
output err(if no result) or result

if user does not provide a number for num1, num2
we want to show an error to the user

err -> "numbers only!"

results -> null (if error!) or some number

*/

const multPrinter = (result, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
  //   console.log(result, error);
};

const multiplier = (n1, n2, callback) => {
  if (typeof n1 != "number" || typeof n2 != "number") {
    callback(null, new Error("Can only parse numbers!"));
  } else {
    callback(null, parseInt(n1) * parseInt(n2), "");
  }
};

multiplier(6, 2, multPrinter);
multiplier(false, 2, multPrinter);

// our higher order function should do all the work - our callback should just print
// we want to put all the work in our HOF because we do not want the functions to be global and callable by others
