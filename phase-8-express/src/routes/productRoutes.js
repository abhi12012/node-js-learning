const express = require("express");

const {
  getProducts,
  createProductController
} = require("../controllers/productController");


const router = express.Router();

router.get("/", getProducts);
router.post("/", createProductController);

module.exports = router;