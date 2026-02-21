// midterm example

const fs = require("node:fs/promises");
const { EOL } = require("node:os");
const readCSV = (csv) => fs.readFile(csv, "utf8");
const parseCSV = (data) => data.split(EOL);
const groupCSV = (data) => {};
// not using fs - so don't use await
async function main() {
  try {
    const data = await readCSV("menu.csv");
    const rows = parseCSV(data);
    const groupedData = groupData(rows);
    await writeTxt("menu.txt");
  } catch (error) {
    console.log(error);
  }
}

main();

// which functions are doing raw JavaScript stuff? which are doing filestuff (use await)
// also need correct error handling - console.log(err)
// put your stuff in try catch block!!!

// if fs/promises didn't exist, how would we turn a callback into a promise?
// we would just have to create our own promise functions

function realFileP(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
}

// syntax for using promises if fs/promises did not exist

// ** in all circumstances, can you replace callback-based code in all circumstances with promises?
// to prove its false, need a counter example
// counterexample 1 - express

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const tips = getTips();
  res.render("tips", { tips });
});

```
app.get("/")
    .then(res => res.render("/"))
    .catch(err => console.log(err))

this looks nice - but why does it not work? 
start in pending => fulfilled or rejected
but promises can never go back to an earlier state - this would mean that servers would only be able to respond to the first request and never respond again
        promises only go from pending to fulfilled or rejected - resolved states cannot be unresolved 

callbacks do not have this limitation - callbacks can run as many times as you want 
        this is why callbacks are used for eventlisteners!!!!! 

```(
  app,
  listen(8080, () => {
    console.log("Server running...");
  }),
);
