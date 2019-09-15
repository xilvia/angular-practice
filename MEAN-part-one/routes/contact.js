var express = require('express');
var router = express.Router();
const path = require('path');


router.post('/', (req, res, next) => {
  res.json(req.body)
  console.log(req.body)
});


router.get('/', (req, res, next) => {
  res.render('contact', {
    title: 'Contact'

  })
});


module.exports = router;
