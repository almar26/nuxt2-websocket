import io from 'socket.io-client';

export default ({ app }, inject) => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
        console.log('Connected to Websocket server');
    });

    socket.on('disconnect', () => {
        console.log('Websocket connection closed');
    });

    // Inject the socket instance into the app context
    inject('socket', socket);
}