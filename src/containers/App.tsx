import React from 'react';

import Output, { Line, LineType } from '../components/Output';

export default function App() {
    const lines: Line[] = [
        {
            type: LineType.REQUEST,
            value: 'help'
        },
        {
            type: LineType.RESPONSE,
            value: 'Hello world!'
        }
    ];

    return (
        <>
            <Output lines={lines} />
        </>
    );
}