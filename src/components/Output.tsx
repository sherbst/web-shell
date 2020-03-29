import React from 'react';

export enum LineType {
    REQUEST,
    RESPONSE
}

export interface Line {
    type: LineType,
    value: string
}

export interface Props {
    lines: Line[],
    prompt: string
}

export default function Output({ lines, prompt }: Props): any {
    return lines.map(line => {
        let displayText: string;

        if(line.type === LineType.REQUEST) {
            displayText = `${prompt} ${line.value}`
        } else {
            displayText = line.value;
        }

        return <p>{displayText}</p>
    });
}