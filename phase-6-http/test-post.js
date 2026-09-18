const http = require("http");

const request = http.request(
  {
    hostname: "localhost",
    port: 3000,
    path: "/products",
    method: "POST",
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data.toString());
    });
  }
);

request.end();