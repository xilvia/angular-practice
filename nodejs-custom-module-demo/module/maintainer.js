// szükséges modulok betöltése
const fs = require('fs');
const path = require('path');

// célszerű a feladatra class-t létrehozni
class Maintainer {
    constructor(dir = '', reg = new RegExp()) {
        this.dir = dir;
        this.reg = reg;
    }

    flush() {
        let dirPath = path.join('./', this.dir); // megvan a mappa 
        // teljes elérési útja   
        // console.log(dirPath) // . (ha jól működik)

        let fileList = fs.readdirSync(dirPath); // lekéri a mappából, hogy
        // milyen fájlok vannak - ha nem sync lenne, callback is kellene
        // console.log(fileList);
        for (let file of fileList) {
            file = path.join(dirPath, file); // a mappán belülről kivesszük
            // a fájlok neveit , majd a path.join-nal összerakom hozzájuk
            // ezeknek a fájloknak a teljes elérési útvonalát
            if (this.reg.test(file)) {
                // ha a regexp igaz a fájlra, tehát az if igaz, törlünk
                // if akkor igaz, ha a file neve txt-re végződik, törlöm
                fs.unlinkSync(file);
            }
        }
    }
}

module.exports = Maintainer;
// module.exports = class Maintainer {} is lehetett volna akár, csak így
// átláthatóbb
// ahol felhasználom a Maintainert, ott pélányosítanom kell, ezért a server.js
// fájlban példányosítom
