document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value.trim();
    let errorElement = document.getElementById('error');
    
    errorElement.textContent = '';
    
    
    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return;
    }
    
    
    let storedEmail = localStorage.getItem('email');
    // let storedPassword = localStorage.getItem('password');
    // let storedUsername = localStorage.getItem('username');
    
    if (email !== storedEmail) {
        errorElement.textContent = 'Email not found.';
        return;
    }
    
    
    alert(`An email with your password,has been sent to ${email}.`);
    
   
    window.location.href = 'index.html'
    
    
    document.getElementById('forgotPasswordForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
