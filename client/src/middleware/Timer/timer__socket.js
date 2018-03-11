import PubSub from 'pubsub-js';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
socket.on('ticked', (data) => notify(data));


function notify(data) {
    PubSub.publish('socket.ticks', data)
}

export function subscribeTicks(handler) {
    const token = PubSub.subscribe('socket.ticks', (event, data) => handler(data));
    return () => PubSub.unsubscribe(token);
}

export function start() {
    socket.emit('start');
}

export function stop() {
    socket.emit('stop');
}

export function reset() {
    socket.emit('reset');
}

