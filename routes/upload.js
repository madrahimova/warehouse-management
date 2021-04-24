var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET uploads */
router.get('/', function(req, res, next) {
    if (!req.query.count)
        res.send('error: count is not specified');
    else {
        if (db.upload(req.query.count) < 0)
            res.send('error: warehouse is full');
        res.send(`done uploading ${req.query.count} item(s)
                <br>items in warehouse: ${db.count}`);
    }
});

module.exports = router;
