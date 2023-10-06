var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CvPage-Express',
    profile: 'images/profile.jpeg',
  });
});


module.exports = router;