var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var productRouter = require('./routes/product');

var app = express();


app.use(logger('dev'));
app.use(cors({ origin: 'http://localhost:6380' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontreact/build')));

app.use('/api/products', productRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontreact/build/index.html'));
});

app.listen(3001, '0.0.0.0', function (err) {
  if (err) {
   console.log(err)
   return
  }
  console.log('Listening at http://localhost:' + 3001 + '\n')
 })
module.exports = app;
