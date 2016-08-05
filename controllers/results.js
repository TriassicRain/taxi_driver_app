const router = require('express').Router();
const { dataReturn } = require('../models/data');

router.get('/', dataReturn, function(req,res) {
  res.render('dataResults/index', { price: res.results });
});

module.exports = router;
