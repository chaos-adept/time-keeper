import React, {Fragment} from 'react';

const WelcomeWaiting = () => <Fragment> timer is not inited </Fragment>;

const TimerRender = ({state: {timer}, actions}) => {
    const isActive = timer.status === 'started';

    return <Fragment>
        <div>
            isActive: {timer.status}
        </div>
        <div>
            <span>{timer.ticks}</span>
        </div>
        <div>
            {!isActive && <button onClick={actions.start}>start</button>}

            {isActive && <button onClick={actions.stop}>stop</button>}
        </div>
    </Fragment>
};

export default function Timer__Presenter(props) {
    const {state: {welcomed}} = props;
    return <Fragment>
        {!welcomed && <WelcomeWaiting/>}
        {!!welcomed && <TimerRender {...props} />}
    </Fragment>;
}
