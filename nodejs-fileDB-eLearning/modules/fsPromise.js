//Load modules.
const fs = require('fs');
const path = require('path');

// File handler class.
class FileHandler {
  static readFile(filePath, encoding = 'utf8', callback) {
    // static, tehát példányosítás nélkül használható, de ha esetleg
    // vannak változók a FileHandler osztályban, azokat a static miatt
    // nem fogja látni
    if (callback && typeof callback === 'function') { // ha van callback
      // változóm, és a típusa function, akkor azt meg lehet hívni: 
      return fs.readFile(filePath, encoding, callback); // a return miatt a 
      // függvény nem megy tovább, mert elkapja az if, a kimenete az,
      // hogy meghívja a callback-et

      // ha több fájl ki akarok olvasni promise-szal:
      // const p1 = fsPromise.readFile(elérési út);
      // const p2 = fsPromise.readFile(elérési út);
      // const p3 = fsPromise.readFile(elérési út);
      // Promise.all([p1, p2, p3]).then((data) => {
      //   console.log(data);
      // }, (err) => {
      //   console.log(err)
      // });
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

  static readFileSync(filePath, encoding = 'utf8') {
    return fs.readFileSync(filePath, encoding);
  }
}

//Exports.
module.exports = FileHandler;