const express = require('express');
const router = express.Router();
const path = require('path');


// router.get('/', function (req, res, next) {
//     // modulon belül a '/' már a registert jelenti
//     res.sendFile(path.join(__dirname + '/../public/index.html'));
// });

router.post('/', (req, res, next) => {
    // modulon belül a '/' már a registert jelenti
    let content =
        `<pre>
            ${JSON.stringify(req.body, null, 4)}
        </pre>`;
    res.send(content)
    // res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;