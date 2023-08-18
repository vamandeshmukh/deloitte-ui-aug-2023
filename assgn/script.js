const welcomeUser = () => {
    const username = document.getElementById('username').value;
    console.log(username);
    document.getElementById('welcome-message').innerHTML = `Welcome ${username}!`;
    document.getElementById('welcome-form').reset();
};