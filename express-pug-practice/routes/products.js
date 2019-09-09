var express = require('express');
var router = express.Router();
var DB=require('./../module/db')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const db= new DB();
    let jsonData= await db.mockData()

    res.render('products', { title: 'Express', 
                            message: 'respond with a products',
                            products:jsonData});
});

module.exports = router;