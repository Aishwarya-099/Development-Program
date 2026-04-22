// Q17 - Read JSON file asynchronously using fs.readFile()

const fs = require('fs');
const path = require('path');

console.log('===== Student Records (Asynchronous Read) =====\n');

const filePath = path.join(__dirname, 'students.json');

// Read file asynchronously
fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error.message);
        return;
    }

    try {
        // Parse JSON string
        const students = JSON.parse(data);

        console.log('Student Details:');
        console.log('------------------------------------------\n');

        // Display student information
        students.forEach((student) => {
            console.log(`Student ID: ${student.studentId}`);
            console.log(`Name: ${student.name}`);
            console.log(`Email: ${student.email}`);
            console.log(`Grade: ${student.grade}`);
            console.log(`Marks: ${student.marks}`);
            console.log('');
        });

        // Calculate and display total number of students
        console.log('------------------------------------------');
        console.log(`Total number of students: ${students.length}`);
        console.log('------------------------------------------');

        console.log('\n✓ Successfully read and parsed JSON file!');
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError.message);
    }
});

console.log('Reading student records file...\n');
