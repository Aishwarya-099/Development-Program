document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        console.log('Form submitted successfully');
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            this.reset();
            document.getElementById('successMessage').style.display = 'none';
            clearErrors();
        }, 2000);
    }
});

function validateForm() {
    clearErrors();
    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        showError('firstNameError', 'First name is required');
        isValid = false;
    } else if (firstName.length < 3) {
        showError('firstNameError', 'First name must be at least 3 characters');
        isValid = false;
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    } else if (lastName.length < 3) {
        showError('lastNameError', 'Last name must be at least 3 characters');
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    }

    // Phone Validation
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        showError('phoneError', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Phone number must be 10 digits');
        isValid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        showError('dobError', 'Date of birth is required');
        isValid = false;
    }

    // Address Validation
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        showError('addressError', 'Address is required');
        isValid = false;
    } else if (address.length < 10) {
        showError('addressError', 'Address must be at least 10 characters');
        isValid = false;
    }

    // Education Validation
    const education = document.getElementById('education').value;
    if (education === '') {
        showError('educationError', 'Please select education qualification');
        isValid = false;
    }

    // Experience Validation
    const experience = document.getElementById('experience').value;
    if (experience === '' || experience < 0) {
        showError('experienceError', 'Please enter valid years of experience');
        isValid = false;
    }

    // Position Validation
    const position = document.getElementById('position').value.trim();
    if (position === '') {
        showError('positionError', 'Position applied for is required');
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
    
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => input.classList.remove('invalid'));
}
