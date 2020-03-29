import { Entity } from "./Entity";

export class Directory implements Entity {
    private name: string;
    private children: Entity[] = [];

    constructor(name: string = '') {
        this.name = name;
    }

    public getName(): string {
        return this.name + '/';
    }

    public getChildren(): Entity[] {
        return this.children;
    }

    public addChild(child: Entity) {
        this.children.push(child);
    }
}