const express = require('express');
const pug = require('pug');
const path = require('path');
const port = 3999;

const app = express();

app.listen(port, () => {
    console.log(`App listen in port: ${port}.`);
});

// static files
app.use(express.static('public'))

// template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Index route
app.get('/', (req, res) => {
    // a render kaphat egy második paramétert, ami gyakran objektum
    res.render('index', {
        title: 'index page',
        // nem azonos az oldallal, amire mutat, és tényleg
        // az index.hu
        message: 'any message',
        description: 'this is an awesome page again'
    })
});