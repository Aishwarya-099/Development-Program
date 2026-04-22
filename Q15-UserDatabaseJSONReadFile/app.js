// Q15 - Read JSON file using fs.readFile() method

const fs = require('fs');
const path = require('path');

console.log('===== User Database (Using fs.readFile) =====\n');

const filePath = path.join(__dirname, 'users.json');

fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error.message);
        return;
    }

    try {
        // Parse JSON string
        const users = JSON.parse(data);

        console.log('User Details:');
        console.log('------------------------------------------');

        // Print user details
        users.forEach((user) => {
            console.log(`\nUser ID: ${user.userId}`);
            console.log(`Name: ${user.name}`);
            console.log(`Age: ${user.age}`);
            console.log(`Skills: ${user.skills.join(', ')}`);
        });

        console.log('\n------------------------------------------');
        console.log('\nConverting to JSON String:');
        console.log('------------------------------------------\n');

        // Convert JS object to JSON string
        const jsonString = JSON.stringify(users, null, 2);
        console.log(jsonString);

        console.log('\n===== End of User Database =====');
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError.message);
    }
});

console.log('Reading user database file...');
