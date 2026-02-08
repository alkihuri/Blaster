import { StateBase } from "./StateBase";
import { ServiceContainer } from "../DI/ServiceContainer";
import { GameManager } from "../Managers/GameManager";
import { ScoreManager } from "../Managers/ScoreManager";



export class InitState extends StateBase {


    update(dt: number): void { 

    } 

    onEnter(): void {
        console.log('[InitState] enter');
  
        this.stateMachine.goPlaying();
        
        
    }

    onExit(): void {
        console.log('[InitState] exit');
    }
}


