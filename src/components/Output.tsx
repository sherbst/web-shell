import React from 'react';

import config from '../util/config';

export enum LineType {
    REQUEST,
    RESPONSE
}

export interface Line {
    type: LineType,
    value: string
}

export interface Props {
    lines: Line[]
}

export default function Output({ lines }: Props): any {
    return lines.map(line => {
        let displayText: string;

        if(line.type === LineType.REQUEST) {
            displayText = `${config.prompt} ${line.value}`
        } else {
            displayText = line.value;
        }

        return <p>{displayText}</p>
    });
}