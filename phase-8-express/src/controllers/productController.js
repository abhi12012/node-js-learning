function getProducts(req, res) {
  const category = req.query.category;

  res.send(`Category is ${category}`);
}

module.exports = {
  getProducts
};