const fs = require("node:fs/promises");

const main = () => {
  fs.readFile("menu.csv")
    .then((menu) => {
      let menuToProcess = menu.toString();
      menuToProcess = menuToProcess.split("\n");
      console.log(menuToProcess, typeof menuToProcess);
      var times = [];
      exampleString = "";
      var lunch = `* Lunch *\n`;
      const lunchOriginalLength = lunch.length;
      var dinner = `* Dinner *\n`;
      const dinnerOriginalLength = dinner.length;
      var dessert = `* Dessert *\n`;
      const dessertOriginalLength = dessert.length;

      for (var line of menuToProcess) {
        line = line.split(",");
        var time = line[0];
        const item = line[1];
        const quantity = line[2];
        var price = line[3].split("\r")[0].split("$")[1];
        price = Number(price) * 1.8;
        price = price.toFixed(2);
        const stringToAdd = `$${price} ${item}, ${quantity}\n`;
        if (time == "lunch") {
          lunch = lunch.concat(stringToAdd);
        } else if (time == "dinner") {
          dinner = dinner.concat(stringToAdd);
        } else if (time == "dessert") {
          dessert = dessert.concat(stringToAdd);
        }
      }
      var finalPrint = "";
      if (lunch.length > lunchOriginalLength) {
        finalPrint = finalPrint.concat(lunch, "\n");
      }
      if (dinner.length > dinnerOriginalLength) {
        finalPrint = finalPrint.concat(dinner, "\n");
      }
      if (dessert.length > dessertOriginalLength) {
        finalPrint = finalPrint.concat(dessert, "\n");
      }
      return finalPrint;
    })
    .then((finalPrint) => fs.writeFile("menu.txt", finalPrint))
    .catch((err) => console.log(err));
};

main();
