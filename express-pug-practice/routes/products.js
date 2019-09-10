var express = require('express');
var router = express.Router();
var DB = require('./../module/db')
const db = new DB(); // ezt ide kell tenni, hogya connection limit problémát kezelni tudjam
// itt ez csak egyszer fog elindulni

/* GET users listing. */
router.get('/', async function (req, res, next) {

  // let jsonData = await db.mockData() // erre csak mockolásnál volt szükség

  let realData = await db.read();
  console.log(realData[0]);

  res.render('products', {
    title: 'Express',
    message: 'respond with a products',
    products: realData // mostmár nem a jsonData-val dolgozunk, ami mockdata volt
  });
});

module.exports = router;