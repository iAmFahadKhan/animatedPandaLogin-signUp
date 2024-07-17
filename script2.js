document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value.trim();
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let errorElement = document.getElementById('error');
    let submitButton = document.querySelector('button[type="submit"]');
    
    errorElement.textContent = '';
    
    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return;
    }
    
    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long.';
        return;
    }
    
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match.';
        return;
    }
    
    
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    
    submitButton.textContent = 'Registered!';
    submitButton.disabled = true;

    
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);

    
    document.getElementById('signupForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
