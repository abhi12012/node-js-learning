const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/products") {
    const product = {
      name: "T-Shirt",
      price: 799,
      category: "Clothing"
    };


    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(product));

  } else if (req.method === "POST" && req.url === "/products") {
    res.end("Products POST request");
  } else {
    res.end("Request received");
  }
});

server.listen(3000);