const express = require('express');
const expressSession = require('express-session');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 3999;

const app = express();
app.listen(port, () => {
    console.log(`App listen in port: ${port}.`);
});

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(expressSession({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));
// a keyboard cat-tel lehet visszafejteni a titkosított value- adatokat
// chrome/application/cookiess

app.get('/', function (req, res, next) {
    var sess = req.session
    if (sess.views) {
        sess.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.views + '</p>')
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        sess.views = 1;
        res.end('welcome to the session demo. refresh!')
    }
});