const process = require("node:process");
const [, , x1, y1, x2, y2] = process.argv;
const mathHelpers = require("./mathHelpers");
const { EOL } = require("node:os");
const folderName = "dataPoints";
const fileName = "points.txt";
const filePath = path.join(folderName, fileName);

function processInput(userInput, dirName) {
  const x1 = args[2];
  const y1 = args[3];
  const x2 = args[4];
  const y2 = args[5];
  const d = distance(x1, y1, x2, y2);
  counter = 1;

  fs.mkdir(dirName, { recursive: true }, (err) => {
    if (err) return conesole.log(err);
    //   if (err.code === "EEXISTS") {
    //     counter++;
    //     return processInput(userInput, `${dirName}(${counter})`);
    //   } else {
    //     return console.log(err);

    // TODO: create a file called dataPoints/points.txt
    // we are using an async function to create the folder dataPoints, so it won't run automatically - this can create problems if we try to use it later
    // ex. writing to a folder (which is created using async funcs), might accidentally write to a folder that's not being done created yet
    fs.writeFile(filePath, userInput, (err) => {
      if (err) return console.log(err);
      console.log("content saved");

      const msg = `\nThe distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${String(d)}`;
      fs.appendFile(filePath);
    });
  });
}

processInput(x1, y1, x2, y2, folderName);
