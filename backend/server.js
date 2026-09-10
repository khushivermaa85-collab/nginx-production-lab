const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify({
    service: process.env.SERVICE_NAME || 'backend',
    status: 'running'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Backend running on port 3000');
});
