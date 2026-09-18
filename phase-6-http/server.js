const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/products") {
    res.end("Products GET request");

  } else if (req.method === "POST" && req.url === "/products") {
    res.end("Products POST request");
    
  } else {
    res.end("Request received");
  }
});

server.listen(3000);