const { MONGODB } = require('./config')

const http = require('http');

const mongoose = require('mongoose');

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected");
        return server.listen(port, hostname)
    })
    .then((res) => {
        console.log(`server running at: ${hostname} : ${port}`)
    }).catch( err => {
        console.error(err);
    })



