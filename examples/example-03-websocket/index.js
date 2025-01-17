const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let myEvent = 0;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// WebSocket HTTP handshake
server.on('upgrade', (request, socket, head) => {
    console.log('HTTP Upgrade request for WebSocket:', request.headers);
});

wss.on('connection', (ws) => {
    console.log('1) Client connected');

    ws.on('close', () => {
        console.log('3) Client connection closed');
    });
});

// Events for clients
setInterval(() => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            console.log('2) Sending data to client');
            client.send(`data: ${myEvent++}`);
        }
    });
}, 5000);

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
