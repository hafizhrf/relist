var express = require('express');
var router = express.Router();
var connectionString = require('./config/index');
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib:promise
};

var pgp = require('pg-promise')(options);
var db = pgp(connectionString);


router.get('/', function(req,res,next) {
  db.any('select * from lists')
  .then(function(data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved from List'
      });
    })
  .catch(function(err){
    return next(err);
  });
});

router.get('/:id', function(req, res, next){
  var listID = parseInt(req.params.id);
  db.any('select * from lists where id_todo = '+ listID)
  .then(function(data){
    res.status(200)
      .json({
        status: 'success',
        data : data,
        message: 'Retrieved from ID '+listID
      });
    })
    .catch(function(err){
        return next(err);
    });
});

router.post('/', function(req, res, next){
    req.body.idtodo = req.body.idtodo;
    req.body.list = req.body.list;
    req.body.status = req.body.status;
    db.none('insert into lists(id_todo, list, status) values (${id_todo}, ${list}, ${status})', req.body)
        .then(function(){
            res.status(200)
            .json({
                status: 'success',
                message: 'Added one List'
            });
        })
        .catch(function(err){
            return next(err);
        });
    });

router.put('/:id', function(req, res, next){
    var listID = parseInt(req.params.id);
    db.none(`update lists set list = $1, status = $2 where id = ` + listID, 
    [req.body.list, req.body.status, parseInt(req.body.id)])
        .then(function(){
            res.status(200)
            .json({
                status: 'success',
                message: 'Updated one List with ID '+ listID
            });
        })
        .catch(function(err){
            return next(err);
        }); 
    });

router.delete('/:id', function(req, res, next){
    var userID = parseInt(req.params.id);
    db.result('delete from lists where id = '+ userID)
        .then(function(){          
            res.status(200)
            .json({
                status: 'success',
                message: 'Deleted list with ID '+ userID
            });
        })
        .catch(function(err){
            return next(err);
        });
    });

module.exports = router;
