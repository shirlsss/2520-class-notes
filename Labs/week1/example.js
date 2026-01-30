// let os = require("os");
// info = os.userInfo();
// console.log(info);

const process = require("process");
const args = process.argv;
// console.log(args[2], args[3])

function greet(first, last) {
    console.log(`Hello ${first} ${last}`);
}

greet(args[2], args[3]);