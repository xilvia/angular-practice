const Db = require('./db');

module.exports = class PutHandler {
  constructor(req, res) {
    const reqParams = req.url.split('/');
    const db = new Db(reqParams[1]);
    let allData = '';
    req.on('data', (chunk) => {
      allData += chunk;
    });
    req.on('end', () => {
      db.putData(JSON.parse(allData), reqParams[2]);
      res.end(allData);
    });
  }
};
