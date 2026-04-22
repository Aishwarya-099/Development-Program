// app.js - Using Calculator Module

const calculator = require('./calculator');

console.log('===== Calculator Module Demo =====\n');

// Test addition
const addResult = calculator.add(10, 5);
console.log(`Addition: 10 + 5 = ${addResult}`);

// Test subtraction
const subtractResult = calculator.subtract(10, 5);
console.log(`Subtraction: 10 - 5 = ${subtractResult}`);

// Test multiplication
const multiplyResult = calculator.multiply(10, 5);
console.log(`Multiplication: 10 × 5 = ${multiplyResult}`);

// Test division
const divideResult = calculator.divide(10, 5);
console.log(`Division: 10 ÷ 5 = ${divideResult}`);

console.log('\n===== All Calculations Complete =====');
