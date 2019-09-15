var express = require('express');
var router = express.Router();
const UserDB = require('../modules/userDB');
const db = new UserDB();


// get all
router.get('/', async (req, res, next) => {
  let userData = await db.readUser();
  res.render('colleagues', { title: 'Users', users: userData });
});


// Create new colleague
router.get('/new', async (req, res, next) => {
  res.render('new-coll');
});

router.post('/', async (req, res, next) => {
  let result = await db.createUser(req.body);
  res.json(result);
  res.redirect('/colleagues');
});

// update colleague
router.get('/update/:id', async (req, res, next) => {
  let selectedUser = await db.readOneUser(req.params.id);
  res.render('update-coll', { user: selectedUser[0] });
});

router.post('/update', async (req, res, next) => {
  let result = await db.updateUser(req.body);
  res.json(result);
  res.redirect('/colleagues');
});

router.get('/delete/:id', async (req, res, next) => {
  let result = await db.deleteUser(req.params.id);
  res.json(result);
});

module.exports = router;