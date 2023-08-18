
// steps 
// on CMD run -
// npm install 
// npm start 
// on browser open -
// http://localhost:9090/
// to stop, on CMD - 
// Ctrl + C  

const express = require('express');
const app = express();
const port = 9090;

// app.get('/url', (request, response) => {});

app.get('/', (req, res) => {
    res.send('Welcome to My App');
    console.log('welcome');
});

app.get('/contact', (req, res) => {
    res.send('Contact us for more info');
    console.log('contact');
});

app.get('/about', (req, res) => {
    res.send('About our company...');
    console.log('about');
});

// app.listen(port Number, () => {});

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}/.`);
});


