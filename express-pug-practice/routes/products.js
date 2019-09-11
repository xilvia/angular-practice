var express = require('express');
var router = express.Router();
const DB = require('../module/db');
const db = new DB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // let products = await db.mockData();
  let realData = await db.read();
  console.log(realData[0]);

  res.render('products', { title: 'Products', products: realData });
});

router.get('/new', async (req, res, next) => {
  res.render('new-product');
});

// Create new product.
router.post('/', async (req, res, next) => {
  let result = await db.create(req.body);
  res.json(result);
  res.redirect('/products');
});

// update
router.get('/update/:id', async (req, res, next) => {
  let editedItem = await db.update(req.body);
  res.render('edit-product', { data: data });

});

router.post('/update/:id', async (req, res, next) => {
  let result = await db.update(req.body, req.params.id);
  res.render('edit-products');
  res.redirect('/products');
});

//delete
router.get('/delete/:id', async (req, res, next) => {
  let deletedItem = await db.remove(req.params.id)
  res.redirect('/products');
});

module.exports = router;
