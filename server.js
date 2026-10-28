const http = require('node:http');
const { greeting } = require('./src/greeting');

const server = http.createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(`<!doctype html><html lang="es"><meta charset="utf-8"><title>Demo CI/CD</title><body><h1>${greeting('equipo')}</h1><p>Aplicación de ejemplo para Jenkins.</p></body></html>`);
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Aplicación disponible en http://localhost:${port}`));
