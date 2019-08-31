// defining template engine
var fs = require('fs') // this engine requires the fs module
const engine = (filePath, options, callback) => { // define the template engine
    fs.readFile(filePath, (err, content) => {
        // motor beolvassa a fájl, ha nem sikerült, hibát jelez,
        // ha sikerült, kicseréli a szöveget a megfelelő változókra
        // a két replace-szel
        if (err)
            return callback(err)
        // this is an extremely simple template engine
        let rendered = content.toString()
            .replace(/\#title\#/g, '<title>' + options.title + '</title>')
            // \ a # előtt --> így a #-t szövegként fogja értelmezni
            // regexp-re azért volt szükség, hogy ne csak a title első
            // előfordulását cserélje a replace
            .replace(/\#message\#/g, '<h1>' + options.message + '</h1>')
        return callback(null, rendered)
        // null, mint első paraméter azt jelenti, hgoy nem volt hiba
    })
}

module.exports = engine;