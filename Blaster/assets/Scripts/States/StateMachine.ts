import { ServiceContainer } from '../DI/ServiceContainer';
import { StateBase } from './StateBase'; 
import { InitState } from './InitState';
import { PlayingState } from './PlayingState';

const { ccclass } = cc._decorator;

@ccclass('StateMachine')
export class StateMachine extends cc.Component {

    private currentState: StateBase | null = null;
    private states = new Map<StateType, StateBase>();

    public serviceContainer!: ServiceContainer;

    protected onLoad(): void { 
        
        this.registerState(StateType.Init, new InitState(this));
        this.registerState(StateType.Playing, new PlayingState(this));
   
        this.changeState(StateType.Init);
    }

    public injectContainer(container: ServiceContainer): void {
        this.serviceContainer = container;
        console.log('ServiceContainer injected');
    }

    private registerState(type: StateType, state: StateBase): void {
        this.states.set(type, state);
    }

    public changeState(type: StateType): void {
        const newState = this.states.get(type);
        if (!newState) {
            console.error(`State ${StateType[type]} not registered`);
            return;
        }

        if (this.currentState === newState) return;

        this.currentState?.onExit();

        this.currentState = newState;
        this.currentState.onEnter();
    }

    update(dt: number): void {
        this.currentState?.update(dt);
    }

    // predefined 

    public goInit(): void {
        this.changeState(StateType.Init);
    }

    public goPlaying(): void {
        this.changeState(StateType.Playing);
    }
}

export enum StateType {
    Init,
    Playing,
     Win,
     Menu
}