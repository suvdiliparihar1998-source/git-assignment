//Create server by importing http module

//1.Import http module
const http = require(`node:http`);

//2.create server
const server = http.createServer((req, res) => {
  if (req.method == `GET`) {
    if (req.url == `/product`) {
      console.log(`Select * from product`);
    } else if (req.url == `/category`) {
      console.log(`Select * from category`);
    }
  } else if (req.method == `POST`) {
    if (req.url == `/product`) {
      console.log(`insert into the product`);
    } else if (req.url == `/category`) {
      console.log(`insert into the category`);
    }
  }
  res.end(`Hello from server`);
});

//3.start server
server.listen(3000, `0.0.0.0`, () => {
  console.log(`server started on port no 3000`);
});
