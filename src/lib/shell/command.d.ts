import { Directory } from "../filesystem";

export interface Command {
    manifest: Manifest,
    handler: Handler
}

export interface Manifest {
    names: string[]
}

export interface Handler {
    (request: Request): Response
}

export interface Request {
    command: string
    params: string[],
    cwd: Directory
}

export interface Response {
    displayText: string
}