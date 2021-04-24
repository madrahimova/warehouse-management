var express = require('express');
var router = express.Router();

/* POST uploads */
router.post('/', function(req, res, next) {
    if (!req.body.count)
        res.send('count is not specified');
    else
        res.send('done uploading ' + req.body + ' item(s)');
});

module.exports = router;
