import { ServiceContainer } from "../DI/ServiceContainer";
import { StateMachine } from "./StateMachine";

export abstract class StateBase { 


    public game : ServiceContainer;
    public stateMachine: StateMachine;

    constructor(  stateMachine: StateMachine) {
        this.game = stateMachine.serviceContainer;
        this.stateMachine = stateMachine;
    }
    abstract onEnter(): void;
    abstract onExit(): void;
    abstract update(dt: number): void;
}


// init state



// win state 

// playing state

// menu state