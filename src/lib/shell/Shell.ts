import { Directory } from "../filesystem";
import { Command, Response, Request } from "./command";

import hello from './builtins/hello';
import ls from './builtins/ls';

export class Shell {
    private cwd: Directory;
    private prompt: string;
    private commands: Command[] = [];

    constructor(cwd: Directory, prompt: string) {
        this.cwd = cwd;
        this.prompt = prompt;

        this.registerCommands([hello, ls]);
    }

    public registerCommands(commands: Command[]) {
        this.commands = this.commands.concat(commands);
    }

    public makeRequest(rawInput: string): Response[] {
        const words = rawInput.split(' ');
        const request: Request = {
            command: words[0],
            params: words.slice(1),
            cwd: this.cwd
        }

        const command = this.commands.find(command => command.manifest.names.includes(request.command));

        if(command) {
            return [
                {
                    displayText: `${this.prompt} ${request.command} ${request.params.join(' ')}`
                },
                command.handler(request)
            ]
        } else {
            return [ { displayText: `Command ${request.command} not found.` } ];
        }
    }
}