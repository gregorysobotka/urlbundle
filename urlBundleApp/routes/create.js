var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  res.render('create', { title: 'Create bundle', pageId : 'create' });
});

module.exports = router;