import React, {Component, createContext} from 'react';
import Timer__State from './Timer__State';
import Timer__Counter from './Timer__Counter';
import Timer__Controls from './Timer__Controls';
import {subscribe, start as startTimer, stop as stopTimer, getState} from '../../middleware/Timer'

const Context = createContext();

const {Provider} = Context;
export const {Consumer} = Context;


class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {timer: getState()};
    }

    componentDidMount() {
        this.subToken = subscribe(() => this.updateTicks());
    }

    componentWillUnmount() {
        this.subToken && this.subToken();
    }

    start() {
        startTimer();
    }

    stop() {
        stopTimer();
    }

    updateTicks() {
        this.setState({timer: getState()});
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
