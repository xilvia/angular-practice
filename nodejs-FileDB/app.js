// modulok betöltése
const http = require('http');
const path = require('path');
const getModule = require('./modules/getModule');

const postModule = require('./modules/postModule');

let port = 3456;

// létrehozzuk a szervert
const app = http.createServer((req, res) => {
    // a method válasza

    switch (req.method) {
        case 'GET':
            getModule.run(req, res);
            break;
        case 'POST':
            postModule.run(req, res);
            break;
        default:
            res.end('invalid request');
    }
});

// GET requests



// megmondjuk neki, hogy figyelje a portot
app.listen(port);
console.log(`Az alkalmazás létrejött és ezt a portot figyeli: ${port}`);

