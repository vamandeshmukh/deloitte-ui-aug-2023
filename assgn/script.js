const welcomeUser = () => {
    const username = document.getElementById('abc').value;
    console.log(username);
    document.getElementById('welcome-message').innerHTML = `<span>some text</span>`;
    document.getElementById('welcome-message').textContent = `Welcome ${username}!`;
    document.getElementById('welcome-form').reset();
    // window.alert(`Hi ${username}!`);
};

// const welcomeUser = () => {
//     document.getElementById('welcome-message').innerHTML =
//         `Welcome ${document.getElementById('abc').value}!`;
//     document.getElementById('welcome-form').reset();
// };