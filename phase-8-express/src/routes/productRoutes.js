const express = require("express");

const {
  getProducts,
  getProductById,
  createProductController
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProductController);

module.exports = router;