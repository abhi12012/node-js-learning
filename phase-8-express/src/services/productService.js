const { getAllProducts } = require("../models/productModel");

function getProductsByCategory(category) {
  const products = getAllProducts();

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