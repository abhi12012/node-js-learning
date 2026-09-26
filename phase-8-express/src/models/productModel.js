const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
});


const Product = mongoose.model("Product", productSchema);
 
const products = [
  {
    id: 1,
    name: "Polo Shirt",
    price: 1299,
    category: "Clothing"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1499,
    category: "Footwear"
  }
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
  Product
};