const jsonS = require('json-server');
const server = jsonS.create();
const router = jsonS.router('db.json');
const mw = jsonS.defaults();

server.use(mw);
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is runnig');
});