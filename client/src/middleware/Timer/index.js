import PubSub from 'pubsub-js';

const TickEventTopic = 'timer.tick';

let intervalId;
let ticks = 0;

function notify() {
    PubSub.publish(TickEventTopic, {state: getState()});
}

export function start() {
    intervalId = setInterval(() => {
        ticks++;
        notify();
    }, 1000);

    notify();
}

export function stop() {
    intervalId && clearInterval(intervalId);
    intervalId = null;
    notify();
}

export function reset() {
    stop();
    ticks = 0;
    notify();
}

export function subscribe(callback) {
    const token = PubSub.subscribe(TickEventTopic, callback);
    return () => PubSub.unsubscribe(token);
}

export function clearAllSubscriptions() {
    PubSub.unsubscribe(TickEventTopic);
}

export function getState() {
    return {ticks, isActive: !!intervalId}
}
