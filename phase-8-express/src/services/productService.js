
const { Product } = require("../models/productModel");

async function getProductsByCategory(category) {

  if (!category) {
    return await Product.find();
  }

  return await Product.find({
    category: { $regex: `^${category}$`, $options: "i" }
  });

}

async function getProductById(id) {
  return await Product.findById(id);
}

async function updateProduct(id, productData) {
  return await Product.findByIdAndUpdate(
    id,
    productData,
    { returnDocument: "after" }
  );
}

async function deleteProduct(id) {
  return await Product.findByIdAndDelete(id);
}

async function createProduct(productData) {
  const product = new Product(productData);
  return await product.save();
}

module.exports = {
  getProductsByCategory,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct
};
