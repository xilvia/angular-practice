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

// index route
app.get('/', (req, res) => {
    // a render kaphat egy második paramétert, ami gyakran objektum
    res.render('index', {
        title: 'index page',
        // nem azonos az oldallal, amire mutat, és tényleg
        // az index.hu
        message: 'any message',
        description: false,//'this is an awesome page again'
    })
});

// users route

const users = [{
    name: 'Joe',
    email: 'jog@joe.hu',
    city: 'Budapest',
    job: 'programmer'
},
{
    name: 'Jack',
    email: 'jack@jack.hu',
    city: 'Budapest',
    job: 'programmer'
},
{
    name: 'Johnny',
    email: 'johnnyg@johnny.hu',
    city: 'Budapest',
    job: 'programmer'
},
{
    name: 'Jacob',
    email: 'jacob@jacob.hu',
    city: 'Budapest',
    job: 'programmer'
}];

app.get('/users', (req, res) => {
    res.render('users', {
        title: 'users page',
        message: 'message for users',
        description: false,//'this is another awesome page for users'
        includes: true,
        users: users
        // a users tömböt fogja renderelni
    })
});