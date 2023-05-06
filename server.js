const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html','Connection':'die'});
  std=[
    {
        id:1,
        uname:'neha',
        branch:'IT'
    },
    {
         id:2,
         uname:'kalyani',
         branch:'IT'
    },
    {
        id:3,
        uname:'ramya',
        branch:'CSE'
    }
  ];
  res.write(JSON.stringify(std));
  res.end();
}).listen(3000);