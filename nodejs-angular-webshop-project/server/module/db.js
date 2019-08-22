// fájlkezelésre célszerű külön osztályt felvenni
// path modul betöltése az elérési utak kezelésére
const path = require('path');
const fs = require('fs'); // olvasáshoz 
// modul egy osztállyal tér vissza, ami az adatbázis fájlokat kezeli


module.exports = class DB {
    // konstruktor megkapja az adott json fájl nevét, pl. product
    constructor(jsonFileName) {
        // beállítjuk a json fájlokat tartalmazó mappa elérési útját
        // dirname - projektmappából is indítható a szerver
        this.jsonDirectory = path.join(__dirname, '../../json');
        // beállítjuk a kezelendő json fájl teljes elérési útját
        this.jsonFilePath = path.join(
            this.jsonDirectory,
            `${jsonFileName}.json`
        );

        console.log(this.jsonFilePath);
    }

    find(id = 0) {
        return new Promise((resolve, reject) => {
            if (id === 0) {
                this.getJsonArray().then(
                    dataArray => resolve(dataArray),
                    // ha nincs id, akkor ebből arra következtetünk, 
                    // hogy a teljes tömb kell, hát azt hívjuk meg
                    // a dataArray a parse-olt string lesz,
                    // ami lentebb resolve(JSON.parse(jsonString))-ként fut, 
                    // ez meg visszaadja annak, ami őt meghívta
                    err => reject(err)
                    // ha itt elkapom a hibát, akkor a getHandler-ben is 
                    // le kell kezelni
                );
            } else {
                // az else ág akkor fut le, ha nincs id
                this.getJsonArray().then(
                    dataArray => {
                        let found = dataArray.filter(item => item.id == id)[0] || {};
                        resolve(found);
                    }
                )
            }
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

                resolve(JSON.parse(jsonString));
                // és parse-olás után végül sima tömb lesz objektummal, amit 
                // visszaad
            })
        })

    };

    postJsonData(data = {}) {

        return new Promise((resolve, reject) => {
            this.getJsonArray().then(
                dataArray => {
                    dataArray.push(data);
                    data.id = dataArray.length > 0 ? dataArray[dataArray.length - 1].id + 1 : 1;
                    data.insdate = new Date().toString();
                    fs.writeFile(this.jsonFilePath, JSON.stringify(data), 'utf8', (err) => {
                        if (err) {
                            return console.error(err)
                        }
                        console.log('file succesfully written')
                    })
                }
            )
        });

        // fs.writeFileSync(this.jsonFilePath, newObjectToJson, fileSettings);
    }




};
