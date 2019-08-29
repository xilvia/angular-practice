var myMiddleWare = (req, res, next) => {
    let currentDate = new Date();
    let stamp = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1)
        + '-' + currentDate.getDate() + ' ' + currentDate.getHours() + ':'
        + currentDate.getMinutes() + ':' + currentDate.getSeconds() + ':'
        + currentDate.getMilliseconds();
    console.log(`${req.method}: ${req.url}, time: ${stamp}`);
    next() // mert azt akarom, hogy menjen át a szitán a kérés
};
// middleware - egy függvényt vár, és maga a függvény egy
// middleware - olyan, mint egy szita

// exportálás

module.exports = myMiddleWare;