var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require('../db').findCustomers(function (docs) {
    res.render('index', { title: 'Express', customers: docs });
  });

});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Express' });
});

router.post('/new', function(req, res, next) {
  var nome = req.body.nome;
  var idade = req.body.idade;
  require('../db').saveCustomer(nome, idade, function(){ res.redirect('/');})
});

module.exports = router;
