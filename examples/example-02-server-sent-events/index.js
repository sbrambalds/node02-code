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
    
    // Set headers to allow server-sent events
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // Send headers to client immediately -- avoid buffering

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
        client.write(`data: ${myEvent++}\n\n`);
    });
}, 5000);

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});