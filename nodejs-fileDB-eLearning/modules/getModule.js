// Load modules.
const template = require('./template');
const fs = require('./fsPromise');
const db = require('./db'); 

// Respond to GET requests.
const run = (req, res) => {
    // itt az index.html-t szeretném beolvasni
    let users = db.findSync('users', { id: 3 }); // a db-ben olvassuk be
    // ez az { id: 3 } az options paraméter, a 3-as id-jű júzert keresem,
    // amit a db findSync fog megkapni
    // az adatokat, és a tábla nevét- users- adjuk meg
    template.render('index.html', { // objektumot veszek fel
        // ezek lesznek behelyettesítve az index.html oldalon
        title: 'yellowRoad students',
        pageTitle: 'yellowRoad, a legjobb út a sikerhez',
        users: JSON.stringify(users, null, 4)
    }).then((html) => { // ezt a forrást, a html-t küldöm vissza
        // a felhasználónak
        res.end(html);
    });
};

//
module.exports = {
    run: run
};