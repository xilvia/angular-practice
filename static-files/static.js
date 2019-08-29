const express = require('express');
const path = require('path');
const port = 3456;

const app = express();

// serve static files

app.use(express.static(
    path.join(__dirname, 'public')
))

app.get('/', (req, res, next) => {
    let content = `<html>
    <head>
    <title><meta charset="utf8"></title>
    <link rel="stylesheet" href="main.css">
    </head>
    <body>
    <h1>Statikus fájlok</h1>
    <script src="main.js"></script>
    </body></html>`;
    res.send(content);

});

app.listen(port);