// Load modules.
const http = require('http');
const path = require('path');
const getModule = require('./modules/getModule');
const postModule = require('./modules/postModule');

let port = 3456;

//Create server.
const app = http.createServer((req, res) => {
    //Response by method.
    switch (req.method) {
        case 'GET':
            getModule.run(req, res);
            break;
        case 'POST':
            postModule.run(req, res);
            break;
        default:
            res.end('invlid request');
    }
});



//Listen to port.
app.listen(port);
console.log(`New app is created and listens to ${port}.`);