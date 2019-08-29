// load modules
const express = require('express');
const port = 3456;

// create new server

// egy függvényt ad vissza, amit, ha meghívok, létrehoz egy új webszervert,
// amit a const app-ba mentek
const app = express();

// get request
app.get('/', function (req, res) {
    res.send('Hello ExpressJs!')
});

// listen a port
// érdemes callback függvényt is mellé tenni - ha elindul a szerver,
// lefut az üzenet, hogy fut
app.listen(port, () => {
    console.log(`Server running in port: ${port}.`);
});