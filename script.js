const loginForm = document.getElementById('login_form');

var users = JSON.parse(localStorage.getItem('users')) || [];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

function login() {
    const emailInput = document.getElementById('email_login').value.trim();
    const passwordInput = document.getElementById('password_login').value.trim();
    const messageDiv = document.getElementById('message_login');

    messageDiv.textContent = '';

    if (!emailRegex.test(emailInput)) {
        messageDiv.textContent = 'Invalid email format.';
        messageDiv.style.color = 'red';
        return;
    }

    if (!passwordRegex.test(passwordInput)) {
        messageDiv.textContent = 'Password must be at least 6 characters and contain only letters and numbers.';
        messageDiv.style.color = 'red';
        return;
    }

    const userFound = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (userFound) {
        localStorage.setItem('loggedInUser', JSON.stringify(userFound)); // Save logged-in user
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'welcome.html'; // Redirect to welcome page
        }, 1000);
    } else {
        messageDiv.textContent = 'Email or password is incorrect.';
        messageDiv.style.color = 'red';
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
});
