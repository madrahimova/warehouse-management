var express = require('express');
var router = express.Router();
var db = require('../db')

/* Render provider form */
router.get('/', function(req, res, next) {
    res.render('provider');
});

module.exports = router;
