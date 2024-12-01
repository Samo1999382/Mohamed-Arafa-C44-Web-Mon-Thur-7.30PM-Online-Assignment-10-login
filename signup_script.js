const signupForm = document.getElementById('signup_form');

var users = JSON.parse(localStorage.getItem('users')) || [];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^[a-zA-Z0-9]{6,}$/

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name_signup').value.trim();
    const email = document.getElementById('email_signup').value.trim();
    const password = document.getElementById('password_signup').value.trim();
    const messageDiv = document.getElementById('message_signup');

    const userFound = users.find(user => user.email === email);

    messageDiv.textContent = '';

    if (name && passwordRegex.test(password) && emailRegex.test(email)) {
        if (userFound){
            messageDiv.textContent = 'This email is already signed up.';
            messageDiv.style.color = 'red';
        }else{
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            signupForm.reset();
            messageDiv.textContent = 'Signed up successfully!';
            messageDiv.style.color = 'green';
        }
    } else if (!emailRegex.test(email)) {
        messageDiv.textContent = 'Invalid email format.';
        messageDiv.style.color = 'red';
    }else if (!passwordRegex.test(password)) {
        messageDiv.textContent = 'Password must be at least 6 characters and contain only letters and numbers.';
        messageDiv.style.color = 'red';
    }else if(!name){
        messageDiv.textContent = 'The name is missing.';
        messageDiv.style.color = 'red';
    }
});