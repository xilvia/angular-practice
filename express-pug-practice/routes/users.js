var express = require('express');
var router = express.Router();
const DB = require('../module/db');
const db = new DB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  let userData = await db.readUser();

  res.render('users', { title: 'Users', users: userData });
});

router.get('/new', async (req, res, next) => {
  res.render('new-user');
});

router.get('/update/:id', async (req, res, next) => {
  let selectedUser = await db.readUser(req.params.id);
  res.render('update-user', { user: selectedUser[0] });
});

// Create new product.
router.post('/', async (req, res, next) => {
  let result = await db.createUser(req.body);
  res.json(result);
  res.redirect('/users');
});

router.post('/update', async (req, res, next) => {
  let result = await db.updateUser(req.body);
  res.json(result);
});

router.get('/delete/:id', async (req, res, next) => {
  let result = await db.deleteUser(req.params.id);
  res.json(result);
});

module.exports = router;
