const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const {WebSocket} = require('socket.io');

const server = http.createServer(app);

const io = new WebSocket(server, {
    cors:{
        origin:'http://localhost:3000',
        method:["GET", "POST"]

    }
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('join_room')

})


