const { Product } = require("../models/productModel");

async function getProductsByCategory(category) {
  const products = await Product.find();

  if (!category) {
    return products;
  }

  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}
module.exports = {
  getProductsByCategory
};