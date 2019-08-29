const express = require('express');
const port = 3999;
const app = express();
const bodyParser = require('body-parser');

// set bodyParser, ami egy middleware, átmegy rajta a kérés
// összevárja a júzertől az adatokat, és beteszi a requestbe
// amit a req.body-val érek el


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`app listen in port ${port}`);

});

app.use(require('./modules/myLogger'));
app.use(express.static('public'));
app.use('/', require('./routes/index'));

app.use('/register', require('./routes/register'));