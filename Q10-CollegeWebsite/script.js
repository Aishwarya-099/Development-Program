// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Handle admission form submission
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value,
        phone: document.getElementById('phone').value
    };
    
    console.log('Admission Application:', formData);
    alert('Application submitted successfully!\nWe will contact you soon at ' + formData.email);
    this.reset();
});

// Handle CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('admission').scrollIntoView({ behavior: 'smooth' });
});
