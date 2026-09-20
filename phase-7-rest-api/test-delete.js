const http = require("http");

const request = http.request(
  {
    hostname: "localhost",
    port: 3000,
    path: "/products/2",
    method: "DELETE",
  },
  (res) => {
    res.on("data", (chunk) => {
      console.log(chunk.toString());
    });
  }
);

request.end();