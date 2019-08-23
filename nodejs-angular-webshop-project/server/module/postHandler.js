
const DB = require('./db');

module.exports = class PostHandler {

    constructor(req, res) {
        let body = [];

        request.on('error', (err) => {
            console.error(err);

        }).on('data', (chunk) => {
            body.push(chunk);

        }).on('end', () => {
            body = Buffer.concat(body);

           // const reqParams = req.url.split('/');

            const ordersDB = new DB();

            const jsonData = JSON.parse(body);
            ordersDB.postJsonData(jsonData);

            response.on('error', (err) => {
                console.error(err);
            });

        });


        response.on('error', (err) => {
            console.error(err);
        });
        response.end();
    }
}