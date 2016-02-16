var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/create');
});

router.get('/:bundleId', function(req, res, next) {
  var bundleId = req.params.bundleId;
  var eid = req.query.eid;
  res.render('edit', { title : 'Your bundle', editConfig : true, pageId : 'editBundle', bundleId : bundleId, eid : eid });
});

module.exports = router;