var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express', message: 'respond with a about'});
});

module.exports = router;
