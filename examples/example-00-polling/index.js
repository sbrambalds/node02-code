const express = require('express');
const path = require('path');

const app = express();
let myEvent = 0;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/events', (req, res) => {
    res.send(`data: ${myEvent}\n\n`);
});

// Events for clients
setInterval(() => {
    myEvent += 1;
}, 5000);

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});