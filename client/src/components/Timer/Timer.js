import React, {Component} from 'react';
import Timer__Presenter from './Timer__Presenter';
import {subscribe, start as startTimer, stop as stopTimer} from '../../middleware/Timer'
import {EVENT_StatusTopic, EVENT_TickEventTopic, EVENT_WelcomeEventTopic} from "../../middleware/Timer/index";

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {timer: {}};
    }

    componentDidMount() {
        this.subTokens = [
            subscribe(EVENT_WelcomeEventTopic, (initState) => this.setState({welcomed: true, timer: initState})),
            subscribe(EVENT_TickEventTopic, (state) => this.setState({timer: {...this.state.timer, ...state}})),
            subscribe(EVENT_StatusTopic, (status) => this.setState({timer: {...this.state.timer, status}}))
        ];
    }

    componentWillUnmount() {
        this.subTokens && this.subTokens.forEach(_ => _());
    }

    render() {
        const actions = {start: startTimer, stop: stopTimer};
        return <Timer__Presenter state={this.state} actions={actions}/>
    }

}

export default Timer;
