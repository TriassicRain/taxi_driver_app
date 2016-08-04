'use strict'
const express         = require('express');
const path            = require('path');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const homeRoute       = require('./controllers/homes');
const resultsRoute    = require('./controllers/results');

const app             = express();
const port            = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', homeRoute);
app.use('/results', resultsRoute);
app.get('/dummydata', function(req,res){
  res.send('{"price": "3.50"}')
})

app.listen(port, function() {
  console.log('Server is listening on ',port);
})
