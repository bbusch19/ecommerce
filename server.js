var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var db = mongojs('ecommerce');
var collection = db.collection('ecom-collection');
var ObjectId = mongojs.ObjectId;

app.post('/products', function(req, res, next) {
  collection.insert(req.body, function(err, response) {
    if (err) {
      return res.status(500).send(err);
    }
    else {
      return res.send(response);
    }
  });
});

app.get('/products/:id', function(req, res, next) {
  collection.find({_id: ObjectId(req.params.id)}, function(err, response) {
    if (err) {
      return res.status(500).json(err);
    }
    else {
      return res.json(response);
    }
  });
});

app.get('/products', function(req, res, next) {
  collection.find(function(err, response) {
    if (err) {
      return res.status(500).json(err);
    }
    else {
      return res.json(response);
    }
  });
});

app.put('/products/:id', function(req, res, next) {
  var id = req.params.id;
  collection.update({_id: ObjectId(id)}, req.body, function(err, response) {
    if (err) {
      return res.status(500).json(err);
    }
    else {
      return res.status(200).json(response);
    }
  });
});

app.delete('/products/:id', function(req, res, next) {
  var id = req.params.id;
  collection.remove({_id: ObjectId(id)}, function(err, response) {
    if (err) {
      return res.status(500).json(err);
    }
    else {
      res.status(200).json(response);
    }
  });
});




app.listen(port, function() {
  console.log('Listening on port ' + port);
});
