const fs = require("node:fs/promises");

// const returnValue = fs.readFile("file1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

function readFileBetter(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// const promiseObject = readFileBetter("file1.txt")
//   .then((fileTwo) => readFileBetter(fileTwo)) // fulfilled
//   .then((fileThree) => readFileBetter(fileThree))
//   .then((fileFour) => readFileBetter(fileFour))
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err)); // rejected

// -----------------------------------------------------------------------------------------------------

fs.readFile("file1.txt")
  .then((fileTwo) => fs.readFile(fileTwo)) // fulfilled
  .then((fileThree) => fs.readFile(fileThree))
  .then((fileFour) => fs.readFile(fileFour))
  .then((result) => console.log(result.toString()))
  .catch((err) => console.log(err)); // rejected

// async function readAllFiles() {
//   try {
//     const fileTwo = await fs.readFile("file1.txt", "utf8");
//     const fileThree = await fs.readFile("file2.txt", "utf8");
//     const fileFour = await fs.readFile("file3.txt", "utf8");
//     const result = await fs.readFile("file4.txt", "utf8");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function main() {
//   readAllFiles();
//   console.log("sending email...123");
// }

// main();
