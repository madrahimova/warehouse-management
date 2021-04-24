var express = require('express');
var router = express.Router();

/* GET uploads */
router.get('/', function(req, res, next) {
    if (!req.query.count)
        res.send('error: count is not specified');
    else
        res.send('done uploading ' + req.query.count + ' item(s)');
});

module.exports = router;
