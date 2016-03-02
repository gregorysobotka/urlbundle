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
                    res.json( {
                        bundleId : document.bundleId,
                        bundleName : document.bundleName,
                        details : document.details
                    });
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
                bundleName : bundleId,
                urls : JSON.stringify([{title : 'Link name', bundleType : 'single-bundle-url', url : 'http://urlbundle.net', text : 'Bundle notes...'}])
            }}, function (err, document) {
                var response = (err === null) ? document : err;
                res.send(response);
            });

        });
    } else {
        res.json({errorMsg : 'Empty bundle id'});
    }

});

router.post('/updateBundle/:bundleId', function(req, res, next) {

    if(typeof req.params.bundleId !== 'undefined') {

        var bundleId = req.params.bundleId;
        var eid = req.body.eid;
        var urlBundle = req.body.urlBundle;
        var bundleName = req.body.bundleName;

        MongoClient.connect(mongoUrl, function (err, db) {

            var collection = db.collection('bundles');

            collection.findAndModify(
                { "bundleId": bundleId },
                [], // empty sort order param
                {
                    $set: {
                        "bundleName" : bundleName,
                        "details": {
                        "title": bundleId,
                        "urls": urlBundle
                    }}
                },
                function (err, document) {

                    var response = (err === null) ? document : err;
                    res.send(response);
                });

            });
    } else {
        res.json({errorMsg : 'Empty bundle id'});
    }

});

module.exports = router;
