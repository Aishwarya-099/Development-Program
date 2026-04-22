function calculateBill() {
    const previousReading = parseFloat(document.getElementById('previousReading').value) || 0;
    const currentReading = parseFloat(document.getElementById('currentReading').value) || 0;
    const tariff = parseFloat(document.getElementById('tariff').value) || 0;
    const fixedCharge = parseFloat(document.getElementById('fixedCharge').value) || 0;
    const taxRate = parseFloat(document.getElementById('tax').value) || 0;

    // Validate readings
    if (currentReading < previousReading) {
        alert('Current reading cannot be less than previous reading');
        return;
    }

    // Calculate units consumed
    const unitsConsumed = currentReading - previousReading;
    document.getElementById('unitsConsumed').value = unitsConsumed;

    // Calculate bill components
    const energyCharges = unitsConsumed * tariff;
    const subtotal = energyCharges + fixedCharge;
    const taxAmount = (subtotal * taxRate) / 100;
    const totalAmount = subtotal + taxAmount;

    // Update bill summary
    document.getElementById('energyCharges').textContent = '₹' + energyCharges.toFixed(2);
    document.getElementById('fixedChargeDisplay').textContent = '₹' + fixedCharge.toFixed(2);
    document.getElementById('subtotal').textContent = '₹' + subtotal.toFixed(2);
    document.getElementById('taxAmount').textContent = '₹' + taxAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = '₹' + totalAmount.toFixed(2);

    console.log('Bill Calculation:');
    console.log('Units Consumed:', unitsConsumed, 'kWh');
    console.log('Energy Charges:', energyCharges);
    console.log('Fixed Charge:', fixedCharge);
    console.log('Subtotal:', subtotal);
    console.log('Tax:', taxAmount);
    console.log('Total Amount:', totalAmount);
}

document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        console.log('Bill payment form submitted successfully');
        
        const formData = {
            consumerName: document.getElementById('consumerName').value,
            accountNumber: document.getElementById('accountNumber').value,
            consumerType: document.getElementById('consumerType').value,
            unitsConsumed: document.getElementById('unitsConsumed').value,
            totalAmount: document.getElementById('totalAmount').textContent,
            paymentMethod: document.getElementById('paymentMethod').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };
        
        console.log('Payment Data:', formData);
        
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            this.reset();
            document.getElementById('successMessage').style.display = 'none';
            clearErrors();
            // Reset bill summary
            document.getElementById('unitsConsumed').value = '';
            document.getElementById('energyCharges').textContent = '₹0.00';
            document.getElementById('fixedChargeDisplay').textContent = '₹0.00';
            document.getElementById('subtotal').textContent = '₹0.00';
            document.getElementById('taxAmount').textContent = '₹0.00';
            document.getElementById('totalAmount').textContent = '₹0.00';
        }, 2000);
    }
});

function validateForm() {
    clearErrors();
    let isValid = true;

    // Consumer Name
    const consumerName = document.getElementById('consumerName').value.trim();
    if (consumerName === '') {
        showError('consumerNameError', 'Consumer name is required');
        isValid = false;
    }

    // Account Number
    const accountNumber = document.getElementById('accountNumber').value.trim();
    if (accountNumber === '') {
        showError('accountNumberError', 'Account number is required');
        isValid = false;
    }

    // Consumer Type
    const consumerType = document.getElementById('consumerType').value;
    if (consumerType === '') {
        showError('consumerTypeError', 'Consumer type is required');
        isValid = false;
    }

    // Connection Date
    const connectionDate = document.getElementById('connectionDate').value;
    if (connectionDate === '') {
        showError('connectionDateError', 'Connection date is required');
        isValid = false;
    }

    // Previous Reading
    const previousReading = document.getElementById('previousReading').value;
    if (previousReading === '' || previousReading < 0) {
        showError('previousReadingError', 'Valid previous reading is required');
        isValid = false;
    }

    // Current Reading
    const currentReading = document.getElementById('currentReading').value;
    if (currentReading === '' || currentReading < 0) {
        showError('currentReadingError', 'Valid current reading is required');
        isValid = false;
    }

    // Tariff
    const tariff = document.getElementById('tariff').value;
    if (tariff === '' || tariff < 0) {
        showError('tariffError', 'Valid tariff rate is required');
        isValid = false;
    }

    // Fixed Charge
    const fixedCharge = document.getElementById('fixedCharge').value;
    if (fixedCharge === '' || fixedCharge < 0) {
        showError('fixedChargeError', 'Valid fixed charge is required');
        isValid = false;
    }

    // Tax Rate
    const tax = document.getElementById('tax').value;
    if (tax === '' || tax < 0) {
        showError('taxError', 'Valid tax rate is required');
        isValid = false;
    }

    // Bill Month
    const billMonth = document.getElementById('billMonth').value;
    if (billMonth === '') {
        showError('billMonthError', 'Bill month is required');
        isValid = false;
    }

    // Due Date
    const dueDate = document.getElementById('dueDate').value;
    if (dueDate === '') {
        showError('dueDateError', 'Due date is required');
        isValid = false;
    }

    // Payment Method
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod === '') {
        showError('paymentMethodError', 'Payment method is required');
        isValid = false;
    }

    // Phone
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        showError('phoneError', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Phone must be 10 digits');
        isValid = false;
    }

    // Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    
    const inputId = elementId.replace('Error', '');
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.classList.add('invalid');
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
    
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => input.classList.remove('invalid'));
}
