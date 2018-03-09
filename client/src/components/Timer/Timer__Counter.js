import React, { Fragment } from 'react';

export default function({ state = {}, actions }) {
    return <Fragment>
        <span>{state.count}</span>
    </Fragment>;
}