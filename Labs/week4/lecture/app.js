const fs = require("node:fs/promises");
//
// const fileTwo = fs.readfile("file1.txt", (err) => {
//   if (err) return console.log(err);
//   fs.readFile(fileTwo, (err) => {
//     if (err) return console.log(err);
//     fs.readFile(fileThree, (err) => {
//       if (err) return console.log(err);
//       fs.readFile(fileFour, "utf-8" (err) => {
//         if (err) return console.log(err);
//         console.log()
//       })
//     })
//   });
// });
// const fileThree = fs.readfileSync(fileTwo);
// const fileFour = fs.readfileSync(fileThree);
// const result = fs.readfileSync(fileFour, "utf-8");

// let fileTwoGlobal = null;

// as long as our watcher sees that fileTwoGlobal is null, it will NOT let the rest of our code run
// when the state changes, we can run the code

// fs.readFile("file1.txt", (err, fileTwo) => {
//   if (err) return console.log(err);
//   fileTwoGlobal = fileTwo;
// });

// function readFileP(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, "utf-8", (err, data) => {
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// }

// default state = pending

// const promise = readFileP("file1.txt");
// setTimeout(() => {
//   console.log(promise);
// }, 4000);
// console.log(promise);

// promise.then((data) => {
//   console.log(data);
// });
// promise.catch((err) => {
//   console.log(err);
// });

// refactoring code
// delete all callbacks => select all ifs and delete

// const { promisify } = require("node:util");

// const readFileP = promisify(fs.readFile);

const fileTwo = await fs.readFile("file1.txt");
const fileThree = await fs
  .readFile((fileTwo) => {
    readFile(fileTwo);
  })
  .then((fileThree) => {
    readFile(fileThree);
  })
  .then((fileFour) => readFile(fileFour))
  .then((result) => console.log(result))
  .catch((err) => {
    console.log(err);
  });

// async function run() {
//   const fileTwo = await fs.readFile("file1.txt");
//   const fileThree = await fs.readFile(fileTwo);
//   const fileFour = await fs.readFile(fileThree);
//   const result = await fs.readFile(fileFour);
//   console.log(result.toString());
// }

// this is for week 5!
// can only use try catch with async functions!

// anything inside async function SHOULD wait for each other
