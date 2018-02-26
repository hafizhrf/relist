var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var connectionString = require('./config/index');
var options = {
  // Initialization Options
  promiseLib:promise
};

var pgp = require('pg-promise')(options);
var db = pgp(connectionString);


router.get('/', function(req,res,next) {
  db.any('select * from users')
  .then(function(data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved from User'
      });
    })
  .catch(function(err){
    return next(err);
  });
});

router.get('/:id', function(req, res, next){
  var userID = parseInt(req.params.id);
  db.one('select * from users where id = '+ userID)
  .then(function(data){
    res.status(200)
      .json({
        status: 'success',
        data : data,
        message: 'Retrieved from ID '+userID
      });
    })
    .catch(function(err){
        return next(err);
    });
});

router.post('/', function(req, res, next){
    req.body.username = req.body.username;
    req.body.password = req.body.password;
    db.none('insert into users(username, password) values (${username}, ${password})', req.body)
        .then(function(){
            res.status(200)
            .json({
                status: 'success',
                message: 'Added one User'
            });
        })
        .catch(function(err){
            return next(err);
        });
    });

    router.post('/login', function(req, res, next){
        req.body.username = req.body.username;
        req.body.password = req.body.password;
        db.one('select * from users where username = ${username} and password = ${password}',req.body)
        .then(function(data){
            res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'connected'
            });
        })
        .catch(function(err){
            res.status(200)
            .json({
                message: 'username atau password anda salah'
            });
        });
    });

router.put('/:id', function(req, res, next){
    var userID = parseInt(req.params.id);
    db.none(`update users set username = $1, password = $2 where id = ` + userID, 
    [req.body.username, req.body.password, parseInt(req.body.id)])
        .then(function(){
            res.status(200)
            .json({
                status: 'success',
                message: 'Updated one User with ID '+ userID
            });
        })
        .catch(function(err){
            return next(err);
        }); 
    });

router.delete('/:id', function(req, res, next){
    var userID = parseInt(req.params.id);
    db.result('delete from users where id = '+ userID)
        .then(function(){          
            res.status(200)
            .json({
                status: 'success',
                message: 'Deleted user with ID '+ userID
            });
        })
        .catch(function(err){
            return next(err);
        });
    });

module.exports = router;
