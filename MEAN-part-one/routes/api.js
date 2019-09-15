var express = require('express');
var router = express.Router();
const DB = require("./../modules/db");
const db = new DB();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ message: 'Server works' });
}) // sima api-ra indított kérésre így megy a válasz

// get all

router.get('/users', async (req, res, next) => {
  let result = await db.read();
  res.json(result);
}); // ez az api/users kérésre küldi a választ

// get one

router.get('/users/:id', async (req, res, next) => {
  let result = await db.readOne(req.params.id);
  res.json(result);
})

// post

router.post('/users', async (req, res, next) => {
  let posted = await db.create(req.body);
  res.json(posted);
})

// update

router.put('/users/:id', async (req, res, next) => {
  let updated = await db.update(req.body);
  res.json(updated);
})

// delete

router.delete('/users/:id', async (req, res, next) => {
  let deleted = await db.delete(req.params.id)
  res.json(deleted);
})

module.exports = router;