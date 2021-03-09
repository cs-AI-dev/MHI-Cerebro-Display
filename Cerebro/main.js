// console.log("Hello");
// var http = require("http");
// http.createServer(function (req, res) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     res.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     res.end('Hello World\n');
//  }).listen(8081);

//  console.log('Server running at http://127.0.0.1:8081/');
// //  http.createServer(function (req, res) {
// //      res.writeHead(200, {"Content-Type": 'text/plain'});
// //      res.end('Hello World\n');
// //  }).listen(2003);
const express = require('express')
const app = express();
const port = 3000;
const fs = require("fs");
 
app.get('/', function (req, res) {
//   res.sendFile('C:\Big Projects\Cerebro\index.html');
res.writeHead(200, {
    'Content-Type': 'text/html'
});
fs.readFile('index.html', + 'main.css', null, function (error, data) {
    if (error) {
        res.writeHead(404);
        res.write('Whoops! File not found!');
    } else {
        res.write(data);
    }
    res.end();
});
});
 
app.listen(3000);

console.log(`Example app listening at http://localhost:${port}`);