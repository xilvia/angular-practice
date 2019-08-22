const http = require('http');
const path = require('path');
const port = 3210;
const GetHandler = require('./module/getHandler');
const PostHandler = require('./module/postHandler');
// const PutHandler = require('./module/putHandler');
// const DeleteHandler = require('./module/deleteHandler');


const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    switch (req.method.toLowerCase()) {
        case 'get': new GetHandler(req, res); // get kéréskor mindig példányosítunk
            // a get kérésre vonatkozóan 
            // minden a GetHandler osztályban történik ezentúl
            // másik 3 metódusnál ue. lesz
            break;
        // case 'post': new PostHandler(req, res);
        //     break;
        // case 'put': new PutHandler(req, res);
        //     break;
        // case 'delete': new DeleteHandler(req, res);
        //     break;
        default: res.end('Invalid method');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port:' ${port}.`);
});
