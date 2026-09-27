const {
  getProductsByCategory,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct
} = require("../services/productService");

async function getProducts(req, res) {
  const category = req.query.category;

  const result = await getProductsByCategory(category);

  res.json(result);
}

async function getProductByIdController(req, res) {
  const id = req.params.id;

  const product = await getProductById(id);

  res.json(product);
}

async function updateProductController(req, res) {
  const id = req.params.id;

  const updatedProduct = await updateProduct(id, req.body);

  res.json(updatedProduct);
}

async function deleteProductController(req, res) {
  const id = req.params.id;

  const deletedProduct = await deleteProduct(id);

  res.json(deletedProduct);
}

async function createProductController(req, res) {
  const product = await createProduct(req.body);

  res.status(201).json(product);
}

module.exports = {
  getProducts,
  getProductById: getProductByIdController,
  updateProductController,
  deleteProductController,
  createProductController
};