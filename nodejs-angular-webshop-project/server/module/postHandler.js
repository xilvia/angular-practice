const DB = require('./db');

module.exports = class PostHandler {

    constructor(req, res) {
        let body = '';
        let reqParams = req.url.split('/');
        let dbName = reqParams[1];

        req.on('data', chunk => {
            body = body + chunk.toString();
        });
        req.on('end', () => {
            const opDB = new DB(dbName);
            const data = JSON.parse(body);
            opDB.postJsonData(data).then(
                (data) => {
                    res.end(JSON.stringify(data));
                }
            ).catch(
                (reason) => {
                    res.end(reason);
                }
            );
        });
    }
}
