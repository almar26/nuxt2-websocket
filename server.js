import { Server } from "socket.io";
import http from 'http';
import { createApp } from "h3";

const app = createApp();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

io.on('connection', (socket) => {
    console.log('A user connected: ', socket.id);
    socket.on('message', (msg) => {
        console.log('Message received: ', msg);
        socket.broadcast.emit('message', msg); // Broadcast the message to other clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ', socket.id);
    });
});

server.listen(3001, () => {
    console.log("Socket.io server is running on port 3001")
})