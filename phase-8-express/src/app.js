

const express = require("express");
const cors = require("cors");

const requestLogger = require("./middleware/requestLogger");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/products", productRoutes);
app.use("/users", userRoutes);


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

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);




module.exports = app;