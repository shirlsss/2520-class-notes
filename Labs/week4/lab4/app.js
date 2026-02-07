// const { promisify } = require("node:util");
const fs = require("node:fs/promises");

const menuFile = fs.readFile("menu.csv");
