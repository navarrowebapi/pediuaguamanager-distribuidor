// const express = require("express");
// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(__dirname + "/dist/"));
// app.get(/.*/, function(req, res) {
//   res.sendfile(__dirname + "/dist/index.html");
// });
// app.listen(port);

// console.log("Server started...");


const express = require('express');
const path = require('path');
var serveStatic = require('serve-static');
const port = process.env.PORT || 8084;
//const port = 8084;
const app = express();

// the __dirname is the current directory from where the script is running
// app.use(serveStatic(__dirname + "/dist"));
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )

// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port);
console.log("server is up and running.");