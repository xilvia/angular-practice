const express = require('express');
const port = 3999;

const app = express();

app.listen(port, () => {
    console.log(`App listen in port: ${port}.`);
});


app.engine('ntl', require('./modules/ntl'));
// a fájlok kiterjesztése egyezzen meg a motor nevével
// ezen a ponton még akármilyen motor lehet
app.set('views', './views') // specify the views directory
// a nézethez a nyers template-fájlokat innen veszi
app.set('view engine', 'ntl') // register the template engine
// motor, mégpedig a megjelenítés motorja

app.get('/', (req, res) => {
    res.render('index', {
        // meghívja a beállított template motort
        title: 'Home Page',
        message: 'This is a homepage. Awesome!'
    });
});