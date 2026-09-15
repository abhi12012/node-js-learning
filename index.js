const path = require("path");
const fs = require("fs");

const fileExists = fs.existsSync("message.txt");
console.log("File exists:", fileExists);


const result = fs.existsSync("abc.txt");
console.log(result);


fs.writeFileSync("message.txt", "Hello Abhishek");
fs.appendFileSync("message.txt", "\nWelcome to Node.js");

const content = fs.readFileSync("message.txt", "utf8");

console.log(content);



const filePath = path.join("data", "users.txt");

console.log(filePath);


const fileName = path.basename(filePath);
console.log(fileName);



const fileExtension = path.extname(filePath);
console.log(fileExtension);







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