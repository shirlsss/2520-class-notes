const http = require("node:http");
const fs = require("fs/promises");
const express = require("express");

// function listener(req, res) {
//   // every time a request comes in from a web browser, this function will fire
//   // req(uest) gives all available info on an incoming req
//   // res(ponse)
//   if (req.url === "/") {
//     const html = await fs.readFile("index.html", "utf8");
//     red.end(html);
//   } else if (req.url === "/contact") {
//     const html = await fs.readFile("contact.html", "utf8");
//     res.end(html);
//   }
// }
// ? http://localhost:9000 -> bcit.ca

// app.listen(9000, () => {
//   console.log("Server is running");
// });

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
  // or
  //   res.sendFile("someFile.html");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});
function express() {
  const http = require("node:http");
  return coolStuff(http.createServer());
}
