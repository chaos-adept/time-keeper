import React, { Fragment } from 'react';

export default function({ state = {}, actions }) {
    return <Fragment>
        {!state.isActive ?
            <button onClick={actions.start}>start</button>
            :
            <button onClick={actions.stop}>stop</button>
        }
    </Fragment>;
}