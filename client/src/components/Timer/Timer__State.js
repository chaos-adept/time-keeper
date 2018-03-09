import React, { Fragment } from 'react';

export default function ({ state:{timer} }) {
    return <Fragment>
        isActive: {(timer.isActive && 'true') || 'false'}
    </Fragment>
};
