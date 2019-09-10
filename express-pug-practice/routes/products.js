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
});

// update

router.get('/update/:id', async (req, res, next) => {
  let editedItem = await db.update(req.params.id);
  res.render('update')
});

router.post('/update/:id', async (req, res, next) => {
  let result = await db.update(req.body, req.params.id);
  res.render('products');

  // router.post('/', async (req, res, next) => {
  //   let postedItem = await db.create(req.body);
  //  res.render('products')
});

//delete
router.get('/delete/:id', async (req, res, next) => {
  let deletedItem = await db.remove(req.params.id)
  res.json(deletedItem)
});

module.exports = router;
