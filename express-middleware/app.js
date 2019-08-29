var express = require('express');
// var myLogger = require('./modules/myLogger');

var port = 3999;

var app = express();
app.listen(3999, () => {
    console.log(`app listen in ${port}.`);
})


// middleware - egy függvényt vár, és maga a függvény egy
// middleware - olyan, mint egy szita
app.use(require('./modules/myLogger'));

// a use mindenképp megszűri a kérdést, és csak utána megy tovább a get-re

// app.get('/', (req, res, next) => {
//     res.send('Hello');
//     // a middleware továbbengedte a kérést, így megjelenik a hello
// })

app.use('/', require('./routes/index')) // ezzel a gyökér-URL-re
// érkező kéréseket kezeljük