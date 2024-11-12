const jsonServer = require ("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacecen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000; //webservice

server.use(middlewares);
server.use(router);
server.listen(port);