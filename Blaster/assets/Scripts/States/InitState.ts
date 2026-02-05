import { StateBase } from "./StateBase";
import { ServiceContainer } from "../DI/ServiceContainer";
import { GameManager } from "../Managers/GameManager";
import { ScoreManager } from "../Managers/ScoreManager";



export class InitState extends StateBase {


    update(dt: number): void {
        throw new Error("Method not implemented.");
    } 

    onEnter(): void {
        console.log('[InitState] enter');
 
        this.game.resolve<ScoreManager>('ScoreManager').reset();
        this.game.resolve<GameManager>('GameManager').startGame();

        this.stateMachine.PlayingState();
        
        
    }

    onExit(): void {
        console.log('[InitState] exit');
    }
}
