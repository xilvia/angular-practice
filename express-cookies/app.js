const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 3999;

const app = express();
app.listen(port, () => {
    console.log(`App listen in port: ${port}.`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html')
    console.log('Cookies: ', req.cookies.auth);
});

app.post('/login', (req, res, next) => {

    if (req.body.userEmail === 'kapuvari.szilvia@gmail.com' && req.body.userPassword === 'pass') {
        res.cookie(
            'loggedIn',
            '1',
            {
                // domain: '.example.com', 
                // path: '/admin',
                expires: new Date(Date.now() + 3600)
            }
        );
    }

    res.send(JSON.stringify(req.body));
});




