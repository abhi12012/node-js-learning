const path = require("path");

const { add, subtract, multiply } = require("./math");

const { name: exportedName } = require("./export-test");

const { userName, age } = require("./user");

const { message } = require("./greeting");

const name = "Abhishek";



console.log("My name is:", name);
console.log("Exported name:", exportedName);


console.log("User name:", userName);

console.log("My age is:", age);
console.log(message);

console.log(add(10, 20));

console.log(subtract(20, 5));

console.log(multiply(10, 5));