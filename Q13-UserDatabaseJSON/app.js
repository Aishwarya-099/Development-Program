// Q13 - Read JSON file using require() in Node.js

const users = require('./users.json');

console.log('===== User Database (Using require()) =====\n');

// Print user details
console.log('User Details:');
console.log('------------------------------------------');

users.forEach((user, index) => {
    console.log(`\nUser ${index + 1}:`);
    console.log(`  ID: ${user.userId}`);
    console.log(`  Name: ${user.name}`);
    console.log(`  Age: ${user.age}`);
    console.log(`  Skills: ${user.skills.join(', ')}`);
});

// Convert JS object to JSON string
console.log('\n------------------------------------------');
console.log('Converting to JSON String:');
console.log('------------------------------------------\n');

const jsonString = JSON.stringify(users, null, 2);
console.log(jsonString);

console.log('\n===== End of User Database Report =====');
