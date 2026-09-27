const express = require("express");

const {
  getProducts,
  getProductById,
  updateProductController,
  createProductController
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProductController);

router.put("/:id", updateProductController);

module.exports = router;