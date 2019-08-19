// Load modules.
const fs = require('./fsPromise');
const path = require('path');
const viewDir = path.join(__dirname, '../views'); // itt adom meg, hol
// találja meg a views mappát

// Get HTML content and include variables.
const render = (name, vars = {}) => { // a fájl neve, amit renderelni 
    // szeretnék és egy alapértelmezetten üres objektumot adtam meg, amiben
    // a változókat tárolom
    return new Promise((resolve, reject) => {
        let filePath = path.join(viewDir, name);
        fs.readFile(filePath)
            .then((data) => {
                let html = includeVars(data, vars); // amit kaptam a 8. sorban
                // és ami alapértelmezetten ugye az üres objektum, de itt 
                // most nem, mert a getModule-ban adok neki adatot:
                // title: 'yellowRoad students', az index.html-ben kell
                // megjelennie
                resolve(html); // resolve, tehát van adatom, és ezt küldöm
                // majd vissza a kliensnek, ez 
            }, (err) => {
                resolve('Err: ' + err.toString()); // itt direkt van resolve
                // csak itt úgy, hogy kiíratom a hibát
            });
    });
};

// Include variables.
const includeVars = (html, vars) => {
    // ha üres a vars objektum, akkor a for magja egyszer sem fog lefutni
    // ha van, lefut a for ciklus a vars kulcsain
    for (var k in vars) {
        let reg = new RegExp("\\$\\{[]*" + k + "[]*(\\}){1}", 'g');
        // szövegen belül nem lehet kapcsos zárójel, lezáró kapcsos zárójelből
        // csak egy darab lehet {1}, 
        // lecseréli a ${title}-t a változóra a regexp-pel az index.html-ben
        // így tud megjelenni a title, ami a yellowRoad students
        html = html.replace(reg, vars[k]); // a reget vars k-ra cserélem
    }

    return html;
}

module.exports = {
    render: render
};