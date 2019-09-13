var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express', user: req.user || {} });
 // ha user nincs belépve, az id undefined
});

module.exports = router;
