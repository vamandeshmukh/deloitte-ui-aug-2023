
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

app.get('/', (req, res) => {
    res.send('Welcome to My App');
    console.log('welcome');

});

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}/.`);
});

