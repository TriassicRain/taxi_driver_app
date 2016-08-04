const router = require('express').Router();

router.get('/', function(req,res) {
  res.render('home/map-index');
});

module.exports = router;
