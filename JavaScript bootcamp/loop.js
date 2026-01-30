const person = { name: "michael", age: 30 };
for (const [k, v] of Object.entries(person)) {
  console.log("k, v");
}
