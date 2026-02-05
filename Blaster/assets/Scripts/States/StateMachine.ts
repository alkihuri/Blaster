import { StateBase } from './StateBase';

export class StateMachine {
    private currentState: StateBase | null = null;

    changeState(newState: StateBase) {
        if (this.currentState) {
            this.currentState.onExit();
        }

        this.currentState = newState;
        this.currentState.onEnter();
    }

    update(dt: number) {
        this.currentState?.update(dt);
    }
}
