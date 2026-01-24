//import https module
const https = require("https");

//create a server
const server = https.createServer((req, res) => {
  console.log("new request received");
  res.end("Hello from the other side");
});

//start the server
server.listen(3000, () => {
  console.log("server listening on port 3000");
});

// Log messages
console.log("Welcome TO Node.js !");
console.log("Welcome TO Node !");
