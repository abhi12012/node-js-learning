const http = require("http");

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 799,
    category: "Clothing"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1499,
    category: "Footwear"
  }
];

const server = http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/products") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    

  req.on("end", () => {
  const product = JSON.parse(body);

  product.id = products.length + 1;

  products.push(product);

  res.statusCode = 201;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(product));
});

    return;
  }


  if (req.method === "PATCH" && req.url.startsWith("/products/")) {
  const id = Number(req.url.split("/")[2]);

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const updates = JSON.parse(body);

    const product = products.find((product) => product.id === id);

    if (!product) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Product not found" }));
      return;
    }


    Object.assign(product, updates);

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(product));
  });

  return;
}



if (req.method === "DELETE" && req.url.startsWith("/products/")) {
  const id = Number(req.url.split("/")[2]);

  const productIndex = products.findIndex(
    (product) => product.id === id
  );

  if (productIndex === -1) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Product not found" }));
    return;
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(deletedProduct[0]));
  return;
}




  if (req.method === "GET" && req.url === "/products") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(products));
  } else if (req.method === "GET" && req.url.startsWith("/products/")) {
    const id = Number(req.url.split("/")[2]);

    const product = products.find((product) => product.id === id);

    if (!product) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Product not found" }));
      return;
    }

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(product));
  } else {
    res.end("Route not found");
  }
});

server.listen(3000);