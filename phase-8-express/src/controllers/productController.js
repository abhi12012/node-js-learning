const { getProductsByCategory } = require("../services/productService");

function getProducts(req, res) {
  const category = req.query.category;

  const result = getProductsByCategory(category);

  res.json(result);
}

module.exports = {
  getProducts
};