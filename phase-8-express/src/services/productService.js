const { Product } = require("../models/productModel");

async function getProductsByCategory(category) {
  const products = await Product.find();
  console.log("GET products result:", products);

 
  if (!category) {
    return products;
  }

  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

async function createProduct(productData) {
  const product = new Product(productData);

  return await product.save();
}

module.exports = {
  getProductsByCategory,
  createProduct
};