const express = require('express');
const pug = require('pug');
const port = 3999;
const path = require('path');

const app = express();

app.listen(port, () => {
    console.log(`App listen in port: ${port}.`);
});

app.set('views', './views');
app.set('view engine', 'pug'); // ide nem változót, hanem a motor
// nevét várja, azért idézőjeles
app.get('/', (req, res) => {

    res.render('index', {
        title: 'Home Page',
        message: 'This is a homepage. Awesome!'
    });
});

app.get('/users', (req, res) => {

    res.render('users', {
        title: 'Users Page',
        message: 'Welcome to Users page!'
    });
});