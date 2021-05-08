import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import path from 'path';

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

const express = require('express')
const app = express()

const rp = require('request-promise');
const c = require('cheerio');
const async = require('async');
const https = require('https')
const ws = require('ws')
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

app.get("/getCategory", function(req, res) {
    const kw = res.kw
    const loc = res.loc
    const python = spawn('python', ['newsprocess.py', kw, loc]);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        console.log(data.toString());
        if (data.toString() == "Done!") {
            res.send(JSON.parse(fs.readFileSync(__dirname + "/python_news/news_sample.json")))
        }
    })
});

app.get("/getArticle", function(req, res) {
    const url = res.url
    const python = spawn('python', ['articleprocess.py', url]);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        console.log(data.toString());
        if (data.toString() == "Done!") {
          res.send(JSON.parse(fs.readFileSync(__dirname + "/python_news/article_sample.json")))
        }
    })
});

app.listen(8080)
