var express = require('express');
var router = express.Router();
var moment = require('moment');
var promise = require('bluebird');
var connectionString = require('./config/index');
var options = {
  // Initialization Options
  promiseLib:promise
};

var pgp = require('pg-promise')(options);
var db = pgp(connectionString);


router.get('/', function(req,res,next) {
  db.any('select * from todos')
  .then(function(data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved from ToDo'
      });
    })
  .catch(function(err){
    return next(err);
  });
});

router.get('/:id', function(req, res, next){
  var todoID = parseInt(req.params.id);
  db.any('select * from todos where id_user = '+ todoID)
  .then(function(data){
    res.status(200)
      .json({
        status: 'success',
        data : data,
        message: 'Retrieved from ID '+todoID
      });
    })
    .catch(function(err){
        return next(err);
    });
});

router.get('/aktif/:id', function(req, res, next){
    var todoID = parseInt(req.params.id);
    var aktif = 'Active';
    db.any("select * from todos where id_user = '"+ todoID+"' and status = 'Active'")
    .then(function(data){   
      res.status(200)
        .json({
          status: 'success',
          data : data,
          message: 'Retrieved from ID '+todoID
        });
      })
      .catch(function(err){
          return next(err);
      });
  });

  router.get('/komplit/:id', function(req, res, next){
    var todoID = parseInt(req.params.id);
    var aktif = 'Active';
    db.any("select * from todos where id_user = '"+ todoID+"' and status = 'Complete'")
    .then(function(data){   
      res.status(200)
        .json({
          status: 'success',
          data : data,
          message: 'Retrieved from ID '+todoID
        });
      })
      .catch(function(err){
          return next(err);
      });
  });

  router.get('/miss/:id', function(req, res, next){
    var todoID = parseInt(req.params.id);
    var aktif = 'Active';
    db.any("select * from todos where id_user = '"+ todoID+"' and status = 'Missed'")
    .then(function(data){   
      res.status(200)
        .json({
          status: 'success',
          data : data,
          message: 'Retrieved from ID '+todoID
        });
      })
      .catch(function(err){
          return next(err);
      });
  });

router.post('/', function(req, res, next){
    req.body.iduser = req.body.iduser;
    req.body.todo = req.body.todo;
    req.body.duedate = req.body.duedate;
    req.body.createdat = moment().format('MMMM, Do YYYY HH:mm');
    req.body.status = req.body.status;
    db.none('insert into todos(id_user, todo, duedate, createdat, status) values (${id_user}, ${todo}, ${duedate}, ${createdat}, ${status})', req.body)
        .then(function(){
            res.status(200)
            .json({
                status: 'success',
                message: 'Added one ToDo'
            });
        })
        .catch(function(err){
            return next(err);
        });
    });

router.put('/:id', function(req, res, next){
    var todoID = parseInt(req.params.id);
    db.none(`update todos set todo = $1, duedate = $2, status = $3 where id = ` + todoID, 
    [req.body.todo, req.body.duedate = moment().format('lll'), req.body.status, parseInt(req.body.id)])
        .then(function(){
            res.status(200)
            .json({
                status: 'success',
                message: 'Updated one User with ID '+ todoID
            });
        })
        .catch(function(err){
            return next(err);
        }); 
    });

router.delete('/:id', function(req, res, next){
    var todoID = parseInt(req.params.id);
    db.result('delete from todos where id = '+ todoID)
        .then(function(){          
            res.status(200)
            .json({
                status: 'success',
                message: 'Deleted ToDo with ID '+ todoID
            });
        })
        .catch(function(err){
            return next(err);
        });
    });

module.exports = router;
