import React, { useState } from 'react';

import Output from '../components/Output';
import Input from '../components/Input';

import config from '../util/config';
import { Directory } from '../lib/filesystem/Directory';
import { File } from '../lib/filesystem/File';
import { Shell } from '../lib/shell/Shell';

const rootDir = new Directory();
rootDir.addChild(new File('README.md'));

const prompt = config.prompt;
const shell = new Shell(rootDir, prompt);

export default function App() {
    const [lines, setLines] = useState<string[]>([]);

    function onSubmit(input: string) {
        setLines(
            lines.concat(
                shell.makeRequest(input).map(response => response.displayText)
            )
        );
    }

    return (
        <>
            <Output lines={lines} prompt={prompt} />
            <Input onSubmit={onSubmit} prompt={prompt} />
        </>
    );
}