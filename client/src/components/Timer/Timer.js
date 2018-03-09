import React, { Component, createContext } from 'react';
import Timer__State from './Timer__State';
import Timer__Counter from './Timer__Counter';
import Timer__Controls from './Timer__Controls';

const Context = createContext()

const { Provider } = Context
export const { Consumer } = Context


class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0, isActive: false };
    }

    componentDidMount() {

    }

    start() {
        const intervalId = setInterval(() => {
            this.increment();
        }, 1000);
        this.setState({ isActive: true, intervalId });
    }

    stop() {
        this.state.intervalId && clearInterval(this.state.intervalId);
        this.setState({ isActive: false, intervalId: undefined });
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return <Provider value={{
            state: this.state || {},
            actions: {
                stop: () => this.stop(),
                start: () => this.start()
            },
        }}>
            <div>
                <Consumer>{Timer__State}</Consumer>
            </div>
            <div>
                <Consumer>{Timer__Counter}</Consumer>
            </div>
            <div>
                <Consumer>{Timer__Controls}</Consumer>
            </div>
        </Provider>
    }

}

export default Timer;