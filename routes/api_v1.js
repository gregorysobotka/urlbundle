var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var config = require('../config/config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = config.mongoDbPath;

router.get('/', function (req, res) {
    res.redirect('/api');
});

router.get('/getBundle/:bundleId', function(req, res, next) {

    if( typeof req.params.bundleId !== 'undefined' ) {

        var bundleId = req.params.bundleId;

        MongoClient.connect(mongoUrl, function (err, db) {

            var collection = db.collection('bundles');

            collection.findOne({"bundleId": bundleId}, function (err, document) {
                if (typeof document !== 'undefined' && document !== null) {
                    res.json(document);
                } else {
                    res.json({"bundle":"empty"});
                }
            });
        });

    } else {
        res.json({"bundle":"empty"});
    }

});

router.post('/createBundle', function(req, res, next) {

    if(typeof req.body.bundleId !== 'undefined') {

        var bundleId = req.body.bundleId;

        MongoClient.connect(mongoUrl, function (err, db) {

            var collection = db.collection('bundles');

            collection.insert({"bundleId": bundleId, details : {
                title : bundleId,
                urls : [{title : '', url : 'http://'}]
            }}, function (err, document) {
                var response = (err === null) ? document : err;
                res.send(response);
            });

        });
    } else {
        res.json({errorMsg : 'Empty bundle id'});
    }

});

module.exports = router;
