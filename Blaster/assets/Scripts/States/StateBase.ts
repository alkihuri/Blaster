export abstract class StateBase { 

    abstract onEnter(): void;
    abstract onExit(): void;
    abstract update(dt: number): void;
}
