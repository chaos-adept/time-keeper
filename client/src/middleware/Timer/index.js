import Emitter from 'eventemitter2';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

export var EVENT_TickEventTopic = 'timer.tick';
export var EVENT_WelcomeEventTopic = 'timer.welcome';
export var EVENT_StatusTopic = 'timer.status';

const timerEmitter = new Emitter();

socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
socket.on('ticked', (data) => timerEmitter.emit(EVENT_TickEventTopic, data));
socket.on('welcome', (data) => timerEmitter.emit(EVENT_WelcomeEventTopic, data));
socket.on('stopped', (data) => timerEmitter.emit(EVENT_StatusTopic, 'stopped'));
socket.on('started', (data) => timerEmitter.emit(EVENT_StatusTopic, 'started'));


export function start() {
    socket.emit('start');
}

export function stop() {
    socket.emit('stop');
}

export function reset() {
    socket.emit('reset');
}

export function subscribe(event, handler) {
    timerEmitter.on(event, handler);
    return () => timerEmitter.off(event, handler);
}
