// fájlkezelésre célszerű külön osztályt felvenni
// path modul betöltése az elérési utak kezelésére
const path = require('path');
const fs = require('fs'); // olvasáshoz
// modul egy osztállyal tér vissza, ami az adatbázis fájlokat kezeli
module.exports = class DB {
    // konstruktor megkapja az adott json fájl nevét, pl. product
    constructor(jsonFileName) {
        // beállítjuk a json fájlokat tartalmazó mappa elérési útját
        this.jsonDirectory = path.join('./../json');
        // beállítjuk a kezelendő json fájl teljes elérési útját
        this.jsonFilePath = path.join(
            this.jsonDirectory,
            `${jsonFileName}.json`,
        );

        console.log(this.jsonFilePath);
    }

    add(newData) {
        return new Promise((resolve, reject) => {
            this.getJsonArray().then((dataArray) => {
                let newId = 1;
                if (dataArray.length > 0) {
                    newId = dataArray[dataArray.length - 1].id + 1;
                }
                newData.id = newId;
                dataArray.push(newData);
                fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 4), 'utf8', (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(newData);
                    }
                });
            });
        });
    }

    putData(data, id) {
        let selectedIndex;
        this.getJsonArray().then((dataArray) => {
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i].id == id) {
                    selectedIndex = i;
                }
            }
            for (const k in data) {
                dataArray[selectedIndex][k] = data[k];
            }
            fs.writeFileSync(this.jsonFilePath, JSON.stringify(dataArray, null, 4), 'utf8');
        });
    }

    find(id = 0) {
        return new Promise((resolve, reject) => {
            if (id === 0) {
                this.getJsonArray().then(
                    dataArray => resolve(dataArray),
                    // ha nincs id, akkor ebből arra következtetünk,
                    // hogy a teljes tömb kell, hát azt hívjuk meg
                    // a dataArray a parse-olt string lesz
                    // ( ami lentebb resolve(JSON.parse(jsonString))-ként fut,
                    // ez meg visszaadja annak, ami őt meghívta
                    err => reject(err),
                    // ha itt elkapom a hibát, akkor a getHandler-ben is
                    // le kell kezelni
                );
            } else {
                // az else ág akkor fut le, ha nincs id
                this.getJsonArray().then(
                    (dataArray) => {
                        const found = dataArray.filter(item => item.id == id)[0] || {};
                        resolve(found);
                    },
                );
            }
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            let selectedIndex;
            this.getJsonArray().then((dataArray) => {
                for (let i = 0; i < dataArray.length; i++) {
                    if (dataArray[i].id == id) {
                        selectedIndex = i;
                        break;
                    }
                }
                const removedData = dataArray.splice(selectedIndex, 1)[0];
                fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 4), 'utf-8', (err) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(removedData);
                });
            });
        });
    }

    getJsonArray() {
        // parse-olva egy tömböt ad vissza
        return new Promise((resolve, reject) => {
            fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
                // error first callback függvény, a jsonString pedig a nyers
                // string, mert itt még nincs parse-olva
                if (err) {
                    return reject(err);
                    // ha az err nem 0, a return miatt nem megy tovább,
                    // a reject jelzi, hogy nem sikerült a beolvasás
                }
                // else {
                //     // az else ág akkor fut le, ha nincs id
                //     this.getJsonArray().then(
                //         dataArray => {
                //             let found = dataArray.filter(item => item.id == id)[0] || {};
                //             resolve(found);
                //         }
                //     )
                // }
                resolve(JSON.parse(jsonString));
                // és parse-olás után végül sima tömb lesz objektummal, amit
                // visszaad
            });
        });
    }
};
