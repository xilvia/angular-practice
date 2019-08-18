// Load modules.
const fs = require('./fsPromise');
const path = require('path');
const dbDir = path.join(__dirname, 'tables');
const ext = '.json';

//Find data.
const find = (table, options) => { // egy táblát és egy tulajdonságot vár
    let tablePath = path.join(dbDir, table + ext); // teljes elérési utat
    // adunk meg kiterjesztéssel - json fájllal dolgozunk
    return new Promise((resolve, reject) => {
        // a promise-ban indítjuk el a fájl beolvasását
        fs.readFile(tablePath)
        // ha beolvastuk, megvannak az adatok, de objektummá kell
        // alakítani
            .then((data) => {
                data = JSON.parse(data);
                if (Object.keys(options).length > 0) {
                    data = filter(data, options);
                }
                resolve(data);
            });
    });
};
// ez pedig a find szinkronos verziója, csak itt nem promise tér vissza,
// hanem az fs.read indul rögtön, ehhez fsPromise-ban is  kellett a 
// static readFileSync
const findSync = (table, options) => { // ez kapja meg a getModule-ból 
    // indult paramétereket: users tábla, azon belül a 3-as id-jű júzer
    let tablePath = path.join(dbDir, table + ext); // meghatározza a 
    // tábla útvonalát
    let data = fs.readFileSync(tablePath); // beolvassa a tábla stringjét
    data = JSON.parse(data); // aztán parse-olja azt objektumok tömbjévé
    // és ha kapott options-t, akkor filterrel leszűri az adathalmazt
    // aztán visszamenti saját magába, végül visszatér vele
    if (Object.keys(options).length > 0) { // ha van options, akkor 
        // szűrje le, és utána adja vissza
        data = filter(data, options);
    }
    return data;
};

const filter = (table, options) => { // az options alapján fogja megvizsgálni
    // a filter, hogy van-e egyezés
    let keys = Object.keys(options);
    let result = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            console.log(table[i][keys[j]], options[keys[j]]);
            if (table[i][keys[j]]) {
                if (table[i][keys[j]] == options[keys[j]]) {
                    result.push(table[i]);
                }
            }
        }
    }
    // végigmegy az objektumokon, és megnézi, hogy adott kulcsú elemnek 
    // az-e az értéke, amit options-ként kapott, ha igen, beteszi az 
    // result tömbbe, ha nincs ilyen, üres tömböt ad vissza
    return result;
}

module.exports = {
    find: find,
    findSync: findSync
}