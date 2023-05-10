const http = require('http');

const server = http.createServer((req, res) => {

  // console.log(req);
  if (req.url === "/") {
    res.write(`<h1>Welcome to our webpage</h1>`);
    res.end();
  }

  if (req.url === "/about") {
    res.end(`<h1>About us page text changed</h1>`);
  }


})

server.listen(5000)