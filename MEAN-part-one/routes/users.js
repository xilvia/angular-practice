var express = require('express');
var router = express.Router();
const DB = require('../modules/db');
const db = new DB();


router.get('/', async (req, res, next) => {
  let users = await db.read()
  res.render('users', { users: users }) // users pug innen veszi a júzereket
})

module.exports = router;
