const http = require("http");

const data = JSON.stringify({
  name: "Polo Shirt",
  price: 1299,
  category: "Clothing"
});

const request = http.request(
  {
    hostname: "localhost",
    port: 3000,
    path: "/products/1",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(data)
    }
  },
  (res) => {
    console.log("Status Code:", res.statusCode);

    res.on("data", (chunk) => {
      console.log(chunk.toString());
    });
  }
);

request.write(data);
request.end();