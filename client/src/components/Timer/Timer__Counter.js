import React, { Fragment } from 'react';

export default function({ state:{timer}, actions }) {
    return <Fragment>
        <span>{timer.ticks}</span>
    </Fragment>;
}
