// Q16 - Use fs.writeFileSync() to save new JSON file

const fs = require('fs');
const path = require('path');

console.log('===== Student Records (Synchronous Write) =====\n');

// Create student records
const studentRecords = [
    {
        "studentId": "STU001",
        "name": "Aarav Sharma",
        "email": "aarav.sharma@school.edu",
        "grade": "10-A",
        "marks": 92
    },
    {
        "studentId": "STU002",
        "name": "Priya Verma",
        "email": "priya.verma@school.edu",
        "grade": "10-B",
        "marks": 88
    }
];

// Path for new file
const filePath = path.join(__dirname, 'students.json');

try {
    // Write file synchronously
    fs.writeFileSync(filePath, JSON.stringify(studentRecords, null, 2), 'utf8');
    
    console.log('✓ File created successfully!');
    console.log(`✓ File path: ${filePath}`);
    console.log(`✓ Number of records: ${studentRecords.length}`);
    
    // Verify file creation
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`✓ File size: ${stats.size} bytes`);
        console.log('\nFile Contents:');
        console.log('------------------------------------------');
        console.log(JSON.stringify(studentRecords, null, 2));
        console.log('------------------------------------------');
        console.log('\n✓ Verification complete - File created successfully!');
    }
} catch (error) {
    console.error('Error writing file:', error.message);
}
