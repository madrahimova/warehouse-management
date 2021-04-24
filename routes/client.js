var express = require('express');
var router = express.Router();
var db = require('../db')

/* Render client form  */
router.get('/', function(req, res, next) {
    res.render('client');
});

module.exports = router;
