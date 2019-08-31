// load modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3456;

// create server

const server = http.createServer((req, res) => {
    let content = '';
    if (req.url == '/') {


        content = `<html>
<head>
<meta charset="utf8"></head>
<body>
<h1>Statikus fájlok</h1>
<script src="main.js"></script>
</body></html>`;
    } else {
        let filePath = path.join(__dirname, req.url);
        res.setHeader('content-type', 'text/javascript');
        content = fs.readFileSync(filePath, 'utf8');
    }
    res.end(content);
    // ezt a html-t küldöm vissza a kliensnek a porton
}).listen(port);
// arra hívom meg a portot, amit a server visszaad, és nem a server változóra,
// de ugyanaz lett volna a hatása

