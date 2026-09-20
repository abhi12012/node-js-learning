const http = require("http");

const data = JSON.stringify({
  price: 999
});

const request = http.request(
  {
    hostname: "localhost",
    port: 3000,
    path: "/products/1",
    method: "PATCH",
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