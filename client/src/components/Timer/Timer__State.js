import React, { Fragment } from 'react';

export default function ({ state = {} }) {
    return <Fragment>
        isActive: {(state.isActive && 'true') || 'false'}
    </Fragment>
};