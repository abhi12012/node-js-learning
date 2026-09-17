const path = require("path");
const fs = require("fs");
const os = require("os");
const url = require("url");
const EventEmitter = require("events");


// const emitter = new EventEmitter();

// emitter.on("login", (name, age) => {
//   console.log("User logged in:", name);
//   console.log("Age:", age);
// });


// const welcomeUser = (name) => {
//   console.log("Welcome:", name);
// };

// emitter.on("login", welcomeUser);

// emitter.off("login", welcomeUser);



// emitter.emit("login", "Abhishek", 39);

// const myUrl = url.parse("https://example.com/products?id=10&category=shoes");
// console.log(myUrl);
// console.log("Protocol:", myUrl.protocol);
// console.log("Hostname:", myUrl.hostname);
// console.log("Pathname:", myUrl.pathname);
// console.log("Query:", myUrl.query);
// const params = new URLSearchParams(myUrl.query);

// console.log("Product ID:", params.get("id"));
// console.log("Category:", params.get("category"));



// console.log("Platform:", os.platform());
// console.log("CPU count:", os.cpus().length);
// console.log("Total memory:", os.totalmem());
// console.log("Free memory:", os.freemem());




// const fileExists = fs.existsSync("message.txt");
// console.log("File exists:", fileExists);


// const result = fs.existsSync("abc.txt");
// console.log(result);



// fs.writeFileSync("test-delete.txt", "This file will be deleted");
// console.log("Test file created");


// fs.unlinkSync("test-delete.txt");
// console.log("Test file deleted");


// fs.mkdirSync("test-folder", { recursive: true });
// console.log("Test folder created");


// fs.rmdirSync("test-folder");
// console.log("Test folder deleted");


// fs.writeFileSync("old-name.txt", "This is a rename test");

// fs.renameSync("old-name.txt", "new-name.txt");
// console.log("File renamed");


// const fileInfo = fs.statSync("message.txt");
// console.log("Is it a file:", fileInfo.isFile());
// console.log("File size:", fileInfo.size);
// console.log("Last modified:", fileInfo.mtime);



// const items = fs.readdirSync(".");
// console.log("Current folder items:", items);


// fs.writeFileSync("message.txt", "Hello Abhishek");
// fs.appendFileSync("message.txt", "\nWelcome to Node.js");


// const content = fs.readFileSync("message.txt", "utf8");
// console.log(content);



// const filePath = path.join("data", "users.txt");
// console.log(filePath);


// const fileName = path.basename(filePath);
// console.log(fileName);



// const fileExtension = path.extname(filePath);
// console.log(fileExtension);



// fs.mkdirSync("test-folder", { recursive: true });

// const folderInfo = fs.statSync("test-folder");
// console.log("Is it a folder:", folderInfo.isDirectory());





// fs.copyFileSync("message.txt", "message-copy.txt");
// console.log("File copied");



// fs.rmSync("message-copy.txt");
// console.log("Copied file removed");


// fs.writeFile("async-test.txt", "Hello from Async", (error) => {
//   if (error) {
//     console.log("Error:", error);
//     return;
//   }

//   console.log("Async file written successfully");
// });




function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data मिल गया");
    }, 2000);
  });
}

async function doWork() {
  console.log("1. काम शुरू");

  const result = await getData();

  console.log("2. Data मिला:", result);

  console.log("3. काम खत्म");
}

doWork();

console.log("4. doWork के बाहर का काम");




// const { add, subtract, multiply } = require("./math");

// const { name: exportedName } = require("./export-test");

// const { userName, age } = require("./user");

// const { message } = require("./greeting");

// const name = "Abhishek";



// console.log("My name is:", name);
// console.log("Exported name:", exportedName);


// console.log("User name:", userName);

// console.log("My age is:", age);
// console.log(message);

// console.log(add(10, 20));

// console.log(subtract(20, 5));

// console.log(multiply(10, 5));







