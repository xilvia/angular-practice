var express = require('express');
var router = express.Router();
const DB = require('../modules/db');
const db = new DB();

router.get('/', (req, res, next) => {
  res.json({ message: 'server works' }) // sima api-ra indított kérésre így megy a válasz
})

router.get('/users', async (req, res, next) => {
  let result = await db.read();
  res.json(result);
}); // ez az api/users kérésre küldi a választ

router.delete('/users/:id', async (req, res, next) => {
  let result = await db.delete(req.params.id);
  res.json(result);
});

module.exports = router;