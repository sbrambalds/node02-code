const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { join } = require('path');

const app = express();
const server = createServer(app);
const io = new Server(server);
var messages = [];
var users = new Map();

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/messages', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'messages.html'));
});

io.on('connection', (socket) => {
    socket.emit('connection', 'Welcome to the chat! Choose a username to start chatting.', Array.from(users.values()));

    socket.on('new user', (usr) => {
        users.set(socket, usr);
        io.emit('new user', usr);
    });

    socket.on('chat message', (msg, usr) => {
        io.emit('chat message', msg, usr);
        messages.push({msg, usr});
    });

    socket.on('typing', (usr) => {
        io.emit('typing', usr);
    });

    socket.on('stop typing', (usr) => {
        io.emit('stop typing', usr);
    });

    socket.on('get messages', () => {
        io.emit('messages', messages);
    });

    socket.on('disconnect', () => {
        if (!users.has(socket)) {
            return;
        }
        io.emit('disconnection', users.get(socket));
        users.delete(socket);
    });
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
