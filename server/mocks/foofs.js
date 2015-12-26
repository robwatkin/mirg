/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var foofsRouter = express.Router();

  foofsRouter.get('/', function(req, res) {
    res.send({
      'foofs': [
        { id: 1, name: 'foo back'},
        { id: 2, name: 'foo back'},
        { id: 3, name: 'foo back'}
      ]
    });
  });

  foofsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  foofsRouter.get('/:id', function(req, res) {
    res.send({
      'foofs': {
        id: req.params.id
      }
    });
  });

  foofsRouter.put('/:id', function(req, res) {
    res.send({
      'foofs': {
        id: req.params.id
      }
    });
  });

  foofsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/foofs', require('body-parser'));
  app.use('/api/foofs', foofsRouter);
};
