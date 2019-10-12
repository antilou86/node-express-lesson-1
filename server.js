const express = require('express');
//const http = require('http');

const port = 5000;

const server = express();
// const server = http.createServer((req, res) => {
//     res.statusCode=200;
//     res.setHeader("Content-Type", 'JSON');
//     res.end('Hello World, from NodeJS');
// });

server.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

server.listen(port, () => {
    console.log(`server listening on ${port}`);

});