var express = require('express');
var router = express.Router();

var Student = require('../models/student');

router.get('/', function(req, res, next) {
  Student.find({}, function(err, students){
    if(err){console.log('Error: ', err);}
    //console.log('Students: ', students);
      res.render('index', {
      students: students
    });
  });
});

router.get('/:studentid', function(req, res) {
  Student.findById(req.params.studentid, function(err, student){
    if(err){console.log('Error: ', err);}
    res.render('student',{
      student: student
    });
  });
});

router.post('/', function(req, res) {
  var newStudent = new Student({
    name: req.body.name
  });
  newStudent.save(function(err, student){
    if(err){res.status(500).send({
      status: 'Error',
      error: err
      });
    }else{
      res.status(200).json({
      student: student
      })
    }
  })
});

router.patch('/', function(req, res){
  Student.findById(req.body.id, function(err, student){
    if(err){res.status(500).send({
      status: 'Error',
      error: err
      });
    }
    student.name = req.body.name || student.name;
    student.save(function(err, student){
    if(err){res.status(500).send({
        status: 'Error',
        error: err
        });
      }
      res.json({
        status: 'updated',
        updated_student: student
      });
    });
  });
});

router.delete('/', function(req, res){
  Student.findByIdAndRemove( req.body.id , function(err, student){
    if(err){res.status(500).send({
      status: 'Error',
      error: err
      });
    }
    res.json({
      status: 'updated',
      student: student
    });
  });
});


router.get('/new', function(req, res){
  res.send('display a form for a new student');
});

module.exports = router;
