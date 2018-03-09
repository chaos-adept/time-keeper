import {subscribe as subscribe, start, stop, clearAllSubscriptions, getState, reset} from './index';


beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllTimers();
    reset();
    clearAllSubscriptions();
});

function forceTick() {
    start();
    jest.runTimersToTime(1000);
}

describe('events', () => {


    it('subscribe to events', () => {
        //when
        const unsub = subscribe(jest.fn());

        //then
        expect(unsub).toBeDefined();
    });

    it('unsubscribe', () => {
        //given
        const handler = jest.fn();
        const unsub = subscribe(handler);
        forceTick();

        //when
        unsub();
        forceTick();

        //then
        expect(handler).toHaveBeenCalledTimes(1);
    });

});


describe('ticks', () => {
    it('fire ticks events', () => {
        //given
        const handler = jest.fn();
        const token = subscribe(handler);

        //when
        forceTick();

        //then
        expect(handler).toBeCalled();
    });

    it('should increment ticks', () => {
        //given
        expect(getState().ticks).toBe(0);

        //when
        forceTick();

        //then
        expect(getState().ticks).toBe(1);
    })
});





