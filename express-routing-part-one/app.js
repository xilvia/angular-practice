const express = require('express');

var bodyParser = require('body-parser');


const app = express();
app.listen(3333);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {

    var form = `
    <h1>New User</h1>
    <form action="/postuser" method="post">
    <label>Name</label>
    <input name="fullName">
    <br>
    <label>Email</label>
    <input name="userEmail" type="email">
    <br>
    <button type="submit">Send</button>
    </form>
    `
    res.send(form);
}); // '/' -nincs almappa, a főútvonalon van, a gyökérben
// ebben az esetben, hogy localhost:3333 a gyökér
// alap indexoldalt szoktak így megjeleníteni


// app.get('/users', function (req, res) {
//     res.send('Hello, this is users page');
// });

app.post('/postuser', (req, res) => {
    console.log(req.body); // ez nyeri ki az adatokat a kérésből
    // nem jön létre automatikusan
    // egy modul szükséges hozzá: npm install body-parser
    // ami a bejövő adatokat parse-olja
    // be is kell állítani

    // ez kerül a konzolra:
    // [Object: null prototype] {
    //     fullName: 'Charlie Firpo',
    //     userEmail: 'npm@gmail.com'
    //   }

    // hivatkozás mentéshez pl. beléptetéshez, adatbázishoz
    // request.body.fullname, request.body.userEmail
    res.send('Hello, this is post page');
});
