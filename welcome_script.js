document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const welcomeHeader = document.querySelector('.card h1');

    if (loggedInUser && loggedInUser.name) {
        welcomeHeader.textContent = `Welcome, ${loggedInUser.name}!`;
    } else {
        welcomeHeader.textContent = 'Welcome, Guest!';
    }
});