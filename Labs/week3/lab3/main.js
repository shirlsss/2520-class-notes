const distance = require("./mathHelpers.js").distance;
const readline = require("readline");
const process = require("process");
const fs = require("node:fs");
const path = require("node:path");

const args = process.argv;

const processInput = () => {
  const x1 = args[2];
  const y1 = args[3];
  const x2 = args[4];
  const y2 = args[5];
  const userInput = distance(x1, y1, x2, y2);

  if (!fs.existsSync("dataPoints")) {
    fs.mkdirSync("dataPoints");
  }

  fs.writeFile("./dataPoints/points.txt", String(userInput), (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Content Saved");
    }
  });
  console.log(
    `The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${String(userInput)}`,
  );
};

processInput();
