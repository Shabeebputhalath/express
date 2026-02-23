var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express', subtitle: 'This is the subtitle' , sample: 'This is the sample text' });
});

module.exports = router;