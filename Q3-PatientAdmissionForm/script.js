document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        console.log('Admission form submitted successfully');
        const formData = {
            patientId: document.getElementById('patientId').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            bloodGroup: document.getElementById('bloodGroup').value,
            admissionDate: document.getElementById('admissionDate').value,
            diagnosis: document.getElementById('diagnosis').value
        };
        console.log('Patient Data:', formData);
        
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

    // Patient ID
    const patientId = document.getElementById('patientId').value.trim();
    if (patientId === '') {
        showError('patientIdError', 'Patient ID is required');
        isValid = false;
    }

    // First Name
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        showError('firstNameError', 'First name is required');
        isValid = false;
    }

    // Last Name
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    }

    // Date of Birth
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        showError('dobError', 'Date of birth is required');
        isValid = false;
    }

    // Gender
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        showError('genderError', 'Gender is required');
        isValid = false;
    }

    // Phone
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        showError('phoneError', 'Contact number is required');
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

    // Address
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        showError('addressError', 'Address is required');
        isValid = false;
    }

    // City
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        showError('cityError', 'City is required');
        isValid = false;
    }

    // State
    const state = document.getElementById('state').value.trim();
    if (state === '') {
        showError('stateError', 'State is required');
        isValid = false;
    }

    // Zip Code
    const zip = document.getElementById('zip').value.trim();
    if (zip === '') {
        showError('zipError', 'Zip code is required');
        isValid = false;
    }

    // Blood Group
    const bloodGroup = document.getElementById('bloodGroup').value;
    if (bloodGroup === '') {
        showError('bloodGroupError', 'Blood group is required');
        isValid = false;
    }

    // Admission Date
    const admissionDate = document.getElementById('admissionDate').value;
    if (admissionDate === '') {
        showError('admissionDateError', 'Admission date is required');
        isValid = false;
    }

    // Diagnosis
    const diagnosis = document.getElementById('diagnosis').value.trim();
    if (diagnosis === '') {
        showError('diagnosisError', 'Diagnosis is required');
        isValid = false;
    }

    // Emergency Contact Name
    const emergencyName = document.getElementById('emergencyName').value.trim();
    if (emergencyName === '') {
        showError('emergencyNameError', 'Emergency contact name is required');
        isValid = false;
    }

    // Emergency Phone
    const emergencyPhone = document.getElementById('emergencyPhone').value.trim();
    if (emergencyPhone === '') {
        showError('emergencyPhoneError', 'Emergency phone is required');
        isValid = false;
    } else if (!phoneRegex.test(emergencyPhone)) {
        showError('emergencyPhoneError', 'Phone must be 10 digits');
        isValid = false;
    }

    // Relationship
    const relationship = document.getElementById('relationship').value.trim();
    if (relationship === '') {
        showError('relationshipError', 'Relationship is required');
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
