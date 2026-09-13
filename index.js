const { add, subtract, multiply } = require("./math");

const { userName, age } = require("./user");

const name = "Abhishek";



console.log("My name is:", name);
console.log("User name:", userName);

console.log("My age is:", age);

console.log(add(10, 20));

console.log(subtract(20, 5));

console.log(multiply(10, 5));