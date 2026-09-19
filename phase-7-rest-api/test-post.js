const http = require("http");

const data = JSON.stringify({
  name: "Watch",
  price: 999,
  category: "Accessories"
});

const request = http.request(
  {
    hostname: "localhost",
    port: 3000,
    path: "/products",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(data)
    }
  },
  (res) => {
    res.on("data", (chunk) => {
      console.log(chunk.toString());
    });
  }
);

request.write(data);
request.end();