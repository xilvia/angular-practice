// modul betöltése
const fs = require('./fsPromise');
const path = require('path')
const viewDir = path.join(__dirname, '..views');

// 
const render = (name, vars = {}) => {
    return new Promise((resolve, reject) => {
        let filePath = path.join(viewDir, name);
        fs.readFile(filePath)
            .then((data) => {
                resolve(data);
            }, (err) => {
                resolve('Err: ' + err.toString());
            })
    })
};

module.exports = {
    render: render
};