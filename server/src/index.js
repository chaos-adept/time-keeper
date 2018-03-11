
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

let ticks = 0;


function start() {
    intervalId = setInterval(() => {
        ticks++;
        io.emit('ticked', { ticks: ticks });
    }, 1000);

}

function stop() {
    intervalId && clearInterval(intervalId);
    intervalId = null;
}

function reset() {
    stop();
    ticks = 0;
}


io.on('connection', function (socket) {
    socket.on('start', start);
    socket.on('stop', stop);
    socket.on('reset', reset);
});
