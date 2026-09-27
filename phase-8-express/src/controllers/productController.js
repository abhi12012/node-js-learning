const {
  getProductsByCategory,
  createProduct
} = require("../services/productService");


async function getProducts(req, res) {
  const category = req.query.category;

  const result = await getProductsByCategory(category);

  res.json(result);
}

async function createProductController(req, res) {
  const product = await createProduct(req.body);

  res.status(201).json(product);
}

module.exports = {
  getProducts,
  createProductController
};