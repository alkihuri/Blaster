import { ServiceContainer } from '../DI/ServiceContainer';
import { InitState } from './InitState';
import { PlayingState } from './PlayingState';
import { StateBase } from './StateBase';


 
const {ccclass, property} = cc._decorator;
@ccclass
export class StateMachine extends cc.Component {
    private currentState: StateBase | null = null;

    @property({ type: ServiceContainer })
    public serviceContainer: ServiceContainer;

    /// register states here
    private initState: InitState;
    private playingState: PlayingState; 

    protected onLoad(): void {
        this.initState = new InitState(this);
        this.playingState = new PlayingState(this); 
    }



    changeState(newState: StateBase) {
        if (this.currentState) {
            this.currentState.onExit();
        }

        this.currentState = newState;
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
