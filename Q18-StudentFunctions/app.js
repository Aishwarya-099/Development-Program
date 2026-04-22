// app.js - Call all student functions

const { getAllStudents, getStudentByName, getAverageMarks } = require('./studentModule');

console.log('===== Student Management System =====\n');

// Call all functions
getAllStudents();

getStudentByName('Priya Verma');

getAverageMarks();

console.log('\n===== End of Report =====');
