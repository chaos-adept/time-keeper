
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

let ticks = 0;
let intervalId = null;

function start() {
    if (isActive()) {
        return;
    }

    intervalId = setInterval(() => {
        ticks++;
        io.emit('ticked', { ticks: ticks });
    }, 1000);

    io.emit('started');
}

function stop() {
    intervalId && clearInterval(intervalId);
    intervalId = null;
    io.emit('stopped');
}

function reset() {
    stop();
    ticks = 0;
}

function isActive() {
    return !!intervalId;
}

io.on('connection', function (socket) {
    socket.emit('welcome', { ticks, isActive: isActive(), status: isActive() });

    socket.on('start', start);
    socket.on('stop', stop);
    socket.on('reset', reset);

});


