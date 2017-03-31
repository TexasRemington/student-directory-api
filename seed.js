require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.STUDENT_DIRECTORY_DB_CONN);

var Student = require('./models/student');

var studentData = [
  { name: 'Jacob Bodkin' },
  { name: 'Barbara Boutette' },
  { name: 'Jorge Cano' },
  { name: 'Andrew Chan' },
  { name: 'Sam Collette' },
  { name: 'Daniel Doherty' },
  { name: 'Jon Franchi' },
  { name: 'Sarah Goldgar' },
  { name: 'Remington Griffin' },
  { name: 'Matthew Heck' },
  { name: 'Komal Jadvani' },
  { name: 'Chris Jauregui' },
  { name: 'Juliana Michelsen' },
  { name: 'Erik Morales' },
  { name: 'Charles Orlando' },
  { name: 'Melissa Pringle' },
  { name: 'Salman Rana' },
  { name: 'Rene Sanchez' },
  { name: 'Robert Saunders' },
  { name: 'Tanya Selvog' },
  { name: 'Ronak Singh' },
  { name: 'Matthew Tan' },
  { name: 'Peter Weyand' }
];

Student.create(studentData, function(err, students) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Student inserted: ', students);
  process.exit();
});
