var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET downloads */
router.get('/', function(req, res, next) {
    if (!req.query.count)
        res.send('error: count is not specified');
    else {
        if (db.download(req.query.count) < 0)
            res.send('error: not enough items');
        res.send(`done downloading ${req.query.count} item(s)
                <br>items in warehouse: ${db.count}`);
    }
});

module.exports = router;
