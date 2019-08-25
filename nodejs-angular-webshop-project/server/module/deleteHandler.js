const DB = require('./db');

module.exports = class DeleteHandler {

    constructor(req, res) {


        const reqParams = req.url.split('/');

        const opDB = new DB(reqParams[1]);
        const id = reqParams[2];
        opDB.deleteJsonData(id),


            res.on('error', (err) => {
                console.error(err);
            });
        res.end();
    };
}

