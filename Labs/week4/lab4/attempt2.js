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

// meal is the key - to access its value, need to do data[meal]
const createMenuString = (data) => {
  toWrite = "";
  for (const meal in data) {
    if (meal == "lunch") {
      toWrite += `* Lunch *${EOL}`;
      const meals = data[meal];
      for (const entry of meals) {
        toWrite += `${entry}${EOL}`;
      }
    } else if (meal == "dinner") {
      toWrite += `* Dinner *${EOL}`;
      const meals = data[meal];
      for (const entry of meals) {
        toWrite += `${entry}${EOL}`;
      }
    } else if (meal == "dessert") {
      toWrite += `* Dessert *${EOL}`;
      const meals = data[meal];
      for (const entry of meals) {
        toWrite += `${entry}${EOL}`;
      }
    }
  }
  return toWrite;
};

const writeMenu = (f, data) => {
  return fs.writeFile(f, data);
};

async function main() {
  try {
    const data = await readCSV("menu.csv");
    const separated = separateString(data);
    const groupedItems = groupSet(separated);
    const menuString = createMenuString(groupedItems);
    await writeMenu("menu.txt", menuString);
  } catch (error) {
    console.log(error);
  }
}

main();
