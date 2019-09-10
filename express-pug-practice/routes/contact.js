var express = require('express');
var router = express.Router();


/* GET users listing. */

router.get('/', (req, res, next) => {

  res.render('contact', {
    title: 'Contact'

  })
});

// app.post('/', (req, res) => {
//   let body = req.body;
//   res.send('Got a POST request');
// });

module.exports = router;
