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
    res.render('api', { title: 'UB API', pageId : 'api' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About UB', pageId : 'about' });
});


module.exports = router;