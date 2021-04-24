var express = require('express');
var router = express.Router();

/* GET uploads */
router.get('/', function(req, res, next) {
    if (!req.body.count)
        res.send('count is not specified');
    else
        res.send('done uploading ' + req.body.count + ' item(s)');
});

module.exports = router;
