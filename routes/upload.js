var express = require('express');
var router = express.Router();
var db = require('../db')

/* POST uploads */
router.post('/', function(req, res, next) {
    if (!req.body.provider)
        res.send('error: provider is not specified');
    else {
        db.provider(req.body.provider, req.body.count);
        var count = db.upload(req.body.provider);
        if (count < 0)
            res.send('error: warehouse is full');
        res.send(`done uploading ${req.body.count} item(s) by provider ${req.body.provider}
                <br>items in warehouse: ${db.count}`);
    }
});

module.exports = router;
