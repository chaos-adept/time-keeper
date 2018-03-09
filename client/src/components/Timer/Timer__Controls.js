import React, { Fragment } from 'react';

export default function({ state:{timer}, actions }) {
    return <Fragment>
        {!timer.isActive ?
            <button onClick={actions.start}>start</button>
            :
            <button onClick={actions.stop}>stop</button>
        }
    </Fragment>;
}
