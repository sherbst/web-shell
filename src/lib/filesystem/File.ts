import { Entity } from "./Entity";

export class File implements Entity {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}