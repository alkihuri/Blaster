import { ServiceContainer } from "../DI/ServiceContainer";
import { StateMachine } from "./StateMachine";

export abstract class StateBase {

    public stateMachine: StateMachine;

    constructor(stateMachine: StateMachine) {
        this.stateMachine = stateMachine;
    }

    public get game(): ServiceContainer {
        return this.stateMachine.serviceContainer;
    }
    abstract onEnter(): void;
    abstract onExit(): void;
    abstract update(dt: number): void;
}


// init state



// win state 

// playing state

// menu state