const express = require('express');
const path = require('path');

const app = express();
let clients = [];
let myEvent = 0;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/events', (req, res) => {
    console.log('1) Client connected');
    clients.push(res);
    req.on('close', () => {
        console.log('3) Client connection closed');
        clients = clients.filter(client => client !== res);
    });
});

// Events for clients
setInterval(() => {
    clients.forEach(client => {
        console.log('2) Sending data to client');
        client.send(`data: ${myEvent++}\n\n`);
    });
}, 5000);

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});