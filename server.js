var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Product = require('./Products.js');

mongoose.connect('mongodb://localhost/ecommerce', function(err) {
  if (err) throw err;
});
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB');
});


var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



app.post('/products', function(req, res, next) {
  var product = new Product(req.body);
  product.save(function(err, s) {
    if (err) return res.status(500).json(err);
    else return res.status(200).json(s);
  });
});

app.get('/products', function(req, res, next) {
  var query;
  if (req.query.id) query = {_id: req.query.id};
  else query = {};
  Product.find(query, function(err, response) {
    if (err) res.status(500).json(err);
    else res.status(200).json(response);
  });
});


app.put('/products/:id', function(req, res, next) {
  var id = req.body.id;
  var body = req.body;
  Product.findByIdAndUpdate(id, body, function(err, response) {
    if (err) return res.status(500).json(err);
    else return res.status(200).json(response);
  })
});

app.delete('/products/:id', function(req, res, next) {
  var idToFind = req.params.id;
  Product.findByIdAndRemove(idToFind, function(err, response) {
    if (err) {res.status(500).json(err);}
    else res.status(200).json(response);
  })
});




app.listen(port, function() {
  console.log('Listening on port ' + port);
});
