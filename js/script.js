document.addEventListener('DOMContentLoaded', function() {git checko
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const googleSSO = document.getElementById('google-sso');
    const appleSSO = document.getElementById('apple-sso');

    let users = [];

    // Load users from JSON file (simulated)
    function loadUsers() {
        fetch('users.json')
            .then(response => response.json())
            .then(data => {
                users = data;
            })
            .catch(error => console.error('Error loading users:', error));
    }

    // Save users to JSON file (simulated)
    function saveUsers() {
        fetch('users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        })
        .then(response => response.json())
        .then(data => console.log('Users saved:', data))
        .catch(error => console.error('Error saving users:', error));
    }

    // Handle login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert('Login successful!');
            // Redirect to exam registration page or dashboard
        } else {
            alert('Invalid email or password');
        }
    });

    // Handle registration
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (users.some(u => u.email === email)) {
            alert('User already exists');
        } else {
            users.push({ email, password });
            saveUsers();
            alert('Registration successful!');
        }
    });

    // Handle Google SSO
    googleSSO.addEventListener('click', function() {
        alert('Google SSO not implemented yet');
    });

    // Handle Apple SSO
    appleSSO.addEventListener('click', function() {
        alert('Apple SSO not implemented yet');
    });

    // Load users on page load
    loadUsers();
});