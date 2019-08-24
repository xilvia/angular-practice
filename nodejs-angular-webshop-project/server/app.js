const http = require('http');
const path = require('path');
const port = 3210;
const GetHandler = require('./module/getHandler');
const PostHandler = require('./module/postHandler');
const PutHandler = require('./module/putHandler');
const DeleteHandler = require('./module/deleteHandler');


const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    switch (req.method.toLowerCase()) {
        case 'options':
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE, PUT',
                'Access-Control-Allow-Headers': 'content-type',
                'Access-Control-Max-Age': 2592000,
            }
            res.writeHead(204, headers);
            console.log(res.getHeaders());
            res.end();
            break;
        case 'get': new GetHandler(req, res); // get kéréskor mindig példányosítunk
            // a get kérésre vonatkozóan 
            // minden a GetHandler osztályban történik ezentúl
            // másik 3 metódusnál ue. lesz
            break;
        case 'post': new PostHandler(req, res);
            break;
        case 'put': new PutHandler(req, res);
            break;
        case 'delete': new DeleteHandler(req, res);
            break;
        default: res.end('Invalid method');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port:' ${port}.`);
});
