const express = require("express");
const requestLogger = require("./middleware/requestLogger");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(requestLogger);

app.use("/products", productRoutes);


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});




app.get("/hello", (req, res) => {
  res.send("Hello Abhishek!");
});

app.get("/product", (req, res) => {
  res.json({
    id: 1,
    name: "Polo Shirt",
    price: 1299,
    category: "Clothing"
  });
});

app.get("/products-json", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Polo Shirt",
      price: 1299
    },
    {
      id: 2,
      name: "Shoes",
      price: 1499
    }
  ]);
});

app.get("/products/:id", (req, res) => {
  res.send(`Product ID is ${req.params.id}`);
});

app.get("/error", (req, res, next) => {
  next(new Error("Something went wrong!"));
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    message: "Internal Server Error"
  });
});

module.exports = app;