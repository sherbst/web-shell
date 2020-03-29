import React, { useState } from 'react';

export interface Props {
    onSubmit(inputText: string): void,
    prompt: string
}

export default function Input({ onSubmit: parentOnSubmit, prompt }: Props) {
    const [input, setInput] = useState<string>('');

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setInput('');

        parentOnSubmit(input);
    }

    return (
        <form onSubmit={onSubmit}>
            <p>
                {prompt}
                &nbsp;
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </p>
        </form>
    )
}