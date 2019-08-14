// modulok betöltése

const fs = require('fs');
const path = require('path');

// file handler class
class FileHandler {
    static readFile(filePath, encoding = 'utf8', callback) {
        if (callback && typeof callback === 'function') {
            return fs.readFile(filePath, encoding, callback);
        }
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, encoding, (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    }
}

// exportok
module.exports = FileHandler;
