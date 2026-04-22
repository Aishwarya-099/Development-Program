// Q18 - Student Functions Module

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'students.json');

// Function to get all students
function getAllStudents() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const students = JSON.parse(data);
        
        console.log('===== All Students =====\n');
        students.forEach((student, index) => {
            console.log(`${index + 1}. ${student.name}`);
            console.log(`   ID: ${student.studentId}`);
            console.log(`   Email: ${student.email}`);
            console.log('');
        });
    } catch (error) {
        console.error('Error reading students:', error.message);
    }
}

// Function to get student by name
function getStudentByName(name) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const students = JSON.parse(data);
        
        const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
        
        console.log('\n===== Student Search Result =====\n');
        if (student) {
            console.log(`Name: ${student.name}`);
            console.log(`ID: ${student.studentId}`);
            console.log(`Email: ${student.email}`);
            console.log(`Marks: ${JSON.stringify(student.marks)}`);
        } else {
            console.log(`Student "${name}" not found!`);
        }
    } catch (error) {
        console.error('Error searching student:', error.message);
    }
}

// Function to get average marks
function getAverageMarks() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const students = JSON.parse(data);
        
        console.log('\n===== Average Marks by Student =====\n');
        
        students.forEach((student) => {
            const marks = student.marks;
            const marksList = Object.values(marks);
            const average = marksList.reduce((a, b) => a + b, 0) / marksList.length;
            
            console.log(`${student.name}: ${average.toFixed(2)}`);
        });
    } catch (error) {
        console.error('Error calculating averages:', error.message);
    }
}

// Export functions
module.exports = {
    getAllStudents,
    getStudentByName,
    getAverageMarks
};
