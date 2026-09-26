
require("dotenv").config();
const mongoose = require("mongoose");

const { Product } = require("./phase-8-express/src/models/productModel");



const password = encodeURIComponent(process.env.DB_PASSWORD);

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${password}@cluster0.odzloxv.mongodb.net/?appName=Cluster0`;

async function connectDB() {
  console.log("Trying MongoDB connection...");

  try {
    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully");
    const products = await Product.find();
console.log(products);


  } catch (error) {
    console.log("MongoDB connection failed");
console.log(error);
console.log(error.reason);
console.log(error.reason?.servers);
  }
}

connectDB();