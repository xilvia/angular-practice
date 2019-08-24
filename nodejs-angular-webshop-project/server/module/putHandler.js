const DB = require('./db');

module.exports = class PutHandler {

    constructor(req, res) {



        let body = '';

        req.on('error', (err) => {
            console.error(err);

        }).on('data', (chunk) => {
            body += chunk;

        }).on('end', () => {
            // body = Buffer.concat(body);

            const reqParams = req.url.split('/');

            const opDB = new DB(reqParams[1]);

            const jsonData = JSON.parse(body);

            opDB.putJsonData(jsonData);

            res.on('error', (err) => {
                console.error(err);
            });

        });

        res.end();
    }
}