var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Your code here.
});
router.get('/contacts', function(req, res) {
  res.send('Successful login');
});
module.exports = router;
