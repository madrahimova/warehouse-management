var express = require('express');
var router = express.Router();
var db = require('../db')

/* POST downloads */
router.post('/', function(req, res, next) {
    if (!req.body.client)
        res.send('error: client is not specified');
    else {
        db.client(req.body.client, req.body.count);
        var count = db.download(req.body.client)
        if (count < 0)
            res.send('error: not enough items');
        res.send(`done downloading ${req.body.count} item(s) by client ${req.body.client}
                <br>items in warehouse: ${db.count}`);
    }
});

module.exports = router;
