const fs = require("node:fs/promises");
const { EOL } = require("node:os");

const readCSV = (data) => {
  return fs.readFile(data);
};

const separateString = (data) => {
  const separate = data.toString();
  return separate.split(EOL);
};

const groupSet = (data) => {
  meals = {};
  for (var entry of data) {
    console.log(entry);
    entry = entry.split(",");
    var mealType = entry[0];
    const item = entry[1];
    const quantity = entry[2];
    var price = entry[3].split("\r")[0].split("$")[1];
    price = Number(price) * 1.8;
    price = price.toFixed(2);
    const stringToAdd = `$${price} ${item}, ${quantity}`;
    if (!(mealType in meals)) {
      meals[mealType] = [stringToAdd];
    } else {
      meals[mealType].push(stringToAdd);
    }
  }
  return meals;
};

const writeMenu = (data) => {
  return fs.writeFile(data);
};

async function main() {
  try {
    const data = await readCSV("menu.csv");
    const separated = separateString(data);
    const groupedItems = groupSet(separated);
  } catch (error) {
    console.log(error);
  }
}

main();
