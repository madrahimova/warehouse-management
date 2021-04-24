var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Other handlers */
const routes = require('../routes');
module.exports = function(app, db) {
  routes(app, db);

};

module.exports = router;
