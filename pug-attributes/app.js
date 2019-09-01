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
    res.render('index')
});