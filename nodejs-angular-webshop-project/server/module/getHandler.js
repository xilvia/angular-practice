const DB = require('./db'); // a "./"-ből tudja, hogy ne gyári modult keressen

module.exports = class GetHandler {
    constructor(req, res) {
        const reqParams = req.url.split('/');
        // ezzel splittelem az url-t, hogy kinyerhető legyen belőle az összes
        // lényeges infókat: id, rendelés, az első az üres string, 
        // második a fájl neve, a harmadik az id.
        // reqParams nem biztos, hogy van, pl. ha az összes adatot akarják
        const id = reqParams[2] || 0; // ha adtak meg id-t, akkor az a [2]-es, 
        // ha nem, akkor 0, tehát nincs id.
        const orderDB = new DB(reqParams[1]);
        orderDB.find(id).then(
            data => res.end(JSON.stringify(data)),
            // az Angular itt visszakapja az adatot a szervertől
            // átalakítani a json-t ettől függetlenül nem volt felesleges
            // így ugyanis lehet benne keresni pl.
            err => {
                res.statusCode = 404;
                res.end(JSON.stringify(err));
            }

        );
        // ordersDB meghívása után meghívom a find-ot, ugrás oda



    }
};
