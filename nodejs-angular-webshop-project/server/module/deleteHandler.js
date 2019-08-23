const DB = require('./db');

module.exports = class DeleteHandler {

    constructor(req, res) {


        const reqParams = req.url.split('/');
        const id = reqParams[2]
        const opDB = new DB(id);


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