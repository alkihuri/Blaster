import { ServiceContainer } from '../DI/ServiceContainer';
import { InitState } from './InitState';
import { PlayingState } from './PlayingState';
import { StateBase } from './StateBase';


 
const {ccclass, property} = cc._decorator;
@ccclass("StateMachine")
export class StateMachine extends cc.Component {
    private currentState: StateBase | null = null;
 
    public serviceContainer: ServiceContainer = null;

    /// register states here
    private initState: InitState;
    private playingState: PlayingState; 

    protected onLoad(): void {
        this.initState = new InitState(this);
        this.playingState = new PlayingState(this); 
    }

    public InjectContainer(container: ServiceContainer) {
        this.serviceContainer = container;
        console.log("Container injected into StateMachine");
    }



    changeState(newState: StateBase) {
        if (this.currentState) {
            console.log(`Exiting state: ${this.currentState.constructor.name}`);
            this.currentState.onExit();
        }

        this.currentState = newState;
        console.log(`Entering state: ${this.currentState.constructor.name}`);
        this.currentState.onEnter();
    }

    /// predefined state changes

    public InitState() {
        this.changeState(this.initState);
    }

    public PlayingState() {
        this.changeState(this.playingState);
    }

    update(dt: number) {
        this.currentState?.update(dt);
    }
}
