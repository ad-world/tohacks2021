import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import path from 'path';

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

const express = require('express')
const app = express()


var bodyParser = require('body-parser');
var fs = require("fs")
const {spawn} = require('child_process');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post("/api/getCategory", function(req, res) {
    console.log("hello???")
    const kw = req.body.kw
    const loc = req.body.loc
    console.log(kw, loc)
    const python = spawn('python', ['python_news/newsprocess.py', kw, loc]);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        console.log(data.toString());
        //console.log(JSON.parse(fs.readFileSync(__dirname + "/python_news/news_sample.json")))
        res.send(JSON.parse(fs.readFileSync(__dirname + "/python_news/news_sample.json")))
    })
});

app.post("/api/getArticle", function(req, res) {
    const url = req.body.url
    console.log(url)
    const python = spawn('python', ['python_news/articleprocess.py', url]);
    python.stderr.on('data', function (data){
        console.log("ohhhhhhhh")
        console.log(data.toString())
    });
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        console.log(data.toString());
        res.send(JSON.parse(fs.readFileSync(__dirname + "/python_news/article_sample.json")))
    })
});

app.listen(8080)
