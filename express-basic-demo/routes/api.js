var express = require('express');
var router = express.Router();
const DB = require('../module/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Please set the api endpoint.');
});

router.get('/:entity/:id', (req, res, next) => {
    let db = new DB(req.params.entity);
    let id = req.params.id || 0;

    db.find(id).then(
        data => res.json(data),
        err => res.json(err)
    );
});

router.get('/:entity', (req, res, next) => {
    let db = new DB(req.params.entity);

    db.find().then(
        data => res.json(data),
        err => res.json(err)
    );
});

router.post('/:entity', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let postedData = await db.create(req.body)
    res.json(postedData);
});

router.put('/:entity/:id', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let id = req.params.id;
    let updatedData = await db.update(id, req.body);
    res.json(updatedData)
});

router.delete('/:entity/:id', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let id = req.params.id;
    let deletedData = await db.remove(req.params.id);
    res.send(deletedData)
});

module.exports = router;
