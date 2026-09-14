const http = require('http');

const req = http.get({ host: '127.0.0.1', port: 3000, path: '/' }, (res) => {
  process.exit(res.statusCode === 200 ? 0 : 1);
});

req.on('error', () => process.exit(1));
