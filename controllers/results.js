const router = require('express').Router();
const { dataReturn } = require('../models/data');

router.get('/', function(req,res) {
  res.render('dataResults/index');
});

module.exports = router;
