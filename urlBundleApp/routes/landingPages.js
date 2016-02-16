var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title : 'UrlBundle : Keep track of everything', pageId : 'home' });
});

router.get('/api', function(req, res, next) {
    res.render('api', { title: 'Create bundle', pageId : 'api' });
});

router.get('/help', function(req, res, next) {
    res.render('help', { title: 'Create bundle', pageId : 'help' });
});


module.exports = router;