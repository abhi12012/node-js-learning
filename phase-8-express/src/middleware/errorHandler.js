function errorHandler(err, req, res, next) {
  console.error(err.message);

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Email already exists"
    });
  }

  if (err.status === 404) {
    return res.status(404).json({
      message: "Route not found"
    });
  }

  res.status(500).json({
    message: "Internal Server Error"
  });
}

module.exports = errorHandler;