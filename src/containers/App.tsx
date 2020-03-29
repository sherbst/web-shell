import React, { useState } from 'react';

import Output, { Line, LineType } from '../components/Output';
import Input from '../components/Input';

import config from '../util/config';
const prompt = config.prompt;

export default function App() {
    const [lines, setLines] = useState<Line[]>([]);

    function addLine(line: Line) {
        setLines(lines.concat(line));
    }

    function onSubmit(input: string) {
        addLine({
            type: LineType.REQUEST,
            value: input
        });
    }

    return (
        <>
            <Output lines={lines} prompt={prompt} />
            <Input onSubmit={onSubmit} prompt={prompt} />
        </>
    );
}