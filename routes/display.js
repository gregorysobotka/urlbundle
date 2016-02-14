var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  res.redirect('/create');
});

router.get('/:bundleId', function(req, res, next) {

  if( typeof req.params.bundleId !== 'undefined' ) {
    var bundleId = req.params.bundleId;
    res.render('bundleList', { title : 'Your bundle', pageId : 'individualBundle', bundleId : bundleId });
  } else {
    res.render('index', { title: 'Express' });
  }

});

module.exports = router;
