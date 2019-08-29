var express = require('express');

var app = express();
app.listen(3333, () => {
    console.log('app listens port 3333')
    // ha foglalt a port, és nem kéne, hogy az legyen
    // windows 10-ben ki kell lőni feladatkezelőben a nodejs-t
});

// get kérésekre figyel, a gyökeret kezeli le,
// az indexet szolgálja ki 

// userPassword
const Users = [
    {
        name: 'Jankó',
        age: 31,
        address: 'Budapest'
    },
    {
        name: 'Dani',
        age: 23,
        address: 'Budapest'
    },
    {
        name: 'Erika',
        age: 40,
        address: 'Pécs'
    },
    {
        name: 'Tünde',
        age: 18,
        address: 'Debrecen'
    }
]

app.get('/', (req, res) => {
    let content = `
    <form action="/auth" method="post">
    <input type="email" name="userEmail">
    <br>
    <input type="password" name="userPassword">
    <br>
    <button type="submit">login</button>
    </form>`;

    res.send(content);
});

app.get('/user', (req, res) => {

    res.json(Users);
    // ? nem állhat a kifejezés végén, pl user? nem lehet
    // a ? előtti karakter elhagyható
});

app.get('/user/:id', (req, res, next) => {
    // : azt jelenti, hogy ez egy változ
    if (Users[req.params.id]) {
        res.json(Users[req.params.id]);
    } else {
        next();
    }
});

// authentikáció
app.all('/auth', (req, res, next) => {
    if (req.method == "POST") {
        console.log('access granted');
        res.send('Right url and method');
    } else {
        next();
    }
});

app.all('*', (req, res) => {
    // * - ha eddig egy szabály sem kapta el a kérést,
    // vagy elkapta, de továbbléptette, ez lép életbe - 
    // a hívási lánc legvége
    res.status(404);
    res.send('Page does not exist');
})