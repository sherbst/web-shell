import React from 'react';

export interface Props {
    lines: string[],
    prompt: string
}

export default function Output({ lines, prompt }: Props): any {
    return lines.map(line => {
        return <p>{line}</p>
    });
}