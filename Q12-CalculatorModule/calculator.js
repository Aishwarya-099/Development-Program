// calculator.js - Calculator Module

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Export functions
module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};
