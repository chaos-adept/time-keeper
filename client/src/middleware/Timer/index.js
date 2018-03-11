import PubSub from 'pubsub-js';
import {
    start as sendStart,
    stop as sendStop,
    reset as sendReset,
    subscribeTicks as socketSubscribeTicks
} from './timer__socket';

const TickEventTopic = 'timer.tick';

let intervalId;
let ticks = 0;

function notify(data) {
    PubSub.publish(TickEventTopic, data);
}

socketSubscribeTicks(notify);

export function start() {
    sendStart();
}

export function stop() {
    sendStop();
}

export function reset() {
    sendReset();
}

export function subscribe(handler) {
    const token = PubSub.subscribe(TickEventTopic, (event, data) => handler(data));
    return () => PubSub.unsubscribe(token);
}

export function clearAllSubscriptions() {
    PubSub.unsubscribe(TickEventTopic);
}
