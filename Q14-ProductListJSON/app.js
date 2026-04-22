// Q14 - Read JSON file asynchronously using fs.readFile()

const fs = require('fs');
const path = require('path');

console.log('===== Product List (Asynchronous Read) =====\n');

// Read file asynchronously
const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error.message);
        return;
    }

    try {
        // Parse JSON string
        const products = JSON.parse(data);

        console.log('Product Names:');
        console.log('------------------------------------------');

        // Display product names
        products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.productName} (${product.category}) - $${product.price}`);
        });

        console.log('\n------------------------------------------');
        console.log('Product Details:');
        console.log('------------------------------------------\n');

        // Display detailed information
        products.forEach((product) => {
            console.log(`Product: ${product.productName}`);
            console.log(`  ID: ${product.productId}`);
            console.log(`  Price: $${product.price}`);
            console.log(`  Stock: ${product.stock} units`);
            console.log('');
        });

        console.log('===== End of Product List =====');
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError.message);
    }
});

console.log('Reading file asynchronously...');
