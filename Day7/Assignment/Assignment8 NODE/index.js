const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("GET request received");
  } else if (req.method === "POST" && req.url === "/") {
    console.log("POST request received");
  } else if (req.method === "PUT" && req.url === "/") {
    console.log("PUT request received");
  } else if (req.method === "DELETE" && req.url === "/") {
    console.log("DELETE request received");
  }
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
